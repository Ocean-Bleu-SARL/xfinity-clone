import React, { createContext, useContext, useState } from 'react';

// Define the shape of the context value
interface MobileMenuContextType {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a new context with the defined shape
const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

// Custom hook to use the MobileMenuContext
export const useMobileMenu = () => {
    const context = useContext(MobileMenuContext);
    if (!context) {
        throw new Error('useMobileMenu must be used within a MobileMenuProvider');
    }
    return context;
};

interface MobileMenuProviderProps {
    children: React.ReactNode;
}
// Create a context provider component
export const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({ children }) => {
    // State to track whether the mobile menu is open or closed
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    // Create the context value object
    const contextValue: MobileMenuContextType = {
        isMobileMenuOpen,
        setIsMobileMenuOpen,
    };

    return (
        <MobileMenuContext.Provider value={contextValue}>
            {children}
        </MobileMenuContext.Provider>
    );
};
