import React from 'react'
import { Icon } from 'antd-mobile'

export default class Info extends React.Component {

  render() {
    const {className='', label, value, icon} = this.props
    return (<div className={`component-info FBH JCSB ${className}`}>
      <div className="nowrap mr8">{label}{label? '：' : ''}</div>
      <div className="FBH">
        <div className="break-all">{value}</div>
        {icon && <div className="FBH AICT icon">
          <Icon type={icon}/>
        </div>}
      </div>
    </div>)
  }
}