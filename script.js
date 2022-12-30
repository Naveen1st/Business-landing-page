// function submitForm(){
//       // document.getElementById('form').submit();
//       let number = document.getElementById('number').value;
//       let name = document.getElementById('name').value;
//       let email = document.getElementById('email').value;
//       console.log(number, name, email);
//     //   let placeholder =document.getElementById('extra').value;
//       if(number !=null && name !=null && email !=null){
//         alert("Form submitted successfully!");
//       }
//       else{
//         alert("Please fill required fields")
//       }
     
// }
function submitForm(){
    // Check whether all mandatory fields are filled or not
    let fName=document.getElementById('First-Name').value;
    let lName=document.getElementById('Last-Name').value;
    let email=document.getElementById('Email-Address').value;
    console.log(fName, lName, email);
 
    // show the alert only if all mandatory input fields are filled
    if(fName&& lName && email){
        alert("Form Submitted Successfully!!");
    }
    else{
        alert("Please fill the mandaotory fields");
    }
   
}