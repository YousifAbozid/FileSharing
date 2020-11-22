import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeScreen, DownloadScreen } from "./Screens";
function App() {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/download" component={DownloadScreen} />
    </Router>
  );
}

export default App;
