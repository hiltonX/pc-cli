import React from 'react'
import {
  HashRouter as Router, 
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'


import Example from './pages/example'
import PageList from './pages/page-list'

export default class PageRoute extends React.Component {
  
  render() {
    return (<Router>
      <Switch>
        {/* 例子 */}
        <Route path="/example" component={Example} />
        {/* 例子2 */}
        <Route path="/page-list" component={PageList} />
        {/* 例子4 */}
        <Route path="/market4" component={PageList} />
         {/* 例子4 */}
         <Route path="/66666" component={PageList} />
        {/* 例子 */}
        <Redirect exact to="/example" />
      </Switch>
    </Router>)
  }

}