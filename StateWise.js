import React, { useEffect, useState } from "react";
import "./StateWise.css";

const StateWise = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  });

  return (
    <>
      {/* <h1>INDIA Covid-19 Dashboard</h1> */}
      <div className="conatainer-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span> Covid-19 Dashboard
          </h1>
          <hr/>
        </div>
        <div className="table-responsive">
          <table className="table tabel-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>StateCode</th>
              </tr>
            </thead>
            <tbody>
              {data.map((currElem,index) => {
                return (
                  <>
                    <tr key={index}>
                      <th>{currElem.state}</th>
                      <td>{currElem.confirmed}</td>
                      <td>{currElem.recovered}</td>
                      <td>{currElem.deaths}</td>
                      <td>{currElem.active}</td>
                      <td>{currElem.statecode}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWise;
