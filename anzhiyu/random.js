var posts=["2024/07/17/CTFShow-文件包含篇/","2024/03/21/DVWA01/","2024/07/30/CTF-imaginary/","2024/07/23/DVWA靶场搭建/","2024/03/17/HTML/","2024/03/20/Linux命令/","2024/07/26/Docker入门/","2024/07/29/MySQL提权/","2024/04/12/Python入门/","2024/03/22/MySQL/","2024/04/20/Python-Flask框架/","2024/03/24/SQL注入/","2024/05/16/SSRF/","2024/03/27/XSS/","2024/07/29/Summarization/","2024/03/30/Rois冬令营题解/","2024/03/16/hello-world/","2024/07/13/Web-AWD赛/","2024/07/14/ctfshow-ssrf/","2024/07/21/云服务器部署/","2024/08/02/反弹shell/","2024/07/19/留言板/","2024/06/22/文件包含/","2024/04/02/文件上传/","2024/05/01/校赛题解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };