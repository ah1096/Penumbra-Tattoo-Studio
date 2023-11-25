import InstaWidget from './InstaWidget';
import krispic from '../images/artistprofiles/KrisProfilePic.jpeg';
const krisprofilepic = {
    name: 'krispic',
    imageUrl: krispic,
};

export const KrisPage = () => {
    return(
       <div id="krispage" className="container vh-100 w-100">
            <div className="row align-items-center vh-100">
                <div id="artisttext" className="col-6">
                <div id="artistpageheading" className="row align-items-center flex">
                    <img id="artistprofilepic" className="col-4" src={krisprofilepic.imageUrl} alt="Artist Profile"></img>
                    <div className="col">
                    <h1 id="artistname" className="fw-bold">Kris Heartwood</h1>
                    <h3>artist and owner</h3>
                    </div>
                </div>
                <p>
                    My name is Kris. I do art. Give me your money.
                </p>
                <p>
                    <strong>Text me at 000-000-0000 to book your appointment!</strong>
                </p>
                <div className="row">
                    <p><strong>What I'm into:</strong></p>
                    <div className="col-6">
                    <ul>
                        <li>nakie art</li>
                        <li>Bowser cum tattoo</li>
                        <li>ouchy stabby</li>
                        <li>gay pirate show</li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                        <li>kitties</li>
                        <li>orange thing</li>
                        <li>ye</li>
                    </ul>
                    </div>
                </div>
            </div>

        <div id="instafeedwidget" className="col-6">
        <InstaWidget />
        </div>
        
  </div>
</div>
    )
}