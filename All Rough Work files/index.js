console.log("Hello ")
let searchedHallTicket ;
resultArray =  [
        {
            "HALLTTICKET": "17UJ1A0501",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "19",
            "EXTERNAL": "61",
            "TOTAL_MARKS": "80",
            "GRADE": "B+",
            "GRADE_POINTS": "3",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0502",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "23",
            "EXTERNAL": "69",
            "TOTAL_MARKS": "92",
            "GRADE": "O",
            "GRADE_POINTS": "2",
            "CREDITS": "3"
        },
        {
            "HALLTTICKET": "17UJ1A0503",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "20",
            "EXTERNAL": "42",
            "TOTAL_MARKS": "62",
            "GRADE": "B",
            "GRADE_POINTS": "2",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0504",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "14",
            "EXTERNAL": "44",
            "TOTAL_MARKS": "58",
            "GRADE": "C",
            "GRADE_POINTS": "2",
            "CREDITS": "1"
        },
        {
            "HALLTTICKET": "17UJ1A0505",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "21",
            "EXTERNAL": "41",
            "TOTAL_MARKS": "62",
            "GRADE": "B",
            "GRADE_POINTS": "4",
            "CREDITS": "1"
        },
        {
            "HALLTTICKET": "17UJ1A0506",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "16",
            "EXTERNAL": "33",
            "TOTAL_MARKS": "49",
            "GRADE": "F",
            "GRADE_POINTS": "1",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0507",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "20",
            "EXTERNAL": "56",
            "TOTAL_MARKS": "76",
            "GRADE": "B+",
            "GRADE_POINTS": "3",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0508",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "20",
            "EXTERNAL": "28",
            "TOTAL_MARKS": "48",
            "GRADE": "F",
            "GRADE_POINTS": "3",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0509",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "21",
            "EXTERNAL": "45",
            "TOTAL_MARKS": "66",
            "GRADE": "B",
            "GRADE_POINTS": "1",
            "CREDITS": "1"
        },
        {
            "HALLTTICKET": "17UJ1A0510",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "14",
            "EXTERNAL": "12",
            "TOTAL_MARKS": "26",
            "GRADE": "F",
            "GRADE_POINTS": "3",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0511",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "22",
            "EXTERNAL": "66",
            "TOTAL_MARKS": "88",
            "GRADE": "A+",
            "GRADE_POINTS": "2",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0512",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "19",
            "EXTERNAL": "0",
            "TOTAL_MARKS": "19",
            "GRADE": "F",
            "GRADE_POINTS": "2",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0513",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "23",
            "EXTERNAL": "21",
            "TOTAL_MARKS": "44",
            "GRADE": "F",
            "GRADE_POINTS": "1",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0514",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "17",
            "EXTERNAL": "32",
            "TOTAL_MARKS": "49",
            "GRADE": "F",
            "GRADE_POINTS": "2",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0515",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "19",
            "EXTERNAL": "48",
            "TOTAL_MARKS": "67",
            "GRADE": "B",
            "GRADE_POINTS": "3",
            "CREDITS": "3"
        },
        {
            "HALLTTICKET": "17UJ1A0516",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "22",
            "EXTERNAL": "21",
            "TOTAL_MARKS": "43",
            "GRADE": "F",
            "GRADE_POINTS": "2",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0517",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "23",
            "EXTERNAL": "29",
            "TOTAL_MARKS": "52",
            "GRADE": "C",
            "GRADE_POINTS": "1",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0518",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "24",
            "EXTERNAL": "27",
            "TOTAL_MARKS": "51",
            "GRADE": "C",
            "GRADE_POINTS": "2",
            "CREDITS": "3"
        },
        {
            "HALLTTICKET": "17UJ1A0519",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "15",
            "EXTERNAL": "18",
            "TOTAL_MARKS": "33",
            "GRADE": "F",
            "GRADE_POINTS": "4",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0520",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "17",
            "EXTERNAL": "67",
            "TOTAL_MARKS": "84",
            "GRADE": "A+",
            "GRADE_POINTS": "2",
            "CREDITS": "3"
        },
        {
            "HALLTTICKET": "17UJ1A0521",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "24",
            "EXTERNAL": "64",
            "TOTAL_MARKS": "88",
            "GRADE": "A+",
            "GRADE_POINTS": "3",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0522",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "22",
            "EXTERNAL": "11",
            "TOTAL_MARKS": "33",
            "GRADE": "F",
            "GRADE_POINTS": "3",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0523",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "16",
            "EXTERNAL": "26",
            "TOTAL_MARKS": "42",
            "GRADE": "F",
            "GRADE_POINTS": "4",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0524",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "19",
            "EXTERNAL": "33",
            "TOTAL_MARKS": "52",
            "GRADE": "C",
            "GRADE_POINTS": "1",
            "CREDITS": "3"
        },
        {
            "HALLTTICKET": "17UJ1A0525",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "19",
            "EXTERNAL": "19",
            "TOTAL_MARKS": "38",
            "GRADE": "F",
            "GRADE_POINTS": "2",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0526",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "23",
            "EXTERNAL": "49",
            "TOTAL_MARKS": "72",
            "GRADE": "B+",
            "GRADE_POINTS": "2",
            "CREDITS": "2"
        },
        {
            "HALLTTICKET": "17UJ1A0527",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "24",
            "EXTERNAL": "51",
            "TOTAL_MARKS": "75",
            "GRADE": "B+",
            "GRADE_POINTS": "3",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0528",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "23",
            "EXTERNAL": "67",
            "TOTAL_MARKS": "90",
            "GRADE": "A+",
            "GRADE_POINTS": "4",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0529",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "18",
            "EXTERNAL": "13",
            "TOTAL_MARKS": "31",
            "GRADE": "F",
            "GRADE_POINTS": "3",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0530",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "23",
            "EXTERNAL": "55",
            "TOTAL_MARKS": "78",
            "GRADE": "B+",
            "GRADE_POINTS": "3",
            "CREDITS": "1"
        },
        {
            "HALLTTICKET": "17UJ1A0531",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "19",
            "EXTERNAL": "46",
            "TOTAL_MARKS": "65",
            "GRADE": "B",
            "GRADE_POINTS": "4",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0532",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "24",
            "EXTERNAL": "10",
            "TOTAL_MARKS": "34",
            "GRADE": "F",
            "GRADE_POINTS": "2",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0533",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "15",
            "EXTERNAL": "44",
            "TOTAL_MARKS": "59",
            "GRADE": "C",
            "GRADE_POINTS": "3",
            "CREDITS": "3"
        },
        {
            "HALLTTICKET": "17UJ1A0534",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "18",
            "EXTERNAL": "3",
            "TOTAL_MARKS": "21",
            "GRADE": "F",
            "GRADE_POINTS": "1",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0535",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "23",
            "EXTERNAL": "35",
            "TOTAL_MARKS": "58",
            "GRADE": "C",
            "GRADE_POINTS": "4",
            "CREDITS": "2"
        },
        {
            "HALLTTICKET": "17UJ1A0536",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "24",
            "EXTERNAL": "68",
            "TOTAL_MARKS": "92",
            "GRADE": "O",
            "GRADE_POINTS": "2",
            "CREDITS": "4"
        },
        {
            "HALLTTICKET": "17UJ1A0537",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "15",
            "EXTERNAL": "1",
            "TOTAL_MARKS": "16",
            "GRADE": "F",
            "GRADE_POINTS": "1",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0538",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "20",
            "EXTERNAL": "4",
            "TOTAL_MARKS": "24",
            "GRADE": "F",
            "GRADE_POINTS": "2",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0539",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "22",
            "EXTERNAL": "26",
            "TOTAL_MARKS": "48",
            "GRADE": "F",
            "GRADE_POINTS": "3",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0540",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "16",
            "EXTERNAL": "39",
            "TOTAL_MARKS": "55",
            "GRADE": "C",
            "GRADE_POINTS": "2",
            "CREDITS": "3"
        },
        {
            "HALLTTICKET": "17UJ1A0541",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "24",
            "EXTERNAL": "52",
            "TOTAL_MARKS": "76",
            "GRADE": "B+",
            "GRADE_POINTS": "4",
            "CREDITS": "2"
        },
        {
            "HALLTTICKET": "17UJ1A0542",
            "SUBJECT_CODE": "233",
            "SUBJECT_NAME": "AA",
            "INTERNAL": "17",
            "EXTERNAL": "19",
            "TOTAL_MARKS": "36",
            "GRADE": "F",
            "GRADE_POINTS": "4",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0543",
            "SUBJECT_CODE": "232",
            "SUBJECT_NAME": "MES",
            "INTERNAL": "23",
            "EXTERNAL": "16",
            "TOTAL_MARKS": "39",
            "GRADE": "F",
            "GRADE_POINTS": "2",
            "CREDITS": "0"
        },
        {
            "HALLTTICKET": "17UJ1A0544",
            "SUBJECT_CODE": "231",
            "SUBJECT_NAME": "MIS",
            "INTERNAL": "16",
            "EXTERNAL": "18",
            "TOTAL_MARKS": "34",
            "GRADE": "F",
            "GRADE_POINTS": "4",
            "CREDITS": "0"
        }
    ]
    

