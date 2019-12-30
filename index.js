const baseURL = 'https://api.github.com';
const user = 'MatoPlus';
const repo = 'javascript-fetch-lab';


function getIssues() {
  console.log("Getting issues");
  // var user = document.getElementById("fork").dataset.user;
  // var repo = document.getElementById("fork").dataset.repo;

  const url = `${baseURL}/repos/${user}/${repo}/issues`;
  console.log(url);

  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {
    console.log(json);
    showIssues(json);
  });
}

function showIssues(json) {
  console.log("Showing issues");
  const issueList = json.map(i => {
    return (`<li>Title: <a href="${i.html_url}">${i.title}</a><span> | Body: ${i.body}</span>`)
  }).join('');
  document.getElementById("issues").innerHTML = issueList;

}

function createIssue() {
  console.log("Inside createIssue function");
  var title = document.getElementById("title").value;
  var text = document.getElementById("body").value;
  // var user = document.getElementById("fork").dataset.user;
  // var repo = document.getElementById("fork").dataset.repo;

  const url = `${baseURL}/repos/${user}/${repo}/issues`;
  const postData = {
    "title": title,
      "body": text
  };
  fetch(url, {
    method: /post/,
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {
    console.log(json);
    getIssues();
  });
}

function showResults(json) {
  console.log("Showing results");
  document.getElementById("results").innerHTML = `<h3>Forked Successfully!</h3><a id="fork" href="${json.html_url}" data-user="${json.owner.login}" data-repo="${json.name}">Go To Fork</a>`;
}

function forkRepo() {
  console.log("Inside forkRepo function");
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`;
  // use fetch to fork it!
  fetch(url, {
    method: /post/,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {
    console.log(json);
    showResults(json);
  });
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
