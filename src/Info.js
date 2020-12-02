import Axios from "axios";
import React, { useState } from "react";
// import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import CountrySelector from "./CountrySelector";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faVirus } from "@fortawesome/free-solid-svg-icons";

// const url = 'https://api.covid19api.com/summary'
const url = "https://covid19.mathdro.id/api";

export const cntr = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};

function Info(props) {
  let currentTime = new Date().toLocaleTimeString();

  const [currT, setCurrT] = useState(currentTime);

  const changeTime = () => {
    currentTime = new Date().toLocaleTimeString();
    setCurrT(currentTime);
  };

  setInterval(changeTime, 1000);

  const handleCountryChange = async (country) => {};

  return (
    <React.Fragment>
      <div className="container">
        <h2 className="main-caption">
          C
          <FontAwesomeIcon className="pl-2 corona-icon" icon={faVirus} />
          vid-19 Tracker
        </h2>
        <h3 className="current-time">{currentTime} </h3>
        <h4 className="current-date">
          {new Date(props.latestdate).toDateString()}
        </h4>
        <div className="row py-4">
          <div className="col-md-4 new-confirmed">
            <h2>New Confirmed</h2>
            <h3>
              <CountUp
                start={0}
                end={props.worldwide.NewConfirmed}
                duration={2.5}
                separator=","
              />
            </h3>
          </div>
          <div className="col-md-4 new-recovered">
            <h2>New Recovered</h2>
            <h3>
              <CountUp
                start={0}
                end={props.worldwide.NewRecovered}
                duration={2.5}
                separator=","
              />
            </h3>
          </div>

          <div className="col-md-4 new-deaths">
            <h2>New Deaths</h2>
            <h3>
              <CountUp
                start={0}
                end={props.worldwide.NewDeaths}
                duration={2.5}
                separator=","
              />
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 total-confirmed">
            <h2>Total Confirmed</h2>
            <h3>
              <CountUp
                start={0}
                end={props.worldwide.TotalConfirmed}
                duration={2.5}
                separator=","
              />
            </h3>
          </div>
          <div className="col-md-4 total-recovered">
            <h2>Total Recovered</h2>
            <h3>
              <CountUp
                start={0}
                end={props.worldwide.TotalRecovered}
                duration={2.5}
                separator=","
              />
            </h3>
          </div>

          <div className="col-md-4 total-deaths">
            <h2>Total Deaths</h2>
            <h3>
              <CountUp
                start={0}
                end={props.worldwide.TotalDeaths}
                duration={2.5}
                separator=","
              />
            </h3>
          </div>
        </div>
      </div>

      <CountrySelector handleCountryChange={handleCountryChange} />
    </React.Fragment>
  );
}

export default Info;
