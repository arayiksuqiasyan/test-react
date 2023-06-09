import React, {BaseSyntheticEvent, PropsWithChildren} from "react";
import classes from './AppButton.module.scss'
import classNames from "classnames";
import {Simulate} from "react-dom/test-utils";

interface IProps extends PropsWithChildren {
    onClick?: () => void,
    type?: "button" | "submit" | "reset"
    text?: string
    typeBtn?: 'primary' | 'secondary',
}

const AppButton = (props: IProps) => {
    const {onClick, type = 'button', text = 'Text', typeBtn = 'primary', children, ...rest} = props

    return (
        <button
            {...rest}
            type={type}
            className={classNames(classes.container, classes[typeBtn])}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default AppButton
