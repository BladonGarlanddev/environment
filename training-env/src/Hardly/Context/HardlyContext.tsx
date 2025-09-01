// Context/HardlyContext.tsx

import { createContext, useState } from "react";

export type HardlyContextType = {
  selectedJobId: string | null;
  setSelectedJobId: (id: string | null) => void;
};

export const HardlyContext = createContext<HardlyContextType | undefined>(
  undefined
);

const HardlyProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  return (
    <HardlyContext.Provider value={{ selectedJobId, setSelectedJobId }}>
      {children}
    </HardlyContext.Provider>
  );
};

export default HardlyProvider;
