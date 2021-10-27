import React from 'react'
import {
    Typography,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";

const ButtonTemp = (props) => {
    return (
        <Button
            className={props.className}
            variant={props.variant}
            color={props.color}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.text}
        </Button>
    )
}

export default ButtonTemp
