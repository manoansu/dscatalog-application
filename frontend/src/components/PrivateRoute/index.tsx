import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "util/request";

type Props = {
    children: React.ReactNode;
    path: string;
};

// Metodo que redireciona para tela login caso o user nao estiver logado..
const PrivateRoute = ( { children, path}: Props ) => {

    return (
        <Route path={path} 
        render={({location}) => 
            isAuthenticated() ? children : <Redirect to={{
                pathname: "/admin/auth/login",
                state: { from: location }
            }} />
        }

        />
    );
};

export default PrivateRoute;