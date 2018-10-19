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
        'projects': preventScroll,
        'hobbies': preventScroll,
        'contact': preventScroll,
        'home': preventScroll,
      },
      'default': 'home',
    };
    window.app = app;
  })();
  
  app.init();