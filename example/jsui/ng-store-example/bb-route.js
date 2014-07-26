(function(){
  // "use strict";
  var AppRouter = Backbone.Router.extend({ 
    routes: {"help":"help", "product/:id":"product"}, 
      help: function() { 
        //alert("help");
      }, 
      product: function(id) { 
                 alert("product id: " + id + ";");
               } 
  }); 

  var app_router = new AppRouter;
  Backbone.history.start();

})();
