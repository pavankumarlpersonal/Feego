Meteor.startup(function(){
  Meteor.subscribe('posts' , {
    onError : function(){
      console.log('error:' + arguments);
    },
    onReady: function(){
      console.log(arguments);
    }
  });

});


Template.feed.helpers({
  /*posts : function(){
    Meteor.call('getPosts' , function(error , result){
        if(error){
          //error
        }else{
          console.log(result);
        }
    });
  }*/
});
