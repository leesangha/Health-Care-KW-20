import React, { useState } from 'react';

function Register(props) {
  const [state, setState] = useState({
    file: "",
    imagePreviewUrl: ""
  });
  const handleFileInput = e => {
    const reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = () => {
      setState({
        file: file,
        imagePreviewUrl: reader.result
      });
      reader.readAsDataURL(file);
    };
  };

  return (
    <div>
      <input type="file" onChange={handleFileInput} />
      <button onChange >제출</button>
    </div>
  );
}

export default Register;