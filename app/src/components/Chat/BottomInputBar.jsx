import React, { useState } from 'react';

const BottomInputBar = ({ onSend, onAttach }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div style={{
            position: 'sticky',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'var(--color-bg)',
            borderTop: '1px solid rgba(0,0,0,0.05)', // border-t
            padding: '12px 16px', // p-3 or p-4
            paddingBottom: '24px', // pb-6 for safe area/thumb reach
            display: 'flex',
            alignItems: 'center',
            gap: '12px', // gap-3
            boxShadow: '0 -2px 10px rgba(0,0,0,0.03)',
            zIndex: 50
        }}>
            {/* Attachment Button (Optional) */}
            <button
                type="button"
                onClick={() => onAttach && onAttach()}
                style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px',
                    color: 'var(--color-text-light)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
            </button>

            {/* Text Input */}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                style={{
                    flex: 1,
                    backgroundColor: 'var(--color-surface)', // bg-gray-100/warm-sand
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '99px', // rounded-full
                    padding: '12px 20px', // py-3 px-5
                    fontSize: '16px', // text-base (prevent zoom on iOS)
                    outline: 'none',
                    color: 'var(--color-text)',
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)'
                }}
            />

            {/* Send Button */}
            <button
                onClick={handleSend}
                disabled={!text.trim()}
                style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: text.trim() ? 'var(--color-primary)' : '#ccc', // bg-terracotta or disabled
                    color: '#ffffff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: text.trim() ? 'pointer' : 'default',
                    transition: 'all 0.2s',
                    boxShadow: text.trim() ? '0 2px 5px rgba(210, 105, 30, 0.3)' : 'none',
                    flexShrink: 0
                }}
            >
                {/* Send Icon SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default BottomInputBar;
