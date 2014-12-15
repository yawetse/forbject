# forbject  [![NPM version](https://badge.fury.io/js/forbject.svg)](http://badge.fury.io/js/forbject)

** CommonJS/Browserified simple form object data mapping, without magic **

Forbject creates key/value pairs from form elements. This is a quick and simple vanilla JS way to map data without the baggage of a full framework.

 [API Documenation](https://yawetse.github.io/forbject/api/html/index.html)

## Example

Check out `example/index.html`, the example javascript for the example page is `resources/js/example_src.js`

## Installation

```
$ npm install forbject
```

Forbject is a browserified/commonjs javascript module.

## Usage

*JavaScript*
```javascript
var forbject = require('forbject'),
	myforbject;

var updateforbjectData = function(){
  forbject1= new.forbject('#form-selector');
};

//initialize nav component after the dom has loaded
window.addEventListener('load',function(){
	var formelement = document.querySelector('form#myFormObjectSelector');
	myforbject = new forbject(formelement);

	//expose your nav component to the window global namespace
	window.myforbject = myforbject;

  console.log(myforbject.getObject());
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
    <form id="form-selector">
      <section>
        <label for="field1">Field 1</label>
        <input type="text" value="fieldval1" name="field1" id="field1" />
      </section>
      <section>
        <label for="field2">Field 2</label>
        <input type="text" value="fieldval2" name="field2" id="field2" />
      </section>
    </form>
	</body>
</html>
```

##API

```javascript
//update form elements to JSON from Form element
myforbject.refresh(); 

//get form object
myforbject.getObject(); 

//events
myforbject.on('init',callback); // callback()
myforbject.on('serialized',callback); // callback(data)
myforbject.on('refresh',callback); // callback(data)
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
* The Forbject Module uses Node's event Emitter for event handling.