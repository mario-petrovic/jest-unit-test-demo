import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setName } from './form-actions';

export class Form extends React.Component {

    /* istanbul ignore next */ 
    render () {
        return (
            <div>
                <form>
                    <input type="text" value={this.props.inputValue} />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    /* istanbul ignore next */
    return {
        name: state.name
    };
}

function mapDispatchToProps (dispatch) {
    /* istanbul ignore next */
    return {
        setName: (name) => setName(dispatch, name)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);