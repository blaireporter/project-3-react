import React from 'react';


const Input = () => {

    return (
        <div className="question-container">
            <input type="text" id="question" placeholder="Should I buy a llama? ...etc."/>
            <label htmlFor="question">Type your question above</label>
        </div>
    )
}

export default Input;