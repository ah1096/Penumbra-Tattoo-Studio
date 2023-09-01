import him from '../images/him.jpg';
const logo = {
    name: 'him',
    imageUrl: him,
};


export const NavBar = () => {
    return(
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#aboutus">The Studio</a>
        <a class="nav-link" href="#artists">Artists</a>
        <a class="navbar-brand" href="#home">
          <img src={logo.imageUrl} style={{width:70 + 'px'}}/>
        </a>
        <a class="nav-link" href="#artists">FAQs</a>
        <a class="nav-link" href="#contactus">Contact Us</a>
      </div>
    </div>
  </div>
</nav>
    );
}