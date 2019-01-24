class Course{
    constructor(name, school, program, credits, type, isActive){
        this.name = name;
        this.school = school;
        this.program = program;
        this.credits = credits;
        this.type = type;
        isActive = isActive;

    }
     Add(){
        let tmpl = this.getFormTmpl();
        document.getElementById('patientContainer').append(tmpl);
    }
}


let add = document.getElementById("addButton");
add.addEventListener('click', function(e){
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let school = document.querySelector('#school').value;
    let program = document.querySelector('#program').value;
    let credits = document.querySelector('#credits').value;
    let type = '';
    if (document.querySelector('#type1').checked){
        type = 'core';
    }
    else if (document.querySelector('#type2').checked){
        type = 'elective';
    }
    let isActive = document.querySelector('#isActive').checked;

    let course = new Course(name, school, program, credits, type, isActive);

    
})