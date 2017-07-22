const GNBaseUrl = "https://newsapi.org/v1/";
const Popular = "?source=google-news&sortBy=top&apiKey=";
const ApiKey = "e65b548e891e430bbf3b1c5d911a1064";

function buildUrl (url) {
  return GNBaseUrl + url + Popular + ApiKey
}

const vm = new Vue({
  el: '#app',
  data: {
    articles: []
  },
  mounted() {
    this.getPosts('articles');
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.articles = response.data.articles;
      }).catch( error => { console.log(error); });
    }
  }
});