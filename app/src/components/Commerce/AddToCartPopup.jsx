import React, { useEffect, useState } from 'react';

const AddToCartPopup = ({ isOpen, onClose, productName }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                setTimeout(onClose, 300); // Wait for animation to finish
            }, 1500); // Short duration
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen && !visible) return null;

    return (
        <div style={{
            position: 'absolute',
            bottom: '120px', // Positioned above input bar
            left: '50%',
            transform: `translateX(-50%) scale(${visible ? 1 : 0.9})`,
            opacity: visible ? 1 : 0,
            transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            backgroundColor: '#222',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none' // Don't block interactions
        }}>
            <div style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success, #25D366)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                color: '#000'
            }}>
                ✓
            </div>
            <span>Added {productName}</span>
        </div>
    );
};

export default AddToCartPopup;
