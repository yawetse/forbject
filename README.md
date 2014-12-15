# forbject  [![NPM version](https://badge.fury.io/js/forbject.svg)](http://badge.fury.io/js/forbject)

** CommonJS/Browserified simple data view binding, without magic **

This is a quick and light weight vanilla JS way to data bind UI elements. 

When paired with ajax forms (check out  [formie](http://npmjs.org/package/formie)), provides a comprehensive data-binding ui framework without the baggage of a full framework.</p>

 [API Documenation](https://yawetse.github.io/forbject/api/html/index.html)

## Example

Check out `example/index.html`, the example javascript for the example page is `resources/js/example_src.js`

## Installation

```
$ npm install forbject
```

Binde is a browserified/commonjs javascript module.

## Usage

*JavaScript*
```javascript
var forbject = require('forbject'),
	myforbject;

var updateforbjectData = function(){
  forbject1.update({
    data: {
      field1: "field1 data, probably from database",
      field2: {
        field2html: "<h2>field2</h2><p>by default this uses EJS, you can use whatever template language you want</p>"
      }
    }
  });
};

//initialize nav component after the dom has loaded
window.addEventListener('load',function(){
	var tabelement = document.getElementById('tabs');
	myforbject = new forbject();
  myforbject.addBinder({
    prop: 'field1',
    elementSelector: '#field1',
    binderType: 'value'
  });
  myforbject.addBinder({
    prop: 'field2',
    elementSelector: '#field2',
    binderType: 'template',
    binderTemplate: document.querySelector('#field2-template').innerHTML
  });
	//expose your nav component to the window global namespace
	window.myforbject = myforbject;
  updateforbjectData();
});
```

*HTML*
```html
<html>
	<head>
  	<title>Your Page</title>
  	<script src='[path/to/browserify/bundle].js'></script>
	</head>
	<body>
    <section>
      <label for="field1">Field 1</label>
      <input type="text" value="" name="field1" id="field1" />
    </section>
    <section>
      <label for="field2">Field 2</label>
      <div id="field2"></div>
    </section>

    <script id="field2-template" type="text/template">
      <div>
          {{- field2html }}
      </div>
    </script>
	</body>
</html>
```

##API

```javascript
//bind UI elements to JSON from AJAX response
myforbject.update({
  data:responsefromajax
}); 

//bind UI elements to JSON from AJAX response
myforbject.addBinder({
  elementSelector:responsefromajax,
  binderType: 'value' || 'innerHTML' || 'template',
  binderTemplate: document.querySelector('#templatehtml').innerHTML
}); 

//events
myforbject.on('addedBinder',callback); // callback(binder)
myforbject.on('renderedBinder',callback); // callback(data)
myforbject.on('updatedforbject',callback); // callback(data)
```
##Development
*Make sure you have grunt installed*
```
$ npm install -g grunt-cli
```

Then run grunt watch
```
$ grunt watch
```
##For generating documentation
```
$ grunt doc
$ jsdoc2md lib/**/*.js index.js > doc/api.md
```

##Notes
* The Tab Module uses Node's event Emitter for event handling.
* The Template Generator uses EJS, but you can generate your own mark up