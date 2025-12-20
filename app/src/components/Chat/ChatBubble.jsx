import React from 'react';

const ChatBubble = ({ variant = 'agent', message, timestamp, avatar = null, action = null, className = '', children }) => {
    // Logic from requirements:
    // - Rounded corners
    // - Max width 70%
    // - Buyer (right), Agent (left), System (center)
    // - Optional Avatar for Agent

    const isBuyer = variant === 'buyer';
    const isSystem = variant === 'system';
    const isAgent = variant === 'agent';

    // Base style mimicking "rounded-2xl max-w-[70%] p-3 text-sm"
    const baseStyle = {
        maxWidth: '70%',
        padding: '12px 16px',
        borderRadius: '18px', // Slightly rounder (friendly)
        fontSize: '15px', // text-sm/base
        lineHeight: '1.4',
        position: 'relative',
        wordWrap: 'break-word',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)', // shadow-sm
    };

    // Specific styles based on sender
    const typeStyles = {
        buyer: {
            backgroundColor: 'var(--color-primary)', // bg-terracotta-500
            color: '#ffffff', // text-white
            borderBottomRightRadius: '4px', // rounded-br-sm
        },
        agent: {
            backgroundColor: 'var(--color-surface)', // bg-warm-sand-100
            color: 'var(--color-text)', // text-gray-900
            borderBottomLeftRadius: '4px', // rounded-bl-sm
            border: '1px solid rgba(0,0,0,0.05)'
        },
        system: {
            backgroundColor: 'transparent',
            color: 'var(--color-text-light)', // text-gray-500
            fontSize: '12px', // text-xs
            textAlign: 'center',
            boxShadow: 'none',
            padding: '4px 8px',
            maxWidth: '90%'
        }
    };

    const bubbleStyle = isSystem
        ? { ...baseStyle, ...typeStyles.system }
        : { ...baseStyle, ...typeStyles[variant] };

    // Mobile layout container
    return (
        <div className={className} style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginBottom: '12px', // mb-3
            alignItems: isBuyer ? 'flex-end' : (isSystem ? 'center' : 'flex-start'),
            padding: '0'
        }}>
            <div style={{
                display: 'flex',
                gap: '8px',
                maxWidth: isSystem ? '100%' : '75%', // Allow slightly more for container including avatar
                alignItems: 'flex-end',
                flexDirection: isBuyer ? 'row-reverse' : 'row'
            }}>
                {/* Agent Avatar (Only for agent and if provided) */}
                {isAgent && avatar && (
                    <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#e0e0e0',
                        backgroundImage: `url(${avatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        flexShrink: 0,
                        marginBottom: '2px' // Align with bottom of bubble
                    }} />
                )}

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={bubbleStyle} className="chat-bubble">
                        {message || children}

                        {/* Action Button (for system messages) */}
                        {isSystem && action && (
                            <button
                                onClick={action.onClick}
                                style={{
                                    marginTop: '12px',
                                    padding: '10px 20px',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-sm)',
                                    transition: 'transform 0.1s'
                                }}
                                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                {action.label}
                            </button>
                        )}
                    </div>

                    {/* Timestamp */}
                    {timestamp && !isSystem && (
                        <span style={{
                            fontSize: '11px', // text-xs
                            color: '#999', // text-gray-400
                            marginTop: '2px', // mt-0.5
                            alignSelf: isBuyer ? 'flex-end' : 'flex-start',
                            marginLeft: isAgent ? '2px' : 0,
                            marginRight: isBuyer ? '2px' : 0
                        }}>
                            {timestamp}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatBubble;
