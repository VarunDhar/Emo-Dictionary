import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./entry";
function entry(emojiItem) {
  return (
    <Entry
      key={emojiItem.id}
      emoji={emojiItem.emoji}
      meaning={emojiItem.meaning}
      name={emojiItem.name}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(entry)}</dl>
    </div>
  );
}

export default App;
