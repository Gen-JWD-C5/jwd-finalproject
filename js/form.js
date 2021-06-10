//This file contains functionality related to validating and submitting form.

//Defining task Button
let addTaskBtn = document.querySelector("#addTaskBtn");
addTaskBtn.addEventListener('click',addTask);

//return values for validate functions
let validationSuccessful = true;
let validationFailed = false;

//Instantiate a task planner
//let taskPlanner = new TaskName();


//Validation of Task Name for being blank or not meeting length requirements
function validateTaskName() 
{
    let minTaskLength = 5; //to be defined by user
    let maxTaskLength = 100; //to be defined by user
    let inputTask = document.querySelector("#inputTask");
   
    if (inputTask.value === "")
    {
        inputTask.style.borderColor = "red";
        let errMsg = document.querySelector("#errMsg");
        errMsg.style.color = "red";
        errMsg.innerHTML = `Please provide a Task Name.`;
        return validationFailed;
    }else if((inputTask.value.length < minTaskLength) || (inputTask.value.length > maxTaskLength))
    {
        inputTask.style.borderColor = "red";
        let errMsg = document.querySelector("#errMsg");
        errMsg.style.color = "red";
        errMsg.innerHTML = `Task Name can only be between ${minTaskLength}-${maxTaskLength} characters.`;
        return validationFailed;
    }else //validation successful
    {
        errMsg.innerHTML = "";
        inputTask.style.borderColor = "";
        return validationSuccessful;
    }
}

//Validation of Status
function validateStatus()
{
    let statusDropdown = document.querySelector("#statusDropdown");
    let errMsg = document.querySelector("#statusErrMsg");
   
    if(statusDropdown.value === "Choose Status")
    {
        statusDropdown.style.borderColor = "red";
        errMsg.style.color = "red";
        errMsg.innerHTML = `Please choose Status`; 
        return validationFailed;  
    }else //successfully validated
    {
        statusDropdown.style.borderColor = "";
        errMsg.innerHTML = ``;
        return validationSuccessful;
    }
}

//Validation of Assignee
function validateAssignee()
{
    let assigneeDropdown = document.querySelector("#inputAssignee");
    let minAssigneeLength = 5;//defined by user
    let maxAssigneeLength = 15;//defined by user
    let errMsg = document.querySelector("#assigneeErrMsg");
    if(inputAssignee.value === "")
    {
        inputAssignee.style.borderColor = "red";   
        
        errMsg.style.color = "red";
        errMsg.innerHTML = `Please add Assignee`;
        return validationFailed;
    }
    else if((inputAssignee.value.length < minAssigneeLength) || (inputAssignee.value.length > maxAssigneeLength))
    {
        inputAssignee.style.borderColor = "red";   
        errMsg.style.color = "red";
        errMsg.innerHTML = `Assignee can only be between ${minAssigneeLength}-${maxAssigneeLength} characters!`;
        return validationFailed;
    }
    else //successfully validated
    {
        inputAssignee.style.borderColor = "";
        errMsg.innerHTML = ``;
        return validationSuccessful;
    }
}

//Validation of Due Date
function validateDueDate()
{
    let dueDate = document.querySelector("#dueDate");
    let errMsg = document.querySelector("#dateErrMsg");
    let inputDate = new Date(dueDate.value);
    let todaysDate = new Date();
    if(inputDate.setHours(0,0,0,0) < todaysDate.setHours(0,0,0,0))
    {
        dueDate.style.borderColor = "red";
        errMsg.style.color = "red";
        errMsg.innerHTML = `Please select a valid Date`;
        return validationFailed;
    }else //validation successful
    {
        dueDate.style.borderColor = "";
        errMsg.innerHTML = ``;
        return validationSuccessful;
    }

}

function validateDescriptionBox()
{
    let description = document.querySelector("#description");
    let errMsg = document.querySelector("#descriptionErrMsg");
    let minDescLength = 5; //defined by user
    let maxDescLength = 200; //defined by user
    
    if(description.value === "")
    {
        description.style.borderColor = "red";   
        errMsg.style.color = "red";
        errMsg.innerHTML = `Please add Description`;
        return validationFailed;
    }
    else if((description.value.length < minDescLength) || (description.value.length > maxDescLength))
    {
        description.style.borderColor = "red";   
        errMsg.style.color = "red";
        errMsg.innerHTML = `Description can only be between ${minDescLength}-${maxDescLength} characters!`;
        return validationFailed;
    }
    else //successfully validated
    {
        description.style.borderColor = "";
        errMsg.innerHTML = ``;
        return validationSuccessful;
    }    
}

function validateForm()
{

    return(validateTaskName() && 
     validateStatus() && 
     validateAssignee() && 
     validateDueDate() && 
     validateDescriptionBox());
 }

function addTask() 
{

    if(validateForm())
    {
    //create a new object by storing the values and call the add task function
    //alert("FORM validated!!!")
    //taskPlanner.addTask();
    }
}
