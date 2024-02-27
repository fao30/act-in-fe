import { useLocalStorage } from "@uidotdev/usehooks";

export function useMultiStepForm(steps: React.JSX.Element[]) {
  const [currentStepIndex, setCurrentStepIndex] = useLocalStorage<number>("currentStepIndex", 0);

  const handleNext = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const handleBack = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  return {
    currentStepIndex,
    setCurrentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    handleNext,
    handleBack,
  };
}
