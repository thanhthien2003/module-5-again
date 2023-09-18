let courses = [ 
  { 
    id: 1, 
    title: "ReactJS Tutorial", 
    rating: 4.2, 
  }, 
  { 
    id: 2, 
    title: "Angular Tutorial", 
    rating: 2.5, 
  }, 
  { 
    id: 3, 
    title: "VueJS Tutorial", 
    rating: 3.8, 
  }, 
  { 
    id: 4, 
    title: "Java Tutorial", 
    rating: 4, 
  }, 
  { 
    id: 5, 
    title: "JavaScript Tutorial", 
    rating: 3.5, 
  }, 
];
// task 1
let coursesRating = courses.filter((courses)=>{
    return courses.rating >= 4; 
});
console.log(coursesRating);
// task 2
let coursesRating2 = courses.filter(function(courses){
    return courses.rating < 4;
});
 let coursesRatingResult2 =  coursesRating2.map((coursesRating2) =>{
  return (
    coursesRating2.id +" - "+ coursesRating2.title +" - "+ coursesRating2.rating
  )
 });
 console.log(coursesRatingResult2);
// task 3
let addedCourses = [ 
  { 
    id: 6, 
    title: "PHP Tutorial", 
    rating: 3, 
  }, 
  { 
    id: 7, 
    title: "C# Tutorial", 
    rating: 2, 
  }, 
  { 
    id: 8, 
    title: "Docker Tutorial", 
    rating: 3.8, 
  } 
]; 
let generalCourse = (courses,addedCourses) => {
  return [...courses,...addedCourses]
}
console.log(generalCourse(courses,addedCourses));