Template.post.events({
    'submit #post' : function(event){

      var text = event.target.text.value;
      Meteor.call("addPost", text);
      event.target.text.value = "";

      return false;
    }
});
