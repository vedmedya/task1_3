import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const texts = ['Show Element Below', 'Hide Element Below'];

function App() {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('Hide Element Below');
  return (
    <div style={styles.container}>
      <button
        onClick={() => {
          if (visible) {
            setVisible(false);
            setText('Show Element Below');
          } else {
            setVisible(true);
            setText('Hide Element Below');
          }
        }}
      >
        {text}
      </button>
      {visible && <p>Toggle Challenge</p>}
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {},
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
