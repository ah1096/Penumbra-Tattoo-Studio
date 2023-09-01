import him from '../images/him.jpg';
const logo = {
    name: 'him',
    imageUrl: him,
};


export const NavBar = (props) => {
    return(
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top pb-5">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a onClick={() => props.uhhhh('studio')} class="nav-link" href="#aboutus">The Studio</a>
        <a onClick={() => props.uhhhh('artists')} class="nav-link" href="#artists">Artists</a>
        <a onClick={() => props.uhhhh('home')} class="navbar-brand" href="#home">
          <img src={logo.imageUrl} style={{width:70 + 'px'}}/>
          {/* TODO: replace this with an actual logo */}
        </a>
        <a onClick={() => props.uhhhh('FAQ')} class="nav-link" href="#FAQ">FAQs</a>
        <a onClick={() => props.uhhhh('contact')} class="nav-link" href="#contactus">Contact Us</a>
      </div>
    </div>
  </div>
</nav>
    );
}