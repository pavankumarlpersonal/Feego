Template.login.events({
    'click #google-sign-in' : function(event){

      Meteor.loginWithGoogle({
        requestPermissions : ['profile' , 'https://www.googleapis.com/auth/plus.login'],
        loginStyle : 'popup'
      } , function(error){
          if(error){
            // means error
          }else{
            // success
            console.log('everytime')
          }
      });

    },
})
