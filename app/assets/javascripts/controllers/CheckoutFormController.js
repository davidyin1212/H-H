angular.module('HH')
.controller('CheckoutFormController', ['$scope',
  function($scope) {
  $scope.cardNumber;
  $scope.cardCvc;
  $scope.cardExpiry;
  $scope.cardType;

  $scope.submitClicked = function() {
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  // Disable the submit button to prevent repeated clicks
  // $form.find('button').prop('disabled', true);

  Stripe.card.createToken({
    number: $scope.cardNumber,
    cvc: $scope.cardCvc,
    exp_month: $scope.cardExpiry.month,
    exp_year: $scope.cardExpiry.year
  }, stripeResponseHandler);

  // Prevent the form from submitting with the default action
  return false;
}

function stripeResponseHandler(status, response) {
  var $form = $('#payment-form');

  if (response.error) {
    // Show the errors on the form
    $form.find('.payment-errors').text(response.error.message);
    $form.find('button').prop('disabled', false);
  } else {
    // response contains id and card, which contains additional card details
    var token = response.id;
    // Insert the token into the form so it gets submitted to the server
    $form.append($('<input type="hidden" name="stripeToken" />').val(token));
    // and submit
    $form.get(0).submit();
  }
};
}]);