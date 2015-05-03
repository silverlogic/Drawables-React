/** @jsx React.DOM */

var React = require('react');
var ReactHack = require('ReactHack');

var Button = require('../components/Button');
var Layout = require('../layout/Layout');
var Spinner = require('../components/Spinner');
var Photo = require('../data/Photo');

var HomePage = React.createClass({
  mixins: [ReactHack.FetchingMixin],

  modelState: ['photos'],
  fetchPollInterval: 60000,

  fetchData: function() {
    Photo.getAll(this.stateSetter('photos'));
  },

  getInitialState: function() {
    return {photos: null, modalShown: false};
  },

  render: function() {
    var content;
    if (this.state.photos) {
      var pics = this.state.photos.models.map(function(model) {
        var url = model.get('image').url();
        var user = model.get('user');
        console.log(user);

        return (
          <li > <a href={'#/pages/' + user.id}> <img src={url}/> </a> </li>
        );
      });
      content = (
        <ul class='cbp-rfgrid'>
          {pics}
        </ul>
      );
    } else {
      content = <Spinner />;
    }

    return (
      <Layout active="home">
        {content}
      </Layout>
    );
  }
});

module.exports = HomePage;