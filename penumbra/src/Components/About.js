import shopBG from '../images/shoppics/shopBGfillerimg.webp';
const shopBGimg = {
    name: 'shopBG',
    imageUrl: shopBG,
};


export const About = () => {
    return(
        <div id="aboutus" className="container vh-100 w-100 mx-auto">
            <div className="row align-items-center vh-100">

                <div id="aboutustext" className="col-6">
                    <h1 className="fw-bold">About the Shop</h1>
                    <p>
                        We are a tattoo studio located in Lexington, KY -- a 10-15 minute walk from the University of Kentucky campus.
                        We founded the shop in September 2021 and have been in the same location ever since.
                        Our shop prides itself in being an inclusive, welcoming space for all.
                        Our artists specialize in American Traditional style, but every artist is trained in multiple styles and would be happy to book YOUR ideal tattoo.
                    </p>

                    <p>
                        <strong>640 West Maxwell St Suite 120. Lexington Ky, 40508</strong>
                    </p>

                    <div className="row">
                        <p><strong>Shop Hours</strong></p>
                        <div className="col-6">
                            <ul>
                                <li>Monday: 12-6 pm</li>
                                <li>Tuesday: CLOSED</li>
                                <li>Wednesday: CLOSED</li>
                                <li>Thursday: 12-6 pm</li>
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul>
                                <li>Friday: 12-6 pm</li>
                                <li>Saturday: 12-8 pm</li>
                                <li>Sunday: 12-8 pm</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="carousel" className="col-6">
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={shopBGimg.imageUrl}  class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Shop exterior</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={shopBGimg.imageUrl} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Shop interior</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={shopBGimg.imageUrl} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Booth</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>

                            <div class="carousel-item">
                            <img src={shopBGimg.imageUrl} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Parking</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}