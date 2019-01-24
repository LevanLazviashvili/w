class Course{
    constructor(name, school, program, credits, type, isActive){
        this.name = name;
        this.school = school;
        this.program = program;
        this.credits = credits;
        this.type = type;
        isActive = isActive;

    }
    Validate(){
        console.log(this.name.length);
        if (this.name.length >= 15){
            alert('name should be less than than 15');
            return false;
        }
    }
     Add(){
         if (!this.Validate()){
             return false;
         }

        
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
    course.Add();

    
})


document.getElementById('school').addEventListener('change', function(e) {
    filterSelect(this.value);
});

function filterSelect(school){
    console.log('.program[data-parent="'+school+'"]');
    hideElements('.program');
    unHideElements('.program[data-parent="'+school+'"]');
}
filterSelect('medicine');

function hideElements (Query){
    var x = document.querySelectorAll(Query);
    var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.add('hidden');
        }
}

function unHideElements (Query){
    var x = document.querySelectorAll(Query);
    console.log(x);
    var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove('hidden');
        }

}