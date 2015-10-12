ErrorMsg = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="error-msg">
        {this.props.text}
      </div>
    );
  }
});
