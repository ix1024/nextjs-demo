import React, { Component } from 'react'
import { connect } from "react-redux"
class User extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                {this.props.color}ddd
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { color: state.site.color };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);