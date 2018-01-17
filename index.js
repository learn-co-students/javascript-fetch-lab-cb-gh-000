const baseAPI = 'https://api.github.com/'

function getIssues() {
	fetch('${baseAPI}repos/${fork}/issues')
	.then(res => res.json())
	.then(json => showIssues(json));
}

function showIssues(json) {
	const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
	document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
	const issueTitle = document.getElementById('title').value
	const issueBody = documnt.getElementById('body').value
	const postData = {title: issueTitle, body: issueBody}

	fetch(`${baseAPI}repos/${userName}/javascript-fetch-lab/issues`, {
		method: 'POST',
		headers: {
			Authorization: `token ${getToken()}`
		},
		body: JSON.stringify(postData)
	}).then(resp => getIssues())
}


function showResults(json) {
	const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
	document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('${baseAPI}repos/${repo}/forks', {
  	method: 'POST',
  	headers: {
  		Authorization: `token ${token}`
  	}
  }).then(res => res.json())
  .then(resp => showResults());
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}