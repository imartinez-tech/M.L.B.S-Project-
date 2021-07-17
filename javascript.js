 var teamName = document.getElementById('team1')
 var firstTeam = document.getElementById('option1')
 var fetchButton = document.getElementById('options')
 
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('select');
    var instances = M.FormSelect.init(elems);
    instances.getSelectedValues();
  });


  function getApi() {
    var op1 = firstTeam.value.trim();
    var requestUrl = `https://fly.sportsdata.io/v3/mlb/scores/json/Games/2021?key=3a1019f034624af79c1020d9e0360382`
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log("Home team: ",data[2000].HomeTeam)
        op1.textContent = data.HomeTeam

    }
    );
}
  fetchButton.addEventListener('click', getApi);
  
  