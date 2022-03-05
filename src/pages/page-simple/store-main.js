import { makeAutoObservable, runInAction } from 'mobx'
import io from './io'

export default class mainStore {

  constructor() {
    makeAutoObservable(this)
  }

}
