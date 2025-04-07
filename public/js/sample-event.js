document.querySelector('#calc').addEventListener('click', calcWaterLevel)

function calcWaterLevel(){
  let swl = document.querySelector('.swl').value
  let correction = document.querySelector('.correction').value
  

  console.log(correction)
  console.log(swl)
  let corretedSWL = Number(swl) + Number(correction)

  document.querySelector('.cSWL').value = corretedSWL

  console.log(corretedSWL)
}