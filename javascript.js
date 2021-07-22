var teamName = document.getElementById('team1') 
var teamName2 = document.getElementById('team2')
var teamName3 = document.getElementById('team3')
var teamName4 = document.getElementById('team4')
var teamName5 = document.getElementById('team5')
var teamName6 = document.getElementById('team6')
var teamName7 = document.getElementById('team7')
var teamName8 = document.getElementById('team8')
var schTable = document.getElementById('Schedule1')
var schTable2 = document.getElementById('Schedule2')

var firstTeam = document.getElementById('option1')
var fetchButton = document.getElementById('options')

document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelector('select');
   var instances = M.FormSelect.init(elems);
   instances.getSelectedValues();

 });
 function getApi(e) {
  // var team = document.getElementById('teams').selectedIndex.value
  var team = e.target.value
  console.log(team);

  var requestUrl = `https://fly.sportsdata.io/v3/mlb/scores/json/Games/2021?key=3a1019f034624af79c1020d9e0360382`
   fetch(requestUrl)
   
   .then(function(response){
       return response.json();
   })
   .then(function (data) {
       console.log(data);
    //    Filters the games that are scheduled and are for a specfic team 
             var HomeGame = data.filter(function(game) {
            return game.HomeTeam === team && game.Status ==="Scheduled"
            })
              
        // Displays the day and time 
            
            console.log(HomeGame);
           
            for (let i = 0;i<HomeGame.length; i++) {
                let node = document.createElement("DIV")
                let textnode = document.createTextNode(`@ ${HomeGame[i].DateTime} vs: ${HomeGame[i].AwayTeam}`)
                node.appendChild(textnode)
                node.setAttribute("class", "card card-content")
                schTable.appendChild(node)
                
                

                

               
                
                

              
                
            } 


          
          })
          
          }
// function getApi () {
//   var cityName = 
// }
          
          
            
            
        
fetchButton.addEventListener('change', getApi);
                        
             
                
             
            
            
                
           

   
   
   
       



//   for (let i = 0;i<HomeGame2.length; i++) {
              //     let node = document.createElement("DIV")
              //     let textnode = document.createTextNode(`@ ${HomeGame2[i].DateTime} vs: ${HomeGame2[i].AwayTeam}`)
              //     node.appendChild(textnode)
              //     node.setAttribute("class", "card card-content")
              //     schTable.appendChild(node)
                  
              // }


//schTable.textContent = `@ ${HomeGame[0].DateTime} vs: ${HomeGame[0].AwayTeam}`
            //schTable2.textContent = `@ ${HomeGame[1].DateTime} vs: ${HomeGame[1].AwayTeam}`
            //schTable.textContent = `@ ${HomeGame2[0].DateTime} vs: ${HomeGame2[0].AwayTeam}`