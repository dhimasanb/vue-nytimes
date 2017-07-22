const GNBaseUrl = "https://newsapi.org/v1/";
const Popular = "?source=google-news&sortBy=top&apiKey=";
const ApiKey = "e65b548e891e430bbf3b1c5d911a1064";

function buildUrl(url) {
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
            }).catch(error => {
                console.log(error);
            });
        }
    },
    computed: {
        processedPosts() {
            let posts = this.articles;

            // Add image_url attribute
            //   posts.map(post => {
            //     let imgObj = post.multimedia.find(media => media.format === "superJumbo");
            //     post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
            //   });

            // Put Array into Chunks
            let i, j, chunkedArray = [],
                chunk = 4;
            for (i = 0, j = 0; i < posts.length; i += chunk, j++) {
                chunkedArray[j] = posts.slice(i, i + chunk);
            }
            return chunkedArray;
        }
    }
});