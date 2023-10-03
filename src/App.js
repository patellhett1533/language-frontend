import "./App.css";
import Nav from "./components/nav/Nav";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/quiz/Result";
import Test from "./pages/test/Test";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgot" element={<Forgot />} />
          <Route exact path="/" element={[<Nav />, <Home />]} />
          <Route exact path="/test" element={[<Nav />, <Test />]} />
          <Route exact path="/Profile" element={[<Nav />, <Profile />]} />
          <Route exact path="/quize/:id" element={[<Nav />, <Quiz />]} />
          <Route exact path="/result/:id" element={[<Nav />, <Result />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
