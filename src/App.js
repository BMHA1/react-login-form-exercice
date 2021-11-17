import "./App.css";
import Header from "./components/shared/Header/Header";
import HomePage from "./components/containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/containers/LoginPage/LoginPage"

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
