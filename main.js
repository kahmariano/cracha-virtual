const linksSocialMedia = {
  github: 'kahmariano',
  youtube: '/',
  facebook: 'karina.mariano.750',
  instagram: 'kahbarber',
  twitter: ''
}

function changeSocialMediaLinks() {
  userName.textContent = 'KahMariano'
  /* o id possibilita esse jeito menor de fazer , en vez de chamar document.get ...*/

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
  /*o for ele fica rodando ate darmos uma condiçao para ele parar, ja pasamos nele mesmo*/
  /*i = i +1 
        i++
        é a mesma coisa o dois pegam i e somam 1 */
}
changeSocialMediaLinks()

/*queremos pegar as informaçoes do github e alterar no html */
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login_
    })
  /*fetch é um comando, ele bate na url,  pega o que a api responde, ele guarda */
  /*arrow functions é uma funçao pequena, contraida , ela é anonima, pq pra ir mais rapido n poe o nome, porem n tem como chamar eka depois ne */
}

getGitHubProfileInfos()
