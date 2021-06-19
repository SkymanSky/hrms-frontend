import React from "react";
import { Button, Container,Dropdown, Menu } from "semantic-ui-react";
import SignIn from "./SignIn";
import SignInForEmployer from "./SignInForEmployer";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <Dropdown item text="Giriş Yap">
              <Dropdown.Menu>
                <Dropdown.Item>Üye Girişi</Dropdown.Item>
                <Dropdown.Item>İş Veren Girişi</Dropdown.Item>
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
