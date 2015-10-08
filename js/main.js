(function () {

  var templateString = $('#itemTemplate').html();

  var templateFunction = _.template(templateString);

  var firstTwentyFive = _.first(etsy.results,25);

  console.log(firstTwentyFive);

  _.each(etsy.results, function (item) {
    console.log(item);
    var itemHTML = templateFunction(item);
    $('.itemBoxes').append(itemHTML);
  });



}());