MomentList = React.createClass({
  propTypes: {
    moments: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  renderMoments() {
    return this.props.moments.reverse().map((moment) => {
      return <Moment moment={moment} key={moment._id} />;
    });
  },
  render() {
    return (
      <div className="moment-list ui items">
        {this.renderMoments()}
      </div>
    );
  }
});
