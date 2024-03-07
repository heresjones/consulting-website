// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MainHeader from "./components/mainHeader";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import { defaultBanner, defaultOfferings } from "./strings";
import StickyFooter from "./components/mainFooter";
import { Container } from "@mui/material";
import Startups from "./pages/startups";
import GameOfThronesQuiz from "./quizzes/gameOfThrones";
import AdSense from "./components/adsense";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4326616525418199"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <AdSense client="ca-pub-4326616525418199" />
      <Router>
        <MainHeader></MainHeader>
        <Container maxWidth="lg" disableGutters={true}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home banner={defaultBanner} />} />
            <Route
              path="/services"
              element={
                <Services banner={defaultBanner} offerings={defaultOfferings} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/gotquiz" element={<GameOfThronesQuiz />} />
          </Routes>
        </Container>
        <StickyFooter></StickyFooter>
      </Router>
    </div>
  );
}

export default App;
