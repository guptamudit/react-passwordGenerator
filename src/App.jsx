import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");

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
    }
    pass = str.charAt(char);

    setPass(pass);
  }, [length, numberAllow, charAllow, setPass]);

  return (
    <>
      <div className="rounded-lg w-full max-w-md mx-auto text-center px-4 my-8 text-2xl text-white flex flex-col bg-gray-500">
        <p className="mt-[13px] pr-[2.25rem] md:pr-0">Password Generator</p>

        <div className="flex flex-wrap flex-col	 items-center overflow-hidden mt-4 mb-4 md:flex-row">
          <input
            type="text"
            value={pass}
            className="outline-none py-1 px-3 bg-transparent text-white text-[20px] bg-white rounded-lg md:mr-2 md:ml-[32px]"
            placeholder="Password"
            readOnly
          />
          <button
            className="py-1 px-3 text-[20px] bg-blue-500 text-white rounded-r-lg hover:bg-blue-600  ml-[-177px] mt-[12px] md:ml-[8px] md:mt-0 rounded-lg"
            // onClick={handleButtonClick} // Add your click event handler function
          >
            Copy
          </button>
        </div>
        <div className="flex flex-row mb-3">
          <input className="ml-[83.5px] md:ml-[31px]" type="range" />
        </div>
      </div>
    </>
  );
}

export default App;

