import React from 'react'
import Nav from '../component/nav'
import WarmTip from '../component/warm-tip'

import { watermark } from '../common/util'
export default class Frame extends React.Component {
  componentDidMount() {
    const watermarkBox = document.getElementById('water-mark')

    if (!watermarkBox) {
      watermark({
        container: document.getElementsByClassName('water-mark')[0]
      })
    }
  }

  render() {
    const {title='', children} = this.props
    return (<div className="content" style={{background: '#fff'}}>
      <Nav 
        title={title}
      />
        <WarmTip />
        <div className="water-mark">
          {children}
        </div>
    </div>)
  }
}