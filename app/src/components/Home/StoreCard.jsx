import React from 'react';

const StoreCard = ({ name, storeId, onOpenStore, onManageStore }) => {
    return (
        <div style={{
            padding: '20px',
            backgroundColor: 'var(--color-surface, #ffffff)',
            borderRadius: 'var(--radius-lg, 12px)',
            boxShadow: 'var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.1))',
            border: '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }}>
            {/* Header */}
            <div>
                <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--color-text, #1f2937)',
                    marginBottom: '4px',
                    margin: 0,
                    lineHeight: '1.2'
                }}>
                    {name}
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

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                    onClick={onOpenStore}
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
                        boxShadow: '0 2px 4px rgba(234, 88, 12, 0.2)'
                    }}
                >
                    Open Store
                </button>

                {onManageStore && (
                    <button
                        onClick={onManageStore}
                        style={{
                            width: '100%',
                            padding: '14px',
                            backgroundColor: 'transparent',
                            color: 'var(--color-text, #374151)',
                            border: '1px solid #e5e7eb',
                            borderRadius: 'var(--radius-full, 9999px)',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Manage Store
                    </button>
                )}
            </div>
        </div>
    );
};

export default StoreCard;
