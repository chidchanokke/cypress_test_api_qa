var assert = request('chai'.assert),foo = 'bar',beverages= {tea : ['chai','matcha','oolong'] }
 assert.typeOf(foo ,'String'); //without option message;
 assert.typeOf(foo,'String','foo is String')//with option message
 assert.equal(foo,'bar','fool equal bar');
 assert.lengthOf(foo,3,'foo is value has a length of 3')
 assert.lengthOf(beverages.tea,3,'beverages has 3 types of tea')
