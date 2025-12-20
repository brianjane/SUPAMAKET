import React from 'react';

const Home = ({ storeData, agentActive, onOpenStore, onCreateStore }) => {
    const hasStore = !!storeData;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: 'var(--color-bg)',
            padding: '16px'
        }}>
            {/* Header / Branding */}
            <div style={{ marginBottom: '48px', marginTop: '8px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: '4px' }}>Supamaket</h1>
                <p style={{ fontSize: '14px', color: 'var(--color-text-light)', margin: 0 }}>Chat-based commerce</p>
            </div>

            {hasStore ? (
                <>
                    {/* Your Store Section */}
                    <div style={{ marginBottom: '24px' }}>
                        <h2 style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: 'var(--color-text-light)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: '12px'
                        }}>
                            Your Store
                        </h2>

                        {/* Store Card */}
                        <div style={{
                            padding: '20px',
                            backgroundColor: 'var(--color-surface)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            {/* Store Name */}
                            <h3 style={{
                                fontSize: '20px',
                                fontWeight: '600',
                                color: 'var(--color-text)',
                                marginBottom: '12px',
                                margin: 0
                            }}>
                                {storeData.storeName}
                            </h3>

                            {/* Status Chip */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '6px 12px',
                                backgroundColor: agentActive ? 'rgba(34, 197, 94, 0.1)' : 'rgba(156, 163, 175, 0.1)',
                                borderRadius: 'var(--radius-full)',
                                marginTop: '12px'
                            }}>
                                {/* Status Dot */}
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: agentActive ? 'var(--color-success)' : '#9ca3af'
                                }} />
                                <span style={{
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    color: agentActive ? 'var(--color-success)' : '#9ca3af'
                                }}>
                                    {agentActive ? 'Active' : 'Paused'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Open Store Button */}
                    <button
                        onClick={onOpenStore}
                        style={{
                            width: '100%',
                            padding: '16px',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-md)'
                        }}
                    >
                        Open Store
                    </button>
                </>
            ) : (
                <>
                    {/* No Store State */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '40px 20px'
                    }}>
                        {/* Icon */}
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(var(--color-primary-rgb, 234, 88, 12), 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px'
                        }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </div>

                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            marginBottom: '8px'
                        }}>
                            Start Your Store
                        </h2>
                        <p style={{
                            fontSize: '14px',
                            color: 'var(--color-text-light)',
                            marginBottom: '32px',
                            maxWidth: '280px'
                        }}>
                            Create your store and start selling with an AI-powered sales agent
                        </p>

                        {/* Create Store Button */}
                        <button
                            onClick={onCreateStore}
                            style={{
                                width: '100%',
                                maxWidth: '320px',
                                padding: '16px',
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                boxShadow: 'var(--shadow-md)'
                            }}
                        >
                            Create Store
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
