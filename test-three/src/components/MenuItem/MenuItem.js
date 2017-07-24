import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false, //Boolean state that handles the toggle of sub-section display.
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() { //Function triggered when menu-item title is clicked. Changes state to create toggling effect of sub-sections.
    this.setState({ display: !this.state.display })
  }

  render() {
    const {data} = this.props //de-structuring props to make code more easily readable

    let displayedInfo = this.state.display ? //variable that displays menu item name or name + sub-sections depending on click.
      <div>
        <h3 onClick={this.handleClick}>{data.name}</h3>
        {data.children.map((child, i) =>
          <p key={i}>{child.name}</p>
        )}
      </div>
      :
      <div>
        <h3 onClick={this.handleClick}>{data.name}</h3>
      </div>

    return (
      <div className="Item">
        {displayedInfo}
      </div>
    );
  }
}

export default MenuItem;
