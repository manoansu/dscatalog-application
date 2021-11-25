import { TokenData } from 'util/request';
import { createContext } from "react";

export type AuthContextData = {
    authenticated: boolean;
    tokenData?: TokenData
}

export type AuthContextType = {
    authContextData: AuthContextData;
    setAuthContextData: (authContextData: AuthContextData) => void;
};

export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        authenticated: false
    },
    setAuthContextData: () => null
});