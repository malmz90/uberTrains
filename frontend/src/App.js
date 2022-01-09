import "./App.css";
import TravelForm from "./components/TravelForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  document.title = "UberTrains - Boka resa"
  return (
  <div className="flex flex-col min-h-screen" >
    <Router>
      
      <Routes>
        <Route path="/" element={<TravelForm />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}


export default App;




