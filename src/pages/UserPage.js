/** @jsx React.DOM */

var React = require('react');

var Photo = require('../data/Photo');
var PhotoBlock = require('../components/PhotoBlock');
var Layout = require('../layout/Layout');

var UserPage = React.createClass({
  render: function() {
    return (
      <Layout>
        <PhotoBlock
          name={this.props.routeParams[0]}
        />
      </Layout>
    );
  }
});

module.exports = UserPage;