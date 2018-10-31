import React, { Component } from 'react'
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducers from "../reduces/index"
import App from '../components/App'
import Text from '../components/Text'
import Header from '../components/Header'
import fetch from 'isomorphic-unfetch'

const store = createStore(
    rootReducers
    //applyMiddleware
)

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const shows = this.props.shows;
        return (
            <Provider store={store}>
                <div>
                    <p>p</p>
                    <Header />
                    <App />
                    <Text />
                </div>
            </Provider>
        )
    }
}
Index.getInitialProps = async function () {
    //const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    // const data = await res.json()
    const data = { name: 'name', age: 20 }

    console.log(`Show data fetched. Count: ${data}`)

    return {
        shows: data
    }

}
export default Index  