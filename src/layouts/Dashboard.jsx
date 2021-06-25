import React from "react";
import Positions from "./Positions";
import Employer from "../pages/Employer";
import JobPostList from "../pages/JobPostList";
import JobPostListAsc from "../pages/JobPostListAsc";
import JobPostListDesc from "../pages/JobPostListDesc";
import JobSeekerList from "../pages/JobSeekerList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";

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
          <Route exact path="/" component={JobPostList } />
          <Route exact path="/" component={JobSeekerList } /> 
          <Route exact path="/jobpostsasc" component={JobPostListAsc } />
          <Route exact path="/jobpostsdesc" component={JobPostListDesc } />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
