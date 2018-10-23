(function() {
    var preventScroll = {
        'rendered': function() {
          document.querySelector('html').scrollTop = 0;
          document.querySelector('body').scrollTop = 0;
        }
      }
    var app = {
      'routes': {
        'blog': preventScroll,
        'about': preventScroll,
        'home': preventScroll,
      },
      'default': 'home',
    };
    window.app = app;
  })();
  
  app.init();