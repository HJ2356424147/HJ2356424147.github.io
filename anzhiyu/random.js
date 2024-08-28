var posts=["2024/08/27/hello-world/","2024/08/28/改变如何开始/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };