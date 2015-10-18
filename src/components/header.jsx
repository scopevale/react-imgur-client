var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');

var Header = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function () {
    return {
      topics: []
    };
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function() {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Imgur Browser
          </Link>
          <ul className="nav navbar-nav navbar-right">
            {this.renderTopics(3)}
          </ul>
        </div>
      </nav>
    );
  },
  renderTopics: function (num) {
    num = num || 3; // the number of topics to show, default = 3
    return this.state.topics.slice(0, num).map(function (topic) {
      return (
        <li key={topic.id}>
          <Link activeClassName="active" to={"topics/" + topic.id}>
            {topic.name}
          </Link>
        </li>
      );
    });
  },
  onChange: function (event, topics) {
    this.setState({topics: topics});
  }
});

module.exports = Header;
