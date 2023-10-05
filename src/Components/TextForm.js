import React, { useState } from 'react'

export default function TextForm() {
  const [text, setText] = useState('');
  const handleOnclick = () =>  {
    setText(text.toUpperCase());
  };
  const convertToLower = () =>  {
    setText(text.toLowerCase());
  };
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const clearText = () => {
    setText('');
  }
  return (
    <>
    <div className='container'>
        <h3>Enter your text below</h3>
        <textarea className="form-control" value={text} onChange={handleChange} rows="3" />
        <button className='btn btn-primary mt-3' onClick={handleOnclick} >Convert to UpperCase</button>
        <button className='btn btn-primary mt-3 mx-3' onClick={convertToLower} >Convert to LowerCase</button>
        <button className='btn btn-primary mt-3 mx-3' onClick={clearText} >Clear Text</button>
    </div>
    <div className='container'>
      <h3>Text summary</h3>
      <p>{text.split(" ").length} words and {text.length}</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
