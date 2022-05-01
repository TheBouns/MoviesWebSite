import logo from "./logo.svg";
import { NavbarComponent } from "./Components/navbar/navbarComponent";
import { Movies } from "./Components/HomeComponent/HomeComponent";
import "./App.css";
import { InitialComponent } from "./Components/InitialScreen/initialComponent";
import { RegisterComponent } from "./Components/Register/registerComponent";

function App() {
  return (
    <div id="content-container">
      <RegisterComponent />
    </div>
  );
}

export default App;
