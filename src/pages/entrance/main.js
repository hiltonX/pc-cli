import React from 'react'
import { Button } from 'antd-mobile'

import Frame from '../../frame'

export default class Entrance extends React.Component {

  render() {
    return (
      <Frame>
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