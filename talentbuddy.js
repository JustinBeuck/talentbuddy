function compute_prediction(n, w) {       
	console.log(Math.floor(n * Math.pow(1.07, w))); 
}

// write a function that prints to the standard output (stdout) the
// number of unique visitors we are going to have after W weeks please
// round the final result downwards to the nearest integer (e.g both
// 7.1 and 7.9 are rounded to 7)

function count_configurations(a, b, c, n) {
  var cnt = 0;

  for (var i = 0; i <= a; i++) {
    for (var j = 0; j <= Math.min(b, n - i); j++) {
      var reminder = n - i - j;
      if (reminder >= 0 && reminder <= c) {
        cnt++;
      }
    }
  }
  console.log(cnt);
}

// other option

function count_configurations(a, b, c, n) {
    // To print results to the standard output please use console.log()
    // Example: console.log("Hello world!");
    var configurations = 0;
    
    for (var i = 0; i <= a; i++) {
        for (var j = 0; j <= b; j++) {
            for (var k = 0; k <= c; k++) {
                if (i + j + k === n) {
                    configurations++;
                }
            }
        }
    }
    
    console.log(configurations);
}


//////////////////////////////////////////////////

function max_grade(grades) {

    console.log(Math.max.apply(null, grades));
    
}

// write a function that finds the highest grade and 
// prints this grade to standard output (stdout)

// ////////////////////////////////////////////////

function count_successful_students(grades, min_grade) {

    var n = grades.length, passed = 0;
    for (var i = 0; i < n; i++) {
        if (grades[i] >= min_grade) {
            passed++;
        }
    }
    console.log(passed);
}

// write a function that counts the number of students 
// that passed and prints this number to standard 
// output (stdout)

////////////////////////////////////////////////////






















