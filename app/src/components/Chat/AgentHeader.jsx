import React from 'react';

const AgentHeader = ({ name, avatar, isOnline = true }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        }}>
            {/* Avatar Container */}
            <div style={{ position: 'relative' }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#e0e0e0',
                    backgroundImage: avatar ? `url(${avatar})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px'
                }}>
                    {!avatar && '👤'}
                </div>

                {/* Status Dot */}
                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '10px',
                    height: '10px',
                    backgroundColor: isOnline ? 'var(--color-success)' : '#ccc',
                    borderRadius: '50%',
                    border: '2px solid #fff'
                }} />
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    lineHeight: '1.2'
                }}>
                    {name}
                </span>
                <span style={{
                    fontSize: '12px',
                    color: isOnline ? 'var(--color-success)' : '#999',
                    fontWeight: '500'
                }}>
                    {isOnline ? 'Active Now' : 'Offline'}
                </span>
            </div>
        </div>
    );
};

export default AgentHeader;
