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

function compute_average_grade(grades) {

    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    
    console.log(Math.floor(sum / grades.length));
}

// write a function that computes the average of all the 
// grades in the array and prints this number to 
// standard output (stdout) the result must be rounded 
// downwards to the nearest integer (e.g. both 7.1 and 
// 7.9 are rounded to 7)

// /////////////////////////////////////

function is_sorted(grades) {
    for(var i = 0; i<grades.length-1;i++){
        if(grades[i]>grades[i+1]){
           console.log(0);
        return;
           }
    }
    console.log(1);
}

// write a function that checks whether the grades received by each student are in ascending order
// your function must print to standard output (stdout):
// 1 if the grades are in ascending order (e.g. 1, 3, 3, 7)
// 0 if the grades are not in ascending order (e.g. 1, 3, 7, 3)
// Note that your function will receive the following arguments:

///////////////////////////////////////////////////

function longest_improvement(grades) {

    count=1;
    max_count=1;
    for(i=1;i<grades.length;i++){
        if(grades[i]<grades[i-1]){
            count=1;
        }else{
            count++;
            if(count>max_count)max_count=count;
        }
    }
    console.log(max_count);
    
}

// write a function that computes and prints to 
// standard output (stdout) the longest period of 
// increasing performance for the student that has 
// these grades

///////////////////////////////////////////////////

function sort_students(numbers) {
    
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < numbers.length-1; i++) {
            if (numbers[i] > numbers[i+1]) {
                var temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    for(number in numbers){
        console.log(numbers[number])
    }
}

// implement the bubblesort algorithm to sort 
// the array in ascending order and print the 
// sorted elements to standard output (stdout), 
// one per line


/////////////////////////////////////////////////////


function get_common_courses(courses1, courses2) {
    courses1.filter(function(item){
        return (courses2.indexOf(item) > -1);
    }).sort(function(a,b){
        return a-b;
    }).forEach(function(item){
        console.log(item);
    });
}

// write a function that prints to standard output 
// (stdout) all the course IDs that are contained in 
// both arrays, sorted in ascending order, one per line

// ////////////////////////////////////////////

function copy_string(s1, s2, p) {
    console.log(s1.slice(0, p) + s2 + s1.slice(p));
}

// write a function that inserts S2 into S1 starting 
// with the position P in S1 and then prints the newly 
// formed string S1 to standard output (stdout)

///////////////////////////////////////////////////////
















