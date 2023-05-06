var obj = {
  outer: function() {
     var self = this;
     console.log(self);
     var innerFunc = function () {
        console.log(self);
     };
     innerFunc();
  }
};
obj.outer();

// call
var obj = {
  outer: function() {
      console.log(this);
        var innerFunc = function () {
          console.log(this);
       };
        innerFunc.call(this);
   }
};
obj.outer();

// bind
var obj = {
  outer: function() {
      console.log(this);
        var innerFunc = function () {
          console.log(this);
       }.bind(this);
        innerFunc();
   }
};
obj.outer();