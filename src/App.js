import React, { useState } from 'react';
import './style.css';
import zlib from 'browserify-zlib';

export default function App() {
  const [text, setText] = useState(0);

  let textInput = React.createRef();

  function deflate() {
    const content = textInput.current.value;
    console.log(content);
    var buffer = Buffer.from(content, 'base64');
    zlib.unzip(buffer, function(err, buffer) {
      console.log(buffer.toString());
    });
  }

  return (
    <div>
      <textarea ref={textInput} cols="70" rows="10" />

      <br />
      <button onClick={() => deflate(textInput)}>deflate</button>
    </div>
  );
}
