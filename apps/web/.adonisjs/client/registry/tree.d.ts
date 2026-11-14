/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  identity: {
    login: typeof routes['identity.login'] & {
      show: typeof routes['identity.login.show']
    }
    register: typeof routes['identity.register'] & {
      show: typeof routes['identity.register.show']
    }
    logout: typeof routes['identity.logout']
  }
  home: typeof routes['home']
  healthChecks: {
    execute: typeof routes['health_checks.execute']
  }
}
