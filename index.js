function getIssues() {
  const repo = 'api.github.com/repos/${username}/javascript-fetch-lab/issues'
  fetch(`${repo}`, {
    headers: {
      Authorization: `token c99ad4b28b0936bd2beadbfaddcf249457714200`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function showIssues(json) {
}

function createIssue() {
  const username = ''
  const repo = 'api.github.com/repos/${username}/javascript-fetch-lab/issues'
  fetch(`${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token c99ad4b28b0936bd2beadbfaddcf249457714200`
    },
    body:{ title: `test`, body: `test body` }
  }).then(res => res.json()).then(json => console.log(json));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'api.github.com/repos/learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token c99ad4b28b0936bd2beadbfaddcf249457714200`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
