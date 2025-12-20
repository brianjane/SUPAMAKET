import React, { useState } from 'react';

const CATEGORIES = [
    'Groceries',
    'Electronics',
    'Fashion',
    'Services',
    'Other'
];

const CreateStore = ({ onBack, onContinue }) => {
    const [storeName, setStoreName] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        if (storeName.trim() && category) {
            onContinue({
                storeName: storeName.trim(),
                category
            });
        }
    };

    const isValid = storeName.trim() && category;

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
                <h1 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-text)', margin: 0 }}>
                    Create Store
                </h1>
            </div>

            {/* Form Content */}
            <div style={{
                flex: 1,
                padding: '24px 16px',
                overflowY: 'auto'
            }}>
                {/* Store Name */}
                <div style={{ marginBottom: '24px' }}>
                    <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'var(--color-text)',
                        marginBottom: '8px'
                    }}>
                        Store Name
                    </label>
                    <input
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        placeholder="Mama Mboga's Fresh Produce"
                        style={{
                            width: '100%',
                            padding: '14px 16px',
                            fontSize: '16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'var(--color-surface)',
                            color: 'var(--color-text)',
                            outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                </div>

                {/* Category */}
                <div style={{ marginBottom: '24px' }}>
                    <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'var(--color-text)',
                        marginBottom: '8px'
                    }}>
                        Category
                    </label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '14px 16px',
                            fontSize: '16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'var(--color-surface)',
                            color: category ? 'var(--color-text)' : '#9ca3af',
                            outline: 'none',
                            cursor: 'pointer'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    >
                        <option value="" disabled>Select a category</option>
                        {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Create Store Button */}
            <div style={{
                padding: '16px',
                backgroundColor: 'var(--color-surface)',
                borderTop: '1px solid rgba(0,0,0,0.05)'
            }}>
                <button
                    onClick={handleSubmit}
                    disabled={!isValid}
                    style={{
                        width: '100%',
                        padding: '16px',
                        backgroundColor: isValid ? 'var(--color-primary)' : '#d1d5db',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: isValid ? 'pointer' : 'not-allowed',
                        boxShadow: isValid ? 'var(--shadow-md)' : 'none'
                    }}
                >
                    Create Store
                </button>
            </div>
        </div>
    );
};

export default CreateStore;
