/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  healthChecks: {
    execute: typeof routes['health_checks.execute']
  }
}
