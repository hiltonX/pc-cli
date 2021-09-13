import React from 'react'
import {
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'


import Search from './search'
import Result from './result'
import Detail from './detail'
import ParkSpace from './park-space'
import Car from './car'
import Order from './order'
export default class Customer extends React.Component {
  
  render() {
    return (
      <Switch>
        {/* 搜索入口 */}
        <Route strict path="/customer/search" component={Search} />
        {/* 搜索结果 */}
        <Route strict path="/customer/result" component={Result} />
        {/* 查看详情 */}
        <Route strict path="/customer/detail" component={Detail} />
        {/* 车位信息 */}
        <Route strict path="/customer/park-space" component={ParkSpace} />
        {/* 车辆信息 */}
        <Route strict path="/customer/car" component={Car} />
        {/* 历史订单 */}
        <Route strict path="/customer/order" component={Order} />

        <Redirect strict to="/customer/search" />
      </Switch>
    )
  }

}