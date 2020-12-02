import React, { Component } from "react";

class Countries extends Component {
  render() {
    const { countries } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-1 ml-1">
              <tr>
                <td className="col-md-2 cntry" data-aos="zoom-in-up">
                  {countries.Country}
                </td>
                <td className="col-md-2 newconfirmed" data-aos="zoom-in-up">
                  {countries.NewConfirmed}
                </td>
                <td className="col-md-2 ndeaths" data-aos="zoom-in-up">
                  {countries.NewDeaths}
                </td>
                <td className="col-md-2 nrecovered" data-aos="zoom-in-up">
                  {countries.NewRecovered}
                </td>
                <td className="col-md-2 newtconfirmed" data-aos="zoom-in-up">
                  {countries.TotalConfirmed}
                </td>
                <td className="col-md-2 newtdeaths" data-aos="zoom-in-up">
                  {countries.TotalDeaths}
                </td>
                <td className="col-md-2 newtrecovered" data-aos="zoom-in-up">
                  {countries.TotalRecovered}
                </td>
              </tr>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Countries;
