import React, { Component } from 'react'
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducers from "../reduces/index"
import App from '../components/App'
import User from '../components/User'
import Header from '../components/Header'


const store = createStore(
    rootReducers
    //applyMiddleware
)



export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <App />
                    <User />
                </div>
            </Provider>
        )
    }
}