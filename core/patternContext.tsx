import React, { useState, createContext } from "react";

export interface IPatternContext {
  patternContext: string;
  setPatternContext?: (contextParam: string) => void;
}

export type PatternContextIndexProps = {
  children: React.ReactNode;
};

export const PatternContext = createContext<IPatternContext>(
  {} as IPatternContext
);

export const PatternProvider: React.FC<PatternContextIndexProps> = ({
  children,
}) => {
  const [ctx, setCtx] = useState<string>("typescript");

  const patternPreference: IPatternContext = React.useMemo(
    () => ({
      patternContext: ctx,
      setPatternContext: (contextParam: string) => {
        setCtx(contextParam);
      },
    }),
    [ctx]
  );

  return (
    <PatternContext.Provider value={patternPreference}>
      {children}
    </PatternContext.Provider>
  );
};
