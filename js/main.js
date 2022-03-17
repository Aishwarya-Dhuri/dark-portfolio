
var options = {
    strings: [
        "Front End  Developer",
        "JavaScript Developer",
        "UI/UX Designer",
    ],
    stringsElement: '#typed-strings',
    typeSpeed: 70,
    loop: true,
    backSpeed: 20,
  };
  
  var typed = new Typed('.typing', options);

  //fixed header
  $(document).ready(() => {
    $('body').awesomeCursor('paper-plane',{
        color:'#fff',
        outline:'#cd5ff8',
        size: 32,
        flip: 'horizontal'

    });

        //NavBar Drop Shadow on scroll
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
            $('.nav-bar').addClass('floatingNav');
            } else {
            $('.nav-bar').removeClass('floatingNav');
            }
        });
        
        //scroll to that section minus header fixed height
        $(".headernav a").on("click", function (e) {
            // 1
            e.preventDefault();
            // 2
            const href = $(this).attr("href");
            // 3
            $("html, body").animate({ scrollTop: $(href).offset().top -120 }, 100);
          });
        
  //change theme toggle
  const theme_mode = document.getElementById('theme-mode');
  const moon = document.getElementById('moon');
  const sun = document.getElementById('sun');
  var curr_mode = 'dark';

  themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (curr_mode === 'light') {
            moon.style.display = 'none';
            sun.style.display = 'block';
            curr_mode = 'dark';
           
        } else {
            sun.style.display = 'none';
            moon.style.display = 'block';
            curr_mode = 'light';
      
        }
    });
  });

  //Dynamic projects sec
  document.addEventListener("DOMContentLoaded", function(event) {     
      const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
});
    new WOW().init();

    const projectsObj = [
        {
          name : 'BBPS',
          description: ' Worked on PSD to HTML conversion with interactive animation effects',
          img_path: 'images/projects/bbca.jpg',
          live_link : 'https://bbps.ca/',
          github_link: 'https://github.com/Aishwarya-Dhuri/bbps'
        },
        {
            name : 'Kiaar',
            description: 'build  website from stratch using bootstrap 4, html,css and JS',
            img_path: 'images/projects/kiaar.jpg',
            live_link : 'https://kiaar.org/en',
            github_link: 'https://github.com/Aishwarya-Dhuri/kiaar'
        },
        {
            name : 'Random User Generator',
            description: 'Worked with Random User API to generate random user using Angular',
            img_path: 'images/projects/randomuser-angular.jpg',
            live_link : 'https://aishwarya-dhuri.github.io/angular-random-user/',
            github_link: 'https://github.com/Aishwarya-Dhuri/angular-random-user'
        },
        {
            name : 'Somaiya Vidyavihar University',
            description: 'build  website from stratch using bootstrap 4, html,css and JS using Somaiya brand guidelines',
            img_path: 'images/projects/SVU.jpg',
            live_link : 'https://www.somaiya.edu/en',
            github_link: 'https://github.com/Aishwarya-Dhuri/somaiya-branding'
        },
        {
            name : 'Somaiya B.ED',
            description: 'build  website from stratch using bootstrap 4, html,css and JS using Somaiya brand guidelines',
            img_path: 'images/projects/education.jpg',
            live_link : 'https://education.somaiya.edu/en',
            github_link: 'https://github.com/Aishwarya-Dhuri/somaiya-branding'
        },
        {
            name : 'Somaiya Research',
            description: 'build  website from stratch using bootstrap 4, html,css and JS using Somaiya brand guidelines',
            img_path: 'images/projects/research.jpg',
            live_link : 'https://research.somaiya.edu/en',
            github_link: 'https://github.com/Aishwarya-Dhuri/somaiya-branding'
        },
        {
            name : 'Examluck',
            description: 'build  website from stratch using bootstrap 3, html,css and JS using Somaiya brand guidelines',
            img_path: 'images/projects/examluck.jpg',
            live_link : 'https://aishwarya-dhuri.github.io/examluck/index.html',
            github_link: 'https://github.com/Aishwarya-Dhuri/examluck'
        },
        {
            name : 'Travelgram',
            description: 'Insta inspired clone for travellers to upload images, like and dislike post with authentication functionality',
            img_path: 'images/projects/travelgram.jpg',
            live_link : 'https://travelgram-bea28.web.app/',
            github_link: 'https://github.com/Aishwarya-Dhuri/travelgram-angular'
        },
        {
            name : 'Github Repo finder',
            description: 'Worked with Github API to fectch respositories list using name in Angular framework with authentication functionality',
            img_path: 'images/projects/repogithubfinder.jpg',
            live_link : 'https://github-repo-angular.web.app/signin',
            github_link: 'https://github.com/Aishwarya-Dhuri/github-repofetch-angular'
        },
      ]


      const projsec=document.getElementById('projectswrapper');
    
      projectsObj.forEach(item =>{
          const proj=document.createElement("div");
          proj.classList.add("col-lg-4");
          proj.classList.add("col-md-6");


        proj.innerHTML=`<div class="projectcard wow fadeIn" data-wow-delay="0.2s">
                                <img src=${item.img_path} class="projimg" alt=""/>
                                <div class="projectinfo">
                                    <h4 class="projname">${item.name}</h4>
                                    <p class="projdesc">${item.description}</p>
                                </div>
                                <div class="btns">
                                    <a href="${item.live_link}" class="borderbtn draw-border" target="_blank">View Project</a>
                                    <a href="${item.github_link}" class="borderbtn draw-border" target="_blank">Github Repo</a>

                                </div>
                        </div>`
        projsec.appendChild(proj);
    
      });
    

    
    });
   
