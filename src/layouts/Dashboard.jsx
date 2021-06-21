import React from "react";
import Positions from "./Positions";
import Employer from "../pages/Employer";
import JobPostList from "../pages/JobPostList";
import JobSeekerList from "../pages/JobSeekerList";
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} className="main">
            <Positions />
            <Employer />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobPostList />
            <JobSeekerList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
