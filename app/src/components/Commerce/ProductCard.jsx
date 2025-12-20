import React from 'react';

const ProductCard = ({ product, onAdd, onClick }) => {
    return (
        <div
            onClick={() => onClick && onClick(product)}
            style={{
                backgroundColor: '#fff',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.05)',
                marginBottom: '8px',
                maxWidth: '280px',
                width: '100%',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                cursor: 'pointer', // Indicate clickable
                active: { transform: 'scale(0.98)' }
            }}
        >
            {/* Image Side */}
            <div style={{
                width: '80px',
                height: '80px',
                flexShrink: 0,
                backgroundColor: '#f0f0f0',
                backgroundImage: product.image ? `url(${product.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999'
            }}>
                {!product.image && <span style={{ fontSize: '10px' }}>No Img</span>}
            </div>

            {/* Content Side */}
            <div style={{
                padding: '10px 12px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h4 style={{
                    margin: '0 0 4px 0',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    lineHeight: '1.2'
                }}>
                    {product.name}
                </h4>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '4px'
                }}>
                    <span style={{
                        color: 'var(--color-primary)',
                        fontWeight: '700',
                        fontSize: '14px'
                    }}>
                        {product.price}
                    </span>

                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Don't trigger card click
                            onAdd(product);
                        }}
                        style={{
                            padding: '6px 14px',
                            backgroundColor: 'var(--color-primary)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '12px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            marginLeft: '8px'
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
