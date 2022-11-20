const ContextA = React.createContext();
const ContextB = React.createContext();
const ContextC = React.createContext();

const GlobalContextProvider = ({ children }) => {
  const ctxA = {};
  const ctxB = {};
  const ctxC = {};
  return (
    <ContextA.Provider value={ctxA}>
      <ContextB.Provider value={ctxB}>
        <ContextC.Provider value={ctxC}>{children}</ContextC.Provider>
      </ContextB.Provider>
    </ContextA.Provider>
  );
};

// let's create the consumers

const useContextA = () => {
  const context = React.useContext(ContextA);
  if (!context) {
    throw new Error("must use inside a provider");
  }
  return context;
};

const useContextB = () => {
  const context = React.useContext(ContextB);
  if (!context) {
    throw new Error("must use inside a provider");
  }
  return context;
};

const useContextC = () => {
  const context = React.useContext(ContextC);
  if (!context) {
    throw new Error("must use inside a provider");
  }
  return context;
};
