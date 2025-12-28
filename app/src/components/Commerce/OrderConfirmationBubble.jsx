import React from 'react';

const OrderConfirmationBubble = ({ orderId, onDismiss, onTrack }) => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: '16px 0',
            animation: 'fadeIn 0.3s ease-out'
        }}>
            <div style={{
                backgroundColor: 'var(--color-surface, #ffffff)',
                border: '1px solid rgba(34, 197, 94, 0.3)', // Green border
                borderRadius: '16px',
                padding: '16px 20px',
                maxWidth: '85%',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(34, 197, 94, 0.1)'
            }}>
                <div style={{
                    fontSize: '24px',
                    marginBottom: '8px',
                    animation: 'bounce 1s infinite'
                }}>
                    🎉
                </div>

                <h3 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'var(--color-success, #166534)',
                    margin: '0 0 6px 0'
                }}>
                    Order Received!
                </h3>

                <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text, #374151)',
                    margin: '0 0 16px 0',
                    lineHeight: '1.4'
                }}>
                    I'm updating your ticket right now.
                    {orderId && (
                        <span style={{
                            display: 'block',
                            fontSize: '12px',
                            color: 'var(--color-text-light, #6b7280)',
                            marginTop: '4px',
                            fontFamily: 'monospace'
                        }}>
                            #{orderId}
                        </span>
                    )}
                </p>

                <div style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center'
                }}>
                    <button
                        onClick={onDismiss}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'transparent',
                            color: 'var(--color-text-light, #6b7280)',
                            border: '1px solid #e5e7eb',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Okay
                    </button>
                    <button
                        onClick={onTrack}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--color-success, #22c55e)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 2px 4px rgba(34, 197, 94, 0.2)'
                        }}
                    >
                        Track Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationBubble;
