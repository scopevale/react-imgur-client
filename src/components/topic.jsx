var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var ImagePreview = require('./image-preview');

var Topic = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function () {
    return {
      images: []
    };
  },
  componentWillMount: function() { // componentWillMount is only called once
    // console.log('Topic is about to fetch & render data');
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps) {
    Actions.getImages(nextProps.params.id);
  },
  render: function() {
    // console.log('Topic is rendering with ID: ', this.props.params.id);
    // console.log('I have this many images: ', this.state.images.length);
    return (
      <div className="topic">
        {this.renderImages()}
      </div>
    );
  },
  renderImages: function () {
    return this.state.images.slice(0, 20).map(function (image) {
      return (
        <ImagePreview key={image.id} {...image} />
      );
    });
  },
  onChange: function (event, images) {
    this.setState({images: images});
  }
});

module.exports = Topic;
