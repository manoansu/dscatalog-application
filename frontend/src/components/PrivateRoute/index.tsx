import { Redirect, Route } from "react-router-dom";
import { hasAnyRole, isAuthenticated, Role } from "util/request";

type Props = {
    children: React.ReactNode;
    path: string;
    roles?: Role[];
};

// Metodo que redireciona para tela login caso o user nao estiver logado..
const PrivateRoute = ( { children, path, roles=[]}: Props ) => {

    return (
        <Route path={path} 
        render={({location}) => 
            !isAuthenticated() ? (
                <Redirect to={{
                pathname: "/admin/auth/login",
                state: { from: location }
            }} />
            ) : !hasAnyRole(roles) ? (
                <Redirect to="/admin/products" />
            ): (
                children
            )}

        />
    );
};

export default PrivateRoute;