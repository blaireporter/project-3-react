import React from 'react';

const FortuneReveal = ({ fortune }) => {
    return (
        <div className="fortune-container">
            <p className="fortune-message">{fortune}</p>
        </div>
    )
}
export default FortuneReveal;