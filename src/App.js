import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;