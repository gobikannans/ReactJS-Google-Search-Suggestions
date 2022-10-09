import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  updateInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const updatedSearchList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="google-logo"
            />
          </div>
          <div className="search-box-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input"
                onChange={this.onSearchValue}
                value={searchInput}
              />
            </div>
            <ul className="list-container">
              {updatedSearchList.map(eachItem => (
                <SuggestionItem
                  itemDetails={eachItem}
                  key={eachItem.id}
                  updateInput={this.updateInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
