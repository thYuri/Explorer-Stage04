const students = [
  {
    name: "Yuri",
    grade1: 53,
    grade2: 86,
  },
  {
    name: "Thais",
    grade1: 97,
    grade2: 83,
  },
  {
    name: "Liz",
    grade1: 76,
    grade2: 88,
  },
  {
    name: "Mariazinha",
    grade1: 58,
    grade2: 69,
  },
  {
    name: "Joaozinho",
    grade1: 44,
    grade2: 28,
  },
]

function calculateAverage(grade1, grade2) {
  return (((Number(grade1) + Number(grade2)) /10 ) / 2).toFixed(1)
}

for (let student of students) {
  const average = calculateAverage(student.grade1, student.grade2)
  if (average >= 7) {
    alert(`Olá, ${student.name}! Sua média é de: ${average} - Parabéns, você passou por média!`)
  } else if (average >= 4) {
    alert(`Olá, ${student.name}! Sua média é de: ${average} - Estude mais e se prepare para a prova de recuperação!`)
  } else {
    alert(`${student.name}, Sua média é de: ${average} - Você está reprovado!`)
  }
}