import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input
        className="form-control"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
      />

      <button className="btn btn-primary">Search</button>
    </form>
  );
}
