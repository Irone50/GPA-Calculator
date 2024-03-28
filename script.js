// Call the function
function getGpa() {
    const courseCredits = document.getElementsByName("creditLoad");
    const courseGrades = document.getElementsByName("grade");
    let totalGrade = 0;
    let totalCreditLoad = 0;
  
    // Calculate the total credit load and total grades
    for (let i = 0; i < courseCredits.length; i++) {
      let creditLoad = parseInt(courseCredits[i].value);
      let grade = parseInt(courseGrades[i].value);
  
      totalGrade = totalGrade + creditLoad * grade;
      totalCreditLoad = totalCreditLoad + creditLoad;
    }
  
    // Calculate the GPA
    let gpa = totalGrade / totalCreditLoad;
  
    // Display the result
    let gpaResult = document.getElementById("gpa-result");
   
    gpaResult.innerHTML = "Your GPA is: " + gpa.toFixed(2);
  }

//   totalGrade += creditLoad * grade;
//   totalCreditLoad += creditLoad;