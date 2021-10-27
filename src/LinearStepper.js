import React, { useState } from "react";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "./components/ProgressBar";
import FirstStep from "./components/Steps/FirstStep";
import SecondStep from "./components/Steps/SecondStep";
import ThirdStep from "./components/Steps/ThirdStep";
import FourthStep from "./components/Steps/FourthStep";
import ButtonTemp from "./components/UI/ButtonTemp";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <FirstStep />
        </>
      );

    case 1:
      return (
        <>
          <SecondStep />
        </>
      );
    case 2:
      return (
        <>
          <ThirdStep />
        </>
      );
    case 3:
      return (
        <>
          <FourthStep />
        </>
      );
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <ProgressBar activeStep={activeStep} steps={steps} isStepOptional={isStepOptional} isStepSkipped={isStepSkipped} />

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <ButtonTemp
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
            text={"back"}
          />

          {isStepOptional(activeStep) && (
            <ButtonTemp
              className={classes.button}
              variant={"contained"}
              color={"primary"}
              onClick={handleSkip}
              text={"skip"}
            />
          )}
          <ButtonTemp
            className={classes.button}
            variant={"contained"}
            color={"primary"}
            onClick={handleNext}
            text={activeStep === steps.length - 1 ? "Finish" : "Next"}
          />
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
