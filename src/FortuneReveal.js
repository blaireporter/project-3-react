import React from 'react';


const FortuneReveal = ({fortune}) => {
    return (
        <div className="fortune-appear">
            <div class="final-fortune">
                <p className="fortune-message clicked">{fortune}</p>
            </div>
        </div>
    )
}

export default FortuneReveal;