import React from 'react';

const MessageBubble = ({ message, type = 'buyer', timestamp, className = '' }) => {
    // Styles for different message types
    const styles = {
        buyer: {
            align: 'flex-end',
            bg: 'var(--color-primary)',
            color: '#fff',
            radius: '16px 16px 4px 16px',
            maxWidth: '70%',
            shadow: 'var(--shadow-sm)'
        },
        agent: {
            align: 'flex-start',
            bg: 'var(--color-surface)',
            color: 'var(--color-text)',
            radius: '16px 16px 16px 4px',
            maxWidth: '70%',
            shadow: 'var(--shadow-sm)'
        },
        system: {
            align: 'center',
            bg: 'transparent',
            color: 'var(--color-text-light)',
            radius: '0',
            maxWidth: '90%',
            shadow: 'none',
            fontSize: '13px',
            padding: '4px 0'
        }
    };

    const currentStyle = styles[type] || styles.agent;
    const alignment = currentStyle.align; // Derive alignment from currentStyle

    return (
        <div className={className} style={{
            display: 'flex',
            flexDirection: 'column', // Added
            width: '100%',
            marginBottom: '12px', // Changed from conditional to fixed
            padding: '0 16px',
            alignItems: alignment, // Replaced justifyContent with alignItems
        }}>
            <div style={{
                maxWidth: currentStyle.maxWidth,
                padding: type === 'system' ? '4px 8px' : '12px 16px',
                borderRadius: currentStyle.radius,
                backgroundColor: currentStyle.bg,
                color: currentStyle.color,
                boxShadow: currentStyle.shadow,
                fontSize: type === 'system' ? '13px' : '15px',
                lineHeight: '1.4',
                textAlign: type === 'system' ? 'center' : 'left'
            }}>
                {message}
                {timestamp && type !== 'system' && (
                    <div style={{
                        fontSize: '11px',
                        opacity: 0.7,
                        marginTop: '4px',
                        textAlign: 'right'
                    }}>
                        {timestamp}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageBubble;
