var app = new Vue({
  el: "#app",
  data: {
    // navBarItems: [
    //   {
    //     href: "#home",
    //     title: "Home"
    //   },
    //   {
    //     href: "#work",
    //     title: "My Work"
    //   },
    //   {
    //     href: "#portfolio",
    //     title: "Portfolio"
    //   },
    //   {
    //     href: "#resume",
    //     title: "Resume"
    //   },
    //   {
    //     href: "#about",
    //     title: "About"
    //   },
    //   {
    //     href: "#contact",
    //     title: "Contact"
    //   },
    // ],
    self: {
      name: "Ilya Ivanov",
      position: "software engineer",
      description:"I am a professional <strong>UX Designer</strong> and <strong>Front-End Developer</strong> creating modern and responsive designs for <strong>Web</strong> and <strong>Mobile</strong>. Let us work together. Thank you.",
      infoSet: [
        {title: "Name", text: "Ilya Ivanov"},
        {title: "Age", text: Math.abs(new Date().getFullYear() - 1993)},
        {title: "Phone", text: "+7 985 526 1922"},
        {title: "Email", text: "ivilvad@gmail.com"},
        {title: "Skype", text: "dest716"}
      ],
      skills: [
        {name: "back-end", percent: 99},
        {name: "devops", percent: 80},
        {name: "front-end", percent: 60},
      ]
    },
    works: [
      {
        icon: "fa-link",
        name: "Mobile UX",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna."
      },
      {
        icon: "fa-flash",
        name: "Web Design",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna."
      },
      {
        icon: "fa-dashboard",
        name: "HTML Templates",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna."
      },
    ],
    portfolio: {
      filters: [
        {
          tag: "*",
          title: "All"
        },
        {
          tag: ".html",
          title: "HTML"
        },
        {
          tag: ".photoshop",
          title: "Photoshop"
        },
        {
          tag: ".wordpress",
          title: "Wordpress"
        },
        {
          tag: ".mobile",
          title: "Mobile"
        }
      ],
      examples: [
        {
          tags: ["html", "photoshop", "wordpress", "mobile"],
          img: "images/portfolio-img1.jpg",
          title: "UX Design",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm."
        },
        {
          tags: ["html", "wordpress", "mobile"],
          img: "images/portfolio-img2.jpg",
          title: "UX Design",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm."
        },
        {
          tags: ["wordpress"],
          img: "images/portfolio-img3.jpg",
          title: "UX Design",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm."
        },
        {
          tags: ["html", "mobile"],
          img: "images/portfolio-img4.jpg",
          title: "UX Design",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm."
        },
        {
          tags: ["wordpress"],
          img: "images/portfolio-img5.jpg",
          title: "UX Design",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm."
        },
        {
          tags: ["html", "photoshop"],
          img: "images/portfolio-img6.jpg",
          title: "UX Design",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm."
        },
        {
          tags: ["photoshop"],
          img: "images/portfolio-img7.jpg",
          title: "UX Design",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm."
        },
        {
          tags: ["wordpress"],
          img: "images/portfolio-img8.jpg",
          title: "UX Design",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm."
        }
      ]
    },
    socials: [
      {
        class: "facebook",
        icon: "fa-facebook",
        intro: "Follow",
      },
      {
        class: "twitter",
        icon: "fa-twitter",
        intro: "Tweet",
      },
      {
        class: "pinterest",
        icon: "fa-pinterest",
        intro: "Pin",
      },
      {
        class: "telegram",
        icon: "fa-telegram",
        intro: "Message",
      },
    ]
  }
})
