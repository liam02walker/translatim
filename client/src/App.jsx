import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("en");
  const [word, setWord] = useState("");
  const [response, setResponse] = useState({});

  async function handleTranslate(event) {
    event.preventDefault();

    const API = `https://translatim-cvem.onrender.com/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);

    setResponse(res.data);
  }

  return (
    <>
      <div className="translateContainer">
        <h1>Translation</h1>
        <div className="translateBox">
          <div className="leftSide">
            <form className="leftForm" onSubmit={handleTranslate}>
              <select className="leftSelect" onChange={(event) => setFrom(event.target.value)} name="userLang" id="userLang">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="ru">Russian</option>
                <option value="ar">Arabic</option>
              </select>
              <input className="leftInput" onChange={(event) => setWord(event.target.value)} type="text" placeholder="Translate" />
            </form>
          </div>
          <div className="rightSide">
            <form className="rightForm">
              <select className="rightSelect" onChange={(event) => setTo(event.target.value)} name="translationLang" id="translationLang">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="ru">Russian</option>
                <option value="ar">Arabic</option>
              </select>
            </form>
            <div className="output">
              <h2 className="outputH2">{response.translation}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
