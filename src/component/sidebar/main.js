import React, {Component} from 'react'

import {Menu} from 'antd'

const {SubMenu} = Menu

class SideBar extends Component {
  render() {

    const {menuList=[], openKeys, selectedKeys, onOpenChange, onSelectKeyChange} = this.props
    
    return (
      <div className="sidebar">
        <Menu 
          theme="dark" 
          mode="inline"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onClick={(e) => {
            window.location.hash = `#${e.key}`
            onSelectKeyChange && onSelectKeyChange(e.key)
          }}
          onOpenChange={(openKeys) => {
            onOpenChange && onOpenChange(openKeys)
          }}
        >
          {menuList.map(item => {
            if (item.childList) {
              return (<SubMenu title={item.menuName} key={item.key}>
                {item.childList.map(cItem => {
                  return <Menu.Item key={cItem.key}>{cItem.menuName}</Menu.Item>
                })}
              </SubMenu>)
            }
            return <Menu.Item key={item.key}>{item.menuName}</Menu.Item>
          })}
        </Menu>
      </div>
    )
  }
}

export default SideBar
