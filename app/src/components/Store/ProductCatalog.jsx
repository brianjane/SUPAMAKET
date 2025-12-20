import React, { useState } from 'react';

const ProductCatalog = ({ onBack, onContinue, onSkip }) => {
    const [products, setProducts] = useState([
        { id: 1, name: '', price: '', quantity: '', image: null }
    ]);

    const addProduct = () => {
        setProducts([...products, {
            id: Date.now(),
            name: '',
            price: '',
            quantity: '',
            image: null
        }]);
    };

    const updateProduct = (id, field, value) => {
        setProducts(products.map(p =>
            p.id === id ? { ...p, [field]: value } : p
        ));
    };

    const removeProduct = (id) => {
        if (products.length > 1) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const handleContinue = () => {
        const validProducts = products.filter(p => p.name.trim() && p.price);
        onContinue(validProducts);
    };

    const hasValidProducts = products.some(p => p.name.trim() && p.price);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: 'var(--color-bg)'
        }}>
            {/* Header */}
            <div style={{
                padding: '16px',
                backgroundColor: 'var(--color-surface)',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
            }}>
                <button
                    onClick={onBack}
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: '8px',
                        marginLeft: '-8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'var(--color-text)'
                    }}
                    aria-label="Go back"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <div>
                    <h1 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-text)', margin: 0 }}>
                        Add Products
                    </h1>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-light)', margin: 0 }}>
                        Add a few items to get started
                    </p>
                </div>
            </div>

            {/* Product List */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px'
            }}>
                {products.map((product, index) => (
                    <div key={product.id} style={{
                        backgroundColor: 'var(--color-surface)',
                        borderRadius: 'var(--radius-md)',
                        padding: '16px',
                        marginBottom: '16px',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        {/* Product Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-text-light)' }}>
                                Product {index + 1}
                            </span>
                            {products.length > 1 && (
                                <button
                                    onClick={() => removeProduct(product.id)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--color-danger)',
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                        padding: '4px'
                                    }}
                                >
                                    ×
                                </button>
                            )}
                        </div>

                        {/* Product Name */}
                        <div style={{ marginBottom: '12px' }}>
                            <input
                                type="text"
                                value={product.name}
                                onChange={(e) => updateProduct(product.id, 'name', e.target.value)}
                                placeholder="Product name"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    fontSize: '16px',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: 'var(--radius-sm)',
                                    backgroundColor: 'var(--color-bg)',
                                    color: 'var(--color-text)',
                                    outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                            />
                        </div>

                        {/* Price and Quantity Row */}
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                            <div style={{ flex: 1 }}>
                                <input
                                    type="number"
                                    value={product.price}
                                    onChange={(e) => updateProduct(product.id, 'price', e.target.value)}
                                    placeholder="Price (KSh)"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        fontSize: '16px',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: 'var(--radius-sm)',
                                        backgroundColor: 'var(--color-bg)',
                                        color: 'var(--color-text)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <input
                                    type="number"
                                    value={product.quantity}
                                    onChange={(e) => updateProduct(product.id, 'quantity', e.target.value)}
                                    placeholder="Qty (optional)"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        fontSize: '16px',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: 'var(--radius-sm)',
                                        backgroundColor: 'var(--color-bg)',
                                        color: 'var(--color-text)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                />
                            </div>
                        </div>

                        {/* Image Upload (Optional) */}
                        <div>
                            <label style={{
                                display: 'block',
                                padding: '12px',
                                textAlign: 'center',
                                border: '1px dashed #d1d5db',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--color-text-light)',
                                fontSize: '14px',
                                cursor: 'pointer',
                                backgroundColor: 'var(--color-bg)'
                            }}>
                                📷 Add photo (optional)
                                <input
                                    type="file"
                                    accept="image/*"
                                    capture="environment"
                                    onChange={(e) => updateProduct(product.id, 'image', e.target.files[0])}
                                    style={{ display: 'none' }}
                                />
                            </label>
                            {product.image && (
                                <p style={{ fontSize: '12px', color: 'var(--color-success)', marginTop: '4px', textAlign: 'center' }}>
                                    ✓ Photo added
                                </p>
                            )}
                        </div>
                    </div>
                ))}

                {/* Add Another Product Button */}
                <button
                    onClick={addProduct}
                    style={{
                        width: '100%',
                        padding: '14px',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text)',
                        border: '2px dashed #d1d5db',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '15px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        marginBottom: '80px'
                    }}
                >
                    + Add another product
                </button>
            </div>

            {/* Bottom Actions */}
            <div style={{
                padding: '16px',
                backgroundColor: 'var(--color-surface)',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}>
                <button
                    onClick={handleContinue}
                    disabled={!hasValidProducts}
                    style={{
                        width: '100%',
                        padding: '16px',
                        backgroundColor: hasValidProducts ? 'var(--color-primary)' : '#d1d5db',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: hasValidProducts ? 'pointer' : 'not-allowed',
                        boxShadow: hasValidProducts ? 'var(--shadow-md)' : 'none'
                    }}
                >
                    Continue
                </button>
                <button
                    onClick={onSkip}
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'transparent',
                        color: 'var(--color-text-light)',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer'
                    }}
                >
                    Skip for now
                </button>
            </div>
        </div>
    );
};

export default ProductCatalog;
