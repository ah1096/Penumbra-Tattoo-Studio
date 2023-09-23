import React, { useState } from 'react';
import krisbutton1 from '../images/artistbuttons/krisbutton1.png';
import krisbutton2 from '../images/artistbuttons/krisbutton2.png';

const krisbuttons = {
  name: 'kris',
  imageUrl1: krisbutton1,
  imageUrl2: krisbutton2,
  imageHeight: '1rem',
}

import calebbutton1 from '../images/artistbuttons/calebbutton1.png';
import calebbutton2 from '../images/artistbuttons/calebbutton2.png';

const calebbuttons = {
  name: 'caleb',
  imageUrl1: calebbutton1,
  imageUrl2: calebbutton2,
  imageHeight: '1rem',
}

import leobutton1 from '../images/artistbuttons/leobutton1.png';
import leobutton2 from '../images/artistbuttons/leobutton2.png';

const leobuttons = {
  name: 'leo',
  imageUrl1: leobutton1,
  imageUrl2: leobutton2,
  imageHeight: '1rem',
}

// import chrisBbutton1 from '../images/artistbuttons/chrisBbutton1.png';
// import chrisBbutton2 from '../images/artistbuttons/chrisBbutton2.png';

// const chrisBbuttons = {
//   name: 'chrisB',
//   imageUrl1: chrisBbutton1,
//   imageUrl2: lchrisBbutton2,
//   imageHeight: '1rem',
// }

// import ashleybutton1 from '../images/artistbuttons/ashleybutton1.png';
// import chrisBbutton2 from '../images/artistbuttons/ashleybutton2.png';

// const ashleybuttons = {
//   name: 'ashley',
//   imageUrl1: ashleybutton1,
//   imageUrl2: ashleybutton2,
//   imageHeight: '1rem',
// }

function swapButton(buttonId) {
  const imageElement = document.getElementById(buttonId);
  const currentSrc = imageElement.getAttribute('src');
  
  // Check which button was clicked and toggle the image accordingly
  if (buttonId === 'krisImage') {
    if (currentSrc === krisbuttons.imageUrl1) {
      imageElement.setAttribute('src', krisbuttons.imageUrl2);
    } else {
      imageElement.setAttribute('src', krisbuttons.imageUrl1);
    }
  } else if (buttonId === 'calebImage') {
    if (currentSrc === calebbuttons.imageUrl1) {
      imageElement.setAttribute('src', calebbuttons.imageUrl2);
    } else {
      imageElement.setAttribute('src', calebbuttons.imageUrl1);
    }
  } else if (buttonId === 'leoImage') {
    if (currentSrc === leobuttons.imageUrl1) {
      imageElement.setAttribute('src', leobuttons.imageUrl2);
    } else {
      imageElement.setAttribute('src', leobuttons.imageUrl1);
    }
  }
}




export const Artists = () => {
  
  return (
    <div id="artists" className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Meet Our Artists</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Click on an artist's icon to visit their personal page!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

          <button type="button" class="btn">
            <img id="krisImage" src={krisbuttons.imageUrl1} style={{width:70 + 'px'}} onClick={() => swapButton('krisImage')}></img>
          </button>

          <button type="button" class="btn">
            <img id="calebImage" src={calebbuttons.imageUrl1} style={{width:70 + 'px'}} onClick={() => swapButton('calebImage')}></img>
          </button>

          <button type="button" class="btn">
            <img id="leoImage" src={leobuttons.imageUrl1} style={{width:70 + 'px'}} onClick={() => swapButton('leoImage')}></img>
          </button>

          {/* <button type="button" class="btn">
            <img src={chrisBbuttons.imageUrl1} style={{width:70 + 'px'}}></img>
          </button>

          <button type="button" class="btn">
            <img src={ashleybuttons.imageUrl1} style={{width:70 + 'px'}}></img>
          </button> */}

        </div>

      </div>
    </div>
  );
};