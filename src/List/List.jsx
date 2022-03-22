import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Details from './Details';
import Loading from './Loading';
import Error from './Error';

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
        setError(null);
      })
      .catch((e) => {
        setError({ state: true, text: e.message });
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1000);
      });
  }, [url])

  function handlerId(id) {
    setDetails(id)
  }

  function getList() {
    return (
      <ul className='list'>
        {list.map((e) => <li className={`list-item ${details === e.id ? 'selected' : ''}`} key={e.id} onClick={() => handlerId(e.id)}>{e.name}</li>)}
      </ul>
    )
  }

  return (
    <div className='details-list'>
      {(!loading && !error) ? getList() : <Loading />}
      {error && <Error error={error} />}
      {details && <Details url={url} id={details} />}
    </div>
  )
}

List.propTypes = {
  url: PropTypes.string
}

export default List
