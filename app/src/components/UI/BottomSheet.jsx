import React, { useEffect } from 'react';

const BottomSheet = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 999,
                    animation: 'fadeIn 0.3s ease-out'
                }}
            />

            {/* Sheet */}
            <div
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--color-surface)',
                    borderTopLeftRadius: 'var(--radius-lg)',
                    borderTopRightRadius: 'var(--radius-lg)',
                    boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
                    zIndex: 1000,
                    maxWidth: '390px',
                    margin: '0 auto',
                    animation: 'slideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1)'
                }}
            >
                {/* Handle */}
                <div
                    style={{
                        width: '40px',
                        height: '4px',
                        backgroundColor: '#d1d5db',
                        borderRadius: '2px',
                        margin: '12px auto 8px'
                    }}
                />

                {/* Title */}
                {title && (
                    <div style={{
                        padding: '8px 20px 16px',
                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <h2 style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            margin: 0
                        }}>
                            {title}
                        </h2>
                    </div>
                )}

                {/* Content */}
                <div style={{
                    padding: '20px',
                    maxHeight: '60vh',
                    overflowY: 'auto'
                }}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default BottomSheet;
