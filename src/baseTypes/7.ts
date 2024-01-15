/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum Weekend {
  Saturday='Saturday',
  Sunday='Sunday'
}

function isWeekend(day: string) {
  if (day === Weekend.Saturday || day === Weekend.Sunday) {
    return true
  }
  else {
    return false
  }
}

