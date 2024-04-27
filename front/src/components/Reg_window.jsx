function Reg_win() {

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <button onClick={onClose}>Закрыть</button>
      {children}
    </div>
  )
}

export default Reg_win