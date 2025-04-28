import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <header className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Alkotások</h1>
        <p className="text-gray-600 mb-8">
          Fedezd fel az építőművészeti alkotásokat.
        </p>

        {data ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`https://picsum.photos/400/300?random=${item.id}`}
                  alt="Placeholder"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.nev}
                  </h3>
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
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Loading data...</p>
        )}
      </header>
    </div>
  );
}

export default HomePage;
