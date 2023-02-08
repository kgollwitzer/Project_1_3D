require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera) {

      var scene = new WebScene({
        portalItem:{
         id:"11c12cc3d62543e4a123677750e90f28" 
        }
      });
       var view = new SceneView({
        container: "viewDiv",
        map: scene,
		viewingMode:'global'
      });
  
      var camera1 = new Camera({
        position: {
          x: -86.7816,
          y: 36.1627,
          z: 120
        },
        tilt: 90,
        heading: 0
      });
  
         [nash].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    nash.addEventListener('click', function() {
view.goTo({
        target:camera1
      });
    });
    });