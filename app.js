const vm = new Vue({
  el: '#app',
  data: {
    articles: []
  },
  mounted() {
    axios.get("https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=e65b548e891e430bbf3b1c5d911a1064")
    .then(response => {this.articles = response.data.articles})
  }
});