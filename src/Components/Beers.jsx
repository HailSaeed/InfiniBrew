import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function Beers() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`)
      .then((response) => {
        setData((prevData) => [...prevData, ...response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY <
          document.documentElement.scrollHeight - 500 ||
        loading
      ) {
        return;
      }
      setPage((prevPage) => prevPage + 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-2  pt-10">
        {data?.map((item, index) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            key={index}
          >
            <img
              className="h-96 w-96 object-contain object-center"
              src={item.image_url}
              alt={item.name}
            />
            <div className="px-4 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">{item.tagline}</p>
              <p className="text-gray-700 text-base">
                ABV: {item.abv} | IBU: {item.ibu}
              </p>
              <p className="text-gray-700 text-base">
                First Brewed: {item.first_brewed}
              </p>
            </div>
            <div className="px-4 pt-4 pb-2">
              {item.food_pairing.map((food, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {food}
                </span>
              ))}
            </div>
            <div className="px-4 pt-2 pb-2">
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Beers;
