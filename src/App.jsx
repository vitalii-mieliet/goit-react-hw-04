import { useEffect, useState } from "react";
import { fetchData } from "./service/unsplashAPI";
import "./App.css";

function App() {
  const [query, setQuery] = useState("cats");
  const [page, setPage] = useState("1");
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      const images = await fetchData(query, page);
      setImages(images);
    };
    fetchImages();
  }, [query, page]);

  console.log(images);
  return (
    <>
      <h1>This website is under development</h1>
    </>
  );
}

export default App;
