function getIssues(){
  const repo = 'j-ackerman/javascript-fetch-lab';
  const URL = `https://api.github.com/repos/${repo}/issues`;
  fetch(URL)
    .then(res => res.json())
    .then(issues => showIssues(issues));
}

function showIssues(json){
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  document.getElementById('issues').innerHTML = template(json);
}

function createIssue(){
  const title = document.getElementById('title').value,
	      body = document.getElementById('body').value,
        repo = 'j-ackerman/javascript-fetch-lab',
        postData = { title, body },
        URL = `https://api.github.com/repos/${repo}/issues`,
        KEY = getToken(),
        POST = {
          method: 'POST',
          body: JSON.stringify(postData),
          headers: {
            Authorization: 'token ' + KEY
          }
        };

  fetch(URL, POST).then(res => console.log(res));
}

function showResults(json){
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  document.getElementById('results').innerHTML = template(json);
}

function forkRepo(){
  const repo = 'learn-co-curriculum/javascript-fetch-lab',
        URL = `https://api.github.com/repos/${repo}/forks`,
        KEY = getToken(),
        POST = {
          method: 'POST',
          headers: {
            Authorization: 'token ' + KEY
          }
        };

  fetch(URL, POST)
    .then(res => res.json())
    .then(showForkedRepo => showResults(showForkedRepo));
}

function getToken(){
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
