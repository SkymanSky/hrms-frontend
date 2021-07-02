import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { Table, Icon,Divider,Header } from "semantic-ui-react";
import JobSeekerListService from "../services/jobSeekerListService";
import { Link } from "react-router-dom";

export default function JobSeekerList() {
  const [jobSeekers, setjobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerListService = new JobSeekerListService();
    jobSeekerListService
      .getJobSeekers()
      .then((result) => setjobSeekers(result.data.data));
  }, []);
  return (
    <div>
      <Divider horizontal>
        
        <Header as="h4"><Icon name="user" />İş Arayanlar</Header>
      </Divider>
      <Table called>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı </Table.HeaderCell>
            <Table.HeaderCell>Soyadı </Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi </Table.HeaderCell>
            <Table.HeaderCell>Email </Table.HeaderCell>
            <Table.HeaderCell>Detaylar </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id}>
              <Table.Cell><Link to={`/cv/${jobSeeker.userId}`}>{jobSeeker.firstName}</Link></Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{format(new Date(jobSeeker.birthDate.replace("T", " ")),"dd.MM.yyyy")}</Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
              <Table.Cell><Link to={`/cv/${jobSeeker.userId}`}><u>Detaylı CV</u></Link></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
