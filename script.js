'use strict';

var cat = {
    name: { first: 'Fluffy', last: 'LaBeouf' },
    color: 'White'
}

Object.defineProperty(cat, 'fullname', {
    get: function() {
        return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
        var nameParts = value.split(' ')
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
    }
})

cat.fullname = 'Muffin Top'
display(cat.fullname)
display(cat.name.first)
display(cat.name.last)