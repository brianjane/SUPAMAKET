import React, { useState } from 'react';

const InputArea = ({ onSendMessage }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSendMessage(text);
            setText('');
        }
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-surface)',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            padding: '12px 16px',
            paddingBottom: 'max(12px, env(safe-area-inset-bottom))', // Safe area for iPhone X+
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 -2px 10px rgba(0,0,0,0.03)'
        }}>
            {/* Attachment Button */}
            <button style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-bg)',
                border: 'none',
                color: 'var(--color-text-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '20px'
            }} type="button">
                📎
            </button>

            {/* Input Field Form */}
            <form onSubmit={handleSubmit} style={{
                flex: 1,
                display: 'flex',
                gap: '8px'
            }}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type message..."
                    style={{
                        flex: 1,
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(0,0,0,0.1)',
                        backgroundColor: 'var(--color-bg)',
                        fontSize: '16px',
                        outline: 'none',
                        color: 'var(--color-text)',
                        transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                />

                {/* Send Button */}
                <button
                    type="submit"
                    disabled={!text.trim()}
                    style={{
                        width: '48px',
                        height: '48px', // Large touch target
                        borderRadius: '50%',
                        backgroundColor: text.trim() ? 'var(--color-primary)' : '#eee',
                        border: 'none',
                        color: text.trim() ? '#fff' : '#aaa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: text.trim() ? 'pointer' : 'default',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: text.trim() ? 'scale(1)' : 'scale(0.95)',
                        boxShadow: text.trim() ? 'var(--shadow-md)' : 'none'
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default InputArea;
