import './index.css'

const SuggestionItem = props => {
  const {itemDetails, updateInput} = props
  const {suggestion} = itemDetails

  const onUpdateValue = () => {
    updateInput(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="btn-style" onClick={onUpdateValue}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-logo"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
