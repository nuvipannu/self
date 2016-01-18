TemplateContent = React.createClass({

    propTypes: {
        moments: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },

    render() {
        return (
            <section className="template-content">
                <MomentList moments={this.props.moments} />
            </section>
        );
    }
});