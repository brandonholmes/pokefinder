import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");

  function updateContent(e) {
    setContent(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    action(content);
    setContent("");
  }

  return (
    <form onSubmit={submit}>
      <input id="inputBox" value={content} onChange={updateContent} />
    </form>
  );
}
