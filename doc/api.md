<a name="forbject"></a>
#class: forbject
**Members**

* [class: forbject](#forbject)
  * [new forbject(formRef)](#new_forbject)
  * [forbject._refresh()](#forbject#_refresh)
  * [forbject._getObject()](#forbject#_getObject)
  * [forbject.setForm()](#forbject#setForm)
  * [forbject.setFormElements()](#forbject#setFormElements)
  * [forbject.isDomNode(node)](#forbject#isDomNode)
  * [forbject.forEach(arr, callback)](#forbject#forEach)
  * [forbject.addChild(result, domNode, keys, value)](#forbject#addChild)
  * [forbject.setFormObj()](#forbject#setFormObj)

<a name="new_forbject"></a>
##new forbject(formRef)
A module that represents a forbject object, a componentTab is a page composition tool.

**Params**

- formRef `object` - element selector of form element or actual form element  

**Author**: Yaw Joseph Etse  
**License**: MIT  
**Copyright**: Copyright (c) 2014 Typesettin. All rights reserved.  
<a name="forbject#_refresh"></a>
##forbject._refresh()
refresh form object key/value pair mapping

**Returns**: `object` - form object  
<a name="forbject#_getObject"></a>
##forbject._getObject()
returns form object

**Returns**: `object` - form object  
<a name="forbject#setForm"></a>
##forbject.setForm()
Set the main form object we are working on.

**Returns**: `object` - Form Element Object  
<a name="forbject#setFormElements"></a>
##forbject.setFormElements()
Set the elements we need to parse.

**Returns**: `number` - number of form elements  
<a name="forbject#isDomNode"></a>
##forbject.isDomNode(node)
Check to see if the object is a HTML node.

**Params**

- node `object` - dom element  

**Returns**: `Boolean` - if object is a dom node  
<a name="forbject#forEach"></a>
##forbject.forEach(arr, callback)
Iteration through arrays and objects. Compatible with IE.

**Params**

- arr `Array` - array to iterate through  
- callback `function` - async callback  

<a name="forbject#addChild"></a>
##forbject.addChild(result, domNode, keys, value)
Recursive method that adds keys and values of the corresponding fields.

**Params**

- result `object` - form object  
- domNode `object` - element in form object  
- keys `string` - regex result of form elements  
- value `object` - value of domNode  

<a name="forbject#setFormObj"></a>
##forbject.setFormObj()
iterate through form element items and append enabled elements to form object

