(function() {
    var app = {
      'routes': {
        'blog': {
          'rendered': function() {
            app.preventScroll();
          }
        },
        'projects': {
          'rendered': function() {
            app.preventScroll();
          }
        },
        'hobbies': {
          'rendered': function() {
            app.preventScroll();
          }
        },
        'contact': {
          'rendered': function() {
            app.preventScroll();
          }
        },
        'the-default-view': {
          'rendered': function() {
            app.preventScroll();
          }
        },
      },
      'default': 'the-default-view',
      'preventScroll': function() {
        document.querySelector('html').scrollTop = 0;
        document.querySelector('body').scrollTop = 0;
      },
      'routeChange': function() {
        app.routeID = location.hash.slice(1);
        app.route = app.routes[app.routeID];
        app.routeElem = document.getElementById(app.routeID);
        app.route.rendered();
      },
      'init': function() {
        window.addEventListener('hashchange', function() {
          app.routeChange();
        });
        if (!window.location.hash) {
          window.location.hash = app.default;
        } else {
          app.routeChange();
        }
      }
    };
    window.app = app;
  })();
  
  app.init();