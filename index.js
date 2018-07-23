var userName = 'enginBozkurt';
var baseApi = 'https://api.github.com/';


function forkRepo() {
    const repo = 'learn-co-curriculum/javascript-fetch-lab';
    const url = `${baseApi}repos/${repo}/forks`;
    fetch(url, {
      method: 'post',
      headers: {
        Authorization: 'token 81eeb2eecf8eebc97106ef864e82f44e5a2f2ec7'
      }
    })
    .then(response => response.json())
    .then(json => showForkedRepo(json));
}

function showForkedRepo(json) {
    userName = json.owner.login;
    const repo = `<h2>showForkedRepo</h2><p><a href='${json.html_url}'>${json.name}</a></p>`;
    document.getElementById('results').innerHTML += repo;
}


function getIssuesInput() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    return {title: title, body: body, labels: ['duplicate', 'there is a bug']};
}



function createIssue() {
    const url = `${baseApi}repos/${userName}/javascript-fetch-lab/issues`;
    fetch(url, {
      method: 'post',
      body: JSON.stringify(getIssuesInput()),
      headers: {
        Authorization: 'token 81eeb2eecf8eebc97106ef864e82f44e5a2f2ec7'
      }
    })
    .then(response => response.json())
    .then(getIssues());
}

function getIssues() {
    const url = `${baseApi}repos/${userName}/javascript-fetch-lab/issues`;
    fetch(url)
    .then(response => response.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
    const issuesList = "<ul>" + json.map(i => {
      return `
        <li>
          <h3>${i.title}</h3>
          <p>${i.body}</p>
        </li>`;
    }).join('') + "</ul>";
    document.getElementById('issues').innerHTML = issuesList;
}

function getToken() {
    return '';
}
