import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
    const [step, setStep] = useState('phone'); // 'phone' | 'otp'
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if (phone.length >= 10) {
            setStep('otp');
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp.length === 4) {
            onLogin(); // Success
        }
    };

    return (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '32px',
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)'
        }}>
            <div style={{
                maxWidth: '300px',
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
            }}>
                {/* Minimal Header */}
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--color-primary)' }}>
                        Supamaket
                    </h2>
                    <p style={{ fontSize: '15px', color: 'var(--color-text-light)' }}>
                        {step === 'phone' ? 'Enter phone to continue' : `Code sent to ${phone}`}
                    </p>
                </div>

                {/* Forms */}
                {step === 'phone' ? (
                    <form onSubmit={handlePhoneSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <input
                            type="tel"
                            placeholder="+254 7..."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            autoFocus
                            style={{
                                width: '100%',
                                padding: '16px',
                                fontSize: '18px',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid rgba(0,0,0,0.1)',
                                backgroundColor: 'var(--color-surface)',
                                outline: 'none',
                                textAlign: 'center'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={phone.length < 10}
                            style={{
                                padding: '16px',
                                borderRadius: 'var(--radius-full)',
                                backgroundColor: phone.length >= 10 ? 'var(--color-primary)' : '#ccc',
                                color: '#fff',
                                border: 'none',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: phone.length >= 10 ? 'pointer' : 'default',
                                transition: 'background-color 0.2s'
                            }}
                        >
                            Next
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleOtpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            <input
                                type="text"
                                maxLength="4"
                                placeholder="0000"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                                autoFocus
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    fontSize: '24px',
                                    letterSpacing: '8px',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    backgroundColor: 'var(--color-surface)',
                                    outline: 'none',
                                    textAlign: 'center'
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={otp.length !== 4}
                            style={{
                                padding: '16px',
                                borderRadius: 'var(--radius-full)',
                                backgroundColor: otp.length === 4 ? 'var(--color-primary)' : '#ccc',
                                color: '#fff',
                                border: 'none',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: otp.length === 4 ? 'pointer' : 'default',
                                transition: 'background-color 0.2s'
                            }}
                        >
                            Verify
                        </button>
                        <button
                            type="button"
                            onClick={() => { setStep('phone'); setOtp(''); }}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-text-light)',
                                fontSize: '14px',
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }}
                        >
                            Change Number
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginScreen;
