import React from 'react';

const ChatHeader = ({
    storeName = "Supamaket",
    agentStatus = 'active', // 'active' | 'paused' | 'error'
    onBack,
    className = ""
}) => {
    // Status configuration
    const statusConfig = {
        active: {
            color: '#22c55e',
            label: 'Active now'
        },
        paused: {
            color: '#f59e0b',
            label: 'Paused'
        },
        error: {
            color: '#ef4444',
            label: 'Error'
        }
    };

    const currentStatus = statusConfig[agentStatus] || statusConfig.active;
    return (
        <div style={{
            height: '56px',
            padding: '0 16px',
            backgroundColor: 'var(--color-surface, #ffffff)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            width: '100%',
            ...className
        }}>
            {/* Back Arrow */}
            <button
                onClick={onBack}
                style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px',
                    marginLeft: '-8px', // Visual alignment
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text, #000)'
                }}
                aria-label="Go back"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Store Information */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h1 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--color-text, #000)',
                    lineHeight: '1.2',
                    margin: 0
                }}>
                    {storeName}
                </h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: currentStatus.color
                    }} />
                    <span style={{
                        fontSize: '12px',
                        color: 'var(--color-text-light, #6b7280)',
                        lineHeight: '1'
                    }}>
                        {currentStatus.label}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;
