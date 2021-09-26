import React from 'react'
import { Button } from 'antd-mobile'

import { urlToObject } from '../../common/util'

import Frame from '../../frame'

import MainStore from './store-main'

const store = new MainStore()
export default class Entrance extends React.Component {

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
        <div className="page page-entrance">
            <Button 
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
        </div> 
      </Frame>
    )
  }
}