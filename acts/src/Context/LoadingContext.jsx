import { createContext, useContext, useRef, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  // Use ref to store the actual value (persists across re-renders)
  const hasLoadedRef = useRef(false);
  // Use state to trigger re-renders when needed
  const [, forceUpdate] = useState(0);

  const markAsLoaded = () => {
    hasLoadedRef.current = true;
    forceUpdate(n => n + 1); // Trigger re-render
  };

  const isLoaded = () => hasLoadedRef.current;

  return (
    <LoadingContext.Provider value={{ isLoaded, markAsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
