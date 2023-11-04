

export const Home = () => {
    return(
        <div id="homepg" class="px-4 py-5 my-5 text-center align-items-center">
          <h1 class="display-5 fw-bold">Penumbra Tattoo Studio</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              We're a tattoo studio in Lexington, KY. Call us at 859-368-7435 to book an appointment with your chosen artist.
            </p>

            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a id="booknowbtn" href="tel:859-368-7435" type="button" class="btn btn-primary btn-lg px-4 gap-3">
                  Book Now
              </a>
            </div>
          </div>
      </div>
    )
}