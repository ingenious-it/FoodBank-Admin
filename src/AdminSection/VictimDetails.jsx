// import React from 'react';
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
// import axios from 'axios';


import React, { useState, useEffect } from "react";
import  {useNavigate} from "react-router-dom";



const VictimDetails = () => {
  const [victims, setVictims] = useState([]);
  // const [acceptedVictims, setAcceptedVictims] = useState([]);
  // const history = useNavigate();


  useEffect(() => {
    fetch("http://localhost:8080/Victim/viewVictimDetails")
      .then((response) => response.json())
      .then((jsondata) => setVictims(jsondata));
  }, []);

  return (
    <React.Fragment>
      <div>
        <div class="dropdown d-flex justify-content-end">
          <button
            class="btn btn-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="d-flex justify-content-start  mb-3 mt-3">
        <div>
          <Button1
            text="View Accepted List"
            textColor="dark"
            page="/AcceptedVictimsDetails"
          />
        </div>
        <div className="ms-2">
          <Button1
            text="View Rejected List"
            textColor="dark"
            page="/RejectedVictimsDetails"
          />
        </div>
      </div>

      <br />

      {victims.map((victim) => (
        console.log(victim.firstName),
        <div key={victim.nic}>
          <div class="card bg-light text-dark">
            <div class="card-body">
              <h4>Data Supplier: D.K Perera</h4>
              <br />

              <p>
                Victim NIC: {victim.nic}
                <br />
                Victim Name: {victim.firstName} {victim.lastName}
                <br />
                Contact: {victim.phoneNumber}
                <br />
                Address:{victim.no} {victim.street} {victim.city}{" "}
                {victims.Description}
              </p>

              <div class="btn d-flex justify-content-end">
                <div className="ms-2">
                  <Button2
                    text="Accept"
                    textColor="dark"
                    page="/AcceptedVictimsDetails"
                  />
                </div>

                {/* <Button2
                  text="Accept"
                  textColor="dark"
                  onClick={() => {
                    setAcceptedVictims(acceptedVictims.concat(victims));
                    setVictims(victims.filter((v) => v.nic !== victims.nic));
                    axios.put('/Victim' + victims, {isverified: true})
                      .then(response => {
                        // handle the response from the server
                      })
                      .catch(error => {
                        // handle any errors that occur
                      });
                    history.push("/AcceptedVictimsDetails");
                  }}
                  
                />  */}

                <div className="ms-2">
                  {" "}
                  <Button3
                    text="Decline"
                    textColor="dark"
                    page="/RejectedVictimsDetails"
                  />
                </div>
              </div>
            </div>
          </div>

          <br />
        </div>
      ))}
    </React.Fragment>
  );
};

export default VictimDetails;