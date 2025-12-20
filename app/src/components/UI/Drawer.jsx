import React, { useEffect, useState, useRef } from 'react';

const Drawer = ({ isOpen, onClose, title, children }) => {
    const [visible, setVisible] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startY = useRef(0);
    const currentY = useRef(0);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            setTimeout(() => setVisible(false), 300); // Wait for animation
        }
    }, [isOpen]);

    // Touch handlers for swipe-to-close
    const onTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
        currentY.current = startY.current;
        setIsDragging(true);
    };

    const onTouchMove = (e) => {
        if (!isDragging) return;
        const y = e.touches[0].clientY;
        const delta = y - startY.current;

        // Only allow dragging downwards
        if (delta > 0) {
            setDragOffset(delta);
        }
    };

    const onTouchEnd = () => {
        setIsDragging(false);

        // Threshold to close (e.g., 100px)
        if (dragOffset > 100) {
            onClose();
        } else {
            // Snap back
            setDragOffset(0);
        }
    };

    // Reset drag offset when closed or opened fresh
    useEffect(() => {
        if (!isOpen) setDragOffset(0);
    }, [isOpen]);

    if (!isOpen && !visible) return null;

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            pointerEvents: isOpen ? 'auto' : 'none'
        }}>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    opacity: isOpen ? Math.max(0, 1 - dragOffset / 400) : 0, // Fade out as you drag down
                    transition: isDragging ? 'none' : 'opacity 0.3s ease',
                }}
            />

            {/* Drawer Content */}
            <div
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{
                    backgroundColor: 'var(--color-bg)',
                    borderTopLeftRadius: 'var(--radius-lg)',
                    borderTopRightRadius: 'var(--radius-lg)',
                    padding: '20px',
                    width: '100%',
                    maxHeight: '85%',
                    overflowY: 'auto',
                    transform: isOpen
                        ? `translateY(${dragOffset}px)`
                        : 'translateY(100%)',
                    transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    boxShadow: 'var(--shadow-up)',
                    touchAction: 'none'
                }}
            >
                {/* Handle Bar */}
                <div style={{
                    width: '40px',
                    height: '4px',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    borderRadius: '2px',
                    margin: '0 auto 16px auto'
                }} />

                {/* Title */}
                {title && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '16px'
                    }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--color-primary)' }}>{title}</h3>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                color: 'var(--color-text-light)',
                                cursor: 'pointer'
                            }}
                        >
                            &times;
                        </button>
                    </div>
                )}

                {children}
            </div>
        </div>
    );
};

export default Drawer;
