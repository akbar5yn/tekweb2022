Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            jumbotron: {
                nama: "Akbar Pratama Suryamin",
                description: "College student | Ahmad Dahlan University"
            },
            about: {
                title: "About Me",
                description1: "Nama saya adalah Akbar Pratama Suryamin, saya adalah pemuda yang berasal dari pulau Sumatra yang memiliki impian setinggi munkgin",
                description2: "Pekerjaan saya sekarang adalah Mahasiswa yang sedang menempuh pendidikan sarjana Sistem Informasi di Universitas Ahmad Dahlan"
            },
            keterampilan: {
                title: "Skill Keterampilan"
            },
            article:{
                title: "Articles",
                article1:{
                    imageArticle: "https://th.bing.com/th/id/OIP.yKi_ZYPl9p7BmOwyh9tD2QHaEK?pid=ImgDet&w=203&h=114.18750000000001&c=7&dpr=1,25",
                    title: "W3Schools",
                    description: "W3Schools adalah situs web developer informasi, dengan tutorial dan referensi yang berkaitan dengan topik pengembangan web seperti HTML, CSS, JavaScript, PHP, SQL, dan JQuery."
                },
                article2:{
                    imageArticle: "https://2.bp.blogspot.com/-RclbFxJbl-0/VlCfRx_o6UI/AAAAAAAACPA/wN1OGfx7hts/s1600/kultwit%2Bpetani%2Bkode.png",
                    title: "Petani Kode",
                    description: "Petani Kode adalah blog yang membahas seputar dunia pemrograman dan Linux, disini kita dapat mempelajari berbagai bahasa pemrograman."
                },
                article3:{
                    imageArticle: "https://th.bing.com/th/id/OIP.vS7a807hpKIwOBgEeA15GwHaD4?pid=ImgDet&w=203&h=114.0983606557377&c=7&dpr=1,25",
                    title: "Code Academy",
                    description: "Code Academy merupakan unit bisnis CODE.ID dan saat ini Code Academy fokus pada pelatihan coding bootcamp dan membantu Perusahaan menemukan kandidat yang terbaik dalam proyek pengembangan aplikasi."
                },
            },
            project: {
                title: "My Project",
                project1: {
                    title: "Karya Blender.1",
                    description: "Berikut merupakan karya 3 dimensi yang saya pelajari dengan otodidak memalui youtube"
                },
                project2: {
                    title: "Karya Blender.2",
                    description: "Kemudian karya yang kedua adalah usaha selama saya mengikuti mata kuliah Teknologi Multimedia pada semester 2 tahun lalu"
                }
            }
        }
    }
  }).mount('#app')