'use strict';


class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() { display('Meeoow') }
}

var cat = new Cat('Fluffy', 'White');


display(cat)
cat.speak()