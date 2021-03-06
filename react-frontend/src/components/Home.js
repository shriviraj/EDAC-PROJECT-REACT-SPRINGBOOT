import { useState } from "react";
import { Jumbotron, Container } from "reactstrap";
import LoginSuccess from "./LoginSuccess";

import Login from "./Login";

const Home = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whoIsThis, setwhoIsThis] = useState("user");
  function submitForm(val, who) {
    setIsSubmitted(val);
    setwhoIsThis(who);
  }

  return (
    <div className="home-container">
      <Jumbotron className="home-Educate">
        <h1 className="home-content">EducateNow</h1>

        <Container>
          {!isSubmitted ? (
            <Login submitForm={submitForm} />
          ) : (
            <LoginSuccess whoIsThis={whoIsThis} />
          )}
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Home;
