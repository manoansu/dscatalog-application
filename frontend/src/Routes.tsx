import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Home from "pages/Home";
import Catalog from "pages/Catalog";
import { BrowserRouter, Switch,  Route } from "react-router-dom";
import ProductDatails from "pages/ProductDetails";

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products" exact>
                <Catalog />
            </Route>
            <Route path="/products/:productId">
                <ProductDatails />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>

    </BrowserRouter>
);
export default Routes;