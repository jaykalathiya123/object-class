class School {
    Student(name, email, contact) {
        return { type: 'Student', name, email, contact };
    }

    Faculty(name, email, contact) {
        return { type: 'Faculty', name, email, contact };
    }

    Peon(name, email, contact) {
        return { type: 'Peon', name, email, contact };
    }
}

const mySchool = new School();

const student = mySchool.Student('jay kalathiya', 'kalathiya020@gmail.com', '9714689976');
document.getElementById("h1").innerHTML=(`name:=${student.name} <br>email:=${student.email} <br> contact:=${student.contact}` );
const faculty = mySchool.Faculty('keyur gohil', 'keyurgohil@gmail.com', '5487218754');
document.getElementById("h2").innerHTML=(`name:=${faculty.name} <br>email:=${faculty.email} <br> contact:=${faculty.contact}` );
const peon = mySchool.Peon('rakesh patel', 'rakeshpatel@gmail.com', '1245783265');
document.getElementById("h3").innerHTML=(`name:=${peon.name} <br>email:=${ peon.email} <br> contact:=${ peon.contact}` );