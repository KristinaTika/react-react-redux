import React from 'react';
import './Loader.css';

const Loader = () => {
    return (

        <div className="container">
            <div className="dice">
                <div className="side one">
                    <img src="https://d.ibtimes.co.uk/en/full/1490233/walking-dead.jpg?w=400" alt="1" />
                    
                </div>
                <div className="side two">
                    <img src="http://img.wennermedia.com/square-400/the-walking-dead-46dd14ed-c1a1-4fe2-9e8d-ff6baead27f4.jpg" alt="1" />
                </div>
                <div className="side three">
                    <img src="http://www.2016auditions.com/wp-content/uploads/2016/07/walking-Dead-AMC.jpg" alt="1" />
                </div>
                <div className="side four">
                    <img src="https://vignette.wikia.nocookie.net/walkingdead/images/b/b6/Michonne%2C_Carol%2C_Maggie_and_Tara_Season_8.jpg/revision/latest/scale-to-width-down/597?cb=20170731095241" alt="1" height="200"/>
                </div>
                <div className="side five">
                    <img src="https://vignette.wikia.nocookie.net/walkingdead/images/4/44/TWD_702_Shiva_copy_FULL.jpg/revision/latest/scale-to-width-down/1280?cb=20161112134008" alt="1" height="200" />
                </div>
                <div className="side six">
                    <img src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2010/12/the-walking-dead-season-7b-rick-lincoln-daryl-reedus-alt-key-art-800x600-nologo-1.jpg" alt="1" height="200" />
                </div>
            </div>
        </div>
    );
};

export default Loader;