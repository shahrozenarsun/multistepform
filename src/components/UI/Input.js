import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
      marginRight: theme.spacing(1),
    },
  }));
  

const Input = (props) => {
    return (
        <div>
            <TextField
            id={props.id}
            label={props.label}
            variant={props.variant ? props.variant : "outlined"}
            placeholder={props.placeholder}
            fullWidth
            margin={props.margin ? props.margin : "normal"}
            name={props.name}
          />
        </div>
    )
}

export default Input
