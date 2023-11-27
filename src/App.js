import LogsPage from "./Pages/LogsPage";
import SearchPage from "./Pages/SearchPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogsPage />} /> 
          <Route exact path="/filter" element={<SearchPage />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
