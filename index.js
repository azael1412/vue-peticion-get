import Vue from 'vue'
Vue.use(require('vue-resource'));
new Vue({
  el: '#app',
   data:{ 
        notas:[{title:'hola',
        body:'jkdhjdhjd'}
        ]
      },
      methods: {
        recuperarPost: function () {
          this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
                 this.notas=data.body;
                 console.log(data)           
          })
        }
      }
})