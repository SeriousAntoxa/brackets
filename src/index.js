module.exports = function check(str, bracketsConfig) {

  let myStr = str.split('')
  let b = false

  step: for (let i = 0; i <= myStr.length; ) {

    if (myStr.length === 0) {
      b = true
      break step 
    }

    if (myStr.length === 1) {
      b = false
      break step 
    }

    if (myStr.length > 1) {

      for (let j = 0; j < bracketsConfig.length; j++) {

        if (myStr[i] === bracketsConfig[j][0] && myStr[i+1] === bracketsConfig[j][1]) {
          myStr.splice(i,2)
          i = 0
          continue step
        }

      }

    }
    i++
  }
  return b
}
