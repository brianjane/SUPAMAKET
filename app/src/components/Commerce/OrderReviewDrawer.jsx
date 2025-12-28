import React from 'react';
import BottomSheet from '../UI/BottomSheet';

const OrderReviewDrawer = ({ isOpen, onClose, cart = [], onConfirm }) => {

    // Calculate total safely
    const total = cart.reduce((sum, item) => {
        // Assuming item.price is a string like "KSh 50" or number
        const price = typeof item.price === 'string'
            ? parseFloat(item.price.replace(/[^0-9.]/g, ''))
            : item.price;
        return sum + (price || 0);
    }, 0);

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose} title="Review Order">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {cart.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '32px 0',
                        color: 'var(--color-text-light)'
                    }}>
                        Your basket is empty.
                    </div>
                ) : (
                    <>
                        {/* Item List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {cart.map((item, idx) => (
                                <div key={`${item.id}-${idx}`} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingBottom: '12px',
                                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                                }}>
                                    <div>
                                        <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                                            {item.name}
                                        </div>
                                        {item.details && (
                                            <div style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>
                                                {item.details}
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ fontWeight: '600', color: 'var(--color-text)' }}>
                                        {item.price}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Total Section */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '8px',
                            paddingTop: '16px',
                            borderTop: '2px solid rgba(0,0,0,0.05)'
                        }}>
                            <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text)' }}>
                                Total
                            </span>
                            <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                KSh {total.toLocaleString()}
                            </span>
                        </div>

                        {/* Action */}
                        <div style={{ paddingTop: '16px' }}>
                            <button
                                onClick={onConfirm}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px'
                                }}
                            >
                                <span>Confirm Order</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </button>
                            <p style={{
                                textAlign: 'center',
                                fontSize: '13px',
                                color: 'var(--color-text-light)',
                                marginTop: '12px',
                                fontStyle: 'italic'
                            }}>
                                No payment required yet. Chat to pay.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </BottomSheet>
    );
};

export default OrderReviewDrawer;
