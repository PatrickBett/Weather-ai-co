import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CurrentPage from "./pages/CurrentPage";
import HourlyPage from "./pages/HourlyPage";
import ForecastPage from "./pages/ForecastPage";
import AccountPage from "./pages/AccountPage";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("Nairobi");

  return (
    <>
      <Navbar onSearch={setCity} />

      <Routes>
        <Route path="/" element={<CurrentPage city={city} />} />
        <Route path="/hourly" element={<HourlyPage city={city} />} />
        <Route path="/forecast" element={<ForecastPage city={city} />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </>
  );
}
