import React, { useState } from 'react';

const AgentStatusChip = ({ status = 'active', onToggle, onRetry, onViewSummary }) => {
    const [showPopup, setShowPopup] = useState(false);

    const config = {
        active: {
            label: 'Active',
            color: 'var(--color-success, #22c55e)',
            bg: 'rgba(34, 197, 94, 0.1)',
            borderColor: 'rgba(34, 197, 94, 0.2)'
        },
        paused: {
            label: 'Paused',
            color: 'var(--color-warning, #f59e0b)',
            bg: 'rgba(245, 158, 11, 0.1)',
            borderColor: 'rgba(245, 158, 11, 0.2)'
        },
        error: {
            label: 'Needs Attention',
            color: 'var(--color-danger, #ef4444)',
            bg: 'rgba(239, 68, 68, 0.1)',
            borderColor: 'rgba(239, 68, 68, 0.2)'
        }
    };

    const current = config[status] || config.active;

    const handleAction = (action) => {
        setShowPopup(false);
        if (action === 'toggle') onToggle();
        if (action === 'retry') onRetry();
        if (action === 'summary') onViewSummary();
    };

    return (
        <div style={{ position: 'relative' }}>
            {/* Status Chip */}
            <div
                onClick={() => setShowPopup(!showPopup)}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    backgroundColor: current.bg,
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    border: `1px solid ${current.borderColor}`
                }}
            >
                <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: current.color
                }} />
                <span style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: current.color
                }}>
                    Sales Agent {current.label}
                </span>
            </div>

            {/* Popup */}
            {showPopup && (
                <>
                    <div
                        onClick={() => setShowPopup(false)}
                        style={{ position: 'fixed', inset: 0, zIndex: 998 }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: '8px',
                        backgroundColor: 'var(--color-surface)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        zIndex: 999,
                        minWidth: '200px',
                        overflow: 'hidden'
                    }}>
                        {/* Dynamic Action Based on Status */}
                        {status === 'paused' && (
                            <div
                                onClick={() => handleAction('toggle')}
                                style={menuItemStyle}
                            >
                                ▶ Resume Agent
                            </div>
                        )}
                        {status === 'active' && (
                            <div
                                onClick={() => handleAction('toggle')}
                                style={menuItemStyle}
                            >
                                ⏸ Pause Agent
                            </div>
                        )}
                        {status === 'error' && (
                            <div
                                onClick={() => handleAction('retry')}
                                style={menuItemStyle}
                            >
                                🔄 Retry Connection
                            </div>
                        )}

                        <div
                            onClick={() => handleAction('summary')}
                            style={menuItemStyle}
                        >
                            📊 View Today's Summary
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const menuItemStyle = {
    padding: '14px 16px',
    cursor: 'pointer',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    fontSize: '15px',
    color: 'var(--color-text)',
    transition: 'background-color 0.2s'
};

export default AgentStatusChip;
