import React from "react";
import { Button, Dropdown, Container, Menu } from "semantic-ui-react";
import SignIn from "./SignIn";
import SignInForEmployer from "./SignInForEmployer";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <Dropdown item text="Giriş Yap">
              <Dropdown.Menu>
                <Dropdown.Item><SignIn /></Dropdown.Item>
                <Dropdown.Item><SignInForEmployer /></Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Üye Ol</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
