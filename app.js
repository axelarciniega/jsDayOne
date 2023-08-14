

let scoreHome = 0
let scoreAway = 0

function teamHome(){    
    scoreHome ++
    update()
}


    function teamAway(){
    scoreAway ++
    update()
}


function clearScore(){
    console.log('Am I running');
    scoreHome = 0
    scoreAway = 0
update()
}

function update(){
let elmOne = document.getElementById('team-one')
elmOne.innerHTML = scoreHome
let elm = document.getElementById('team-two')
elm.innerHTML =  scoreAway
}