function onClick(){
    console.log("Funcction Call");
    console.log(document.getElementById("search").value)

    let searched = document.getElementById("search").value;
let data = "";
//console.log(searched);
resultArray.forEach((element,searched)=> {
//   console.log(element.HALLTTICKET)
//    console.log(element.HALLTTICKET ,searched)
//     searched = undefined;
    if (element.HALLTTICKET == "17UJ1A0502"){
      //  console.log("working")
        console.log(element.SUBJECT_CODE, element.GRADE,element.HALLTTICKET)
        data +=  `

        <tr>
        <td>${element.HALLTTICKET}</td>
        <td>${element.SUBJECT_CODE}</td>
        <td>${element.GRADE}</td>
        
        </tr>
        `
       

    }
    // else{
    //     console.log("No record Found")
    // }

    
});
document.getElementById('data').innerHTML = data;
console.log("END")
}


//     fetch("data.json")
//   .then(response => response.json())
//   .then(data =>{ console.log(data)

//     const student = data.filter(stu => stu.HALLTICKET ==searchedHallTicket);
//     console.log(student);
//     if(student.length == 0){
//         console.log("Invalid Results")
//     }

//     student.forEach(element => {
//        // console.log(element.HALLTICKET,element.STUDENT_NAME, element.BRANCH,element.SUBJECT_CODE);
//         details = ` <h1> Results of ${element.STUDENT_NAME} 
        
        
//         </h1>
//         <table style:"color:'black'">
//         <th> Sudent Name
//         </th>
//         <th> Branch
//         </th>
//         <th> Student Hallticket
//         </th>
//         <tr>
//         <td>${element.STUDENT_NAME}</td>
//         <td>${element.BRANCH}</td>
//         <td>${element.HALLTICKET}</td>
//         </tr>

//         </table>
        
//         `
//         othersdetails += `
//         <tr>
//         <td>${element.SUBJECT_CODE}</td>
//         <td>${element.SUBJECT_NAME}</td>
//         <td>${element.INTERNAL}</td>
//         <td>${element.EXTERNAL}</td>
//         <td>${element.TOTAL_MARKS}</td>
//         <td>${element.GRADE_POINTS}</td>
//         <td>${element.GRADE}</td>
        

        
// </tr>
    
//         `
        
//     });

//   document.getElementById("details").innerHTML = details;
//   document.getElementById("data").innerHTML = othersdetails;


  













// });


  

