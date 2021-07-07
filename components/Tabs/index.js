// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// const getData = axios.get('https://lambda-times-backend.herokuapp.com/topics')
//object contains data with a topics array inside it

const topics = document.querySelector('.topics')

const tabBuilder = (topic) => {
     const tab = document.createElement('div')
     tab.classList.add('tab')
     tab.textContent = topic

     return tab
}

const getTopics = () => {
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(
     response => {
          //make the array for the topics
          const newTopics = response.data.topics
          //loop over the array, and build a tab for each one
          newTopics.forEach(topic => {
            const topicTab = tabBuilder(topic)
            //make sure the tabs get added to the DOM
               topics.appendChild(topicTab)
          })
     }
)
.catch(
       //here goes a callback that takes an error
       //this is the sad path -- the code that runs if things don't work out
  error => {
       console.log('error!')
  }
)
}

getTopics()