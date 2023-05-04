import React, { useState } from "react";

export default function TextForm({ heading,mode}) {
  const [text, setText] = useState("");
  const handle = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handlelo = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const ClearText = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1 style={{color:mode==="dark"?"white":"black"
        }}>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            value={text}
            rows="15"
            style={{background:mode==="dark"?"#042743":"white",color:mode==="dark"?"white":"black"}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handle}>
          lower to upper
        </button>
        <button className="btn btn-primary mx-3" onClick={handlelo}>
          upper to lower
        </button>
        <button className="btn btn-primary mx-3" onClick={ClearText}>
          Clear Text
        </button>
        {/* <button className="btn btn-primary mx-3" onClick={FontToCursive}>
          Change to Cursive
        </button> */}
      </div>
      <div className="container my-3" style={{color:mode==="dark"?"white":"black"
        }}>
        <h1 className="my-3">Your Text Summary</h1>
        <p>
          {text.split(".").length} sentences {text.split(" ").length} words{" "}
          {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Please Enter Your Text To Preview"}</p>
      </div>
    </>
  );
}
