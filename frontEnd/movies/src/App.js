import logo from "./logo.svg";
import { NavbarComponent } from "./Components/navbar/navbarComponent";
import { Movies } from "./Components/HomeComponent/HomeComponent";
import "./App.css";
import { InitialComponent } from "./Components/InitialScreen/initialComponent";

function App() {
  return (
    <div id="content-container">
      <InitialComponent />
    </div>
  );
}

export default App;
