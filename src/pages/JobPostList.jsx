import React, { useState, useEffect } from "react";
import { Icon, Menu, Table, Divider, Header,Label } from "semantic-ui-react";
import JobPostService from "../services/jobPostService";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function JobPostList() {
  const [jobPosts, setJobPosts] = useState([]);
  
  useEffect(() => {
    let jobPostService = new JobPostService();
    jobPostService
      .getJobPosts()
      .then((result) => setJobPosts(result.data.data));
  }, []);

  return (
    <div>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="list" />
          Aktif İş İlanları
        </Header>
        <Label size="large" color="green">Tarihe Göre Sırala:</Label>
        <Link to={`/jobpostsasc/`}>Önce Eski |</Link>
        <Link to={`/jobpostsasc/`}> Önce Yeni</Link>
      </Divider>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPosts.map((jobPost) => (
            <Table.Row key={jobPost.id}>
              <Table.Cell>{jobPost.position.positionName}</Table.Cell>
              <Table.Cell>{jobPost.jobDescription}</Table.Cell>
              <Table.Cell>{jobPost.openPositionQuantity}</Table.Cell>
              <Table.Cell>{format(new Date(jobPost.applicationDeadline.replace("T", " ")),"dd.MM.yyyy")}</Table.Cell>
              <Table.Cell>{format(new Date(jobPost.jobPostDate.replace("T", " ")),"dd.MM.yyyy")}</Table.Cell>
              <Table.Cell>{jobPost.employer.companyName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
