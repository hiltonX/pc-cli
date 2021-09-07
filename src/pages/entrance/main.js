import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile'

import Frame from '../../frame'

export default class Entrance extends React.Component {

  render() {
    return (
      <Frame>
        <div className="page-entrance">
          <div>
            <Button type="primary">客户搜索</Button>
            <Button className="mt52" type="primary">项目搜索</Button>
          </div>
        </div> 
      
      </Frame>
    )
  }
}