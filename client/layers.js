var prepareLayers = function () {
  // prepare layers
};


Deps.autorun(function (c) {
  if (Session.equals("map-ready", true)) {
    c.stop();

    // Do all one-time stuff here
    prepareLayers();
  }
});
