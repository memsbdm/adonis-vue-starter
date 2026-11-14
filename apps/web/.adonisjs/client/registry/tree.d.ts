/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  healthChecks: {
    execute: typeof routes['health_checks.execute']
  }
  login: {
    render: typeof routes['login.render']
    execute: typeof routes['login.execute']
  }
  register: {
    render: typeof routes['register.render']
    execute: typeof routes['register.execute']
  }
  logout: {
    execute: typeof routes['logout.execute']
  }
}
