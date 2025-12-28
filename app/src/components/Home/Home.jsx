import React from 'react';
import StoreReEntryCard from './StoreReEntryCard';
import EmptyState from './EmptyState';

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

                        <StoreReEntryCard
                            storeName={storeData.storeName}
                            storeId={storeData.id}
                            onOpen={onOpenStore}
                        />
                    </div>
                </>
            ) : (
                <EmptyState onCreateStore={onCreateStore} />
            )}
        </div>
    );
};

export default Home;
