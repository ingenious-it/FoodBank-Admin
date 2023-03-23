import React from "react";
import Button1 from "./Button1";
import { Dropdown } from "react-bootstrap";

const AcceptedVictimsDetails = () => {
  return (
    <React.Fragment>
      <div>
        <div class="dropdown d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action/1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#action/2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#action/3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div class="d-flex justify-content-start  mb-3 ">
          <Button1
            text="View Rejected List"
            textColor="dark"
            page="/RejectedVictimsDetails"
          />
        </div>

        <h2>Accepted Victims Details</h2>
        <br />

        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">NIC</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Location</th>
                <th scope="col">Package Type</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>204059X</td>
                <td>Kamal Perera</td>
                <td>0769442613</td>
                <td>Galle</td>
                <td>
                  <select name="Package Type">
                    <option>Choose a Type</option>
                    <option>Type A</option>
                    <option>Type B</option>
                    <option>Type C</option>
                  </select>
                  {/* <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">Package Type</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#action/1">Type A</Dropdown.Item>
                                    <Dropdown.Item href="#action/2">Type B</Dropdown.Item>
                                    <Dropdown.Item href="#action/3">Type C</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown> */}
                </td>
              </tr>

              <tr>
                <td>204215A</td>
                <td>Kamal Perera</td>
                <td>0769442613</td>
                <td>Galle</td>
                <td>
                  <select name="Package Type">
                    <option>Choose a Type</option>
                    <option>Type A</option>
                    <option>Type B</option>
                    <option>Type C</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>204200A</td>
                <td>Kamal Perera</td>
                <td>0769442613</td>
                <td>Galle</td>
                <td>
                  <select name="Package Type">
                    <option>Choose a Type</option>
                    <option>Type A</option>
                    <option>Type B</option>
                    <option>Type C</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>204145H</td>
                <td>Kamal Perera</td>
                <td>0769442613</td>
                <td>Galle</td>
                <td>
                  <select name="Package Type">
                    <option>Choose a Type</option>
                    <option>Type A</option>
                    <option>Type B</option>
                    <option>Type C</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>204216X</td>
                <td>Kamal Perera</td>
                <td>0769442613</td>
                <td>Galle</td>
                <td>
                  <select name="Package Type">
                    <option>Choose a Type</option>
                    <option>Type A</option>
                    <option>Type B</option>
                    <option>Type C</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AcceptedVictimsDetails;

// import React from "react";

// const AcceptedVictimsDetails = ({ acceptedVictims }) => {
//   return (
//     <React.Fragment>
//       <h1>Accepted Victims Details</h1>
//       {acceptedVictims.map((victim) => (
//         <div key={victim.Nic}>
//           <h3>
//             {victim.FirstName} {victim.LastName}
//           </h3>
//           <p>
//             Victim NIC: {victim.Nic}
//             <br />
//             Contact: {victim.PhoneNumber}
//             <br />
//             Address:{victim.No} {victim.Street} {victim.City}{" "}
//             {victim.Description}
//           </p>
//         </div>
//       ))}
//     </React.Fragment>
//   );
// };

// export default AcceptedVictimsDetails;
