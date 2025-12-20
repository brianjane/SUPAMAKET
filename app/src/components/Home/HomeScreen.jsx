import React, { useState } from 'react';
import Toggle from '../UI/Toggle';

const HomeScreen = ({ onChatSelect, onCreateStore }) => {
    const [isAgentActive, setIsAgentActive] = useState(true);

    const recentChats = [
        { id: 1, name: 'Fresh Veggies Market', lastMsg: 'Your order is ready!', time: '10:30 AM', avatar: '🥬' },
        { id: 2, name: 'Mama Nja Store', lastMsg: 'We have new stock of rice.', time: 'Yesterday', avatar: '🍚' },
        { id: 3, name: 'City Electronics', lastMsg: 'Thanks for buying.', time: 'Mon', avatar: '🔌' },
    ];

    return (
        <div style={{
            height: '100%',
            backgroundColor: 'var(--color-bg)',
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 16px',
        }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h1 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'var(--color-primary)',
                    margin: 0
                }}>
                    Supamaket
                </h1>
            </div>

            {/* Sales Agent Control */}
            <div style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '24px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0' }}>Sales Agent</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: isAgentActive ? 'var(--color-success)' : '#ccc'
                        }} />
                        <span style={{ fontSize: '13px', color: isAgentActive ? 'var(--color-success)' : 'var(--color-text-light)' }}>
                            {isAgentActive ? 'Active' : 'Paused'}
                        </span>
                    </div>
                </div>

                <Toggle
                    isChecked={isAgentActive}
                    onToggle={() => setIsAgentActive(!isAgentActive)}
                />
            </div>

            {/* Primary Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                <button
                    onClick={onCreateStore}
                    style={{
                        padding: '20px',
                        backgroundColor: 'var(--color-primary)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '18px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px'
                    }}>
                    <span style={{ fontSize: '24px' }}>🏪</span> Create Store
                </button>

                <button style={{
                    padding: '20px',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                }}>
                    <span style={{ fontSize: '24px' }}>🔍</span> Explore Stores
                </button>
            </div>

            {/* Recent Chats */}
            <div>
                <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--color-text-light)',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Recent Chats
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {recentChats.map(chat => (
                        <div
                            key={chat.id}
                            onClick={() => onChatSelect(chat.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '16px',
                                backgroundColor: 'var(--color-surface)',
                                borderRadius: 'var(--radius-md)',
                                cursor: 'pointer',
                                boxShadow: 'var(--shadow-sm)'
                            }}
                        >
                            {/* Avatar */}
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                marginRight: '16px',
                                flexShrink: 0
                            }}>
                                {chat.avatar}
                            </div>

                            {/* Info */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <h4 style={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: 'var(--color-text)',
                                        margin: 0
                                    }}>
                                        {chat.name}
                                    </h4>
                                    <span style={{ fontSize: '12px', color: '#999' }}>{chat.time}</span>
                                </div>
                                <p style={{
                                    margin: 0,
                                    fontSize: '14px',
                                    color: 'var(--color-text-light)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {chat.lastMsg}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
