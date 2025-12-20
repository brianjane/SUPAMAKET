import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import ChatHeader from './ChatHeader';
import BottomInputBar from './BottomInputBar';
import ChatProductCard from '../Commerce/ChatProductCard';
import Drawer from '../UI/Drawer';
import Toast from '../UI/Toast';
import BottomSheet from '../UI/BottomSheet';
import AgentControl from '../Store/AgentControl';
import ManageStoreDrawer from '../Store/ManageStoreDrawer';
import ProductManagementDrawer from '../Store/ProductManagementDrawer';
import AgentStatusChip from '../Store/AgentStatusChip';
import useSalesAgent from '../../hooks/useSalesAgent';
import ChatSkeletonLoader from '../UI/ChatSkeletonLoader';

const INITIAL_MESSAGES = [
    { id: 1, text: "Welcome to Supamaket! 🌍", type: 'system', timestamp: '10:00 AM' },
    { id: 2, text: "I'm looking for fresh vegetables.", type: 'buyer', timestamp: '10:01 AM' },
    { id: 3, text: "Great! We have fresh kale, spinach, and tomatoes today. Have a look!", type: 'agent', timestamp: '10:01 AM' },
    {
        id: 4,
        type: 'product',
        content: {
            name: "Fresh Sukuma Wiki (Kale)",
            price: "KSh 50",
            image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=300"
        },
        timestamp: '10:02 AM'
    }
];

