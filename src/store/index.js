import {createStore } from 'redux'
import CounterReducer from './reducer'
let store = createStore(CounterReducer)
store.subscribe(()=>{
    console.log (store.getState())
})