import React from 'react'
import {
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'


import Search from './search'
import Result from './result'
import Detail from './detail'
import Contract from './contract'

export default class Project extends React.Component {
  
  render() {
    return (
      <Switch>
        {/* 搜索入口 */}
        <Route strict path="/project/search" component={Search} />
        {/* 搜索结果 */}
        <Route strict path="/project/result" component={Result} />
        {/* 查看详情 */}
        <Route strict path="/project/detail" component={Detail} />
        {/* 合同详情 */}
        <Route strict path="/project/contract" component={Contract} />

        <Redirect strict to="/project/search" />
      </Switch>
    )
  }

}