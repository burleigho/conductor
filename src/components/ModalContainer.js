import React, { useState } from 'react';
import Modal from './Modal';

export default function ModalContainer() {
  const [show2, setShow2] = useState(false);
  
  return (
      <main>
        <h1>Modal</h1>
        <Modal show2={show2} setShow2={setShow2}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={() => setShow2(true)}>
          open
        </button>
      </main>
    );
}
