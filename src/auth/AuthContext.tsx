import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
  isLogin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(sessionStorage.getItem('token') || null);
    const [isLogin, setIsLogin] = useState<boolean>(sessionStorage.getItem('token') ? true : false);

    const login = (newToken: string): void => {
        sessionStorage.setItem("token", newToken);
        setToken(newToken);
        setIsLogin(true);
    }

    const logout = (): void => {
        sessionStorage.removeItem("token");
        setToken(null);
        setIsLogin(false);
    }

    return (
        <AuthContext.Provider value={{ token, login, logout, isLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};