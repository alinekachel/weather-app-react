import "./styles.css";
import Header from "./Header";
import Search from "./Search";
import Forecast from "./Forecast";
import Credits from "./Credits";

export default function App() {
  return (
    <div className="container whole-app">
      <Header />
      <Search />
      <Forecast />
      <Credits />

      <script src="./script.js"></script>
    </div>
  );
}
