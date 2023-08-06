import logo from './logo.svg';
import './App.css';
import {NavBar} from './Components/NavBar.js'

function App() {
  return (
    <div>
    <NavBar/>

{/* HOME SECTION */}
      <div class="px-4 py-5 my-5 text-center">
        {/* <img class="d-block mx-auto mb-4"></img> */}
        <h1 class="display-5 fw-bold">Penumbra Tattoo Studio</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            tattoo studio located in Lexington, KY. Call us at 000-000-0000 to book an appointment with your chosen artist.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Book Now
            </button>
          </div>

        </div>
      </div>
{/* ABOUT THE SHOP */}
      <div class="container col-xxl-8 px-4 py-5">
        {/* <img class="d-block mx-lg-auto img-fluid" width="700" height="500"></img> */}
      </div>
      <div class="col-lg-6">
        <h1>About the Shop</h1>
        <p class="lead">Penumbra was founded in blahblah and we do blahblahblah. Get a tattoo pls.</p>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
          See the space
        </button>
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
          Find an artist
        </button>
      </div>
{/* FOLLOW US ON INSTAGRAM */}
      <div class="container col-xxl-8 px-4 py-5">
        {/* <img class="d-block mx-lg-auto img-fluid" width="700" height="500"></img> */}
      </div>
      <div class="col-lg-6">
        <h1>Follow us on Instagram</h1>
        <p class="lead">njfknesjfkdsfmeksg eksknklmd</p>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
          Instagram
        </button>
      </div>


    </div>
  );
}

export default App;
