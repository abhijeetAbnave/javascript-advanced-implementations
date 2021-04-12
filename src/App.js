import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, Form, Button, Row, Col } from "bootstrap-4-react";

class filter extends Component {
  state = {
    content: "",
    name: ""
  };
  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handlePinChange = e => {
    this.setState({
      content: e.target.value
    });
    console.log("Pin ", e.target.value, typeof this.state.content);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.pin(this.state.content);
    this.props.username(this.state.name);
  };

  render() {
    return (
      <div>
        <div
          style={{
            // marginTop: "2em",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Form inline my="2 lg-0" onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Input
                  type="number"
                  onChange={this.handlePinChange}
                  value={this.state.content}
                  placeholder="Filter by Pin-Code"
                  mr="sm-9"
                  min="111111"
                  max="999999"
                />
              </Col>
              <Col>
                <Form.Input
                  type="string"
                  onChange={this.handleNameChange}
                  value={this.state.name}
                  placeholder="Filter by Name"
                  mr="sm-8"
                />
              </Col>
              <Col>
                <Button outline success type="submit" mr="sm-0" my="sm-0">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <div>
          <Button secondary onClick={this.props.clr}>
            X Clear Filters
          </Button>
        </div>
      </div>
    );
  }
}

// export default filter;

// const mapStatetoProps = state => {
//   return {
//     subject: state.subject,
//     class: state.class,
//   };
// };

// const mapDispatchtoProps = dispatch => {
//   return {
//     pin: pin => dispatch({ type: 'PIN', pin: pin }),
//     username: username => dispatch({ type: 'USERS', username: username }),
//   };
// };

export default // connect(mapStatetoProps, mapDispatchtoProps)
filter;
