import React, { useState } from 'react';
import WatchesForm from './WatchesForm';
import WatchesList from './WatchesList';
import shortid from 'shortid';

function Watches() {
  const [clocks, setClocks] = useState([]);

  function onDelete(id) {
    const copy = clocks.filter((e) => e.id !== id);
    setClocks(copy);
  }

  function submitForm(form) {
    if (form.name === '' || form.timeZone === '') return;
    const copy = [...clocks, {id: shortid.generate(), name: form.name, timeZone: form.timeZone}];
    setClocks(copy);
  } 

  return (
    <>
      <WatchesForm submitForm={submitForm}/>
      <WatchesList clocks={clocks} onDelete={onDelete}/>
    </>
  )
}

export default Watches
