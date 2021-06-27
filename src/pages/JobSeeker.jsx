import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import JobSeekerListService from "../services/jobSeekerListService";
import { Segment, Header } from "semantic-ui-react";

export default function JobSeeker() {
  let { jobSeekerId } = useParams();
  const [jobSeeker, setjobSeeker] = useState({});

  useEffect(() => {
    let jobSeekerListService = new JobSeekerListService();
    jobSeekerListService
      .getJobSeekerById(jobSeekerId)
      .then((result) => setjobSeeker(result.data.data));
  }, []);
  return (
    <div>
      <Segment>
        <Header as="h3">Kişisel Bilgiler</Header>
        <p>{"Adı:" + jobSeeker.firstName}</p>
        <p>{"Soyadı:" + jobSeeker.lastName}</p>
        <p>{"Tcno: " + jobSeeker.tcno}</p>
        <p>{"Doğum Tarihi: " + jobSeeker.birthDate}</p>
        <p>{"Email:" + jobSeeker.email}</p>
      </Segment>
    </div>
  );
}
