class Course{
    constructor(name, school, program, credits, type, isActive){
        this.name = name;
        this.school = school;
        this.program = program;
        this.credits = credits;
        this.type = type;
        this.isActive = isActive;

    }
    Validate(){
        if (this.name.length >= 15){
            alert('name should be less than than 15');
            return false;
        }
        if (this.credits.length > 10){
            alert('credits should be less than than 10');
            return false;
        }
        return true;
    }
     Add(){
        updateCoursesStat(this.type);
         if (!this.Validate()){
             return false;
         }
         let tr = document.createElement('tr');
         let isActive = this.isActive ? 'active' : 'inactive';
         let tmp = `
         <tr class="course-item" data-name="${this.name}" data-school="${this.school}" data-program="${this.program}" data-type="${this.type}" data-credits="${this.credits}" data-isActive="${isActive}">
         <td>${this.name}</td>
         <td>${this.school}</td>
         <td>${this.program}</td>
         <td>${this.type}</td>
         <td>${this.credits}</td>
         <td>${isActive}</td>
         <tr>`;
         document.getElementById('courseTable').innerHTML += tmp;
        
    }

    static Filter(name, school, program, type, isActive){
        hideElements('.course-item');
        var query = '.course-item';
        if (name){
            query += '[data-name="'+name+'"]';
        }
        if (school){
            query += '[data-school="'+school+'"]';
        }
        if (program){
            query += '[data-program="'+program+'"]';
        }
        if (type){
            query += '[data-type="'+type+'"]';
        }
        if (isActive){
            query += '[data-isActive="active"]';
        }
        // console.log(query);
        unHideElements(query);
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
    hideElements('.program');
    unHideElements('.program[data-parent="'+school+'"]');
    document.querySelector('.program[data-parent="'+school+'"]').selected="selected";
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
    var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove('hidden');
        }

}
function updateCoursesStat(type){
    if (type == 'core'){
        let item = document.getElementById('core-courses').innerText;
        document.getElementById('core-courses').innerText = parseInt(item) + 1;
    }
    if (type == 'elective'){
        let item = document.getElementById('elective-courses').innerText;
        document.getElementById('elective-courses').innerText = parseInt(item) + 1;
    }
}


document.getElementById('filterButton').addEventListener('click', function(e){
    e.preventDefault();
    let name = document.querySelector('#filtername').value;
    let school = document.querySelector('#filterschool').value;
    let program = document.querySelector('#filterprogram').value;
    let type = '';
    if (document.querySelector('#filtertype1').checked){
        type = 'core';
    }
    else if (document.querySelector('#filtertype2').checked){
        type = 'elective';
    }
    let isActive = document.querySelector('#filterisActive').checked;
    Course.Filter(name, school, program, type, isActive);


    
});