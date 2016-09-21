import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'calc',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Calc = require('./containers/CalcContainer').default
      const reducer = require('./modules/calc').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'calc', reducer })

      /*  Return getComponent   */
      cb(null, Calc)

    /* Webpack named bundle   */
    }, 'calc')
  }
})
