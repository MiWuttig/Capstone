function CourseText(nthChild) {
    var Courses = document.getElementById("AvailableCourses").getElementsByTagName("a")
    var BackgroundImg = document.getElementById("CourseImg")
    var cal = document.getElementById("calendar").getElementsByTagName("iframe")[0]
    var datespos = cal.src.search("dates=")

    for (i = 0; i < Courses.length; i++) {
        if ((i+1) == nthChild) {
            Courses[i].classList.add("active");

            switch (i+1) {
                case 1:
                    BackgroundImg.style.backgroundImage = "url('images/mountainbiking2.jpg')";   
                    if (datespos > -1) {
                        var oldDates = cal.src.substring(datespos, (datespos + 23));
                        var oldSrc = cal.src;
                        var newSrc = oldSrc.replace(oldDates, "dates=20200424/20200429");
                        cal.src = newSrc;
                    } 
                break;
                case 2:
                    BackgroundImg.style.backgroundImage = "url('images/HeliSkiing1.jpg')";    
                    if (datespos > -1) {
                        var oldDates = cal.src.substring(datespos, (datespos + 23));
                        var oldSrc = cal.src;
                        var newSrc = oldSrc.replace(oldDates, "dates=20210105/20210112");
                        cal.src = newSrc;
                    }
                break;
                case 3:
                    BackgroundImg.style.backgroundImage = "url('images/Ski-tour2.jpg')"; 
                    if (datespos > -1) {
                        var oldDates = cal.src.substring(datespos, (datespos + 23));
                        var oldSrc = cal.src;
                        var newSrc = oldSrc.replace(oldDates, "dates=20210202/20210202");
                        cal.src = newSrc;
                    }
                break;
                default:
                break;
            }
        } else {
            Courses[i].classList.remove("active");
        }
    };
}