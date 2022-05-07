// Roman to Int

var romanToInt = function (s) {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let currentInt = romanToInt[s.charAt(i)]
    let nextInt = romanToInt[s.charAt(i + 1)]

    if (nextInt) {
      if (currentInt < nextInt) {
        total += (nextInt - currentInt)
        i++
      } else {
        total += currentInt
      }
    } else {
      total += currentInt
    }
  }
  return total
};


// 383 Ransom Note

var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) {
    return false
  }
  for (let letter of ransomNote) {
    if (!magazine.includes(letter)) {
      return false
    } else {
      magazine = magazine.replace(letter, '')
    }

  }
  return true;
}
