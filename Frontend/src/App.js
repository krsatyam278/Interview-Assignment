import logo from "./logo.svg";

import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";

import ScheduleInterview from "./pages/ScheduleInterview";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import UpcomingInterview from "./pages/UpcomingInterview";
import EditInterview from "./pages/EditPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<ScheduleInterview />} />
          <Route path="/upcoming" element={<UpcomingInterview />} />
          <Route path="/edit/:interviewId" element={<EditInterview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
