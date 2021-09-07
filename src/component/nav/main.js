import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

export default class Nav extends React.Component {

  render() {
    const {title=''} = this.props
    return (<NavBar
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="1" type="cross" />,
        ]}
      >
      {title}
    </NavBar>)
  }
}