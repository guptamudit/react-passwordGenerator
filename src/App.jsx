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
        <p className="mt-[13px]">Password Generator</p>

        <div className="flex flex-row items-center overflow-hidden mt-4 mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none py-1 px-3 bg-transparent text-white text-[20px] bg-slate-600 rounded-lg ml-[37px]" // Add background and text color styles
            placeholder="Password"
            readOnly
          />
          <button
            className="py-1 px-3 text-[20px] bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 ml-[5px] rounded-lg"
            // onClick={handleButtonClick} // Add your click event handler function
          >
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
