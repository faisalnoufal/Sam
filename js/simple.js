// fetch('https://sheet2api.com/v1/2MsqLJaYRqyQ/learning-spreadsheet')
fetch('https://reqres.in/api/users')

    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('ERROR'))