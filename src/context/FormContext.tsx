import React, { createContext, useState } from "react";

export const FormContext = createContext({
  name: "sdf",
  updateName: (name: any) => {},
});

const FormProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [name, setName] = useState("Batman");

  return (
    <FormContext.Provider
      value={{
        name,
        updateName: (name: React.SetStateAction<string>) => setName(name),
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
