FROM node:26.13.1-bookworm-slim AS build

WORKDIR /workspace

# Node 26 images no longer include Yarn; Corepack installs the version pinned
# by the root package.json.
RUN npm install --global corepack@0.36.0 \
	&& corepack enable

COPY package.json yarn.lock .yarnrc.yml ./
COPY apps/web/package.json apps/web/package.json
COPY packages/design-system/package.json packages/design-system/package.json

RUN yarn install --immutable

COPY . .

RUN yarn workspace @starter/web build \
	&& yarn workspaces focus @starter/web --production

FROM node:26.13.1-bookworm-slim AS runtime

ENV NODE_ENV=production \
	HOST=0.0.0.0 \
	PORT=3333

WORKDIR /app

COPY --from=build --chown=node:node /workspace/apps/web/build/ ./
COPY --from=build --chown=node:node /workspace/node_modules/ ./node_modules/
COPY --from=build --chown=node:node /workspace/packages/design-system/ ./packages/design-system/

USER node

EXPOSE 3333

CMD ["node", "bin/server.js"]
