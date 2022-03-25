import React, { Component } from "react";
class Field extends Component {
  render() {
    return (
      <div className="form-group">
        {this.props.elementName === "input" ? (
          <input
            className="form-control"
            id={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            data-sb-validations="required"
            name={this.props.name}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
        ) : (
          <textarea
            className="form-control"
            id={this.props.name}
            placeholder={this.props.placeholder}
            data-sb-validations="required"
            name={this.props.name}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
        )}
        <p className="help-block text-danger">
          {this.props.touched && this.props.errors && (
            <span>This field is required</span>
          )}
        </p>
        <div className="invalid-feedback" data-sb-feedback="name:required">
          A name is required.
        </div>
      </div>
    );
  }
}

export default Field;
