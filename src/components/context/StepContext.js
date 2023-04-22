import { createContext, useState } from 'react';
import FirstStep from '../FirstStep';
import SecondStep from '../SecondStep';
import Final from '../Final';

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
  });

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleChangeInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const Componenets = {
    1: (
      <FirstStep
        nextStep={nextStep}
        changeInput={handleChangeInput}
        values={formData}
      />
    ),
    2: (
      <SecondStep
        nextStep={nextStep}
        prevStep={prevStep}
        changeInput={handleChangeInput}
        values={formData}
      />
    ),
    3: <Final values={formData} />,
  };

  return (
    <StepContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        handleChangeInput,
        Componenets,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepContext;
