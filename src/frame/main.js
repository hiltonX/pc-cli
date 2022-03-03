import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {toJS} from 'mobx'

import {Layout} from 'antd'

import MainStore from './store-main'

// 顶部导航
import Nav from '../component/nav'
// 侧边栏
import SideBar from '../component/sidebar'


const store = new MainStore()

const {Content, Sider} = Layout


const menuList = [{
  menuName: '父级',
  key: 'market',
  childList: [{
    menuName: '子集',
      key: 'example',
  }]
}, {
  menuName: '常规页面',
  key: 'common',
  childList: [{
    menuName: '列表页',
      key: 'page-list',
  }]
}, {
  menuName: '单个',
  key: 'clickStatistics'
}, {
  menuName: '单个2',
  key: '66666'
}]

@observer
class Frame extends Component {
  
  componentWillMount() {
    const openKeysStr = sessionStorage.getItem('openKeys') || '[]'
    const openKeys = JSON.parse(openKeysStr)
    if (openKeys && openKeys.length > 0) {
      store.openKeys = openKeys
    } else {
      store.getDefaultOpenKeys(menuList)
    }
    store.selectKey = `${window.location.hash.split('#')[1].split('/')[1]}`
  }
  
  render() {
    const {pageTitle='', children} = this.props

    return (
      <div className="frame">
        <Layout>
          {/* 顶部导航条 */}
          <Nav />
          <Layout>
            {/* 侧边栏 */}
            <Sider>
              <SideBar 
                menuList={menuList}
                // systemKey={selectKey}
                openKeys={toJS(store.openKeys)}
                selectedKeys={[store.selectKey]}
                onOpenChange={(openKeys) => {
                  store.openKeys = openKeys
                  sessionStorage.setItem('openKeys', JSON.stringify(store.openKeys))
                }}
                onSelectKeyChange={(selectKey) => {
                  store.selectKey = selectKey
                }}
              />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              {/* 内容 */}
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {pageTitle && <div className="page-title">{pageTitle}</div>}
                <div className="page-content">{children}</div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Frame
