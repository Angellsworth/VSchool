import { React, useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className="photoOfTheDay">
      <h1>Astronomy Picture of the Day</h1>
      <p className="APODPageDescription">
        Every day we showcase a captivating photograph of the universe,
        accompanied by a concise explanation written by one of our expert
        astronomers. Our universe is full of wonder and mystery, and we believe
        sharing these daily snapshots with you can help spark a deeper
        appreciation for the beauty and complexity of our cosmos.
      </p>

      {photoData.media_type === "image" ? (
        <img src={photoData.url} alt={photoData.title} />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          gesture="media"
          allow="encrypted=media"
          allowFullScreen
          className="photo"
        />
      )}

      <div className="nasaPhotoTitleExplanationContainer">
        <h1 className="photoTitle">{photoData.title}</h1>
        <p className="photoDate">{photoData.date}</p>
        <p className="photoExplanation">{photoData.explanation}</p>
      </div>
    </div>
  );
};

export default NasaPhoto;
