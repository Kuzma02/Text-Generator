import { useState } from "react";
import data from "./data";
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [ text, setText ] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  }

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          onChange={handleChange}
          value={count}
          min={1}
          max={8}
          step={1}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        { text && text.map(t => (
            <p key={nanoid()}>{t}</p>
        )) }

        </article>
    </section>
  );
};
export default App;
