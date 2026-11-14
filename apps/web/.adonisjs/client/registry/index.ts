/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

export type { Route, Path } from './schema.d.ts'

const placeholder: any = {}

const routes = {
  'identity.login.show': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [[0,"login"]],
    types: placeholder as Registry['identity.login.show']['types'],
  },
  'identity.login': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [[0,"login"]],
    types: placeholder as Registry['identity.login']['types'],
  },
  'identity.register.show': {
    methods: ["GET","HEAD"],
    pattern: '/register',
    tokens: [[0,"register"]],
    types: placeholder as Registry['identity.register.show']['types'],
  },
  'identity.register': {
    methods: ["POST"],
    pattern: '/register',
    tokens: [[0,"register"]],
    types: placeholder as Registry['identity.register']['types'],
  },
  'identity.logout': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [[0,"logout"]],
    types: placeholder as Registry['identity.logout']['types'],
  },
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [[0,"/"]],
    types: placeholder as Registry['home']['types'],
  },
  'health_checks.execute': {
    methods: ["GET","HEAD"],
    pattern: '/health',
    tokens: [[0,"health"]],
    types: placeholder as Registry['health_checks.execute']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
