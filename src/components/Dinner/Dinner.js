import axios from "axios";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table"
var menuItems1;

axios
  .get(
    "https://f4132480trial-dev-horecahana-srv.cfapps.eu10.hana.ondemand.com/browse/MenuItem"
  )
  .then((res) => {
    console.log(res);
    menuItems1 = res.data.value;
    console.log(menuItems1);
  })
  .catch((err) => {
    console.log(err);
  });


class Dinner extends Component {
  render() {
    console.log(menuItems1[0]);
    
    return (
      
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Description</th>
                  </tr>

                  {menuItems1.map(function(item, index){
                      return <tr key={index}>
                                <td>
                                        {item.name}
                                </td>
                                <td>
                                    {item.description}
                                </td>
                        </tr>
                  })}
              </thead>
          </Table>
      
    );
  }
}

export default Dinner;
