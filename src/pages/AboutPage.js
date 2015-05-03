/** @jsx React.DOM */

var React = require('react');

var Layout = require('../layout/Layout.js');

var AboutPage = React.createClass({
  render: function() {
    return (
      <Layout active="about">
        <h1>About Drawable</h1>
        <p>This aboutable gives no real insight into the inner workings of our project. This page only serves one purpose ... and that is to satisfy David Hartmann</p>
      </Layout>
    );
  }
});

module.exports = AboutPage;