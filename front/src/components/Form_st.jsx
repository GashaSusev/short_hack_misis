import React, { useState } from 'react';
import axios  from "axios";

function Form_st({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    field: '',
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Введите данные</h2>
        <form onSubmit={handleSubmit}>

          <label htmlFor="name">ФИО:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="name">Телеграм:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="name">Почта:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="gender">Каста:</label>
      <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Выберите свое направление</option>
        <option value="male">ML</option>
        <option value="back">Backend</option>
        <option value="front">Frontend</option>
        <option value="Сети и системное администрирование">Сети и системное администрирование</option>
        <option value="Алгоритмы и структуры данных">Алгоритмы и структуры данных</option>
      </select>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
  
}
axios.post("", { type: category, answers: items.join(",") }, { headers: {"Authorization" : `Bearer ${token}`} });
  }

export default Form_st