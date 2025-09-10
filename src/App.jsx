import "./App.css";
import Footer from "./page/footer/footer.jsx";
import Headers from "./page/header/header.jsx";
import Home from "./page/home/home.jsx";
import SignIn from "./page/signin/sigin.jsx";
import { Routes, Route } from "react-router-dom";
import User from "./page/user/user.jsx";
import AccountInfo from "./page/AccountInfo/AccountInfo.jsx";

function App() {
  return (
    <div className="app">
      <Headers />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sign-in" element={<SignIn />} />

          <Route path="/user/:token" element={<User />} />

          <Route path="/account/:id" element={<AccountInfo />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
