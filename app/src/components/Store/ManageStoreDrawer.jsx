import React from 'react';
import BottomSheet from '../UI/BottomSheet';

const ManageStoreDrawer = ({ isOpen, onClose, storeName, storeId, isActive, onActionSelect }) => {
    const actions = [
        { id: 'products', label: 'Manage Products', icon: '📦' },
        { id: 'agent', label: 'Agent Status', icon: '🤖' },
        { id: 'summary', label: 'View Summary', icon: '📊' }
    ];

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            {/* Store Header */}
            <div style={{
                padding: '20px 20px 24px',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <h2 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    marginBottom: '12px'
                }}>
                    {storeName || 'My Store'}
                </h2>

                {/* Status Indicator */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 12px',
                    backgroundColor: isActive ? 'rgba(39, 174, 96, 0.1)' : 'rgba(156, 163, 175, 0.1)',
                    borderRadius: 'var(--radius-full)',
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? 'var(--color-success)' : '#9ca3af'
                    }} />
                    <span style={{
                        fontSize: '13px',
                        fontWeight: '500',
                        color: isActive ? 'var(--color-success)' : '#9ca3af'
                    }}>
                        {isActive ? 'Active' : 'Paused'}
                    </span>
                </div>
            </div>

            {/* Action List */}
            <div style={{ padding: '8px 0' }}>
                {actions.map((action, index) => (
                    <div
                        key={action.id}
                        onClick={() => onActionSelect(action.id)}
                        style={{
                            padding: '18px 20px',
                            cursor: 'pointer',
                            backgroundColor: 'var(--color-surface)',
                            borderBottom: index < actions.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                            transition: 'background-color 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface)'}
                    >
                        <span style={{ fontSize: '20px' }}>{action.icon}</span>
                        <span style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: 'var(--color-text)'
                        }}>
                            {action.label}
                        </span>
                        {/* Chevron */}
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--color-text-light)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ marginLeft: 'auto' }}
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                ))}
            </div>
        </BottomSheet>
    );
};

export default ManageStoreDrawer;
