import { useState, useRef, useEffect } from "react";
import "./App.css";
import Heading from "./Components/Heading";
Heading;
function App() {
  let inputValue = useRef("");
  let [image, setImage] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      await fetch(
        `https://pixabay.com/api/?key=43176562-0bc5e6c3d7a531f3f8239c36f&q=${inputValue.current.value}`
      )
        .then((value) => {
          return value.json();
        })
        .then((value) => {
          let data = value;
          setImage(data.hits);
          // console.log(data);
        })
        .catch((error) => console.error("!!- fetchData" + error));
    } catch (error) {
      console.warn("Api error" + error);
    }
  }
  let handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <section className="section">
      <div className="nav-bar">
        <Heading></Heading>
        <div className="title">
          <p className="p">
            <h1>Stunning royalty-free images & royalty-free stock</h1>
            <h3>
              Over 4.4 million+ high quality stock images, videos and music
              shared by our talented community.
            </h3>
          </p>
          <form action="" onSubmit={handleSearch}>
            <input
              className="input"
              type="search"
              ref={inputValue}
              onChange={handleSearch}
              placeholder="     Search for all images on pixabay"
            />
          </form>
        </div>
      </div>
      <aside className="aside">
        {image.map((data) => {
          return (
            <>
              <img
                src={data.largeImageURL}
                alt=""
                key={data.id}
                className="img"
              />
            </>
          );
        })}
      </aside>
    </section>
  );
}

export default App;
