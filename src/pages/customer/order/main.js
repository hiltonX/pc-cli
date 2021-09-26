import React from 'react'
import { observer } from 'mobx-react'

import { urlToObject } from '../../../common/util'

import { SegmentedControl, WingBlank, List } from 'antd-mobile'
import Frame from '../../../frame'
import Empty from '../../../component/empty'

import MainStore from './store-main'

const Item = List.Item
const store = new MainStore()
@observer
class Order extends React.Component {

  componentDidMount() {
    const {search} = this.props.location
  
    const { perId } = urlToObject(search) || {}
    store.perId = perId

    store.getOrderList()
  }

  render() {
    return (
      <Frame title="历史订单">
        <div className="page-order mt52">
          <WingBlank size="lg" className="sc-example">
            <SegmentedControl 
              values={['全部', '待付款', '待接收', '待处理', '处理中', '已处理', '已完成', '已关闭']} 
              // value={store.expStatus}
              selectedIndex={store.expStatus}
              onChange={(e) => {
                const {selectedSegmentIndex} = e.nativeEvent
                store.expStatus = selectedSegmentIndex

                store.getOrderList()
              }}
            />
          </WingBlank>
          <div>
          {store.orderList.length <= 0 ? <Empty /> : <List className="mt4 pl24 pr24">
            {store.orderList.map(item => {
                return (<Item
                  key={item.orderId}
                  arrow="horizontal"
                  multipleLine
                  className="pr4"
                  onClick={() => {
                    this.props.history.push(`/customer/order-detail?orderId=${item.orderId}`)
                  }}
                >
                  <div>
                    <div className="commodity FBH JCSB">
                      <div className="commodity-name">{item.integrationName}</div>
                      <div className="commodity-status red">{item.expStatus}</div>
                    </div>
                    {(item.commodityList || []).map(cItem => (
                      <div className="commodity-detail FBH fs12" key={item.commodityId}>
                        <img className="commodity-img mr20 mt12" src={cItem.itemPic} alt="商品图片"/>
                        <div className="FB1">
                          <div className="FBH JCSB mt12">
                            <span>{cItem.itemName}</span>
                            <span>¥{cItem.itemPrice}</span>
                          </div>
                          <div className="mt12 gray FBH JCSB">
                            <span>咸味</span>
                            <span>x{cItem.itemNum}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* <div className="commodity-detail FBH mt36 fs12">
                      <img className="commodity-img mr20" src="./2134.jpg" alt="商品图片"/>
                      <div className="FB1">
                        <div className="FBH JCSB">
                          <span>味滋源糯米锅巴好吃</span>
                          <span>¥99.99</span>
                        </div>
                        <div className="mt12 gray FBH JCSB">
                          <span>咸味</span>
                          <span>x99</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt32 FBH JCSB pl94 fs12">
                      <span className="gray">总价：¥99.99</span>
                      <span>需付款：¥99.99</span>
                    </div> */}
                  </div>
                </Item>)
            })}
            {/* <Item
              arrow="horizontal"
              multipleLine
              className="pr4"
              onClick={() => {
                this.props.history.push({
                  pathname: '/customer/order-detail'
                })
              }}
            >
              <div>
                <div className="commodity FBH JCSB">
                  <div className="commodity-name">杭州西溪八方城服务中心</div>
                  <div className="commodity-status red">待付款</div>
                </div>
                <div className="commodity-detail FBH fs12">
                  <img className="commodity-img mr20 mt12" src="./2134.jpg" alt="商品图片"/>
                  <div className="commodity-info">
                    <div className="FBH JCSB mt12 break-all">
                      <span className="ellipsis mr4">味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃味滋源糯米锅巴好吃</span>
                      <span>¥999999.99</span>
                    </div>
                    <div className="mt12 gray FBH JCSB">
                      <span className="commodity-type mr4">咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味咸味</span>
                      <span>x99</span>
                    </div>
                  </div>
                </div>
                <div className="mt32 FBH JCSB pl94 fs12">
                  <span className="gray">总价：¥99.99</span>
                  <span>需付款：¥99.99</span>
                </div>
              </div>
            </Item>
            <Item
              arrow="horizontal"
              multipleLine
              className="pr4"
            >
              <div>
                <div className="commodity FBH JCSB">
                  <div className="commodity-name">杭州西溪八方城服务中心</div>
                  <div className="commodity-status red">待付款</div>
                </div>
                <div className="commodity-detail FBH fs12">
                  <img className="commodity-img mr20 mt12" src="./2134.jpg" alt="商品图片"/>
                  <div className="FB1">
                    <div className="FBH JCSB mt12">
                      <span>味滋源糯米锅巴好吃</span>
                      <span>¥999999.99</span>
                    </div>
                    <div className="mt12 gray FBH JCSB">
                      <span>咸味</span>
                      <span>x99</span>
                    </div>
                  </div>
                </div>
                <div className="commodity-detail FBH mt36 fs12">
                  <img className="commodity-img mr20" src="./2134.jpg" alt="商品图片"/>
                  <div className="FB1">
                    <div className="FBH JCSB">
                      <span>味滋源糯米锅巴好吃</span>
                      <span>¥99.99</span>
                    </div>
                    <div className="mt12 gray FBH JCSB">
                      <span>咸味</span>
                      <span>x99</span>
                    </div>
                  </div>
                </div>
                <div className="mt32 FBH JCSB pl94 fs12">
                  <span className="gray">总价：¥99.99</span>
                  <span>需付款：¥99.99</span>
                </div>
              </div>
            </Item> */}
          </List>}

          </div>
        </div>
      </Frame>
    )
  }

}

export default Order