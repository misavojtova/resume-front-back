import React, { useState } from "react";
import LoadingContext from "./LoadingContext.js";
export function LoadingContextProvider(props) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        loading: loading,
        setLoading: setLoading,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
}

export default LoadingContextProvider;
