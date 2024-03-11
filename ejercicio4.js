console.log("ejercicio4 js");

function redireccionar(script) {
    window.location.href = script;
}

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(courses1, courses2) {
    let commonCourses = courses1.filter(course => courses2.includes(course));
    return commonCourses;
}

let commonCourses = findCommonCourses(student1Courses, student2Courses);
if (commonCourses.length > 0) {
    console.log('Los siguientes cursos son comunes entre los estudiantes:');
    commonCourses.forEach(course => console.log(course));
} else {
    console.log('No hay cursos comunes entre los estudiantes.');
}
