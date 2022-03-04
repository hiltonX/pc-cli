import { makeAutoObservable, runInAction } from 'mobx'
import io from './io'

export default class mainStore {

  filterParams = {}

  constructor() {
    makeAutoObservable(this)
  }

}
