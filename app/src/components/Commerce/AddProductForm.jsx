import React, { useState } from 'react';

const AddProductForm = ({ onSave, onCancel }) => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('1');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ image, name, price, quantity });
    };

    return (
        <div style={{
            height: '100%',
            backgroundColor: 'var(--color-bg)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflowY: 'auto'
        }}>
            {/* Header */}
            <div style={{
                padding: '16px',
                backgroundColor: 'var(--color-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                zIndex: 10
            }}>
                <button
                    onClick={onCancel}
                    style={{ background: 'none', border: 'none', fontSize: '16px', color: 'var(--color-text-light)', cursor: 'pointer' }}
                >
                    Cancel
                </button>
                <span style={{ fontWeight: '600', fontSize: '16px' }}>Add Product</span>
                <button
                    onClick={handleSubmit}
                    style={{ background: 'none', border: 'none', fontSize: '16px', color: 'var(--color-primary)', fontWeight: '600', cursor: 'pointer' }}
                >
                    Save
                </button>
            </div>

            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {/* Image Upload */}
                <div style={{
                    width: '100%',
                    aspectRatio: '1',
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: 'var(--radius-lg)',
                    border: '2px dashed rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {image ? (
                        <img src={image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <>
                            <span style={{ fontSize: '32px', color: 'var(--color-primary)', marginBottom: '8px' }}>📷</span>
                            <span style={{ color: 'var(--color-text-light)', fontSize: '14px' }}>Tap to add photo</span>
                        </>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => setImage(reader.result);
                                reader.readAsDataURL(file);
                            }
                        }}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                    />
                </div>

                {/* Inputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--color-text-light)' }}>
                            Product Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Fresh Sukuma Wiki"
                            style={{
                                width: '100%',
                                padding: '14px',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid rgba(0,0,0,0.1)',
                                fontSize: '16px'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--color-text-light)' }}>
                                Price (KSh)
                            </label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="50"
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    fontSize: '16px'
                                }}
                            />
                        </div>

                        <div style={{ width: '100px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--color-text-light)' }}>
                                Qty
                            </label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    fontSize: '16px'
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Action */}
            <div style={{ padding: '16px', backgroundColor: 'var(--color-bg)' }}>
                <button
                    onClick={handleSubmit}
                    style={{
                        width: '100%',
                        padding: '18px',
                        backgroundColor: 'var(--color-primary)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '16px',
                        fontWeight: '600',
                        boxShadow: 'var(--shadow-md)',
                        cursor: 'pointer'
                    }}
                >
                    Save Product
                </button>
            </div>

        </div>
    );
};

export default AddProductForm;
