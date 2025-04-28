import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtworkCard from "./components/ArtworkCard";

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
              <ArtworkCard key={item.id} item={item} />
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
