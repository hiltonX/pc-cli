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
import Family from './family'
import WorkOrder from './work-order'
import WorkOrderDetail from './work-order-detail'
import Order from './order'
import OrderDetail from './order-detail'
export default class Customer extends React.Component {
  
  render() {
    return (
      <Switch>
        {/* 搜索入口 */}
        <Route strict path="/customer/search" component={Search} />
        {/* 搜索结果 */}
        <Route path="/customer/result" component={Result} />
        {/* 查看详情 */}
        <Route strict path="/customer/detail" component={Detail} />
        {/* 车位信息 */}
        <Route strict path="/customer/park-space" component={ParkSpace} />
        {/* 车辆信息 */}
        <Route strict path="/customer/car" component={Car} />
        {/* 家庭成员 */}
        <Route strict path="/customer/family" component={Family} />
        {/* 历史工单 */}
        <Route strict path="/customer/work-order" component={WorkOrder} />
        {/* 历史详情 */}
        <Route strict path="/customer/work-order-detail" component={WorkOrderDetail} />
        {/* 历史订单 */}
        <Route strict path="/customer/order" component={Order} />
        {/* 历史订单详情 */}
        <Route strict path="/customer/order-detail" component={OrderDetail} />

        <Redirect strict to="/customer/search" />
      </Switch>
    )
  }

}