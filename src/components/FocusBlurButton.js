import React from 'react';

function FocusBlurButton() {
  const handleFocus = () => {
    console.log('Good!');
  };

  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <div>
      <button
        onFocus={handleFocus} 
        onBlur={handleBlur}   
      >
        Click Me
      </button>
    </div>
  );
}

export default FocusBlurButton;
