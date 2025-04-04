document.querySelector('#calc').addEventListener('click', calcWaterLevel)

function calcWaterLevel(){
  let correction = document.querySelector('.correction').value
  let swl = document.querySelector('.swl').value

  console.log(correction)
  console.log(swl)
  let corretedSWL = Number(swl) + Number(correction)

  document.querySelector('#show-cswl').innerText = corretedSWL

  console.log(corretedSWL)
}