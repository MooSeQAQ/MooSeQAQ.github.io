var posts=["2024/07/07/Linux命令/","2024/07/07/CPP-0/","2024/07/06/hello-world/","2024/03/17/HTML/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };