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
            "https://raw.githubusercontent.com/akbar5yn/tekweb2022/finalMarkdown/contents/articles.json"
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
    },Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      jumbotron: {},
      about: {},
      articles: [],
      project: [],
      judul: {},
    };
  },
  methods: {
    getJumbotron() {
      axios
        .get('https://raw.githubusercontent.com/akbar5yn/tekweb2022/master/contents/jumbotron.json')
        .then((res) => {
          this.jumbotron = res.data;
          this.getArticles();
          this.getAbout();
          this.getPorject();
          this.getJudul();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAbout() {
      axios
        .get('https://raw.githubusercontent.com/akbar5yn/tekweb2022/master/contents/about.json')
        .then((res) => {
          this.about = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get('https://raw.githubusercontent.com/akbar5yn/tekweb2022/finalMarkdown/contents/articles.json')
        .then((res) => {
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPorject() {
      axios
        .get('https://raw.githubusercontent.com/akbar5yn/tekweb2022/master/contents/project.json')
        .then((res) => {
          this.project = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getJudul() {
      axios
        .get('https://raw.githubusercontent.com/akbar5yn/tekweb2022/master/contents/judul.json')
        .then((res) => {
          this.judul = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getJumbotron();
  },
}).mount('#app');

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
  document.body.appendChild(css);
};

  }).mount("#app");