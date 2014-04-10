docs.ui.Models.Nav = cdb.core.Model.extend({
  defaults: {
    hidden: true
  }
});

docs.ui.Views.Nav = cdb.core.View.extend({
  el: '.nav-mobile',

  events: {
    'click .nav-button': '_toggle'
  },

  initialize: function() {
    this.model = new docs.ui.Models.Nav();

    this.model.on("change:hidden", this._toggleNav, this);
  },

  _toggle: function() {
    this.model.set('hidden', !this.model.get('hidden'));
  },

  _toggleNav: function() {
    if (this.model.get('hidden')) {

    } else {

    }
  }
});
