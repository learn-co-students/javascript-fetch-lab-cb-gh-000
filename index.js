function getIssues() {
  const token = getToken();
  const url = 'https://api.github.com/repos/robertjosephwayne/javascript-fetch-lab/issues';

  return fetch(url, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`,
    },
  })
  .then(res => res.json());
}

function showIssues(json) {
  const src = document.getElementById('issues-template').innerHTML;
  const template = Handlebars.compile(src);
  const html = template(json);
  const issuesDiv = document.getElementById('issues');
  issuesDiv.innerHTML = html;
}

function createIssue() {
  const token = getToken();
  const url = 'https://api.github.com/repos/robertjosephwayne/javascript-fetch-lab/issues';
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const postData = {
    title: title,
    body: body,
  };

  fetch(url, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`,
    },
  })
  .then(res => getIssues())
  .then(json => showIssues(json));
}

function showResults(json) {
  const src = document.getElementById('repo-template').innerHTML;
  const template = Handlebars.compile(src);
  const html = template(json);
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = html;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const token = getToken();

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`,
    },
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  return '';
}
