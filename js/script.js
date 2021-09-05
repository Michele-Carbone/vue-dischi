console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
  },
  computed: {
    orderAlbums() {
      return this.albums.sort((a, b) => {
        return a.year - b.year;
      });
    }
  },
  methods: {},
  created() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((res) => {
      this.albums = res.data.response;
    })
  }
});
