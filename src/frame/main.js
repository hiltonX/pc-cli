import React from 'react'
import { observer } from 'mobx-react'
import Nav from '../component/nav'
import WarmTip from '../component/warm-tip'

import { watermark } from '../common/util'
@observer
class Frame extends React.Component {
  componentDidMount() {
    const watermarkBox = document.getElementById('water-mark')
    
    if (!watermarkBox) {
      const username = localStorage.getItem('username')

      watermark({
        container: document.getElementsByClassName('water-mark')[0],
        textList: [username]
      })
    }
  }

  render() {
    const {title='', noReturn, noClose, children} = this.props
    return (<div className="content" style={{background: '#fff'}}>
      <Nav 
        title={title}
        noReturn={noReturn}
        noClose={noClose}
      />
        <WarmTip />
        <div className="water-mark">
          {children}
        </div>
    </div>)
  }
}

export default Frame
