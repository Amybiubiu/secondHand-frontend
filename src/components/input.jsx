
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
const noop = () => {};

const useStyles = makeStyles((theme) => ({
    standard: {
        border: 0,
        paddingLeft: 15,
        lineHeight: '33px',
        width: 272,
        fontSize: '14px',
        borderRadius: '5px',
        background: 'rgba(244, 244, 244, 1)'
    }
}))

const Input = (props) => {
    const {
        type,
        placeholder,
        value,
        onChange,
        className,
        name,
        onBlur = noop
    } = props;
    const classes = useStyles();
    return (
      <input
        className={className ? className : classes.standard}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
      />
    );
}
export default Input;