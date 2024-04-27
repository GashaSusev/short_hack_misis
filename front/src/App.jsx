import React, { useState } from 'react';
import Form_st from "./components/Form_st"
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='main'>
      <div className='header'>
      <button onClick={() => setShowModal(true)}>менти</button>
      <Form_st isOpen={showModal} onClose={() => setShowModal(false)} />

      <button onClick={() => setShowModal(true)}>ментор</button>
      <Form_st isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}

export default App;
