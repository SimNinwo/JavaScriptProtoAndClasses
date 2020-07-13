'use strict';

var cat = { name: 'Fluffy', color: 'White' }
cat.age = 3

display(cat.age)
display(cat.name)

// OR

cat.speak = function() { display('Meeoow!') }

cat.speak();