const ChatInterface = ({ onBack, chatId, isNewStore, onStoreInitialized, userRole = 'buyer' }) => {
    // userRole: 'buyer' | 'seller'
    // Buyers: Can view products, add to cart, message agent
    // Sellers: All buyer features + Manage Store, Agent Status, system summaries
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [toastMessage, setToastMessage] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [agentStatus, setAgentStatus] = useState('active'); // 'active' | 'paused' | 'error'
    const [isManageStoreOpen, setIsManageStoreOpen] = useState(false);
    const [isProductManagementOpen, setIsProductManagementOpen] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Add welcome message for new stores
    useEffect(() => {
        if (isNewStore) {
            const welcomeMessage = {
                id: Date.now(),
                text: "Your store is live. The Sales Agent is ready.",
                type: 'system',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [welcomeMessage, ...prev]);

            // Notify parent that store has been initialized
            if (onStoreInitialized) {
                onStoreInitialized();
            }
        }
    }, [isNewStore, onStoreInitialized]);

    const { respond } = useSalesAgent();

    const handleSendMessage = (text) => {
        const newMessage = {
            id: Date.now(),
            text,
            type: 'buyer',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, newMessage]);
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            setIsTyping(false);
            const response = respond(text);

            if (response.type === 'product') {
                const productMsg = {
                    id: Date.now() + 1,
                    type: 'product',
                    content: response.product,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, productMsg]);
            } else {
                const botResponse = {
                    id: Date.now() + 1,
                    text: response.message,
                    type: 'agent',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, botResponse]);
            }
        }, 1000);
    };

    const addToCart = (product) => {
        setCart(prev => [...prev, product]);
        setToastMessage(`Added ${product.name}`);
        // Optional: Open drawer automatically or just show toast
        // setIsDrawerOpen(true);
    };

    const handleResumeAgent = () => {
        // Resume agent from paused or error state
        setAgentStatus('active');

        // Add success message
        const successMsg = {
            id: Date.now(),
            text: "Sales Agent is back online.",
            type: 'system',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, successMsg]);
    };

    const handleAgentStatusChange = (newStatus) => {
        setAgentStatus(newStatus);

        // Add system message with action button for paused/error states
        if (newStatus === 'paused') {
            const pausedMsg = {
                id: Date.now(),
                text: "Sales Agent is paused. Customers won't receive responses.",
                type: 'system',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                action: {
                    label: 'Resume Agent',
                    onClick: handleResumeAgent
                }
            };
            setMessages(prev => [...prev, pausedMsg]);
        } else if (newStatus === 'error') {
            const errorMsg = {
                id: Date.now(),
                text: "Sales Agent encountered an error and stopped responding.",
                type: 'system',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                action: {
                    label: 'Resume Agent',
                    onClick: handleResumeAgent
                }
            };
            setMessages(prev => [...prev, errorMsg]);
        } else if (newStatus === 'active') {
            const activeMsg = {
                id: Date.now(),
                text: "Sales Agent is now active and responding to customers.",
                type: 'system',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, activeMsg]);
        }

        // Close settings sheet
        setIsSettingsOpen(false);
    };

    const handleManageStoreAction = (actionId) => {
        console.log('Store action:', actionId);
        switch (actionId) {
            case 'products':
                setIsManageStoreOpen(false);
                setIsProductManagementOpen(true);
                break;
            case 'agent':
                setIsManageStoreOpen(false);
                setIsSettingsOpen(true);
                break;
            case 'summary':
                // TODO: Show store summary
                break;
            case 'close':
                setIsManageStoreOpen(false);
                break;
            default:
                break;
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: 'var(--color-bg)',
            position: 'relative'
        }}>
            {/* Header */}
            <div style={{ position: 'relative' }}>
                <ChatHeader
                    storeName="Supamaket"
                    agentStatus={agentStatus}
                    onBack={onBack}
                />
                {/* Menu Icon (Seller Only) */}
                {userRole === 'seller' && (
                    <button
                        onClick={() => setIsManageStoreOpen(true)}
                        style={{
                            position: 'absolute',
                            right: '16px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            padding: '8px',
                            cursor: 'pointer',
                            color: 'var(--color-text-light)',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        aria-label="Manage Store"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Agent Status Chip (Seller Only) */}
            {userRole === 'seller' && (
                <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-bg)' }}>
                    <AgentStatusChip
                        isActive={agentStatus === 'active'}
                        onToggle={() => handleAgentStatusChange(agentStatus === 'active' ? 'paused' : 'active')}
                        onViewSummary={() => console.log('View summary')}
                    />
                </div>
            )}

            {/* Messages Area */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '20px 0',
                display: 'flex',
                flexDirection: 'column',
                scrollBehavior: 'smooth'
            }}>
                {messages.map((msg) => (
                    <React.Fragment key={msg.id}>
                        {msg.type === 'product' ? (
                            <ChatBubble variant="agent" timestamp={msg.timestamp} className="animate-slide-up">
                                <ChatProductCard
                                    name={msg.content.name}
                                    price={msg.content.price}
                                    image={msg.content.image}
                                    onAdd={() => addToCart(msg.content)}
                                />
                            </ChatBubble>
                        ) : (
                            <ChatBubble
                                variant={msg.type}
                                timestamp={msg.timestamp}
                                action={msg.action} // Pass action for system messages
                                className="animate-slide-up"
                            >
                                {msg.text}
                            </ChatBubble>
                        )}
                    </React.Fragment>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Typing Indicator */}
            {isTyping && (
                <div style={{ padding: '0 16px 20px 16px', marginTop: '-10px' }}>
                    <ChatBubble variant="agent">
                        <ChatSkeletonLoader />
                    </ChatBubble>
                </div>
            )}

            {/* Input Area */}
            <BottomInputBar
                onSend={handleSendMessage}
                onAttach={() => setToastMessage("Attachments coming soon!")}
            />

            {/* Cart Drawer */}
            <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title="Your Basket"
            >
                {cart.length === 0 ? (
                    <p style={{ color: 'var(--color-text-light)', textAlign: 'center', padding: '40px 0' }}>
                        Your basket is empty.
                    </p>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {cart.map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '12px',
                                backgroundColor: 'var(--color-surface)',
                                borderRadius: 'var(--radius-sm)'
                            }}>
                                <div>
                                    <div style={{ fontWeight: '500' }}>{item.name}</div>
                                    <div style={{ fontSize: '13px', color: 'var(--color-primary)' }}>{item.price}</div>
                                </div>
                                <button style={{ color: '#999', background: 'none', border: 'none', fontSize: '18px', padding: '4px' }}>
                                    &times;
                                </button>
                            </div>
                        ))}
                        <div style={{ borderTop: '1px solid #eee', marginTop: '12px', paddingTop: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600', fontSize: '16px' }}>
                                <span>Total</span>
                                <span>KSh {cart.reduce((sum, item) => sum + parseInt(item.price.replace('KSh ', '')), 0)}</span>
                            </div>
                            {/* No Checkout UI for v1 - Chat Only */}
                            <p style={{
                                textAlign: 'center',
                                marginTop: '20px',
                                fontSize: '13px',
                                color: 'var(--color-text-light)',
                                fontStyle: 'italic'
                            }}>
                                Chat with agent to finalize order.
                            </p>
                        </div>
                    </div>
                )}
            </Drawer>

            {/* Product Details Drawer */}
            <Drawer
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                title="Product Details"
            >
                {selectedProduct && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* Large Image */}
                        <div style={{
                            width: '100%',
                            height: '200px',
                            backgroundColor: '#f0f0f0',
                            borderRadius: 'var(--radius-md)',
                            backgroundImage: selectedProduct.image ? `url(${selectedProduct.image})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} />

                        {/* Info */}
                        <div>
                            <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '8px' }}>{selectedProduct.name}</h2>
                            <span style={{ fontSize: '18px', color: 'var(--color-primary)', fontWeight: '700' }}>{selectedProduct.price}</span>
                        </div>

                        {/* Description (Simulated) */}
                        <p style={{ color: 'var(--color-text-light)', lineHeight: '1.5' }}>
                            Fresh organic produce sourced directly from local farmers. High quality and verified for freshness.
                            Perfect for your daily meals.
                        </p>

                        {/* Add Action */}
                        <button
                            onClick={() => {
                                addToCart(selectedProduct);
                                setSelectedProduct(null);
                            }}
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: 'var(--color-primary)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 'var(--radius-full)',
                                marginTop: '16px',
                                fontSize: '16px',
                                fontWeight: '600',
                                boxShadow: 'var(--shadow-md)'
                            }}
                        >
                            Add to Basket
                        </button>
                    </div>
                )}
            </Drawer>



            {/* Manage Store Drawer */}
            <ManageStoreDrawer
                isOpen={isManageStoreOpen}
                onClose={() => setIsManageStoreOpen(false)}
                storeName="Supamaket"
                storeId="store-1"
                isActive={agentStatus === 'active'}
                onActionSelect={handleManageStoreAction}
            />

            {/* Product Management Drawer */}
            <ProductManagementDrawer
                isOpen={isProductManagementOpen}
                onClose={() => setIsProductManagementOpen(false)}
            />


            {/* Settings Bottom Sheet */}
            <BottomSheet
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                title="Agent Settings"
            >
                <AgentControl
                    isActive={agentStatus === 'active'}
                    onToggle={() => handleAgentStatusChange(agentStatus === 'active' ? 'paused' : 'active')}
                />
            </BottomSheet>

            {/* Toast Notification */}
            <Toast message={toastMessage} onDismiss={() => setToastMessage(null)} />
        </div>
    );
};

export default ChatInterface;
