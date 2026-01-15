import React, { useState } from "react";

const PasswordGenerator = () => {
    const [password,setPassword]=useState('hello')
  const [passwordLength, setPasswordLength] = useState(6);
  const [uppercase, setUppercase] = useState(false);
  const [specialchar, setSpecialchar] = useState(false);
  const [numbers, setNumbers] = useState(false);
  function generate(){
    let data = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "1234567890";
    const special = '!@#$%&;:';
    if(uppercase){ data+=upper;}
    if(numbers){data+=nums;}
    if(specialchar){data+=special;}
    
    let result = '';
    for(let i = 0; i < passwordLength; i++){
      result += data.charAt(Math.floor(Math.random() * data.length));
    }
    setPassword(result);
  }
  const handleLengthChange = (e) => {
    const length = e.target.value;
    setPasswordLength(length);
  };
  return (
    <div>
      <div className="flex items-center justify-center ">
        <label>Password Length:</label>
        <input className="border ml-1 w-12 bg " onChange={handleLengthChange} defaultValue={passwordLength}/>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <label htmlFor="uppercase">Include Uppercase:</label>
          <input
            type="checkbox"
            id="uppercase"
            className="ml-2"
            onChange={() => {
              setUppercase(!uppercase);
            }}
          />
        </div>
        <div>
          <label htmlFor="lowercase">Include Special Char:</label>
          <input
            type="checkbox"
            id="lowercase"
            className="ml-2"
            onChange={() => {
              setSpecialchar(!specialchar);
            }}
          />
        </div>
        <div>
          <label htmlFor="numbers">Include Numbers:</label>
          <input
            type="checkbox"
            id="numbers"
            className="ml-2"
            onChange={() => {
              setNumbers(!numbers);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={generate}
          className=" bg-violet-500 text-white w-1/3 mt-6 p-2 rounded-lg hover:bg-violet-900"
        >
          Generate Password
        </button>
        <div className="flex justify-center  w-1/2 text-center mt-7 ">
          <h1 className="text-3xl text-blue-300">{password}</h1>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
