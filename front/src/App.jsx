

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Показать модальное окно</button>
      {showModal && <Modal onClose={() => setShowModal(false)}>
        <h2>Содержание модального окна</h2>
        <p>Текст...</p>
      </Modal>}
    </div>
  );
}

export default App
