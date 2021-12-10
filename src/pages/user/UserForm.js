import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import React from 'react';
import {submitUserAction} from '../../actions/user/UserAction'
const UserFormFunc = props => {
    const {handleSubmit} = props
    const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }
    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <label>Nome</label>
            <Field
            type="text"
            component="input"
            name="name" />
            <label>E-mail</label>
            <Field
            type="text"
            component="input"
            name="email" />
            <button type="submit">submit</button>
        </form>
        
    );
}

const UserForm = (reduxForm({
    form:'formUser'
}))(UserFormFunc)

const mapStateToProps = state =>({
    
})
export default connect(mapStateToProps,{submitUserAction})(UserForm)