import React, { Component } from "react";
import axios from "axios";

import Info from "./Info";
import Countries from "./Countries";

class Summary extends Component {
  state = {
    countries: [],
    latestDate: null,
    global: [],
    loading: true,
    country: "",
  };

  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");
    // const res = await axios.get("https://api.covid19api.com/live/country/Portugal/status/confirmed");
    // const res = await axios.get("https://covid19.mathdro.id/api");

    console.log(res);

    this.setState({ countries: res.data.Countries });
    this.setState({ latestDate: res.data.Date });
    this.setState({ global: res.data.Global });
    this.setState({ loading: false });
  }

  handleCountryChange = async (country) => {};

  render() {
    if (this.state.loading) {
      return <h6 className="loading">Loading...</h6>;
    }
    return (
      <React.Fragment>
        <Info
          worldwide={this.state.global}
          latestdate={this.state.latestDate}
        />

        <div className="container">
          <div className="row">
            <table className="table-fixed">
              <div className="col-md-12 p-1 ml-1">
                <thead>
                  <tr>
                    <th className="col-md-2">Country</th>
                    <th className="col-md-2">New Confirmed</th>
                    <th className="col-md-2">New Deaths</th>
                    <th className="col-md-2">New Recovered</th>
                    <th className="col-md-2">Total Confirmed</th>
                    <th className="col-md-2">Total Deaths</th>
                    <th className="col-md-2">Total Recovered</th>
                  </tr>
                </thead>
              </div>
            </table>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <table className="table-fixed">
              <tbody>
                {this.state.countries.map((index) => (
                  <Countries key={index.Countries} countries={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Summary;
