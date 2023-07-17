import React from "react";
import backgroundImage from "./images/galaxy.avif";

const Home = () => {
  return (
    <main className="mainHomeSection">
      <h1 className="homeH1">Welcome to Space!</h1>
      <p className="homePageParagraph">
        Welcome to the NASA Mars Rover Project and APOD homepage, where space
        exploration meets innovation. Our project combines two of NASA's most
        fascinating initiatives, the Astronomy Picture of the Day (APOD) and the
        Mars Rover mission, to create an innovative project for students and
        enthusiasts alike. Using real data from NASA, you'll learn about the
        latest APOD images and information on the Mars Rover mission. Whether
        you're interested in astronomy, space exploration, or just curious about
        the universe, this project is a great way to learn and explore. Join us
        on this incredible journey as we delve into the wonders of the cosmos
        and uncover the mysteries of the Red Planet.
      </p>
      <img
        src={backgroundImage}
        className="backgroundImage"
        alt="galaxyPhoto"
      />
    </main>
  );
};

export default Home;
