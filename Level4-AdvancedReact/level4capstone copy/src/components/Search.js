import { React, useEffect, useState } from "react";
import axios from "axios";
import Spirit from "./images/Spirit.jpeg";
import Opportunity from "./images/opportunity.jpeg";
import Curiosity from "./images/curiosity.jpeg";
import Perserverance from "./images/perserverance.jpeg";

const MarsRover = () => {
  const [date, setDate] = useState("");
  const [image, setImage] = useState();
  const [name, setName] = useState("Spirit");
  const [manifest, setManifest] = useState();

  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = (event) => {
    const apiKey = process.env.REACT_APP_NASA_KEY;
    const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${date}&api_key=${apiKey}`;

    axios
      .get(URL)
      .then((response) => {
        const imgUrl = response.data.photos[0].img_src;
        console.log(response.data.photos);
        setImage(imgUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getManifestData = async () => {
    const apiKey = process.env.REACT_APP_NASA_KEY;
    const URL = `https://api.nasa.gov/mars-photos/api/v1/manifests/${name}/latest_photos?api_key=${apiKey}`;

    const response = await axios
      .get(URL)
      .then((res) => {
        const manifestData = res.data;
        setManifest(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(manifest);
  }, []);

  return (
    <main className="mainSection">
      <h1 className="searchPageH1">The Rovers of Mars</h1>
      <div className="roversImageTitleContainer">
        <div className="singleRoverImageTitleContaner">
          <img
            className="RoverMainImg"
            src={Spirit}
            placeholder="Spirit"
            alt="Spirit Rover"
            title="Spirit"
          />
          <h3 className="roverName">Spirit</h3>
        </div>

        <div className="singleRoverImageTitleContaner">
          <img
            className="RoverMainImg"
            src={Opportunity}
            placeholder="Opportunity"
            alt="Opportunity Rover"
          />
          <h3 className="roverName">Opportunity</h3>
        </div>

        <div className="singleRoverImageTitleContaner">
          <img
            className="RoverMainImg"
            src={Curiosity}
            placeholder="Curiosity"
            alt="Curiosity Rover"
          />
          <h3 className="roverName">Curiosity</h3>
        </div>

        <div className="singleRoverImageTitleContaner">
          <img
            className="RoverMainImg"
            src={Perserverance}
            placeholder="Perserverance"
            alt="Perserverance Rover"
          />
          <h3 className="roverName">Perserverance</h3>
        </div>
      </div>

      <p className="searchPageDescription">
        Looking for a fun way to explore more wonders of space? Look no further
        than NASA's Rover photos! With four different options to choose from,
        you can search through stunning images captured by the Spirit,
        Opportunity, Curiosity, and Perserverance, rovers. But why stop there?
        Use our advanced search feature to filter through these images by date
        and uncover hidden gems that are out of this world! Whether you are a
        space enthusiast or just looking for a unique way to spend your time,
        NASA's Rover photos offer a fun and exciting journey through another
        planet! So what are you waiting for? Start your search today and
        discover the beauty of Mars!
      </p>

      <br />

      <label>
        Select Rover:
        <select onChange={handleNameChange}>
          <option className="drpdown" value={"Spirit"}>
            Spirit: 01/03/2004 to 2010
          </option>
          <option className="drpdown" value={"Opportunity"}>
            Opportunity: 01/04/2004 to 06/10/2018
          </option>
          <option className="drpdown" value={"Curiosity"}>
            Curiosity: 08/05/2012 to Present
          </option>
          <option className="drpdown" value={"Perserverance"}>
            Perserverance: 02/08/2021 to Present
          </option>
        </select>
      </label>

      <br />
      <label>
        Select a date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>

      <div className="marsRoverImage">
        <h5>
          API information is not consistent. If you don't successfully receive
          an image, try another date or rover.
        </h5>
        <br />
        {image && <img className="roverPhoto" src={image} alt="Mars Rover" />}

        {/* <h1 className="photoRover">{image.name}</h1>
        <p className="photoDate">{image.earth_date}</p>
        <p className="photoStatus">{image.status}</p> */}
      </div>
    </main>
  );
};

export default MarsRover;
