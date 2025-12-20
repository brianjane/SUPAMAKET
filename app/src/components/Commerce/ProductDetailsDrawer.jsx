import React from 'react';
import Drawer from '../UI/Drawer';

const ProductDetailsDrawer = ({ isOpen, onClose, product, onAddToCart }) => {
    if (!product) return null;

    return (
        <Drawer
            isOpen={isOpen}
            onClose={onClose}
            title="Product Details"
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Large Image */}
                <div style={{
                    width: '100%',
                    height: '220px',
                    backgroundColor: '#f4f4f4',
                    borderRadius: '12px',
                    backgroundImage: product.image ? `url(${product.image})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {!product.image && (
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '48px',
                            color: '#ddd'
                        }}>
                            🛍️
                        </div>
                    )}
                </div>

                {/* Info Header */}
                <div>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'var(--color-text)',
                        marginBottom: '4px',
                        lineHeight: '1.2'
                    }}>
                        {product.name}
                    </h2>
                    <span style={{
                        fontSize: '20px',
                        color: 'var(--color-primary)',
                        fontWeight: '700'
                    }}>
                        {product.price}
                    </span>
                </div>

                {/* Description (Simulated since message content is simple) */}
                <div style={{ padding: '8px 0', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#999', marginBottom: '8px', textTransform: 'uppercase' }}>Description</h4>
                    <p style={{ color: 'var(--color-text)', lineHeight: '1.6', fontSize: '15px', margin: 0 }}>
                        High quality fresh produce sourced directly from local farmers.
                        Guaranteed freshness and taste. Perfect for your daily needs.
                    </p>
                </div>

                {/* Add Action */}
                <button
                    onClick={() => {
                        onAddToCart(product);
                        onClose();
                    }}
                    style={{
                        width: '100%',
                        padding: '16px',
                        backgroundColor: 'var(--color-primary)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '99px', // rounded-full
                        marginTop: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(210, 105, 30, 0.3)',
                        cursor: 'pointer',
                        transition: 'transform 0.1s'
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </Drawer>
    );
};

export default ProductDetailsDrawer;
