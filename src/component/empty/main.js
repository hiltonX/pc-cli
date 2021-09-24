import React from 'react'

export default class Empty extends React.Component {

  render() {
    const {text} = this.props
    return (<div>
      {text || '查询结果为空'}
    </div>)
  }
}