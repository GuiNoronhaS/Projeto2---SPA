import {TextField } from '@material-ui/core';

function TextFieldGenerator(props) {
    return (
            <TextField
                className={props.className}
                id={props.id}
                label={props.label}
                multiline={props.multiline}
                rows={props.rows}
                placeholder={props.placeholder}
                variant={props.variant}
                margin={props.margin}
                component={props.component}
                InputProps={props.InputProps}
                onChange={props.onChange}
            > 
            </TextField>
    );
};

export default TextFieldGenerator