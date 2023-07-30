import { use, useEffect, useState } from "react";

export function useFormStageComplete(stages: boolean[]) {
  const [isStageCompleted, setIsStageCompleted] = useState(false);

  useEffect(() => {
    setIsStageCompleted(stages.every((stage) => stage === true));
  }, [stages]);

  return isStageCompleted;
}


export default useFormStageComplete;