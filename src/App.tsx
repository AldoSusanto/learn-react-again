// import Message from "./Message";
import { useState } from "react";
// import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["Jakarta", "Bali", "Bandung", "IKN"];

  // let handleClick = (item : string) => {
  //   console.log("City: " + item + " is clicked");
  // }

  let [isAlert, setIsAlert] = useState(false);

  const changeIsAlert = () => {
    console.log("isAlert " + isAlert);
    if (isAlert) {
      setIsAlert(false);
    } else {
      setIsAlert(true);
    }
  };

  // const showAlert = () => {
  //   return (

  //   );
  //   // return;
  // };

  // const getMsg = () => {
  //   return <p>List is Empty</p>;
  // };

  return (
    <>
      {/* <ListGroup
        items={items}
        heading={"List of Cities"}
        onSelectedItem={handleClick}
      /> */}
      {/* <Alert msg={"Aloha loha"}>
        <h1>Hello World</h1>{" "}
      </Alert>
      <Alert msg={"Aloha loha"}>
        <h1>Hello World Again</h1>{" "}
      </Alert> */}
      {isAlert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={changeIsAlert}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <Button
        label={"Show alert !"}
        onButtonClick={changeIsAlert}
        color="primary"
      ></Button>
    </>
  );
}

export default App;
