function getIssues() {
  fetch('https://api.github.com/${fork}/issues')
    .then(res => res.json)
    .then(json => showIssues(json));
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  document.getElementById('issues').innerHTML = template(json);
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = {title: issueTitle, body: issueBody };

  fetch('https://api.github.com/repos/${userName}/javascript-fetch-lab/issues', {
    method: 'POST',
    headers: {
      authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => getIssues))
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  //use fetch to fork it!
  fetch('https://api.github.com/repos/${repo}/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res = res.json())
  .then(res => showResults())
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  var token = '';
  return ''
}
