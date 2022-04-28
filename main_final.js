Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        jumbotron: {},
        about: {},
        articles: [],
        project: [],
        judul: {}
      };
    },
    methods: {
      getJumbotron() {
        axios
          .get(
            "https://raw.githubusercontent.com/akbar5yn/tekweb2022/master/contents/jumbotron.json"
          )
          .then((res) => {
            this.jumbotron = res.data;
            this.getArticles()
            this.getAbout()
            this.getPorject()
            this.getJudul()
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getAbout() {
        axios
          .get(
            "https://raw.githubusercontent.com/akbar5yn/tekweb2022/master/contents/about.json"
          )
          .then((res) => {
            this.about = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getArticles() {
        axios
          .get(
            "https://raw.githubusercontent.com/akbar5yn/tekweb2022/portfolio/contents/articles.json"
          )
          .then((res) => {
            this.articles = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getPorject() {
        axios
          .get(
            "https://raw.githubusercontent.com/akbar5yn/tekweb2022/master/contents/project.json"
          )
          .then((res) => {
            this.project = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getJudul() {
        axios
          .get(
            "https://raw.githubusercontent.com/akbar5yn/tekweb2022/master/contents/judul.json"
          )
          .then((res) => {
            this.judul = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    beforeMount() {
      this.getJumbotron()
    },
  }).mount("#app");