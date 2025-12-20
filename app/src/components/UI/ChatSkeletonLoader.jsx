import React from 'react';

const ChatSkeletonLoader = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            padding: '4px',
            width: '120px' // Constrain width inside bubble
        }}>
            {/* Line 1 */}
            <div className="animate-pulse" style={{
                height: '10px',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: '4px'
            }} />

            {/* Line 2 */}
            <div className="animate-pulse" style={{
                height: '10px',
                width: '70%',
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: '4px',
                animationDelay: '0.1s'
            }} />

            {/* Line 3 */}
            <div className="animate-pulse" style={{
                height: '10px',
                width: '40%',
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: '4px',
                animationDelay: '0.2s'
            }} />
        </div>
    );
};

export default ChatSkeletonLoader;
