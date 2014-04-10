docs.Views.Home = cdb.core.View.extend({
  el: document.body,

  events: {

  },

  initialize: function() {
    this._initViews();
  },

  _initViews: function() {
    this.nav = new docs.ui.Views.Nav();
  }
});
