import React, { useState, useEffect } from 'react';
import ChatInterface from './components/Chat/ChatInterface';
import Home from './components/Home/Home';
import CreateStore from './components/Store/CreateStore';
import ProductCatalog from './components/Store/ProductCatalog';
import AgentDeployment from './components/Store/AgentDeployment';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'chat' | 'createStore' | 'productCatalog' | 'agentDeployment'
  const [activeChatId, setActiveChatId] = useState(null);
  const [storeData, setStoreData] = useState(() => {
    // Restore store data from localStorage if available
    const saved = localStorage.getItem('storeData');
    return saved ? JSON.parse(saved) : null;
  });
  const [isNewStore, setIsNewStore] = useState(false);
  const [agentActive, setAgentActive] = useState(true);
  const [hasActiveSession, setHasActiveSession] = useState(() => {
    // Restore session state from localStorage
    return localStorage.getItem('activeSession') === 'true';
  });
  const [userRole, setUserRole] = useState('seller'); // 'buyer' | 'seller' - Default to seller for store owners

  // Smart startup routing - runs once on app mount
  useEffect(() => {
    if (hasActiveSession && storeData) {
      // Active session exists → Navigate directly to Store Chat
      const chatId = localStorage.getItem('activeChatId') || `store-${storeData.storeName}`;
      setActiveChatId(chatId);
      setCurrentScreen('chat');
    } else if (storeData) {
      // Store exists but no active session → Show Home with "Open Store"
      setCurrentScreen('home');
    } else {
      // No store → Show Home with "Create Store"
      setCurrentScreen('home');
    }
  }, []); // Run once on mount

  const navigateToChat = (screen, chatId = null) => {
    setActiveChatId(chatId);
    setCurrentScreen('chat');
    // Set active session
    setHasActiveSession(true);
    localStorage.setItem('activeSession', 'true');
    if (chatId) {
      localStorage.setItem('activeChatId', chatId);
    }
  };

  const navigateToHome = () => {
    setActiveChatId(null);
    setIsNewStore(false);
    setCurrentScreen('home');
    // Clear active session (but keep store data)
    setHasActiveSession(false);
    localStorage.removeItem('activeSession');
    localStorage.removeItem('activeChatId');
  };

  const navigateToCreateStore = () => {
    setCurrentScreen('createStore');
  };

  const handleOpenStore = () => {
    if (storeData) {
      navigateToChat('chat', `store-${storeData.storeName}`);
    }
  };

  const handleStoreCreated = (data) => {
    console.log('Store created:', data);
    setStoreData(data);
    setIsNewStore(true);
    // Persist store data
    localStorage.setItem('storeData', JSON.stringify(data));
    // Navigate directly to Store Chat
    navigateToChat('chat', `store-${Date.now()}`);
  };

  const handleProductsAdded = (products) => {
    console.log('Products added:', products);
    setCurrentScreen('agentDeployment');
  };

  const handleSkipProducts = () => {
    console.log('Skipped product catalog');
    setCurrentScreen('agentDeployment');
  };

  const handleAgentDeployed = (agentData) => {
    console.log('Agent deployment:', agentData);
    // Navigate directly to Store Chat after setup
    navigateToChat('chat', 'store-1'); // Use store ID from storeData
  };

  return (
    <div className="mobile-container">
      {currentScreen === 'home' ? (
        <Home
          storeData={storeData}
          agentActive={agentActive}
          onOpenStore={handleOpenStore}
          onCreateStore={navigateToCreateStore}
        />
      ) : currentScreen === 'createStore' ? (
        <CreateStore onBack={navigateToHome} onContinue={handleStoreCreated} />
      ) : currentScreen === 'productCatalog' ? (
        <ProductCatalog onBack={() => setCurrentScreen('createStore')} onContinue={handleProductsAdded} onSkip={handleSkipProducts} />
      ) : currentScreen === 'agentDeployment' ? (
        <AgentDeployment onComplete={handleAgentDeployed} />
      ) : (
        <ChatInterface
          onBack={navigateToHome}
          chatId={activeChatId}
          isNewStore={isNewStore}
          onStoreInitialized={() => setIsNewStore(false)}
          userRole={userRole}
        />
      )}
    </div>
  );
}

export default App;
