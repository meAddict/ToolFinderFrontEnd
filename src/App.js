import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeSection from "./pages/HomeSection";
import SignUpSection from "./pages/SignUpSection";
import SignInSection from "./pages/SignInSection";

function App() {

  return (
    <Router>
      <div className="flex flex-row-2 justify-between py-2 bg-red-300">
        <div>
          <Link to="/">Tool Finder</Link>
        </div>
        <div className="flex flex-row-3 justify-between">
            <Link to="/signUp">Sign Up</Link>
            <Link to="/signIn">Sign In</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/signUp" element={<SignUpSection />} />
        <Route path="/signIn" element={<SignInSection />} />
      </Routes>
    </Router>
  );
}

export default App;
