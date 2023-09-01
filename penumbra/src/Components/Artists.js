export const Artists = () => {
    return(
      <div id="artists" class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">Meet Our Artists</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          click on an artist's icon to visit their personal page!
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Kris Heartwood
          </button>

          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Caleb Ross
          </button>

          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Asley Benavides
          </button>

          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Leo Flowers
          </button>

          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Chris Brittain
          </button>
        </div>
      </div>
    </div>
    )
}