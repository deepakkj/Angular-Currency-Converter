/*angular.module('invoice1', [])
.controller('InvoiceController', function() {
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = ['USD', 'EUR', 'CNY'];
  this.usdToForeignRates = {
    USD: 1,
    EUR: 0.74,
    CNY: 6.09
  };

  this.total = function total(outCurr) {
    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
  };
  this.pay = function pay() {
    window.alert("Thanks!");
  };
});*/

var app = angular.module("currency-converter", []);

app.controller("currency-converter-ctrl", ['$scope', function($scope){
    $scope.qty = 1;
    $scope.cost = 2;
    $scope.currency = 'EUR';
    $scope.currencies = ['USD','EUR','CNY'];
    $scope.pay = function(){
        alert("Thanks for paying!");
    }
    

}]);