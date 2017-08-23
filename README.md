# zoomy
Lightweight VanillaJS plugin for zooming images on hover. Super simple to use, easy to customise and only 1kb minified.

### Installation
Save zoomy.min.js locally and reference it in your HTML file, ideally at the end of the body.

### Usage
Any image that you want to zoom has to have a container element with the class 'zoomy' (or whatever custom class you pass in the options when initiating it).

```html
<script src="zoomy.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () { 
      initZoomy({});
  });
</script>
```

