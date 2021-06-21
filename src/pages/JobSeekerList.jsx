import React, { useState, useEffect } from "react";
import { Table, Icon,Divider,Header } from "semantic-ui-react";
import JobSeekerListService from "../services/jobSeekerListService";

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
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id}>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.birthDate}</Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
