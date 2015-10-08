(function () {

  
  var templateString = $('#itemTemplate').html();

  var templateFunction = _.template(templateString);

  _.each(etsy.results, function (item) {
    console.log(item);
    var itemHTML = templateFunction(item);
    $('.bodycontainer').append(itemHTML);
  });



}());