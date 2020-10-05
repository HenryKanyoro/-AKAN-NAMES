function findOut(){
    const date= document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const maleName=["Kwasi","Kwadwo","Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
    const femaleName=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


    const hank= new Date();
    hank.setDate(parseInt(date));
    hank.setMonth(parseInt(month)-1);
    hank.setFullYear(parseInt(year));

    const he= hank.getDay();


    if(he===0){
        alert("Sunday");
    }else if(he===1){
        alert("Monday");

    }else if(he===2){
        alert("Tuesday");
        
    }else if(he===3){
        alert("Wednesday");
        
    }else if(he===4){
        alert("Thursday");
        
    }else if(he===5){
        alert("Friday");
        
    }else if(he===6){
        alert("Saturday");
        
    }


    if(date=="" || date>31){
        alert("Please Enter a valid date");
    }
    else if(month==""|| month>12){
        alert("Please Enter a valid Month")
    }
     else if(year==""||year>2030){
        alert("Please Enter a valid year");
    }
    
    else if(document.getElementById("male").checked == true && document.getElementById("female").checked==false){
        alert("Your Akan name is " + maleName[he]);
    }
     
    else if(document.getElementById("female").checked == true && document.getElementById("male").checked==false){
        alert("Your Akan name is " + femaleName[he]);
    }
    
        
}