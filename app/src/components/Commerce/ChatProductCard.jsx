import React from 'react';

const ChatProductCard = ({ name, price, image, onAdd }) => {
    return (
        <div style={{
            width: '210px', // Fixed width for vertical card
            backgroundColor: '#fff',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column', // Vertical layout
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.04)',
        }}>
            {/* Product Image (Top) */}
            <div style={{
                width: '100%',
                aspectRatio: '1/1', // Square image
                backgroundColor: '#f4f4f4',
            }}>
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: '24px' }}>
                        🛍️
                    </div>
                )}
            </div>

            {/* Details (Bottom) */}
            <div style={{
                padding: '10px 12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
            }}>
                <h4 style={{
                    margin: 0,
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    lineHeight: '1.3',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {name}
                </h4>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <span style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: 'var(--color-primary)'
                    }}>
                        {price}
                    </span>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onAdd();
                        }}
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            cursor: 'pointer',
                            textTransform: 'uppercase'
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatProductCard;
