const app = new Vue({
  el: "#app",
  data: {
      songs: [],
      filteredSongs: null,
      filteredByArtist: null,
      genre: 'all',
      artist: 'all',
  },
  methods: {
    filterSongs(payload) {
      if(payload == 'all') {
        this.filteredSongs = this.songs;
      } else {
        this.filteredSongs = this.songs.filter((song) => {
          return song.genre.toLowerCase().includes(payload.toLowerCase());
        })
      }
    },
    filterArtist(payload) {
      this.filteredByArtist = this.songs.filter((song) => {
        return song.author.toLowerCase().includes(payload.toLowerCase());
      })
      console.log(this.filteredByArtist);
      this.filteredSongs = this.filteredByArtist
    }
  },
  created() {
    axios.get("http://localhost:8888/php-ajax-dischi/backend.php")
    .then((response) => {
      this.songs = response.data;
      this.filteredSongs = response.data;
      this.filteredByArtist = response.data;
      console.log(this.songs);
    });
  }
});