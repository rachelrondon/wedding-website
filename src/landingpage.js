import React from 'react';
import NavBar from './navbar.js';
import main from '../public/main.jpg';
import weddingOne from '../public/wedding-one.jpg';
import weddingTwo from '../public/wedding-two.jpg';

export default function LandingPage() {
    return(
      <div>
        <div className="landing-page">
          <img className="main" src={main} alt="wedding"></img>
          <div className="names">
            <h2 className="name">Sarah Marie</h2>
            <h2 className="name">&</h2>
            <h2 className="name">Anthony Thomas</h2>
          </div>
          <div className="landing-page-details">
            <div className="date-details">
            <div className="day-details">
              <h2 className="day">
                  June 12
              </h2>
              <h3 className="year">
                  2021
              </h3>
            </div>
            <div className="location-details">
              <h2 className="city">
                Newport
              </h2>
              <h3 className="state">
                Rhode Island
              </h3>
            </div>
            </div>
          </div>
          <div id="schedule" className="schedule">
            <p className="details-title">Wedding</p>
            <p className="detail">Saturday, June 12, 2021</p>
            <p className="location">Castle Hill Inn</p>
            <p className="detail">590 Ocean Drive, Newport, RI 02840</p>
            <p className="detail">Please arrive at 5:30pm to enjoy mingling and refreshments. The ceremony will begin promptly at 6pm.</p>
            <p className="detail">Black Tie Optional</p>
            <p className="details-title">Ceremony</p>
            <p className="detail">6:00pm - 6:30pm</p>
            <p className="details-title">Cocktail Hour</p>
            <p className="detail">6:30pm - 7:30pm</p>
            <p className="details-title">Reception</p>
            <p className="detail">7:30pm - 11:00pm</p>
          </div>
          <div id="registry" className="landing-page-details">
            <div className="registry">
              <p className="detail">Sarah & Anthony are registed at Crate & Barrel and Restoration Hardware</p>
            </div>
          </div>
          <div id="photos" className="photos">
            <img className="photo" src={weddingOne} alt="wedding photo"></img>
            <img className="photo" src={weddingTwo} alt="wedding photo"></img>
          </div>
        </div>
      </div>
    )
}
