import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);

  const handleLengthIncrease = (e) => {
    e.preventDefault();

    setPasswordLength(passwordLength + 1);
  };

  const handleLengthDecrease = (e) => {
    e.preventDefault();

    if (passwordLength === 8) return;

    setPassword(password - 1);
  };

  // Generate random password
  const handlePasswordGenerate = React.useCallback(() => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    for (let i = 0; i < passwordLength; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
  }, [passwordLength]);

  // Auto-generate password when length changes
  React.useEffect(() => {
    handlePasswordGenerate();
  }, [passwordLength, handlePasswordGenerate]);

  return (
    <>

      <div className="h-screen w-screen flex items-center justify-center flex-col gap-y-5 bg-blue-300">
         <h1 className="text-6xl mb-[50px]">Random String Generator</h1>
        <input
          type="text"
          className="h-10 w-96 outline-none border border-slate-800 rounded-lg px-5 text-center bg-black text-white"
          value={password}
          readOnly
        />
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="h-10 px-5 text-xl font-bold bg-slate-700 text-slate-200 rounded-lg outline-none"
            onClick={handleLengthIncrease}
          >
            +
          </button>
          <input
            type="text"
            className="h-10 px-5 text-center outline-none border border-slate-800 rounded-lg"
            value={passwordLength}
            readOnly
          />
          <button
            className="h-10 px-5 text-xl font-bold bg-slate-700 text-slate-200 rounded-lg outline-none"
            onClick={handleLengthDecrease}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
