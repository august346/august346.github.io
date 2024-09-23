var app = new Vue({
  el: "#app",
  data: {
    navBarItems: [
      {
        href: "#home",
        title: "Home"
      },
      {
        href: "#work",
        title: "My Work"
      },
      {
        href: "#portfolio",
        title: "Portfolio"
      },
      {
        href: "#resume",
        title: "Resume"
      },
      {
        href: "#about",
        title: "About"
      },
      {
        href: "#contact",
        title: "Contact"
      },
    ],
    self: {
      name: "Ilia Ivanov",
      position: "software engineer",
      description:"Quite often we hear people saying \"Nobody is perfect\", which is absolutely correct.<br/>But it is also true that nobody can stop you from making every effort to <strong>break this stereotype</strong>.",
      infoSet: [
        {title: "Python", text: "aiohttp, Django, Flask"},
        {title: "Container", text: "Docker, docker-compose"},
        {title: "Front end", text: "Vue.js, JS, JQuery, Bootstrap"},
        {title: "DB", text: "PostgreSQL, MongoDB, MySQL"},
        {title: "MQ", text: "RabbitMQ, Kafka"},
        {title: "Other", text: "redis"}
      ],
      skills: [
        {name: "back end", percent: 99},
        {name: "devops", percent: 80},
        {name: "front end", percent: 60},
      ]
    },
    works: [
      {
        icon: "fa-server",
        name: "web",
        desc: "Microservices: *<br/>API: REST, GraphQL, custom"
      },
      {
        icon: "fa-laptop",
        name: "scripts",
        desc: "Data analysis<br/>Data mining: parsers, scrappers<br/>Processing: image, numeric, text"
      },
      {
        icon: "fa-dashboard",
        name: "automation system",
        desc: "Simple neural networks<br/>Bots: Telegram, WhatsApp<br/>Socials activity (via Selenium)<br/>Autotests: functional, integration, E2E"
      },
    ],
    portfolio: {
      filters: [
        {
          tag: "*",
          title: "All"
        },
        {
          tag: ".microservices",
          title: "Microservices"
        },
        {
          tag: ".api",
          title: "Web API"
        },
        {
          tag: ".bots",
          title: "Bots"
        },
        {
          tag: ".automation",
          title: "Automation"
        },
        {
          tag: ".other",
          title: "Other"
        },
      ],
      examples: [
        {
          tags: ["microservices", "api"],
          img: "images/portfolio-img1.jpg",
          title: "Identity verification",
          desc: "More than 20 microservices for the identity verification system project."
        },
        {
          tags: ["microservices", "api"],
          img: "images/portfolio-img2.png",
          title: "Data analyzer for analysts",
          desc: "Analyst tool for analyzing metadata of a large number of images."
        },
        {
          tags: ["microservices", "automation"],
          img: "images/portfolio-img3.png",
          title: "Fake photo identifier",
          desc: "Neural network was developed and integrated as a microservice for detecting fake photos."
        },
        {
          tags: ["api", "automation"],
          img: "images/portfolio-img4.png",
          title: "E2E machine testing system",
          desc: "Testing system for vending machines at the final stage of production."
        },
        {
          tags: ["api"],
          img: "images/portfolio-img5.png",
          title: "Shopping cart",
          desc: "Shopping cart for retailer."
        },
        {
          tags: ["api"],
          img: "images/portfolio-img6.jpg",
          title: "Image resizer",
          desc: "Jsut image resizer."
        },
        {
          tags: ["api", "bots"],
          img: "images/portfolio-img7.jpg",
          title: "Website monitoring",
          desc: "Telegram bot for collecting various metrics from the customer's website."
        },
        {
          tags: ["bots", "automation"],
          img: "images/portfolio-img8.jpg",
          title: "IoT controller",
          desc: "Smart home control telegram bot."
        },
        {
          tags: ["bots"],
          img: "images/portfolio-img9.jpg",
          title: "Support tool",
          desc: "Customer support telegram bot."
        },
        {
          tags: ["bots", "automation"],
          img: "images/portfolio-img10.png",
          title: "Discounts monitoring",
          desc: "Monitoring of discounts on games."
        },
        {
          tags: ["other"],
          img: "images/portfolio-img11.jpg",
          title: "Parsers",
          desc: "About 20 different parsers."
        }
      ]
    },
    socials: [
      {
        class: "linkedin",
        icon: "fa-linkedin",
        link: "https://www.linkedin.com/in/илья-иванов-a9b6b814b"
      },
      {
        class: "whatsapp",
        icon: "fa-whatsapp",
        link: "https://wa.me/qr/2BBLGWN6LOX5P1"
      },
      {
        class: "telegram",
        icon: "fa-telegram",
        link: "https://t.me/ku113p"
      },
      {
        class: "facebook",
        icon: "fa-facebook",
        link: "https://www.facebook.com/ijohnnysmith"
      },
    ]
  }
})
