function calculate() {
    let year, month, day;
    
    const currentDate = document.getElementById("cd").value;
    const dob = document.getElementById("dob").value;

    if (!currentDate || !dob) {
        document.getElementById("ageText").innerHTML = "Please select both dates.";
        return;
    }

    const currentDay = parseInt(currentDate.slice(8, 10), 10);
    const currentMonth = parseInt(currentDate.slice(5, 7), 10);
    const currentYear = parseInt(currentDate.slice(0, 4), 10);
    
    const birthDay = parseInt(dob.slice(8, 10), 10);
    const birthMonth = parseInt(dob.slice(5, 7), 10);
    const birthYear = parseInt(dob.slice(0, 4), 10);
    
    console.log('Current Date:', currentYear, currentMonth, currentDay);
    console.log('Birth Date:', birthYear, birthMonth, birthDay);
    
    // Calculate day
    if (currentDay >= birthDay) {
        day = currentDay - birthDay;
    } else {
        day = currentDay + new Date(currentYear, currentMonth, 0).getDate() - birthDay;
        currentMonth--;
    }

    // Calculate month
    if (currentMonth >= birthMonth) {
        month = currentMonth - birthMonth;
    } else {
        month = currentMonth + 12 - birthMonth;
        currentYear--;
    }

    // Calculate year
    year = currentYear - birthYear;

    // Validate age
    if (year < 0) {
        document.getElementById("ageText").innerHTML = "Please enter a valid birth date.";
    } else {
        document.getElementById("ageText").innerHTML = `${year} years, ${month} months, ${day} days`;
    }
}

