const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

function pegaValorPorChave(object, pos) {
    return Object.values(object.lessons[pos]);
}
console.log(pegaValorPorChave(school, 1));

function totalEstudantes(object) {
    let total = 0;
    for(let i = 0; i < object.lessons.length; i+=1) {
      total += object.lessons[i].students;
    }
    return total;
}
console.log(totalEstudantes(school));

function seChaveEmTodos(object, key) {
  let seTodos = false;
  for(let i = 0; i < object.lessons.length; i+=1) {
    if(object.lessons[i][key] === undefined) {
      return seTodos = false;
    }
    else {
      seTodos = true;
    }
  }
  return seTodos;
}
console.log(seChaveEmTodos(school, "students"));

function mudaTurno(object, course, shift) {
  for(let i = 0; i < object.lessons.length; i+=1) {
    if(object.lessons[i].course === course) {
      object.lessons[i].shift = shift;
      return `Changed ${course} shift to ${shift}`;
    }
  }
  return `Course ${course} not found!`;
}
console.log(mudaTurno(school, "Python", "Noite"));