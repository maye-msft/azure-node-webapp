



const vue= new Vue({
    el: '#app',
    store:store,
    router:router,
    data:{
        drawer: true,
    },
    props: {
        source: String
      },
    mounted:function() {

    },
    computed: {
        ...Vuex.mapState([
            'loading'
        ]),
    }
})

function flatten(data) {
  var result = {};
  function recurse (cur, prop) {
      if (Object(cur) !== cur) {
          result[prop] = cur;
      } else if (Array.isArray(cur)) {
           for(var i=0, l=cur.length; i<l; i++)
               recurse(cur[i], prop ? prop+"."+i : ""+i);
          if (l == 0)
              result[prop] = [];
      } else {
          var isEmpty = true;
          for (var p in cur) {
              isEmpty = false;
              recurse(cur[p], prop ? prop+"."+p : p);
          }
          if (isEmpty)
              result[prop] = {};
      }
  }
  recurse(data, "");
  return result;
}

function obj2array(data) {
  var array = [];
  for(var key in data) {
    array.push({name:key,value:data[key]})
  }
  return array
}

