$.get("assets/prices.json")
  .done(function(prices) {
    for (var key in prices) {
      if (prices.hasOwnProperty(key)) {
        $("#" + key).text(prices[key]);
      }
    }
  });