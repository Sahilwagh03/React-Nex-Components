import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
function App() {

  const [toogleAlert, setToogleAlert] = useState(true)
  return (
    <div className="flex flex-col justify-center items-center h-screen relative bg-[#F5F5F5] gap-10">
      <h1 className="text-6xl font-bold text-center relative">
        Wellcome to the React<span className="text-[#61DAFB]">Nex</span>
        <img
          src="./ReactNexUnderline.svg"
          className="w-[280px] absolute right-0"
          alt="ReactNex Underline"
        />
      </h1>
      {
        toogleAlert &&
        <>
          < Alert
            type="info"
            title="Information"
            message="This is an information message."
            position="top-left"
          />
          <Alert
            type="success"
            title="Success!"
            message="Your operation was successful."
            position="top-right"
          />

          <Alert
            type="error"
            title="Error!"
            message="An error occurred while processing your request."
            position="bottom-left"
          />

          <Alert
            type="warning"
            title="Warning!"
            message="Please proceed with caution."
            position="bottom-right"
          />
          <Alert
            type="info"
            title="Custom Alert"
            message="This is a custom alert with a custom icon color."
            position="top-center"
            iconColor="#FFA500"
          />

          <Alert
            type="success"
            title="Success!"
            message="Your operation was successful."
            position="bottom-center"
          />
        </>
      }
      <Button title="Button" className={"bg-black-900"} onClick={() => setToogleAlert(!toogleAlert)}></Button>
    </div>
  );
}

export default App;
