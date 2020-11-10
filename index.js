const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      Object.values(collection).forEach(x => callback(x))
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      Object.values(collection).forEach(x => newArray.push(callback(x)))
      return newArray
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
