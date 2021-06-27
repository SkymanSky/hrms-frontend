import React, { useEffect,useState } from "react";
import EmployerService from "../services/employerService";
import { Menu, Header,Segment, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Employer() {
  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
        <Divider horizontal></Divider>
      <Segment clearing>
        <Header as="h3" floated="left" color="grey">
          Firmalar
        </Header>
      </Segment>
      <Menu pointing vertical>
        {employers.map((employer) => (
          <Menu.Item >
            <Link to={`/jobPosts/${employer.id}`}>{employer.companyName}</Link>
            </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
