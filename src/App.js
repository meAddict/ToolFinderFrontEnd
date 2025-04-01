import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeSection from "./pages/HomeSection";
import SignUpSection from "./pages/SignUpSection";
import SignInSection from "./pages/SignInSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

function App() {

  return (
    <Router>
      <div className="flex flex-row-2 justify-between py-2 bg-red-300">
        <div>
          <Link className="mx-3" to="/">Tool Finder</Link>
        </div>
        <div className="flex flex-row-2 justify-between">
            <Link className="mx-3" to="/signUp"><FontAwesomeIcon icon={ faDoorClosed } /> Sign Up</Link>
            <Link className="mx-3" to="/signIn"><FontAwesomeIcon icon={ faDoorOpen } /> Sign In</Link>
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
