Posts = new Meteor.Collection("posts");

Meteor.publish('posts' , function(){
  var a = Posts.find({ by: this.userId});
  return a;
});

Meteor.methods({

  addPost : function(post){

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }



    Posts.insert({
      post : post,
      date : new Date(),
      by : Meteor.userId(),
      likes : 0,
      dislikes : 0

    });
  },

  getPosts : function(){
    return Posts.find({});
  }

});
