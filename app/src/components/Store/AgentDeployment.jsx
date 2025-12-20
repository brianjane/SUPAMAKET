import React, { useState } from 'react';
import Toggle from '../UI/Toggle';

const AgentDeployment = ({ onComplete }) => {
    const [isActive, setIsActive] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleToggle = () => {
        const newState = !isActive;
        setIsActive(newState);

        if (newState) {
            setShowConfirmation(true);
            setTimeout(() => {
                setShowConfirmation(false);
            }, 3000);
        }
    };

    const handleContinue = () => {
        onComplete({ agentActive: isActive });
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: 'var(--color-bg)'
        }}>
            {/* Content Area */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 24px'
            }}>
                {/* Agent Icon/Visual */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? 'var(--color-success)' : '#e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    transition: 'background-color 0.3s ease',
                    fontSize: '40px'
                }}>
                    🤖
                </div>

                {/* Agent Name */}
                <h1 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    marginBottom: '8px',
                    textAlign: 'center'
                }}>
                    Sales Agent
                </h1>

                {/* Description */}
                <p style={{
                    fontSize: '15px',
                    color: 'var(--color-text-light)',
                    textAlign: 'center',
                    marginBottom: '32px',
                    maxWidth: '280px'
                }}>
                    Handles customer chats and orders automatically
                </p>

                {/* Status Indicator */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '24px'
                }}>
                    <div style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? 'var(--color-success)' : '#9ca3af',
                        transition: 'background-color 0.3s ease'
                    }} />
                    <span style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: isActive ? 'var(--color-success)' : 'var(--color-text-light)'
                    }}>
                        {isActive ? 'Active' : 'Inactive'}
                    </span>
                </div>

                {/* Toggle Switch */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 24px',
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '24px'
                }}>
                    <span style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: 'var(--color-text)',
                        flex: 1
                    }}>
                        Deploy Sales Agent
                    </span>
                    <Toggle checked={isActive} onChange={handleToggle} />
                </div>

                {/* Confirmation Message */}
                {showConfirmation && (
                    <div style={{
                        padding: '12px 20px',
                        backgroundColor: 'var(--color-success)',
                        color: 'white',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '14px',
                        fontWeight: '500',
                        textAlign: 'center',
                        animation: 'slideUp 0.3s ease-out'
                    }}>
                        ✓ Sales Agent is now active
                    </div>
                )}
            </div>

            {/* Continue Button */}
            <div style={{
                padding: '16px',
                backgroundColor: 'var(--color-surface)',
                borderTop: '1px solid rgba(0,0,0,0.05)'
            }}>
                <button
                    onClick={handleContinue}
                    style={{
                        width: '100%',
                        padding: '16px',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-md)'
                    }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default AgentDeployment;
