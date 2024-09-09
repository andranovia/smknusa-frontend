"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface ActiveToastContextType {
    isActiveUnavailableToast: boolean;
    handleActiveUnavailableToast: () => void;
}

const ActiveToastContext = createContext<ActiveToastContextType | undefined>(
    undefined
);

export const useActiveToast = (): ActiveToastContextType => {
    const context = useContext(ActiveToastContext);
    if (!context) {
        throw new Error("useActiveToast must be used within an ActiveToastProvider");
    }
    return context;
};

export const ActiveToastProvider = ({ children }: { children: ReactNode }) => {
    const [isActiveUnavailableToast, setIActiveUnavailableToast] = useState(false);

    const handleActiveUnavailableToast = () => {
        setIActiveUnavailableToast(true);
        setTimeout(() => {
            setIActiveUnavailableToast(false);
        }, 3000);
    };

    return (
        <ActiveToastContext.Provider
            value={{ isActiveUnavailableToast, handleActiveUnavailableToast }}
        >
            {children}
        </ActiveToastContext.Provider>
    );
};
