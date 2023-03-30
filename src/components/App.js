import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import axios from "axios";
import "./styles.css";
import Button from "./Button";

function App() {
  let [Book, setBook] = useState([]);
  const [chapter_ids, setChapterIds] = useState([]);

  const apifetch = () => {
    return axios
      .get("http://18.177.140.79:8080/books/")
      .then((res) => {
        const { chapter_ids } = res.data;
        setChapterIds(chapter_ids);
        setBook(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    apifetch();
  }, []);

  return (
    <div className="body">
      <div className="container">
        <div>
          <div className="box1">
            {Book.map((ch) => (
              <Button
                key={ch.id}
                name={ch.title}
                onClick={() => {
                  Book.map(book => {
                    const chapterIds = ch.chapter_ids;
                    console.log(chapterIds)
                    const buttons = chapterIds.map(chapterId => {
                      return (
                        <Button key={chapterId} name={chapterId} onClick={() => console.log('clicked')}>
                        </Button>
                      )});
                      ReactDOM.render(buttons, document.getElementById('btns'))
                })
                }}
              />
            ))}
          </div>
          <div className="box2" id="btns">
            {Book.map((ch) => (
              <Button name={ch.id} key={ch.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
