(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(12),i=a.n(l),o=a(9),s=a(8),c=a(2),m=Object(c.a)(),d=a(22),p=a.n(d),u=function(e){var t=e.profile,a=t.nameTitle,r=t.jobTitle,l=t.about;return n.a.createElement("div",{className:"content"},n.a.createElement("h1",null,a),n.a.createElement("span",{className:"lead"},r),n.a.createElement("div",{className:"about-text"},n.a.createElement("p",null,l.general),n.a.createElement("p",null,l.overview),n.a.createElement("p",null,n.a.createElement("img",{src:"img/Signature.png",alt:"",className:"img-responsive"}))),n.a.createElement("ul",{className:"social-icon"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://facebook.com/minhtus21",target:"_blank","data-toggle":"tooltip",title:"facebook"},n.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://linkedin.com/in/tu-tran-801897180",target:"_blank","data-toggle":"tooltip",title:"linkedIn"},n.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#","data-toggle":"tooltip",title:"live:tmtwns"},n.a.createElement("i",{className:"fa fa-skype"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/TuTran21",target:"_blank","data-toggle":"tooltip",title:"github"},n.a.createElement("i",{className:"fa fa-github"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://codepen.io/tran-tu-the-flexboxer",target:"_blank","data-toggle":"tooltip",title:"codepen"},n.a.createElement("i",{class:"fa fa-codepen"})))))},g=function(e){var t=e.avatarUrl;return n.a.createElement("div",{className:"profile-img"},n.a.createElement("img",{src:t,className:"img-responsive",alt:"Tu Tran's avatar"}))},E=Object(o.b)(function(e){return{profile:e.profile,avatarUrl:e.profile.avatarUrl}},null)(function(e){var t=e.avatarUrl,a=e.profile;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{id:"profile",className:"header theiaStickySidebar"},n.a.createElement(g,{avatarUrl:t}),n.a.createElement(u,{profile:a})))}),v=a(39),f=function(e){var t=e.title,a=e.extra;return n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"expertise-item"},n.a.createElement("h3",null,t),n.a.createElement("p",null,a)))},h=function(e){var t=e.expertise;return n.a.createElement("section",{id:"expertise",className:"expertise-wrapper section-wrapper gray-bg"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,"Expertise")))),n.a.createElement("div",{className:"row"},t.map(function(e){return n.a.createElement(f,{key:e.title,title:e.title,extra:e.extra})}))))},k=function(e){var t=e.valuenow;return n.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100})},b=function(e){var t=e.skillTitle,a=e.skillProgress;return n.a.createElement("div",{className:"progress-item"},n.a.createElement("span",{className:"progress-title"},t),n.a.createElement("div",{className:"progress"},n.a.createElement(k,{valuenow:a}),n.a.createElement("span",{className:"progress-percent"},a," %")))},w=function(e){var t=e.skills;return n.a.createElement("section",{id:"skills",className:"section-wrapper skills-wrapper"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,"Skills")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"progress-wrapper"},t.map(function(e){return n.a.createElement(b,{key:e.skillTitle,skillTitle:e.skillTitle,skillProgress:e.skillProgress})}))))))},N=function(e){var t=e.time,a=e.subtitle,r=e.title,l=e.extra;return n.a.createElement("div",{className:"content-item"},n.a.createElement("small",null,t),n.a.createElement("h3",null,r),n.a.createElement("h4",null,a),n.a.createElement("p",{className:"text-muted mt-1"},l))},x=function(e){var t=e.experience;return n.a.createElement("section",{id:"experience",className:"section-wrapper wow fadeInUp section-experience gray-bg"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,"Work Experience")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h5",null,"COMPANIES: ")),t.companies.map(function(e){return n.a.createElement(N,{key:e.project,time:e.time,title:e.project,subtitle:e.role,extra:e.extra})}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h5",null,"PROJECTS: ")),t.projects.map(function(e){return n.a.createElement(N,{key:e.project,time:e.time,title:e.project,subtitle:e.role,extra:e.extra})})))))},y=function(e){var t=e.education;return n.a.createElement("section",{id:"education",className:"section-wrapper wow fadeInUp section-education"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,"Education")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},t.map(function(e){return n.a.createElement(N,{key:e.project,time:e.time,title:e.project,subtitle:e.role,extra:e.extra})})))))},j=Object(o.b)(function(e){return{skills:e.skills,experience:e.experience,education:e.education,expertise:e.expertise}},null)(function(e){var t=e.skills,a=e.experience,r=e.education,l=e.expertise;return n.a.createElement("div",{className:"theiaStickySidebar"},n.a.createElement(h,{expertise:l}),n.a.createElement(w,{skills:t}),n.a.createElement(x,{experience:a}),n.a.createElement(y,{education:r}))}),T=function(e){return n.a.createElement("button",{scrollTo:"profile",className:"btn btn-sm btn-primary top-scroll btn-toTop"},n.a.createElement("i",{class:"fa fa-caret-up"}))};var S=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(T,null),n.a.createElement(v.a,{className:"columns-block"},n.a.createElement("div",{className:"left-col-block blocks"},n.a.createElement(E,null)),n.a.createElement("div",{className:"right-col-block blocks"},n.a.createElement(j,null))))};var I=function(){return(new p.a.WOW).init(),n.a.createElement(s.c,{history:m},n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/",component:S}),n.a.createElement(s.a,{to:"/"})))},P=a(11),C=a(26),U="SEARCH",A={profile:{nameTitle:"TU TRAN",jobTitle:"Front-end Developer",fullName:"T\xfa Tr\u1ea7n",dateOfBirth:"08 January 1997",job:"Freelancer",avatarUrl:"https://res.cloudinary.com/doyyjeich/image/upload/v1568003654/onlinePortfolio/profile2-cropped_xnqxqk.jpg",email:"tmtwns@gmail.com",skype:"tmtwns",about:{general:"An unexpected curve took me to front-end development, fell in love for it instantly and here I am, finding myself in a vast open sea of challenges and opportunities, looking forward to sailing with the right captains and sailors.",overview:"I am an enegetic and willing to learn person, devoting myself for a good and well coordinated team which sensibly earns more value and achieve more success."}},expertise:[{title:"Excellent English Proficiency",extra:"Being able to collaborate and work in English for maximum efficiency."},{title:"Adaptive but Dynamic",extra:"Love to hear colleagues' and customers' opinions and feedbacks, and enjoy providing my own in order to find the best solution for problems."},{title:"Programming is a hobby",extra:"Wrting codes, fix bugs, stressed out, eat, sleep, repeat. Enjoy creating and learning new ways to create applications and make them look fancy."},{title:"Responsible and Self-driven",extra:"Setting myself goals along the way, and taking responsibilities for the work in progress."}],skills:[{skillTitle:"HTML5",skillProgress:"95"},{skillTitle:"CSS / SCSS",skillProgress:"90"},{skillTitle:"Bootstrap / Material UI",skillProgress:"90"},{skillTitle:"Javascript",skillProgress:"85"},{skillTitle:"Typescript",skillProgress:"60"},{skillTitle:"ReactJs",skillProgress:"75"},{skillTitle:"NodeJs",skillProgress:"55"},{skillTitle:"Photoshop / Illustrator",skillProgress:"80"},{skillTitle:"MySQL",skillProgress:"45"},{skillTitle:"MongoDB",skillProgress:"55"}],experience:{companies:[{time:"2018 - 2019",project:"Frontend developer",role:"Freelancer",extra:"A out-sourcing company with small teams of devs, which encourages lots of learning from team members and working as a team through which I developed skills that I did not have."},{time:"2019 - 03/2020",project:"Nordic Coder",role:"Software Engineer",extra:"A out-sourcing company with small teams of devs, which encourages lots of learning from team members and working as a team through which I developed skills that I did not have."}],projects:[{time:"07/2018 - 03/2019",project:"Bookread",role:"UI/UX and Layout designer - Consultant",extra:"A book reading and social network platform, written in PHP. I consulted customers regarding UI/UX and designing layouts for customers to visuallize their products using PSD, HTML5, CSS3."},{time:"03/2019 - 06/2019",project:"Engage",role:"Front-end Developer",extra:"A human source and project management admin app for a bank, which involves multi-language and role management. I participated as a frontend developer who maintain and develop in Reactjs."},{time:"05/2019 - 10/2019",project:"Sbuy",role:"Front-end developer",extra:"Written in Reactjs, an ecommerce website focus on getting hot deals and vouchers. I participated in frontend development, wireframing components and layout design."},{time:"10/2019 - 03/2020",project:"Nordic Coder Career Portal",role:"Front-end developer",extra:"An internal project that aims to provide job and talent seeking for candidates and companies. I participated in writing Nodejs backend with Nestjs framework and MySQL database, from which I learned Typescript, MySQL and Nestjs. Occasionally, I joined in front-end as well in small features to speed up the progress."}]},education:[{time:"2014",project:"IELTS Certification",role:"Achived 6.0",extra:"English is one of my main strength and hobbies, I never stopped improving it, knowing the fact that it will be in good use from time to time."},{time:"2015 - 2019",project:"University of Technology and Education",role:"Major: English Teacher",extra:"Perfecting public speaking skills, communication skills and organizing classes using English."},{time:"02/2018 - 01/2019",project:"Udemy.com / Nordic Coder",role:"HTML5 / CSS3 / JS / Bootstrap",extra:"Yep, I built websites and took these baby steps."},{time:"02/2019 - 05/2019",project:"Nordic Coder",role:"Certificate in Reactjs",extra:"From basics to advanced including React-Hooks, API Requests, Asynchronous programming, and produced an Ecommerce Reactjs Template."},{time:"07/2019 - 09/2019",project:"Nordic Coder",role:"Certificate in Nodejs",extra:"Learned Basics of Nodejs, how to establish MongoDB databases and being able to write unit testing, server-side rendering and handle front-end requests."}]};var M=Object(P.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;switch((arguments.length>1?arguments[1]:void 0).type){case U:default:return e}},Object(P.a)(C.a));M.subscribe(function(e){console.log("Action called",M.getState())});var R=M;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(16);i.a.render(n.a.createElement(B.a,null,n.a.createElement(o.a,{store:R},n.a.createElement(I,null))),document.getElementById("main-wrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.c335229b.chunk.js.map