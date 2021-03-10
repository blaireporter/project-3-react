import React from 'react';

const MagicEightBallImage= ({shake}) => {
    return (
          <img src="./assets/8balltop.png" alt="the outside of the 8ball" className={shake && "shake"}/>
    )
}

export default MagicEightBallImage;