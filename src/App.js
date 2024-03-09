import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
function App() {
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
      <Alert
        type="info"
        title="Success!"
        message="Your operation was successful."
        position="top-right"
      />
      {/* <Button title="Home" className={"bg-slate-900"}></Button> */}
    </div>
  );
}

export default App;
