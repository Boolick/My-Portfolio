import { HomePage, AboutPage, ContactPage, PortfolioPage } from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

