import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

export default class Nav extends React.Component {

  render() {
    const {
      title='',
      noReturn=false,
      noClose=true,
    } = this.props
    return (<NavBar
        icon={!noReturn && <Icon type="left" />}
        onLeftClick={
          () => window.history.back()
        }
        rightContent={[
          !noClose && <Icon key="1" type="cross" />,
        ]}
      >
      {title}
    </NavBar>)
  }
}