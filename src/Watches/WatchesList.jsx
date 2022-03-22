import PropTypes from 'prop-types'
import Clock from './Clock';

function WatchesList({ clocks, onDelete }) {
  const clockList = clocks.map((item) => <Clock className='clock' key={item.id} onDelete={onDelete} time={item} />)

  return (
    <div className='clock-list'>
      {clockList}
    </div>
  )
}

WatchesList.propTypes = {
  clocks: PropTypes.array
}

export default WatchesList
