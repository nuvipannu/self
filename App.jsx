// App component -- represents the entire app
App = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        const moments = Moments.find().fetch();
        console.log('What are the moments?', moments);
        return {
            moments
        };
    },

    componentDidMount() {
    },

    render() {
        return (
            <div className="template-container">
                <TemplateSidebar />
                <TemplateContent moments={this.data.moments} />
            </div>
        );
    }
});