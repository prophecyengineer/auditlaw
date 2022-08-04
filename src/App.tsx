import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MantineProvider, Button, Text } from "@mantine/core";
import AppLayout from "./components/AppLayout";
import { UserContext, UserContextProvider } from "./context/UserContext";
import React, { useContext } from "react";
import FormProvider from "./context/FormContext";

function App() {
  // const data = {
  //   number: 123,
  //   text: "ABC",
  //   func: () => {
  //     alert("Hello!");
  //   },
  // };
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        colorScheme: "light",
        primaryColor: "teal",
        defaultRadius: 20,
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <UserContextProvider>
        <FormProvider>
          <div></div>
          <AppLayout />
        </FormProvider>
      </UserContextProvider>
    </MantineProvider>
  );
}

export default App;
