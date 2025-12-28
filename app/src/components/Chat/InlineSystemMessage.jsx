import React from 'react';

const InlineSystemMessage = ({ type = 'info', children, action }) => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: '8px 16px',
            margin: '8px 0',
            textAlign: 'center',
            fontSize: '13px',
            color: 'var(--color-text-light, #6b7280)',
            animation: 'fadeIn 0.3s ease-out'
        },
        content: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-bg-subtle, rgba(0,0,0,0.03))',
            padding: '6px 12px',
            borderRadius: '99px',
            maxWidth: '90%'
        },
        action: {
            marginTop: '4px',
            color: 'var(--color-primary, #ea580c)',
            fontWeight: '600',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            fontSize: '13px',
            textDecoration: 'underline'
        }
    };

    const typeConfig = {
        info: {
            icon: 'ℹ️',
            bg: 'rgba(59, 130, 246, 0.1)', // blue-50
            color: '#1d4ed8' // blue-700
        },
        warning: {
            icon: '⚠️',
            bg: 'rgba(245, 158, 11, 0.1)', // amber-50
            color: '#b45309' // amber-700
        },
        error: {
            icon: '🛑',
            bg: 'rgba(239, 68, 68, 0.1)', // red-50
            color: '#b91c1c' // red-700
        }
    };

    const theme = typeConfig[type] || typeConfig.info;

    return (
        <div style={styles.container}>
            <div style={{
                ...styles.content,
                backgroundColor: theme.bg,
                color: theme.color,
                border: `1px solid ${theme.bg}`
            }}>
                <span style={{ fontSize: '14px' }}>{theme.icon}</span>
                <span>{children}</span>
            </div>
            {action && (
                <button
                    onClick={action.onClick}
                    style={styles.action}
                >
                    {action.label}
                </button>
            )}
        </div>
    );
};

export default InlineSystemMessage;
