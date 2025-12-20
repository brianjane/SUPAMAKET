import React, { useEffect, useState } from 'react';

const Toast = ({ message, onDismiss, duration = 2000 }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                setTimeout(onDismiss, 300); // Wait for exit animation
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration, onDismiss]);

    if (!message && !visible) return null;

    return (
        <div style={{
            position: 'absolute',
            bottom: '100px', // Above input area
            left: '50%',
            transform: `translateX(-50%) translateY(${visible ? 0 : '20px'})`,
            opacity: visible ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
            backgroundColor: 'rgba(44, 36, 27, 0.9)', // Dark transparent
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 200,
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
        }}>
            <span style={{ color: 'var(--color-success)' }}>✓</span>
            {message}
        </div>
    );
};

export default Toast;
