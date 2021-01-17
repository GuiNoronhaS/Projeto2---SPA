import {TextField } from '@material-ui/core';

function TextFieldGenerator(props) {
    return (
            <TextField
                id={props.id}
                label={props.label}
                multiline={props.multiline}
                rows={props.rows}
                placeholder={props.placeholder}
                variant={props.variant}
                margin={props.margin}
                component={props.component}
                InputProps={props.InputProps}
                fullWidth
            ></TextField>
    );
};

export default TextFieldGenerator