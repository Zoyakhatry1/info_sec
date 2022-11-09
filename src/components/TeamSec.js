import React from "react";
import "../Styles/TeamSec.css";
import { NavLink } from "react-router-dom";

function TeamSec() {
  return (
    <div className="team_sec">
      <p className="teamsec_heading"> <span className="red">Our</span>  Team</p>
      <div className="responsive-container-block">
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                class="team-img"
              />
            </div>
            <p class="text-blk name">Maxwell Doe</p>
            <p class="text-blk position">Instructor</p>
          </div>
        </div>
      </div>
      <NavLink to="/members">
        <button className="teamsec_btn">Meet Entire team</button>
      </NavLink>
    </div>
  );
}

export default TeamSec;
