import React from 'react'

export default class WarmTip extends React.Component {

  render() {
    const {text} = this.props
    return (<div className='red pl24 pr24 mt12'>
      {text || '请勿对客户信息进行截屏或拍照，违者公司将追究其法律责任！！！'}
    </div>)
  }
}