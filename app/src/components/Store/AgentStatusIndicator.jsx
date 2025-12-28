import React from 'react';

const AgentStatusIndicator = ({ status = 'active', role = 'seller', onClick }) => {
    // Hidden for buyers
    if (role === 'buyer') return null;

    const config = {
        active: {
            color: 'var(--color-success, #22c55e)',
            bg: 'rgba(34, 197, 94, 0.1)',
            label: 'Active'
        },
        paused: {
            color: 'var(--color-warning, #f59e0b)',
            bg: 'rgba(245, 158, 11, 0.1)',
            label: 'Paused'
        },
        error: {
            color: 'var(--color-danger, #ef4444)',
            bg: 'rgba(239, 68, 68, 0.1)',
            label: 'Offline'
        }
    };

    const current = config[status] || config.active;

    return (
        <div
            onClick={onClick}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                backgroundColor: current.bg,
                borderRadius: '99px',
                cursor: 'pointer',
                border: '1px solid transparent',
                transition: 'all 0.2s ease',
                userSelect: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = current.color}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
        >
            <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: current.color,
                boxShadow: status === 'active' ? `0 0 6px ${current.color}` : 'none'
            }} />
            <span style={{
                fontSize: '12px',
                fontWeight: '600',
                color: current.color,
                lineHeight: 1
            }}>
                {current.label}
            </span>
        </div>
    );
};

export default AgentStatusIndicator;
