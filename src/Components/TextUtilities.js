import React, { useState } from 'react'

export default function TextUtilities() {
  const [text, setText] = useState("enter text");
  const handleOnclick = () =>  {
    setText(text.toUpperCase());
  };
  const handleChange = (event) => {
    setText(event.target.value);
  }
  return (
    <div className='container'>
        <h3>Enter your text below</h3>
        <textarea className="form-control" value={text} onChange={handleChange} rows="3" />
        <button className='btn btn-primary mt-3' onClick={handleOnclick} >Convert into Upper Case</button>
    </div>
  )
}
