import React from "react";
import MsgContainer from "../shared/MsgContainer";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <MsgContainer>
      <h2>Welcome to the online store</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error animi
        quibusdam voluptate molestiae. Magni sunt recusandae explicabo fuga
        consectetur rerum voluptatibus vitae! Doloremque dolore at eveniet
        facere quis illum officia?
      </p>
      <Link to="/shop">
        <Button>Discover our catalog</Button>
      </Link>
    </MsgContainer>
  );
}

export default HomePage;
