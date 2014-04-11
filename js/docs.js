docs.Views.Home = cdb.core.View.extend({
  el: document.body,

  events: {

  },

  initialize: function() {
    this._initViews();
    // this._initBindings();
  },

  _initViews: function() {
    this.nav = new docs.ui.Views.Nav();

    this._buildToc();
  },

  _initBindings: function() {
    $(window)
      .on('scroll', this._onScroll)
      .on('resize', this._onScroll);
  },

  _onScroll: function() {

  },

  _buildToc: function() {
    var $item = $('<ul>'),
      $el,
      title,
      link;

    $('h1').each(function() {
      $el = $(this);
      title = $el.text();
      link = "#" + $el.attr("id");

      $item.append("<li><h2><a href='"+link+"'>"+title+"</a></h2></li>");

      var $subItem = $('<ul>'),
        $subEl,
        subTitle,
        subLink;

      $(this).nextAll('h4,h3,h2,h1').each(function(j) {
        if ($(this).is('h1')) return false;

        $subEl = $(this);
        subTitle = $subEl.text();
        subLink = "#" + $subEl.attr("id");

        $subItem.append("<li><a href='"+subLink+"'>"+subTitle+"</a></li>");
      });

    $item.append($subItem);
    });

    $(".nav-inner").prepend($item);
  }
});
