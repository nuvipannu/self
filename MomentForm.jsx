MomentForm = React.createClass({
    getInitialState() {
        return {};
    },
    handleSubmit(event) {
        event.preventDefault();

        const title = React.findDOMNode(this.refs.title).value.trim();
        const description = React.findDOMNode(this.refs.description).value.trim();
        const time = moment(React.findDOMNode(this.refs.time).value).toDate();

        const timeIsValid = HelperFunctions.isValidDate(time);

        if (description && timeIsValid) {
            if (Moments.insert({title, description, time})) {
                this.resetForm();
            } else {
                this.setState({
                    error: 'Something went wrong adding the moment'
                });
            }
            return;
        }
        this.setState({
            missingTitle: !title
        });
        this.setState({
            missingDescription: !description
        });
        this.setState({
            missingTime: !timeIsValid
        });

    },
    getStyles() {
        const errorBorder = {
            border: '1px solid red'
        };
        return {
            descriptionStyle: this.state.missingDescription ?
                errorBorder : {},
            titleStyle: this.state.missingTitle ?
                errorBorder : {},
            timeStyle: this.state.missingTime ?
                errorBorder : {}
        };
    },
    getErrorClass() {
        const errorClass = "field error";
        return {
            titleErrorClass: this.state.missingDescription ?
                errorClass : "field",
            descriptionErrorClass: this.state.missingTitle ?
                errorClass : "field",
            timeErrorClass: this.state.missingTime ?
                errorClass : "field"
        };
    },
    getErrors() {
        return {
            titleError: this.state.missingTitle ?
                <ErrorMsg text="Title is required" /> : '',
            descriptionError: this.state.missingDescription ?
                <ErrorMsg text="Description is required" /> : '',
            timeError: this.state.missingTime ?
                <ErrorMsg text="Time is required" /> : ''
        };
    },
    resetForm() {
        React.findDOMNode(this.refs.momentForm).reset();
        this.setState({
            missingDescription: false,
            missingTime: false
        });
    },
    render() {
        const { descriptionStyle, titleStyle, timeStyle } = this.getStyles();
        const { descriptionError, titleError, timeError } = this.getErrors();
        const { titleErrorClass, descriptionErrorClass, timeErrorClass } = this.getErrorClass();

        return (
            <div className="moment-form ui form">
                <form onSubmit={this.handleSubmit} ref="momentForm">
                    <div className={timeErrorClass}>
                        <label>When did it happen?</label>
                        <input type="date" ref="time" />
                        <div className="ui error message">
                            {timeError}
                        </div>
                    </div>
                    <div className={titleErrorClass}>
                        <label>What is the moment?</label>
                        <input type="text" ref="title" />
                        <div className="ui error message">
                            {titleError}
                        </div>
                    </div>
                    <div className={descriptionErrorClass}>
                        <label>What happened?</label>
                        <textarea rows="2" ref="description" />
                        <div className="ui error message">
                            {descriptionError}
                        </div>
                    </div>
                    <div className="control-buttons">
                        <button type="reset" className="ui button">Reset</button>
                        <button type="submit" className="ui button primary">Add Moment</button>
                    </div>
                </form>
            </div>
        );
    }
});
