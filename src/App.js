import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AdminPage from "./Pages/AdminPage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/ProductPage";
import FrontPage from "./Pages/FrontPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <FrontPage />} />
        <Route path="/admin" render={() => <AdminPage />} />
        <Route path="/contact" render={() => <ContactPage />} />
        <Route path="/productPage" render={() => <ProductPage />} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
