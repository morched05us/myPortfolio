var projects = [
    {
        worktype: 'Back-End',
        date: '2018',
        name: 'TRIB SOFTWARE',
        type: 'Management Software',
        description: 'Design and implementation of a trip management software for "Mister Bus" (staff transportation company), this software also allows the management of buses, drivers, stops, customers, etc. in addition to generating bills. Technologies : Java, MySQL, JDBC, Swing, Eclipse.'
    },
    {
        worktype: 'Full-Stack',
        date: '2018/19',
        name: 'OPTIC BILL',
        type: 'Management System',
        description: 'First freelancing project, relying only on vanilla JavaScript for DOM manipulation and AJAX requests, Features : Create Patient,Patients Prescription, Manage Patient details and save them for further invoicing. Send professional invoices to clients. Enable inventory tracking and manage goods as they come in and go out Generate and download of reports of invoicing, outstanding payments, purchase orders.'
    }
];

function createProject(project){
    return  "<div class='column'><div class='title'>" +
            "<h1> " + project.date + " </h1>" +
            "<h2> " + project.name + " : <br> " + project.type + " </h2></div>" +
            "<div class='description'>" +
            "<p> " + project.description + " </p>" +
            "</div></div>";   
};

var c_project = document.getElementById('c-projects__project');
var showall = document.getElementById('showAll');
var fullstack = document.getElementById('showFullStack');
var frontend = document.getElementById('showFrontEnd');
var backend = document.getElementById('showBackEnd');

function removeAllClasses(){
    showall.className = '';
    fullstack.className = '';
    frontend.className = '';
    backend.className = '';
};

function animation(x){
    c_project.style = `transform: translateX(${x}px)`;
};

showall.addEventListener('click',function (){
    animation(2000);
    setTimeout(() => {
        var projectsDiv ="";
        projects.forEach( p => {
            projectsDiv += createProject(p);
        });
        c_project.innerHTML = projectsDiv;

        removeAllClasses();
        showall.classList.add('is-active-portfolio');
        setTimeout(() => {
            animation(0);
        }, 200);
    }, 200);
});

fullstack.addEventListener('click',function (){
    animation(2000);
    setTimeout(() => {
        var projectsDiv ="";
        projects.forEach( p => {
            if(p.worktype === 'Full-Stack') projectsDiv += createProject(p);
        });
        c_project.innerHTML = projectsDiv;

        removeAllClasses();
        fullstack.classList.add('is-active-portfolio');
        setTimeout(() => {
            animation(0);
        }, 200);
    }, 200);
});

frontend.addEventListener('click',function (){
    animation(2000);
    setTimeout(() => {
        var projectsDiv ="";
        projects.forEach( p => {
            if(p.worktype === 'Front-End')  projectsDiv += createProject(p);
        });
        c_project.innerHTML = projectsDiv;

        removeAllClasses();
        frontend.classList.add('is-active-portfolio');
        setTimeout(() => {
            animation(0);
        }, 200);
    }, 200);
});

backend.addEventListener('click',function (){
    animation(2000);
    setTimeout(() => {
        var projectsDiv ="";
        projects.forEach( p => {
            if(p.worktype === 'Back-End')   projectsDiv += createProject(p);
        });
        c_project.innerHTML = projectsDiv;
    
        removeAllClasses();
        backend.classList.add('is-active-portfolio');
        setTimeout(() => {
            animation(0);
        }, 200);
    }, 200);
});

showall.click();