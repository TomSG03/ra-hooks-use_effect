import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading';

function Details({ url, id }) {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    return fetch(`${url}${id}.json`)
      .then((response) => response.json())
      .then((result) => {
        setDetails(result);
        console.log(result);
      })
      .catch((e) => {
        setError({ state: true, text: e.message });
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1000);
      });
  }, [url, id])

  return (
    <div className='details-item'>
     {loading ? <Loading /> : <div>{id}</div> }      
    </div>
  )
}

Details.propTypes = {}

export default Details


// import React from 'react'
// import { connect } from 'react-redux'

// export const Details = (props) => {
//   return (
//     <div>Details</div>
//   )
// }

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Details)