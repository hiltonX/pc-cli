import React from 'react'
import { observer } from 'mobx-react'
import { Button } from 'antd-mobile'

import { urlToObject } from '../../common/util'

import Frame from '../../frame'

import MainStore from './store-main'
import Empty from '../../component/empty'

const store = new MainStore()

@observer
class Entrance extends React.Component {

  componentDidMount() {
    const {search} = this.props.location
  
    const { token } = urlToObject(search) || {}
    store.token = token

    store.getAccount()
  }

  render() {
    return (
      <Frame
        title="搜  索"
        noReturn={true}
        noClose={true}
      >
        {!store.loading  && (store.errorMsg ? <Empty className="page" text={store.errorMsg || '页面加载中'}/> : <div className="page page-entrance">
            <Button 
              className="mt52"
              type="primary" 
              onClick={() => {
                this.props.history.push({
                  pathname: `/customer`
                })
              }}
            >
              客户搜索
            </Button>
            <Button 
              className="mt52" 
              type="primary"
              onClick={() => {
                this.props.history.push({
                  pathname: `/project`
                })
              }}
            >
              项目搜索
            </Button>
        </div>) }
      </Frame>
    )
  }
}

export default Entrance