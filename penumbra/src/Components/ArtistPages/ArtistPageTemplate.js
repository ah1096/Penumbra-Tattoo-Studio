import him from '../images/him.jpg';
const profilepic = {
    name: 'him',
    imageUrl: him,
};

export const KrisPage = () => {
    return(
        <div id="artistPage" className="container vh-100 w-100 mx-auto">
            <div className="row align-items-center vh-100">

                <div id="aboutustext" className="col-6">
                    <h1 className="fw-bold">Kris Heartwood</h1>
                    <p>
                        My name is Kris Heartwood, and I am a tattoo artist in Lexington, Kentucky. I began my tattoo career as an apprentice at To the Grave Tattoo, formerly known as The Parlor, in June of 2015. I have been living and working in Lexington since 2013 and I think of it as my home. My favorite subjects to draw and tattoo include plants, animals, food, and people. I really enjoy designing pinups and I love an interesting design concept. My goal is to provide my clients with custom designs that leaves them feeling like it was meant to live in their skin.
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

