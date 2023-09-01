import him from '../images/him.jpg';
const aboutimage = {
    name: 'him',
    imageUrl: him,
};


export const About = () => {
    return(
        <div id="aboutus" className="container vh-100 w-100 mx-auto">
            <div className="row align-items-center vh-100">

                <div id="aboutustext" className="col-8">
                    <h1 className="fw-bold">About the Shop</h1>
                    <p>
                        We are a tattoo studio located in Lexington, KY -- a XX minute walk from the University of Kentucky campus.
                        Uhhhhhhhhhhhhh we're cool get tattoos idk
                        Insert more text here
                    </p>
                </div>

                <div id="aboutusimage" className="col-4">
                    <img className="w-100" src={aboutimage.imageUrl} />
                </div>
            </div>
        </div>
    )
}