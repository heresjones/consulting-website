// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MainHeader from "./components/mainHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import { defaultBanner, defaultOfferings } from "./strings";
import StickyFooter from "./components/mainFooter";
import { Container } from "@mui/material";
import Startups from "./pages/startups";

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader></MainHeader>
        <Container maxWidth="lg" disableGutters={true}>
          <Routes>
            <Route
              path="/"
              element={
                <Home banner={defaultBanner} offerings={defaultOfferings} />
              }
            />
            <Route
              path="/home"
              element={
                <Home banner={defaultBanner} offerings={defaultOfferings} />
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/startups" element={<Startups />} />
          </Routes>
        </Container>
        <StickyFooter></StickyFooter>
      </Router>
    </div>
  );
}

export default App;
