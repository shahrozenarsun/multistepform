import React from 'react'
import {
    Typography,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";

const ProgressBar = (props) => {
    const { activeStep, steps, isStepOptional, isStepSkipped } = props;
    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                            >
                                optional
                            </Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    )
}

export default ProgressBar
