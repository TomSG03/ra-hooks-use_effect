import React, { useState } from 'react'
import PropTypes from 'prop-types'

function WatchesForm({ submitForm }) {
  const [form, setForm] = useState({id: '', name: '', timeZone: ''});

  function inputForm({ target }) {
    setForm((prev) => {
      if (target.name === 'name') {
        return { ...prev, name: target.value };
      }
      if (target.name === 'timezone') {
        return { ...prev, timeZone: target.value };
      }
    })
  } 

  function submit(e) {
    e.preventDefault();
    submitForm(form);
    setForm({id: '', name: '', timeZone: ''});
  }


  return (
    <form className='input-form'>
      <div className='form-name'>
        <label htmlFor="Name">Название</label>
        <input name='name' value={form.name} type='text' onChange={inputForm} required />
      </div>
      <div className='form-timezone'>
        <label htmlFor="Time zone">Временная зона</label>
        <input name='timezone' value={form.timeZone} type='number' onChange={inputForm} required />
      </div>
      <button className='btn-add' onClick={submit}>Добавить</button>
    </form>
  )
}

WatchesForm.propTypes = {
  form: PropTypes.object,
  inputForm: PropTypes.func,
  submitForm: PropTypes.func,
}

export default WatchesForm
