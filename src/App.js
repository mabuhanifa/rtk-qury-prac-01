import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEdit from "./pages/addEdit/AddEdit";
import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addContact" element={<AddEdit />} />
        <Route path="/editContact/:id" element={<AddEdit />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
