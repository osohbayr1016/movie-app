"use client";

import React, { useState } from "react";
import { SecondSection } from "./_components/SecondSection";
import { UsernameSection } from "./_components/UsernameSection";

type StepProps = {
  prevStep: () => void;
  nextStep: () => void;
};

const SignUp = () => {
  const [step, setStep] = useState(0);
  const components = [UsernameSection, SecondSection];
  const Stepper = components[step];
  const nextStep = () => setStep((prev) => prev + 1);
  return (
    <div className="w-[407px]">
      <Stepper nextStep={nextStep} />
    </div>
  );
};

export default SignUp;
