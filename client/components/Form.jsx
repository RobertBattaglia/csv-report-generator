import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { val: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ val: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" action="/csv">
          <textarea
            onChange={this.handleChange}
            value={this.state.val}
            rows="20"
            cols="60"
            name="data"
            placeholder="json data"
          />
          <button
            style={{ display: 'block', textAlign: 'center' }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
