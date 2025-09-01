import { useContext } from "react";
import { HardlyContext } from "../Context/HardlyContext";
export type HardlyContextType = {
  selectedJobId: string | null;
  setSelectedJobId: (id: string | null) => void;
};

const useHardlyContext = (): HardlyContextType => {
  const context = useContext(HardlyContext);
  if (!context) {
    throw new Error("useHardlyContext must be used within a HardlyProvider");
  }
  return context;
}

export default useHardlyContext