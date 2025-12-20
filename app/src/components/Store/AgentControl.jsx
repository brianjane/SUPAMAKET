import React from 'react';
import Toggle from '../UI/Toggle';

const AgentControl = ({ isActive, onToggle }) => {
    return (
        <div style={{
            padding: '16px',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        }}>
            {/* Status Dot and Label */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? 'var(--color-success)' : '#9ca3af',
                    transition: 'background-color 0.3s ease'
                }} />
                <span style={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: 'var(--color-text)'
                }}>
                    {isActive ? 'Sales Agent Active' : 'Sales Agent Paused'}
                </span>
            </div>

            {/* Toggle */}
            <Toggle checked={isActive} onChange={onToggle} />
        </div>
    );
};

export default AgentControl;
