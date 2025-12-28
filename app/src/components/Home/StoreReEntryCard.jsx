import React from 'react';

const StoreReEntryCard = ({ storeName, storeId, onOpen }) => {
    return (
        <div
            onClick={onOpen}
            style={{
                width: '100%',
                padding: '20px',
                backgroundColor: 'var(--color-surface, #ffffff)',
                borderRadius: 'var(--radius-lg, 12px)',
                boxShadow: 'var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.1))',
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                cursor: 'pointer',
                transition: 'transform 0.1s ease',
                alignItems: 'flex-start'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            {/* Header Content */}
            <div style={{ width: '100%' }}>
                <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--color-text, #1f2937)',
                    marginBottom: '4px',
                    margin: 0,
                    lineHeight: '1.2'
                }}>
                    {storeName}
                </h3>
                {storeId && (
                    <span style={{
                        fontSize: '13px',
                        color: 'var(--color-text-light, #6b7280)',
                        fontFamily: 'monospace'
                    }}>
                        ID: {storeId}
                    </span>
                )}
            </div>

            {/* CTA Button - Visual only since whole card is clickable, 
                but distinct button style encourages action */}
            <button
                style={{
                    width: '100%',
                    padding: '14px',
                    backgroundColor: 'var(--color-primary, #ea580c)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-full, 9999px)',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    pointerEvents: 'none' // Let parent div handle click
                }}
            >
                Open Store
            </button>
        </div>
    );
};

export default StoreReEntryCard;
