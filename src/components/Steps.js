import { useContext } from 'react';
import StepContext from './context/StepContext';

function Steps() {
  const { Componenets, step } = useContext(StepContext);
  return <div>{Componenets[step]}</div>;
}

export default Steps;
