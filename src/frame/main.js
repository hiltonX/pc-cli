import React from 'react'
import Nav from '../component/nav'
import WarmTip from '../component/warm-tip'

export default class Frame extends React.Component {

  render() {
    const {title='', children} = this.props
    return (<div className="content" style={{background: '#fff'}}>
      <Nav 
        title={title}
      />
      <WarmTip />
      <div>
        {children}
      </div>
    </div>)
  }
}