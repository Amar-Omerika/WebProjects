import logo from "./logo.svg";
import "./App.css";
import { Login, ImageSlides } from "./components";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <Login />
      <ImageSlides />
    </div>
  );
}

export default App;
