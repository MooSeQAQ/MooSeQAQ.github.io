var posts=["2024/03/21/DVWA01/","2024/03/17/HTML/","2024/03/20/Linux命令/","2024/04/12/Python入门/","2024/04/20/Python-Flask框架/","2024/03/24/SQL注入/","2024/03/22/MySQL/","2024/03/27/XSS/","2024/03/30/Rois冬令营题解/","2024/05/16/SSRF/","2024/03/16/hello-world/","2024/04/02/文件上传/","2024/07/08/校赛题解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };