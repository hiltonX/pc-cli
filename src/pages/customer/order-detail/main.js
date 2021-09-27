import React from 'react'
import { observer } from 'mobx-react'
import { List } from 'antd-mobile'
import { urlToObject } from '../../../common/util'

import Frame from '../../../frame'
import Info from '../../../component/info'

import adressImg from '../../../asset/img/adress.png'
import MainStore from './store-main'

const Item = List.Item
const store = new MainStore()

@observer
class OrderDetail extends React.Component {

  componentDidMount() {
    const {search} = this.props.location
  
    const { orderId } = urlToObject(search) || {}
    store.orderId = orderId

    store.getOrderDetail()
  }

  render() {
    const {
      consigneeName,
      consigneePhoneNumber,
      address,
      orderMoney,
      logisticsMoney,
      practiceMoney,
      desc
    } = store.orderDetail
    return (
      <Frame title="历史订单详情">
        <div className="page page-order-detail">
        <List>
            <Item>
              <div className="FBH AICT">
                <div className="mr12">
                  <img src={adressImg} alt="icon-adress"/>
                </div>
                <div>
                  <div>{consigneeName} {consigneePhoneNumber}</div>
                  <div className="mt12">{address}</div>
                </div>
              </div>
            </Item>
            <Item>
              <div>
                <div className="commodity FBH JCSB">
                  <div className="commodity-name">杭州西溪八方城服务中心</div>
                  <div className="commodity-status red">待付款</div>
                </div>
                <div className="commodity-detail FBH fs12">
                  <img className="commodity-img mr20 mt12" src="./2134.jpg" alt="商品图片"/>
                  <div className="commodity-info">
                    <div className="FBH JCSB mt12 break-all">
                      <span className="commodity-name mr4">味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃</span>
                      <span>¥999999.99</span>
                    </div>
                    <div className="mt12 gray FBH JCSB">
                      <span className="commodity-type mr4">咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味</span>
                      <span>x99</span>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              <Info label="订单金额（元）" value={orderMoney}/>
              <Info className="mt12" label="物流金额（元）" value={logisticsMoney}/>
              <Info className="mt12" label="使用红包（元）" value="A001"/>
              <Info className="mt12" label="其他优惠（元）" value="A001"/>
              <Info className="mt12" label="实付金额（元）" value={practiceMoney}/>
            </Item>
            <Item>
              <Info label="订单编号" value="A001"/>
              <Info className="mt12" label="支付方式" value={desc}/>
            </Item>
          </List>
        </div>
      </Frame>
    )
  }

}

export default OrderDetail