import { useState } from "react";
import { Container } from "reactstrap";
import LoginSuccess from "./LoginSuccess";
import Navbar from "./Navbar/Navbar";
import Login from "./Login";

const Home = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whoIsThis, setWhoIsThis] = useState(" ");
  function submitForm(val, who) {
    setIsSubmitted(val);
    console.log("inside form " + val + " " + who);
    console.log(who + " from home");
    setWhoIsThis(who);
  }

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-Educate">
          <h2 className="home-content ">- Login -</h2>

          <Container>
            {!isSubmitted ? (
              <Login submitForm={submitForm} />
            ) : (
              <LoginSuccess whoIsThis={whoIsThis} />
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Home;
