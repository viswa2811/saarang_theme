import React from 'react';
import './Contact.css';

import { Row } from 'reactstrap'

class ContactComponent extends React.Component {
  render() {
    return (
      <div className="fill">
        <img 
          src={require('../res/main elements/logo_white.png')} 
          id="ilu"
          alt="Saarang '21 - Vintage Vogue"
        />
        <div className="date">
          <br />
          <div>
            From its humble beginnings as Mardi Gras in the 1970s, Saarang has evolved to its current state as the largest student-run festival in India. From scintillating ProShows and merry events to spectacular roadshows and Spotlight lectures, from enthusiastic first-timers to seasoned artistes, Saarang has something for everyone! 
          </div>
          <div className="break">
            <br />
          </div>
          <div> 
            Presenting to you, Saarang 2021 - Vintage Vogue! This year, as a virtual festival, we seek to provide you with an unforgettable experience in the safety of your own home.
          </div>
          <div className="break">
            <br />
          </div>
          <div>
            Saarang 2021's very existence sparks a reassuring return to order. But we can't stop there, can we? Vintage Vogue is but abstract: a reminiscence of a world that has now ceased to be and of times we recall fondly. Here's to the good old days; memories of entertainment and times unchanging that brought us joy in our budding years. This is a celebration of the spirit of the radiant past, an era in its own regard.
          </div>
          <div className="break">
            <br />
          </div>
          <div className = 'date1' style={{textAlign: 'center'}}>
            <div>
              Our normal may feel like a lifetime ago or a lifetime away. But today, Saarang is here, And it comes bearing life.
            </div>
          </div>
        </div>
        <div className="social">
          <Row className="justify-content-around icons">
            <a rel="noopener noreferrer"  target="_blank" href="https://www.facebook.com/saarangiitm/?ref=br_rs"><i className="fab fa-facebook-f social2 fb"></i></a>
            <a rel="noopener noreferrer" target="_blank"  href="http://twitter.com/Saarang_IITM"><i className="fab fa-twitter social2 twitter"></i></a>
            <a rel="noopener noreferrer" target="_blank"  href="https://www.instagram.com/saarang_iitmadras/"><i className="fab fa-instagram social2 instagram"></i></a>
            <a rel="noopener noreferrer" target="_blank"  href="https://www.youtube.com/user/iitmsaarang"><i className="fab fa-youtube social2 youtube"></i></a>
          </Row>
        </div>
      </div>
    );
  }
}

export default ContactComponent;