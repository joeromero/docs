docs.ui.Models.Navbar = cdb.core.Model.extend({
  defaults: {
    hidden: true
  }
});

docs.ui.Views.Navbar = cdb.core.View.extend({
  el: '.navbar',

  events: {
    'click .nav-button': '_toggle'
  },

  initialize: function() {
    this.model = new docs.ui.Models.Navbar();

    this.model.on("change:hidden", this._toggleNav, this);

    this.$menu = this.$('.nav-collapse');
  },

  _toggle: function(e) {
    e.preventDefault();

    this.model.set('hidden', !this.model.get('hidden'));
  },

  _toggleNav: function() {
    if (this.model.get('hidden')) {
      this.$menu.animate({ height: '1px' });
    } else {
      this.$menu.animate({ height: '210px' });
    }
  }
});
