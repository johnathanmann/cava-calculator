import {
    HashRouter,
    Routes,
    Route
  } from "react-router-dom";
  import "./styles/styles.css";
  import Homepage from "./pages/Homepage";
  
  export default function App() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </HashRouter>
    );
  }
  