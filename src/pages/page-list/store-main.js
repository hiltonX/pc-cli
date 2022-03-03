import { makeAutoObservable, runInAction } from 'mobx'
import io from './io'

export default class mainStore {

  // 信息
  info = undefined 

  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-10-12
    * @desrc 获取信息
    * @export
    * @param {*}
    * 
  */
  getInfo = async () => {

    try {
      const res = await io.getInfo()

      runInAction(() => {
        
        this.info = res

      })
    } catch (e) {
      console.log(e, 'getInfo')
      this.info = "获取信息失败"
    }
  }

}
