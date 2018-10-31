import React, { Component } from 'react'
import { connect } from "react-redux"
import { setSite } from '../../actions/set-site'
import './index.scss'
class App extends Component {

    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        console.log(userAgent);
        return { userAgent }
    }
    render() {
        const { site, setSite } = this.props;

        return (
            <div style={{ color: site.color, padding: 20, transition: 'all 0.25s linear' }}>
                ]{this.props.userAgent}[
                {site.color} < button onClick={setSite} > Change</button >
                <p>p</p>

                <style jsx>{`
      p {
        color: #fff;
        background:#556;
      } 
    `}</style>


                <style global jsx>{`
      p {
        border:1px solid red;
        padding:10px;
      } 
    `}</style>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return { site: state.site };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setSite: () => {
            dispatch({ type: 'SET_COLOR', color: '#' + Math.random().toString(16).slice(2, 8) })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);