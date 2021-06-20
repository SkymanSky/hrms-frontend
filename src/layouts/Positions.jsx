import React, { useState, useEffect } from "react";
import { Menu, Header,Segment } from "semantic-ui-react";
import PositionService from "../services/positionService";

export default function Positions() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let positionService = new PositionService();
    positionService
      .getPositions()
      .then((result) => setPositions(result.data.data));
  },[]);

  return (
    <div>
      <Segment clearing>
        <Header as="h3" floated="left" color="grey">
        Pozisyonlar
        </Header>
      </Segment>
      <Menu pointing vertical>
        {positions.map((position) => (
          <Menu.Item key={position.id} name={position.positionName} />
        ))}
      </Menu>
    </div>
  );
}
