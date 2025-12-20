import React from 'react';

const Toggle = ({ checked, onChange }) => {
    return (
        <div
            onClick={() => onChange(!checked)}
            style={{
                width: '44px',
                height: '24px',
                backgroundColor: checked ? 'var(--color-primary)' : '#ccc',
                borderRadius: '99px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
            }}
        >
            <div style={{
                width: '20px',
                height: '20px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                position: 'absolute',
                top: '2px',
                left: checked ? '22px' : '2px',
                transition: 'left 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }} />
        </div>
    );
};

export default Toggle;
