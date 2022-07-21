import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MantineProvider, Button, Text } from "@mantine/core";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import About from "./components/About";
import { UserContext, UserContextProvider } from "./context/UserContext";
import React, { useContext } from "react";

import { SignUpProvider } from "./context/signUp";

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
        colorScheme: "dark",
        primaryColor: "blue",
        defaultRadius: 20,
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <UserContextProvider>
        <AppLayout />
      </UserContextProvider>
    </MantineProvider>
  );
}

export default App;
