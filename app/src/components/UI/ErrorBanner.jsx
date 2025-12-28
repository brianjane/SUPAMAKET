import React, { useState, useEffect } from 'react';

const ErrorBanner = ({ message, onRetry }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 90, // Below header (usually 100), or above depending on preference
            backgroundColor: '#fee2e2', // red-100
            borderBottom: '1px solid #fecaca', // red-200
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            animation: 'slideDown 0.3s ease-out',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                <span style={{ fontSize: '16px' }}>⚠️</span>
                <span style={{
                    fontSize: '13px',
                    color: '#991b1b', // red-800
                    fontWeight: '500',
                    lineHeight: '1.3'
                }}>
                    {message || "Connection lost"}
                </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {onRetry && (
                    <button
                        onClick={onRetry}
                        style={{
                            padding: '4px 10px',
                            backgroundColor: '#ffffff',
                            border: '1px solid #fecaca',
                            borderRadius: '4px',
                            color: '#b91c1c',
                            fontSize: '12px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Retry
                    </button>
                )}
                <button
                    onClick={() => setIsVisible(false)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#991b1b',
                        fontSize: '18px',
                        cursor: 'pointer',
                        padding: '4px'
                    }}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ErrorBanner;
