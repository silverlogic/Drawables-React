var Parse = require('parse').Parse;

var Photo = Parse.Object.extend('Photo', {}, {
  getUser: function(user_id, cb) {
    var collection = new Photo.Collection();
    var user = new Parse.User();
    user.id = user_id;
    collection.query = new Parse.Query(Photo).descending("createdAt").equalTo('user', user);
    collection.fetch({
      success: function(obj) {
        cb(obj);
      },
      error: function(obj, err) {
        console.error('getAll() error', obj, err);
      }
    });
    return collection;
  },
  getAll: function(cb) {
    var collection = new Photo.Collection();
    collection.query = new Parse.Query(Photo).descending("createdAt");
    collection.fetch({
      success: function(obj) {
        cb(obj);
      },
      error: function(obj, err) {
        console.error('getAll() error', obj, err);
      }
    });
    return collection;
  }
});

Photo.Collection = Parse.Collection.extend({
  model: Photo
});

module.exports = Photo;