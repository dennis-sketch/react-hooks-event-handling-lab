import React from 'react'

function PasswordInput() {
  return (
    <div>
          <input type="password"  onChange ={handleChange}/>
     
    </div>
  )
}

function handleChange(event){
    console.log('Entering password...');
}

export default PasswordInput