import React, { useEffect, useState } from "react";

// Component to render each item
function ArtworkCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={`https://picsum.photos/400/300?random=${item.id}`}
        alt="Placeholder"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.nev}</h3>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-semibold">Alkotás Azonosító:</span>{" "}
          {item.alkotasAzonosito}
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-semibold">Kezdő Időpont:</span>{" "}
          {item.keletkezesKezdoIdopontjaInt}
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-semibold">Típus:</span> {item.tipus}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Megjelenítendő Név:</span>{" "}
          {item.megjelenitendoNev}
        </p>
      </div>
    </div>
  );
}

export default ArtworkCard;
