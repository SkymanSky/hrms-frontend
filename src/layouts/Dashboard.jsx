import React from "react";
import Navi from './Navi';
import Positions from './Positions';
import JobPostList from '../pages/JobPostList';
import { Button, Icon, Label } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Navi/>
      <Positions/>
      <JobPostList/>
    </div>
  );
}
