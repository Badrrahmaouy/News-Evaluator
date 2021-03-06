import { checkForURL } from './URLChecker.js'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForURL(formText) === true) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:5050/data', {
            method: 'post',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({url: formText})
        }) .then(res => res.json())
        .then(function(res) {
            update(res)
        }) 
    }
}

// updateUI
function update(data) {
    document.getElementById('msg').innerHTML = `Server status: ${data.msg}`
    document.getElementById('polarity').innerHTML = `Polarity: ${data.polarity}`
    document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
    document.getElementById('subjectivity').innerHTML = `Objective: ${data.subjectivity}`
    document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
    document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
}

export { handleSubmit, update }
