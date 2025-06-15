// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-contact-us",
          title: "Contact Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-phenodp-leveraging-deep-learning-for-phenotype-based-case-reporting-disease-ranking-and-symptom-recommendation",
        
          title: "PhenoDP: Leveraging Deep Learning for Phenotype-Based Case Reporting, Disease Ranking, and Symptom Recommendation...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/phenodp/";
          
        },
      },{id: "post-association-of-human-specific-expanded-short-tandem-repeats-with-neuron-specific-regulatory-features",
        
          title: "Association of human-specific expanded short tandem repeats with neuron-specific regulatory features",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/str/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-baole-wen-have-contributed-an-article-in-genome-medicine-congratulations",
          title: 'Baole Wen have contributed an article in Genome Medicine. Congratulations!',
          description: "",
          section: "News",},{id: "news-qiming-liu-have-contributed-an-article-in-science-advances-congratulations",
          title: 'Qiming Liu have contributed an article in Science Advances. Congratulations!',
          description: "",
          section: "News",},{id: "projects-baole-wen",
          title: 'Baole Wen',
          description: "Ph.D. Student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/baolewen/";
            },},{id: "projects-minghan-li",
          title: 'Minghan Li',
          description: "Ph.D. Student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/minghanli/";
            },},{id: "projects-qiming-liu",
          title: 'Qiming Liu',
          description: "Ph.D. Student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qimingliu/";
            },},{id: "projects-sheng-shi",
          title: 'Sheng Shi',
          description: "Ph.D. Student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shengshi/";
            },},{id: "projects-tian-yao",
          title: 'Tian Yao',
          description: "Ph.D. Student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tianyao/";
            },},{id: "projects-weidong-tian",
          title: 'Weidong Tian',
          description: "Professor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/weidongtian/";
            },},{id: "projects-xuan-xue",
          title: 'Xuan Xue',
          description: "Master Student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/xuanxue/";
            },},{id: "projects-yanan-dang",
          title: 'Yanan Dang',
          description: "Master Student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/yanandang/";
            },},{id: "projects-yizhou-tang",
          title: 'Yizhou Tang',
          description: "Master Student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/yizhoutang/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%65%69%64%6F%6E%67.%74%69%61%6E@%66%75%64%61%6E.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TianLab-Bioinfo", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
