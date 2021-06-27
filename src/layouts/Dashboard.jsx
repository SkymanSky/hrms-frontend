import React from "react";
import Positions from "./Positions";
import Employer from "../pages/Employer";
import JobPostList from "../pages/JobPostList";
import JobPostListAsc from "../pages/JobPostListAsc";
import JobPostListDesc from "../pages/JobPostListDesc";
import JobSeekerList from "../pages/JobSeekerList";
import CurriculumVitae from "../pages/CurriculumVitae";
import { Grid, GridColumn } from "semantic-ui-react";
import { Route } from "react-router";
import JobPostListByCompany from "../pages/JobPostListByCompany";
import Cv from "./Cv";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} className="main">
            <Positions />
            <Employer />
          </Grid.Column>
          <Grid.Column width={12} className="main">
            <Route exact path="/" component={JobPostList} />
            <Route exact path="/" component={JobSeekerList} />
            <Route path="/jobpostsasc" component={JobPostListAsc} />
            <Route path="/jobpostsdesc" component={JobPostListDesc} />
            <Route path="/jobposts/:userId" component={JobPostListByCompany} />
            {/* <Route path="/cv/:jobSeekerId" component={CurriculumVitae} /> */}
            <Route path="/cv/:jobSeekerId" component={Cv} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
