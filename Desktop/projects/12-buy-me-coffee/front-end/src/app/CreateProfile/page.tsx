"use client";

import { useState } from "react";
import { CreateFirstPage } from "./_components/CreateFirstPage";
import { CreateSecondPage } from "./_components/CreateSecondPage";
type StepProps = {
  prevStep: () => void;
  nextStep: () => void;
};

const CreateProfile = () => {
  const [step, setStep] = useState(0);
  const components = [CreateFirstPage, CreateSecondPage];
  const Stepper = components[step];
  const nextStep = () => setStep((prev) => prev + 1);
  return (
    <div className="h-screen w-screen flex ">
      <Stepper nextStep={nextStep} />
    </div>
  );
};

export default CreateProfile;
