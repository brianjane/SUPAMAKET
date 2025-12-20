import React, { useState } from 'react';

const AgentStatusChip = ({ isActive, onToggle, onViewSummary }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleAction = (action) => {
        setShowPopup(false);
        if (action === 'toggle') {
            onToggle();
        } else if (action === 'summary') {
            onViewSummary();
        }
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
                    backgroundColor: isActive ? 'rgba(39, 174, 96, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    border: `1px solid ${isActive ? 'rgba(39, 174, 96, 0.2)' : 'rgba(245, 158, 11, 0.2)'}`
                }}
            >
                <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? 'var(--color-success)' : '#f59e0b'
                }} />
                <span style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: isActive ? 'var(--color-success)' : '#d97706'
                }}>
                    Sales Agent {isActive ? 'Active' : 'Paused'}
                </span>
            </div>

            {/* Popup */}
            {showPopup && (
                <>
                    {/* Backdrop */}
                    <div
                        onClick={() => setShowPopup(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 998
                        }}
                    />

                    {/* Popup Menu */}
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
                        <div
                            onClick={() => handleAction('toggle')}
                            style={{
                                padding: '14px 16px',
                                cursor: 'pointer',
                                borderBottom: '1px solid rgba(0,0,0,0.05)',
                                fontSize: '15px',
                                color: 'var(--color-text)',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-dim)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            {isActive ? '⏸ Pause Agent' : '▶ Resume Agent'}
                        </div>
                        <div
                            onClick={() => handleAction('summary')}
                            style={{
                                padding: '14px 16px',
                                cursor: 'pointer',
                                fontSize: '15px',
                                color: 'var(--color-text)',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-dim)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            📊 View Today's Summary
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AgentStatusChip;
