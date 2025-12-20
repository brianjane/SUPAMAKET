import React, { useState } from 'react';
import BottomSheet from '../UI/BottomSheet';

const MOCK_PRODUCTS = [
    { id: 1, name: 'Fresh Sukuma Wiki (Kale)', price: 50, quantity: 20, available: true },
    { id: 2, name: 'Tomatoes', price: 30, quantity: 15, available: true },
    { id: 3, name: 'Spinach', price: 40, quantity: 0, available: false }
];

const ProductManagementDrawer = ({ isOpen, onClose }) => {
    const [products, setProducts] = useState(MOCK_PRODUCTS);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isAddingProduct, setIsAddingProduct] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        quantity: '',
        image: null
    });

    const handleEdit = (product) => {
        setEditingProduct(product.id);
        setFormData({
            name: product.name,
            price: product.price.toString(),
            quantity: product.quantity.toString(),
            image: null
        });
    };

    const handleAddNew = () => {
        setIsAddingProduct(true);
        setFormData({
            name: '',
            price: '',
            quantity: '',
            image: null
        });
    };

    const handleSave = () => {
        if (isAddingProduct) {
            // Add new product
            const newProduct = {
                id: Date.now(),
                name: formData.name,
                price: parseFloat(formData.price),
                quantity: parseInt(formData.quantity) || 0,
                available: true
            };
            setProducts([...products, newProduct]);
        } else {
            // Update existing product
            setProducts(products.map(p =>
                p.id === editingProduct
                    ? {
                        ...p,
                        name: formData.name,
                        price: parseFloat(formData.price),
                        quantity: parseInt(formData.quantity) || 0
                    }
                    : p
            ));
        }
        handleCancel();
    };

    const handleCancel = () => {
        setEditingProduct(null);
        setIsAddingProduct(false);
        setFormData({ name: '', price: '', quantity: '', image: null });
    };

    const isEditing = editingProduct !== null || isAddingProduct;
    const isFormValid = formData.name.trim() && formData.price;

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            {/* Header */}
            <div style={{
                padding: '20px 20px 16px',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <h2 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    marginBottom: '4px'
                }}>
                    Products
                </h2>
                <p style={{
                    fontSize: '13px',
                    color: 'var(--color-text-light)',
                    margin: 0
                }}>
                    Manage what the agent sells
                </p>
            </div>

            {/* Content */}
            <div style={{ padding: '16px 20px', maxHeight: '50vh', overflowY: 'auto' }}>
                {isEditing ? (
                    /* Edit/Add Form */
                    <div>
                        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--color-text)' }}>
                            {isAddingProduct ? 'Add Product' : 'Edit Product'}
                        </h3>

                        {/* Product Name */}
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: 'var(--color-text)' }}>
                                Product Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g., Fresh Kale"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    fontSize: '16px',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: 'var(--radius-sm)',
                                    backgroundColor: 'var(--color-bg)',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        {/* Price and Quantity Row */}
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: 'var(--color-text)' }}>
                                    Price (KSh)
                                </label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    placeholder="50"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        fontSize: '16px',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: 'var(--radius-sm)',
                                        backgroundColor: 'var(--color-bg)',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: 'var(--color-text)' }}>
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    placeholder="Optional"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        fontSize: '16px',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: 'var(--radius-sm)',
                                        backgroundColor: 'var(--color-bg)',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Image Upload */}
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{
                                display: 'block',
                                padding: '12px',
                                textAlign: 'center',
                                border: '1px dashed #d1d5db',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--color-text-light)',
                                fontSize: '14px',
                                cursor: 'pointer'
                            }}>
                                📷 Upload Image (optional)
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                                    style={{ display: 'none' }}
                                />
                            </label>
                        </div>

                        {/* Form Actions */}
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button
                                onClick={handleCancel}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    backgroundColor: 'var(--color-surface)',
                                    color: 'var(--color-text)',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={!isFormValid}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    backgroundColor: isFormValid ? 'var(--color-primary)' : '#d1d5db',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    cursor: isFormValid ? 'pointer' : 'not-allowed'
                                }}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Product List */
                    <div>
                        {products.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => handleEdit(product)}
                                style={{
                                    padding: '16px',
                                    backgroundColor: 'var(--color-surface)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: '12px',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-text)', marginBottom: '4px' }}>
                                            {product.name}
                                        </h4>
                                        <p style={{ fontSize: '15px', fontWeight: '600', color: 'var(--color-primary)', margin: 0 }}>
                                            KSh {product.price}
                                        </p>
                                    </div>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '4px 10px',
                                        backgroundColor: product.available ? 'rgba(39, 174, 96, 0.1)' : 'rgba(156, 163, 175, 0.1)',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        color: product.available ? 'var(--color-success)' : '#9ca3af'
                                    }}>
                                        <div style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            backgroundColor: product.available ? 'var(--color-success)' : '#9ca3af'
                                        }} />
                                        {product.available ? 'Available' : 'Out of stock'}
                                    </div>
                                </div>
                                {product.quantity > 0 && (
                                    <p style={{ fontSize: '13px', color: 'var(--color-text-light)', margin: 0 }}>
                                        Qty: {product.quantity}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add Product Button (Fixed at Bottom) */}
            {!isEditing && (
                <div style={{
                    padding: '16px 20px',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    backgroundColor: 'var(--color-surface)'
                }}>
                    <button
                        onClick={handleAddNew}
                        style={{
                            width: '100%',
                            padding: '14px',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-sm)'
                        }}
                    >
                        + Add Product
                    </button>
                </div>
            )}
        </BottomSheet>
    );
};

export default ProductManagementDrawer;
