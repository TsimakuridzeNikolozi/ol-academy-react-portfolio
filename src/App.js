import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Home, About, Portfolio, Contact, NotFound } from "./pages";
import { NAVIGATION_ROUTES } from "./constants/navigation.const";

function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    padding: "1em",
    backgroundColor: "#f4f4f4",
    borderBottom: "1px solid #ddd",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "1.2em",
  };

  const appStyle = {
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div className="App" style={appStyle}>
      <BrowserRouter>
        <>
          <nav>
            <ul style={navStyle}>
              <li>
                <Link to="/" style={linkStyle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={linkStyle}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" style={linkStyle}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" style={linkStyle}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path={NAVIGATION_ROUTES.home} element={<Home />} />
            <Route path={NAVIGATION_ROUTES.about} element={<About />} />
            <Route path={NAVIGATION_ROUTES.portfolio} element={<Portfolio />} />
            <Route path={NAVIGATION_ROUTES.contact} element={<Contact />} />
            <Route path={NAVIGATION_ROUTES.notFound} element={<NotFound />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}
export default App;
