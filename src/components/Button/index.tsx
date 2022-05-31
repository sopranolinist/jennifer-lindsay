

import PropTypes from 'prop-types'

type ButtonType = "button" | "submit" | "reset" | undefined

interface ButtonProps {
  version: string,
  type: ButtonType,
  label: string,
  isDisabled: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ version, type, label, isDisabled, onClick}: ButtonProps) {

  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`} onClick={onClick}>
      {label}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
  label: 'Submit',
  onClick: () => {}
}

Button.propTypes = {
  children: PropTypes.node,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button