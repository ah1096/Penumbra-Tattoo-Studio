export const NavBar = () => {
    return(
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Penumbra</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#home">Home</a>
        <a class="nav-link" href="#aboutus">The Studio</a>
        <a class="nav-link" href="#artists">Artists</a>
        <a class="nav-link" href="#contactus">Contact Us</a>
      </div>
    </div>
  </div>
</nav>
    );
}