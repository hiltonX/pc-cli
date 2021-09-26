import React from 'react'
import IMG from './empty.png'
export default class Empty extends React.Component {

  render() {
    const {className, text} = this.props
    return (<div className={`${className} text-center`}>
      <img style={{width: '200px', height: '200px'}} src={IMG} alt="空"/>
      <div className="mt12 gray">
        {text || '查询结果为空'}
      </div>
    </div>)
  }
}