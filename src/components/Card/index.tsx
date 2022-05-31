import PropTypes from 'prop-types'

interface CardProps {
  children: React.ReactNode,
  reverse: boolean
}

function Card({ children, reverse }: CardProps) {
  return (
      <div className={`card${reverse ? ' reverse' : ''}`}>{children}</div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card