import React from 'react'
import {
  HashRouter as Router, 
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'


import Entrance from './pages/entrance'
import Customer from './pages/customer'
import Project from './pages/project'

export default class PageRoute extends React.Component {
  
  render() {
    return (<Router>
      <Switch>
        {/* 搜索入口 */}
        <Route path="/entrance" component={Entrance} />
        {/* 客户搜索 */}
        <Route path="customer" component={Customer} />
        {/* 项目搜索 */}
        <Route path="project" component={Project} />
        <Redirect to="/entrance" />
      </Switch>
    </Router>)
  }

}