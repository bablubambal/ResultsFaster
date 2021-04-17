//console.log("new js");
// var searchedHallTicket = "17UJ1A0501";

var searchedHallTicket = "";

//  When Pressing Enter in input field
$("#search").keypress(function(event) {
    if (event.which == 13) {
        onClick();
     }
});
/// Function for seach button
function onClick(){
    ///getting the seach hall ticket value.
     searchedHallTicket = document.getElementById("search").value;
     searchedHallTicket = searchedHallTicket.toUpperCase();
     /// if hall ticket is null then hide the fields
     if(searchedHallTicket.length == 0){

        document.getElementById("mytable").classList.add("hidden");
        document.getElementById("mydetails").classList.add("hidden");
     }
     //ADDING AND REMOVING THE CLASSES FROM THE ATTRIBUTE
     document.getElementById("mytable").classList.remove("hidden");
     document.getElementById("mydetails").classList.remove("hidden");
   //  console.log(searchedHallTicket);
   //CALLING THE FETCH RESULTS
     fetchResult(searchedHallTicket);
}

//FUNCTION FETCH RESULT
function fetchResult(searchedHallTicket){
    var errormsg;
    var details = ""
var othersdetails = "";
   /// console.log(searchedHallTicket);
   //we have used the fetch api and got the result from the json.
    fetch("data.json").then(response => response.json()).then(data=>{console.log(data)
        let studentdata  = data.filter(student => student.HALLTICKET == searchedHallTicket);
        if(studentdata.length==0){
            console.log("Invalid HallTicket Number");
            errormsg= `
            <div class="alert danger alert-dismissible fade show" role="alert">
  <strong>Hello User!</strong> Your Hall ticket is invalid !
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
            `;
            document.getElementById("mytable").classList.add("hidden");
        document.getElementById("mydetails").classList.add("hidden");
            document.getElementById("myerror").innerHTML = errormsg;
            
        }
    
        else{
            studentdata.forEach(element =>{
                console.log(element.HALLTICKET,element.STUDENT_NAME, element.BRANCH,element.SUBJECT_CODE);
               details = ` <h1> Results of ${element.STUDENT_NAME} 
        
        
                        </h1>Student Details</h1>
                        <table>
                        <th></th>
                        <th></th>
                        <tbody>
                        <tr>
                        <td>Name:</td>
                        <td>${element.STUDENT_NAME}</td>
                        </tr>
                        <tr>
                       <td>Branch: </td>
                        <td>${element.BRANCH}</td> </tr>
                        <tr>
                        <td>Hall Ticket: </td>
                        <td>${element.HALLTICKET}</td>
                        </tr>
                        
                        </tbody>
                       
                
                        </table>
                        
                        `
                        othersdetails += `
                        <tr scope="row" >
                        <td>${element.SUBJECT_CODE}</td>
                        <td>${element.SUBJECT_NAME}</td>
                        <td>${element.INTERNAL}</td>
                        <td>${element.EXTERNAL}</td>
                        <td>${element.TOTAL_MARKS}</td>
                        
                        <td>${element.GRADE}</td>
                        <td>${element.GRADE_POINTS}</td>
                        <td>${element.CREDITS}</td>
                        
                
                        
                </tr>
                    
                        `
                        



            })
              document.getElementById("details").innerHTML = details;
  document.getElementById("data").innerHTML = othersdetails;
 // document.getElementById("search").value = ""

        }
    
    
    
    
    })
}
