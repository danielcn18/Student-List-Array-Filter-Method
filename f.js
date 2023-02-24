var filterOps = ["All", "Male", "Female", "Senior", "Junior"];

for(let i = 0; i < filterOps.length; i++){
    var opt = document.createElement('option');
    var text = document.createTextNode(`${filterOps[i]}`);
    opt.appendChild(text);
    document.getElementById('myFilter').innerHTML += `
    <option>${filterOps[i]}</option>`;
}

var people = [
    {
        name:"Daniel",
        gender:"Male",
        year:"Junior"
    }, 
    {
        name:"Nicholas", 
        gender:"Male",
        year:"Junior"
    }, 
    {
        name:"Aaron",
        gender:"Male",
        year:"Senior"
    },
    {
        name:"Johnny",
        gender:"Male",
        year:"Junior"
    },
    {
        name:"Sarah",
        gender:"Female",
        year:"Junior"
    },
    {
        name:"Tiffany",
        gender:"Female",
        year:"Junior"
    }
];

function all(){
    var info = ``;
    for(let i = 0; i < people.length; i++){
        info += `
        <div class="box">
            <div class="box-inner1">${people[i].name}</div>
            <div class="box-inner2">${people[i].gender}</div>
            <div class="box-inner3">${people[i].year}</div>
        </div>`;
    }
    document.querySelector('#display').innerHTML = info;
}

function filter(){
    let f = document.getElementById('myFilter');
    let s = f.selectedIndex;
    var selected;
    for(let i = 0; i < filterOps.length; i++){
        if(f.options[s].text == filterOps[i]){
            selected = filterOps[i];
        }
    }
    display(selected);
}
function display(s){ 
    var info = ``;
    for(let i = 0; i < people.length; i++){
        if(s == "All"){
            info += `
            <div class="box">
                <div class="box-inner1">${people[i].name}</div>
                <div class="box-inner2">${people[i].gender}</div>
                <div class="box-inner3">${people[i].year}</div>
            </div>`;
        }
        if(s == filterOps[1]){
            if(people[i].gender == filterOps[1]){
                info += `
                <div class="box">
                    <div class="box-inner1">${people[i].name}</div>
                    <div class="box-inner2">${people[i].gender}</div>
                    <div class="box-inner3">${people[i].year}</div>
                </div>`;
            }
        }
        if(s == filterOps[2]){
            if(people[i].gender == filterOps[2]){
                info += `
                <div class="box">
                    <div class="box-inner1">${people[i].name}</div>
                    <div class="box-inner2">${people[i].gender}</div>
                    <div class="box-inner3">${people[i].year}</div>
                </div>`;
            }
        }
        if(s == filterOps[3]){
            if(people[i].year == filterOps[3]){
                info += `
                <div class="box">
                    <div class="box-inner1">${people[i].name}</div>
                    <div class="box-inner2">${people[i].gender}</div>
                    <div class="box-inner3">${people[i].year}</div>
                </div>`;
            }
        }
        if(s == filterOps[4]){
            if(people[i].year == filterOps[4]){
                info += `
                <div class="box">
                    <div class="box-inner1">${people[i].name}</div>
                    <div class="box-inner2">${people[i].gender}</div>
                    <div class="box-inner3">${people[i].year}</div>
                </div>`;
            }
        }
    }
    document.querySelector('#display').innerHTML = info;
}

/* filter(); */