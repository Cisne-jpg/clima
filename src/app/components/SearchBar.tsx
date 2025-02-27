"use client"; 

import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void; //  Recibe una función para buscar la ciudad.
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState(""); //  Manejamos el estado local de la ciudad.

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city.trim()); //  Llamamos a la función de búsqueda con la ciudad.
      setCity("");
    }
  };

  return (
    //  Renderizamos un input y un botón; al presionar Enter o el botón, llamamos a handleSearch.
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Ingrese una ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        className="border p-2 rounded-md text-black placeholder-gray-600"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Buscar
      </button>
    </div>
  );
}
