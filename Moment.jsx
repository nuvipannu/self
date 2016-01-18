Moment = React.createClass({
  propTypes: {
    moment: React.PropTypes.object.isRequired
  },
  dateFormat: 'MMM Do YYYY, h:mm a',

  getTimeString() {
    return moment(this.props.moment.time).format(this.dateFormat);
  },
  getCreatedAtString() {
      return moment(this.props.moment.createAt).format(this.dateFormat);
  },
  render() {
    return (

      <div className="moment item">
        <div className="y-tick">
          {this.getTimeString()}
            <i></i>
        </div>
          <div className="content">
              <a className="header">{this.props.moment.title}</a>
              <div className="description">
                  <p>{this.props.moment.description}</p>
              </div>
              <div className="extra">
                  {this.getCreatedAtString()}
              </div>
          </div>
      </div>
    );
  }
});
