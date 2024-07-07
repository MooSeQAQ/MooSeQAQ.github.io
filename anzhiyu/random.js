var posts=["2024/07/06/hello-world/","2024/07/07/CPP-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };