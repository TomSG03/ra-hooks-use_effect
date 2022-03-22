import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading';
import Error from './Error';

function Details({ url, id }) {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    return fetch(`${url}${id}.json`)
      .then((response) => response.json())
      .then((result) => {
        setDetails(result);
        setError(null);
      })
      .catch((e) => {
        setError({ state: true, text: e.message });
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1000);
      });
  }, [url, id])

  const DetailsItem = () => {
    return (
      <div className='details-item'>
        <img src={details.avatar} alt={`Foto ${details.name}`} />
        <div className="itemContent">{details.name}</div>
        <div className="itemContent">{details.details.city}</div>
        <div className="itemContent">{details.details.company}</div>
        <div className="itemContent">{details.details.position}</div>
      </div>
    )
  }

  return (
    <div className='details'>
     {(loading || error) ? <Loading /> : <DetailsItem />}   
     {error && <Error error={error}/>}   
    </div>
  )
}

Details.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number
}

export default Details
