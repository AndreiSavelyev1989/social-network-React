import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='messageBody'
                    placeholder='Enter your message'
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

