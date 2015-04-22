/*
Angular-ui bootstrap datepicker
http://angular-ui.github.io/bootstrap/#/datepicker
*/
angular.module('xeditable').directive('editableGooglePlaces', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableGooglePlaces',
      inputTpl: '<input type="text" g-places-autocomplete>'
    });
}]);
