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

function calcTotalizerTotal(){
  let totalizerStart = document.querySelector('.totalizerStart').value
  let totalizerEnd = document.querySelector('.totalizerEnd').value

  let totalizerTotal = Number(totalizerEnd) - Number(totalizerStart)

  document.querySelector('.totalizerTotal').value = totalizerTotal
}

function calcTimeTotal(){
  let timeStart = document.querySelector('.timeStart').value
  let timeEnd = document.querySelector('.timeEnd').value

  timeStartArr = timeStart.split(":")
  timeStartInMinutes = parseInt(timeStartArr[0]) * 60 + parseInt(timeStartArr[1]) //turn the start time into a sum of minutes

  timeEndArr = timeEnd.split(":")
  timeEndInMinutes = parseInt(timeEndArr[0]) * 60 + parseInt(timeEndArr[1]) //turn the end time into a sum minutes

  diff = timeEndInMinutes - timeStartInMinutes

  document.querySelector('.timeTotal').value = diff

}

function calcAverageDischarge(){
  let totalizerStart = document.querySelector('.totalizerStart').value
  let totalizerEnd = document.querySelector('.totalizerEnd').value

  let totalizerTotal = Number(totalizerEnd) - Number(totalizerStart)

  let timeStart = document.querySelector('.timeStart').value
  let timeEnd = document.querySelector('.timeEnd').value

  timeStartArr = timeStart.split(":")
  timeStartInMinutes = parseInt(timeStartArr[0]) * 60 + parseInt(timeStartArr[1]) //turn the start time into a sum of minutes

  timeEndArr = timeEnd.split(":")
  timeEndInMinutes = parseInt(timeEndArr[0]) * 60 + parseInt(timeEndArr[1]) //turn the end time into a sum minutes

  diff = timeEndInMinutes - timeStartInMinutes

  document.querySelector('.averageDischarge').value = totalizerTotal / diff
}
