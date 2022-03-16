let date_regex = /^((0?[1-9]|1[012])[/.](0?[1-9]|[12][0-9]|3[01])[/.](19|20)?[0-9]{2})*$/;
// get todays date
let today = new Date();
console.log(today);

const yyyy = today.getFullYear();
const mm = today.getMonth() + 1; // Months start at 0!
const dd = today.getDate();

let nr_ofdays_today = dd + mm*31 + yyyy*365;

function onClick(){
    let dateCheck = document.getElementById('date').value;

    formatValidation(dateCheck);
    
}

function formatValidation(dateCheck){ 

    if(dateCheck === ""){
        document.getElementById("message").innerHTML = "Please fill the form";
    }else if (date_regex.test(dateCheck)) {
            document.getElementById("message").innerHTML = "Your date is correct";
            ageValidation(dateCheck);
        }
        else{
          document.getElementById("message").innerHTML = "Invalid date format.";
        }
    
}


// kontrollon nese mosha eshte mbi 18 ose jo
function ageValidation(dateCheck){
    
    let daysOfMonth = Number(dateCheck.slice(0,2))*31;
    let days = Number(dateCheck.slice(3,5));
    let daysOfYear = Number(dateCheck.slice(6,10))*365;
    
    let sum = daysOfMonth + days + daysOfYear;

    if( (nr_ofdays_today - sum)/365 >= 18 ){
        document.getElementById("message").innerHTML = "Access Allowed";
    }
    else{
        document.getElementById("message").innerHTML = "Access Denied. Must be over 18 years of age."
    }
}


