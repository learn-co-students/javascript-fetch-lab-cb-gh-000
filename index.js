function getIssues() {
  const url = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/issues'
  fetch(url).then(response => response.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const issuesList = "<ul>" + issuesJson.map(i => {
    return `
      <li>
        <h3>${i.title}</h3>
        <p>${i.body}</p>
      </li>`
  }).join('') + "</ul>"
  document.getElementById('issues').innerHTML = issuesList

}

function getIssuesInput() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  return {title: title, body: body, labels: ['duplicate', 'help wanted']}
}

function createIssue() {
  const url = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/issues'
  fetch(url, {
    method: 'post',
    body: JSON.stringify(getIssuesInput()),
    headers: {
      Authorization: 'token 75b6e8b4d2be4a55c47ccf6b210b51ed87eeafe0'
    }
  }).then(response => response.json()).then(json => console.log(json))
}

function showForkedRepo(json) {
  const repo = `<h2>showForkedRepo</h2><p><a href='${json.html_url}'>${json.name}</a></p>`
  document.getElementById('results').innerHTML += repo
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const url = `https://api.github.com/repos/${repo}/forks`
  fetch(url, {
    method: 'post',
    headers: {
      Authorization: 'token 75b6e8b4d2be4a55c47ccf6b210b51ed87eeafe0'
    }
  }).then(response => response.json()).then(json => showForkedRepo(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return '75b6e8b4d2be4a55c47ccf6b210b51ed87eeafe0'
  return ''

}
