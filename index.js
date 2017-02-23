const token = getToken();

function getIssues() {
  fetch('https://api.github.com/repos/Underwaternya/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var source = document.getElementById("issues-template").innerHTML;
  var template = Handlebars.compile(source);
  var issues = template(json);
  document.getElementById("issues").innerHTML += issues;
}

function createIssue() {
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };

  fetch('https://api.github.com/repos/Underwaternya/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(getIssues());
}

function showResults(json) {
  var source = document.getElementById("repo-template").innerHTML;
  var template = Handlebars.compile(source);
  var result = template(json);
  document.getElementById("results").innerHTML += result;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch('https://api.github.com/repos/'+ repo +'/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
