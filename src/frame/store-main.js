import { makeAutoObservable, toJS } from 'mobx'


export default class mainStore {
  // 展开的keys
  openKeys = []
  // 选中的key
  selectKey = undefined
  // 侧边栏
  menuList = [] 


  constructor() {
    makeAutoObservable(this)
  }

  getDefaultOpenKeys = (menuList=[]) => {
    this.openKeys = [(menuList[0] || {}).key]
    sessionStorage.setItem('openKeys', JSON.stringify([(menuList[0] || {}).key]))
  }
}
