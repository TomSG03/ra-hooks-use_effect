import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Details from './Details';
import Loading from './Loading';

function List({ url }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [details, setDetails] = useState();

  useEffect(() => {
    setLoading(true);
    return fetch(`${url}users.json`)
      .then((response) => response.json())
      .then((result) => {
        setList(result);
      })
      .catch((e) => {
        setError({ state: true, text: e.message });
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1000);
      });
  }, [url])

  function handlerId(id) {
    if (setDetails === id) return
    setDetails(id)
  }

  function getList() {
    return (
      <ul className='list'>
        {list.map((e) => <li className='list-item' key={e.id} onClick={() => handlerId(e.id)}>{e.name}</li>)}
      </ul>
    )
  }

  return (
    <div className='details-list'>
      {!loading ? getList() : <Loading />}
      {details && <Details url={url} id={details}/>}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.array,
  handlerId: PropTypes.func
}

export default List
