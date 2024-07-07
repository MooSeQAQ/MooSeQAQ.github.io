var posts=["2024/03/17/HTML/","2024/03/20/Linux命令/","2024/03/16/hello-world/","2024/03/22/MySQL/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };