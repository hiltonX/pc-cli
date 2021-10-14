import React from 'react'
import {
  HashRouter as Router, 
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'


import Example from './pages/example'
import PageTwo from './pages/page-two'

export default class PageRoute extends React.Component {
  
  render() {
    return (<Router>
      <Switch>
        {/* 例子 */}
        <Route path="/example" component={Example} />
        {/* 例子2 */}
        <Route path="/clickStatistics" component={PageTwo} />
        {/* 例子4 */}
        <Route path="/market4" component={PageTwo} />
         {/* 例子4 */}
         <Route path="/66666" component={PageTwo} />
        {/* 例子 */}
        <Redirect exact to="/example" />
      </Switch>
    </Router>)
  }

}