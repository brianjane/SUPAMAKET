import React, { createContext, useContext, useState, useEffect } from 'react';

// Initial state shape
const initialState = {
    activeScreen: 'home', // 'home' | 'chat' | 'create_store'
    currentStore: null,
    userRole: 'seller', // 'seller' | 'buyer'
    agentStatus: 'active', // 'active' | 'paused' | 'error'
};

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    // Core State
    const [activeScreen, setActiveScreen] = useState(initialState.activeScreen);
    const [currentStore, setCurrentStore] = useState(initialState.currentStore);
    const [userRole, setUserRole] = useState(initialState.userRole);
    const [agentStatus, setAgentStatus] = useState(initialState.agentStatus);

    // Persistence: Load store from local storage on mount
    useEffect(() => {
        const savedStore = localStorage.getItem('supamaket_store_v1');
        if (savedStore) {
            try {
                const parsed = JSON.parse(savedStore);
                setCurrentStore(parsed);
                // Rule: If store exists, stay on home (display "Open Store" there)
                // We do NOT auto-navigate to chat on reload unless explicitly saved as active session.
                // For safety/v1 rules: Default to Home.
                setActiveScreen('home');
            } catch (e) {
                console.error('Failed to load store data', e);
            }
        }
    }, []);

    // Actions
    const createStore = (storeData) => {
        const newStore = { ...storeData, id: Date.now().toString() };
        setCurrentStore(newStore);
        localStorage.setItem('supamaket_store_v1', JSON.stringify(newStore));

        // Rule: On store creation → activeScreen = "chat"
        setActiveScreen('chat');
    };

    const navigateTo = (screen) => {
        setActiveScreen(screen);
    };

    const toggleAgent = () => {
        setAgentStatus(prev => prev === 'active' ? 'paused' : 'active');
    };

    const switchRole = (role) => {
        setUserRole(role);
    };

    const value = {
        state: {
            activeScreen,
            currentStore,
            userRole,
            agentStatus
        },
        actions: {
            createStore,
            navigateTo,
            toggleAgent,
            switchRole,
            setAgentStatus
        }
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// Custom Hook
export const useAppState = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppState must be used within an AppProvider');
    }
    return context;
};
