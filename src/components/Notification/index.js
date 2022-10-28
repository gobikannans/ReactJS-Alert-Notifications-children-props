import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification-container">
      {children}
      <GrFormClose className="cross-icon" />
    </div>
  )
}

export default Notification
