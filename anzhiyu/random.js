var posts=["2024/08/27/hello-world/","2024/08/28/如何利用hexo搭建博客/","2025/02/16/学习java后端需要掌握的知识/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };