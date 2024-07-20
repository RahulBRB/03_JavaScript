const finalGrade = (n1, n2, n3) => {
    let avg = 0;
  
    if (n1 > 100 || n1 < 0 || n2 > 100 || n2 < 0 || n3 > 100 || n3 < 0) {
      return 'You have entered an invalid grade.';
    } else {
      avg = (n1 + n2 + n3) / 3;
    }
  
    if (avg <= 59) {
      return 'F';
    } else if (avg >= 60 && avg <= 69) {
      return 'D';
    } else if (avg >= 70 && avg <= 79) {
      return 'C';
    } else if (avg >= 80 && avg <= 89) {
      return 'B';
    } else if (avg >= 90 && avg <= 100) {
      return 'A';
    }
  };
  
  console.log(finalGrade(50, 60, 99)); // Output: 'A'
  