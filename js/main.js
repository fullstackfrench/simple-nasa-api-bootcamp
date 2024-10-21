//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', imageOfTheDay)

function imageOfTheDay() {
    let userDate = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${userDate}`)
    .then(res => res.json())//parse response as JSON
    .then(data => {
        // console.log(data)
        // console.log(data.date)
        // console.log(data.url)
        // console.log(data.title)
        // console.log(data.explanation)

        let url = data.url 

        if (data.media_type === 'image') {
            // document.querySelector('iframe').style = 'display: none'
            document.querySelector('iframe').classList.add('hidden')
            document.querySelector('img').src = url
        } else if (data.media_type === 'video'){
            document.querySelector('.hidden').classList.remove('hidden')
            document.querySelector('img').src = ''
            document.querySelector('iframe').src = url
        }

        document.querySelector('h2').innerText = data.title
        
        document.querySelector('h3').innerText = data.explanation


    })

}


