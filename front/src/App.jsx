import React, { useState } from 'react';
import Form_st from "./components/Form_st"
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Открыть форму</button>
      <Form_st isOpen={showModal} onClose={() => setShowModal(false)} />

      <button onClick={() => setShowModal(true)}>Открыть форму</button>
      <Form_st isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
