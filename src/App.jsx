import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Navbar from "./Navbar";
import UserDetail from "./pages/UserDetail";
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/users/:id" element={<UserDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App