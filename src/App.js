import { db } from "./firebase/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hjem from "./pages/Hjem";
import Om from "./pages/Om";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hjem />}/>
        <Route path="/om"element={<Om />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
