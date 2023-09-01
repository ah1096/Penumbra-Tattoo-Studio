import React, { useState } from 'react';

// Define artist data
const artists = [
  {
    name: 'Caleb Ross',
    imageUrl: 'URL_TO_Caleb_Ross_IMAGE',
  },
  {
    name: 'Ashley Benavides',
    imageUrl: 'URL_TO_Ashley_Benavides_IMAGE',
  },
  {
    name: 'Leo Flowers',
    imageUrl: 'URL_TO_Leo_Flowers_IMAGE',
  },
  {
    name: 'Chris Brittain',
    imageUrl: 'URL_TO_Chris_Brittain_IMAGE',
  },
  {
    name: 'Kris Heartwood',
    imageUrl: 'URL_TO_Kris_Heartwood_IMAGE',
  },
];

export const Artists = () => {
  const [imageSrc, setImageSrc] = useState('');

  const handleMouseEnter = (imageUrl) => {
    setImageSrc(imageUrl);
  };

  const handleMouseLeave = () => {
    setImageSrc('');
  };

  return (
    <div id="artists" className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Meet Our Artists</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Click on an artist's icon to visit their personal page!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="artist-container"
              onMouseEnter={() => handleMouseEnter(artist.imageUrl)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="artist-image"
              />
              <div className="artist-name">{artist.name}</div>
            </div>
          ))}
        </div>
        <div className="selected-artist">
          {imageSrc && (
            <>
              <h2>Selected Artist:</h2>
              <img src={imageSrc} alt="Selected Artist" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};