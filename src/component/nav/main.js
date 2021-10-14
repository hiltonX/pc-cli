import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import {Dropdown, Menu} from 'antd'
import {
  DownOutlined,
  UserOutlined,
} from '@ant-design/icons'

// import logo from '../../asset/logo.svg'

@observer
class Nav extends Component {

  render() {
    const userMenu = (
      <Menu>
        <Menu.Item
          onClick={() => {
            // this.props.commonStore.logout()
         }}
        >
          退出
        </Menu.Item>
      </Menu>
    )

    // const {menuList=[]} = this.props.commonStore
    // const system = menuList.filter(item => item.key === 'system')[0]
 

    return (
      <div className="nav FBH FBJB">
        <div className="left">
          <div className="left-box">
            {/* <img src={logo}></img> */}
          </div>
        </div>
        {/* <div className="content">
          <ul>
            {menuList.map((item, index) => {
              if(item.key === 'system') return 
              return (
                <li 
                  className={menuList[0].key === item.key ? 'active' : ''}
                  key={index} 
                  onClick={() => {
                    // this.props.commonStore.systemKey = item.key
                    const {childList=[]} = item
                    window.location.hash = (childList[0]||{}).url
                }}>
                  {item.menuName}
                </li>
              )
            })}
          </ul>
        </div> */}
        <div className="right">
          <Dropdown overlay={userMenu}>
            <div className="other hand">
              <UserOutlined />
              <span className="nickName">{"超级管理员"}</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Nav
