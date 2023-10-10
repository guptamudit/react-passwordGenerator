import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");

  //ref hook
  const passwordReff = useRef("");
  const passwordCopy = useCallback(() => {
    window.navigator.clipboard.writeText(pass);
    // passwordReff.current?.select();
    // passwordReff.current?.setSelectionRange(0, 3);
    alert("Copied To Clipboard");
  }, [pass]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";

    if (numberAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*+_~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPass(pass);
  }, [length, numberAllow, charAllow]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="rounded-lg w-full max-w-md mx-auto text-center px-4 my-8 text-2xl text-white flex flex-col bg-gray-500">
        <p className="mt-[13px] pr-[2.25rem] md:pr-0 text-center ml-6 md:text-center md:ml-0">
          Password Generator
        </p>

        <div className="flex flex-wrap flex-col	 items-center overflow-hidden mt-4 mb-4 md:flex-row">
          <input
            type="text"
            value={pass}
            className="outline-none py-1 px-3 bg-transparent text-black text-[20px] bg-white rounded-lg md:mr-2 md:ml-[32px]"
            placeholder="Password"
            readOnly
            ref={passwordReff}
          />
          <button
            className="py-1 px-3 text-[20px] bg-blue-500 text-white rounded-r-lg hover:bg-blue-600  ml-[-177px] mt-[12px] md:ml-[8px] md:mt-0 rounded-lg"
            onClick={passwordCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col md:flex-row mb-3">
          <input
            className="ml-[83.5px] md:ml-[31px] w-[250px] md:w-[112px] cursor-pointer"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-sm text-center ml-1 mb-[2px]">
            Length {length}
          </label>
          <input
            className="ml-[6px]"
            type="checkbox"
            defaultChecked={numberAllow}
            onChange={() => {
              setNumberAllow((prev) => !prev);
            }}
          />
          <label className="text-sm text-center ml-1 mb-[2px]">Numbers</label>
          <input
            className="ml-[6px]"
            type="checkbox"
            defaultChecked={charAllow}
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label className="text-sm text-center ml-1 mb-[2px]">
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
