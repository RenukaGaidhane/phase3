import React, { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://backend:5000/api/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(err => console.error("Error fetching notes:", err));
  }, []);

  return (
    <div>
      <h1>My Notes</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
