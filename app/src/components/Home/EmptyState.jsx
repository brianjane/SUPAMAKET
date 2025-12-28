import React from 'react';

const EmptyState = ({ onCreateStore }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '40px 24px',
            textAlign: 'center',
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)'
        }}>
            {/* Visual Icon */}
            <div style={{
                width: '120px',
                height: '120px',
                backgroundColor: 'rgba(var(--color-primary-rgb, 234, 88, 12), 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px'
            }}>
                <span style={{ fontSize: '48px' }}>🏪</span>
            </div>

            {/* Title */}
            <h1 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                marginBottom: '12px',
                color: 'var(--color-text)'
            }}>
                Welcome to Supamaket
            </h1>

            {/* Subtitle */}
            <p style={{
                fontSize: '16px',
                color: 'var(--color-text-light)',
                marginBottom: '48px',
                lineHeight: '1.5',
                maxWidth: '280px'
            }}>
                Start selling in minutes with your own AI-powered shop agent.
            </p>

            {/* CTA Button */}
            <button
                onClick={onCreateStore}
                style={{
                    width: '100%',
                    maxWidth: '320px',
                    padding: '18px',
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-full, 9999px)',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'transform 0.1s ease'
                }}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                Create My Store
            </button>
        </div>
    );
};

export default EmptyState;
