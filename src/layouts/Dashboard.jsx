import React from "react";
import Navi from "./Navi";
import Positions from "./Positions";
import JobPostList from "../pages/JobPostList";
import { Button, Grid, Icon, Label } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Positions />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobPostList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
