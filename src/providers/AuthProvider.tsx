import { User } from '@/data/models';
import { ReactNode, createContext, useContext, useState } from 'react';

interface AuthProviderProps {
    children: ReactNode,
}

interface AuthContextType {
    user?: User;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('AuthContext must be used within a AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // State to track whether the mobile menu is open or closed
    const [user, setUser] = useState<User | undefined>(undefined);

    // Create the context value object
    const contextValue: AuthContextType = {
        user,
        setUser,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;