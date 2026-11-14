import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'identity.login.show': { paramsTuple?: []; params?: {} }
    'identity.login': { paramsTuple?: []; params?: {} }
    'identity.register.show': { paramsTuple?: []; params?: {} }
    'identity.register': { paramsTuple?: []; params?: {} }
    'identity.logout': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'health_checks.execute': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'identity.login.show': { paramsTuple?: []; params?: {} }
    'identity.register.show': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'health_checks.execute': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'identity.login.show': { paramsTuple?: []; params?: {} }
    'identity.register.show': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'health_checks.execute': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'identity.login': { paramsTuple?: []; params?: {} }
    'identity.register': { paramsTuple?: []; params?: {} }
    'identity.logout': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}