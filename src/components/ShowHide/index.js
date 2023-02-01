// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    name1: true,
    name2: true,
  }

  onClickName1 = () => {
    this.setState(prevState => ({name1: !prevState.name1}))
  }

  onClickName2 = () => {
    this.setState(prevState => ({name2: !prevState.name2}))
  }

  render() {
    const {name1} = this.state
    const {name2} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickName1}
            >
              Show/Hide Firstname
            </button>
            {name1 && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickName2}
            >
              Show/Hide Lastname
            </button>
            {name2 && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
