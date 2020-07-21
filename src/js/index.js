import '../scss/main.scss';


fetch('https://api.github.com/users/ernest-roszak/repos?sort=created')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const {name, html_url, description, homepage} = repo;
        const project = document.querySelector('.project--js');
        const myTemplate = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__box">
          <img src="img/githubIcon.svg" alt="" />
          <h3 class="project__grid project__title">
            <span class="project__info">project: </span
            ><span class="project__content">${name}</span>
          </h3>
          <p class="project__grid">
            <span class="project__info project__info--margin">description:</span>
            <span class="project__content"
              >${description}</span
            >
          </p>
          <p class="project__grid">
            <span class="project__info">demo:</span>
            <span class="project__content"
              >&lt<a class="project__link" href="${homepage}">see_here</a>&gt;</span
            >
          </p>
          <p class="project__grid">
            <span class="project__info">github:</span>
            <span class="project__content"
              >&lt<a class="project__link" href="${html_url}">see_here</a>&gt;</span
            >
          </p>
        </div>
      </article>`;
      if (description) {
      project.innerHTML += myTemplate;
      }
    }
})
    
.catch(error => {
    console.log ('download is fail')
})