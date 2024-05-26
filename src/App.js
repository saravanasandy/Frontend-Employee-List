import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./Components/Dashboard";
import CreateStudent from "./Components/CreateStudent";
import EditStudent from "./Components/EditStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="create-student" element={<CreateStudent />} />
          <Route path="editStudent/:id" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
