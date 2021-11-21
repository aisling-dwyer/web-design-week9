
 var subjectResults=[]
 var output=""
 
 function input(){   
    var numOfSubjects = window.prompt("Enter how many subjects you take.");

    for (i=0; i<numOfSubjects; i++){
        subjectResults[i] = window.prompt("Enter your result achieved for subject "+(i+1));
    }

    for(i=0;i<subjectResults.length; i++){
       
        output+= "Subject Result "+(i+1)+": "+subjectResults[i]+"<br/>"
        
        if (subjectResults[i]>=85){
            //Subject Grade 1= A
           output += "Subject Grade "+(i+1)+": A <br/>"
        }
        else if (subjectResults[i]>=70){
            //Subject Grade 1= B
           output += "Subject Grade "+(i+1)+": B <br/>"
        }
        else if (subjectResults[i]>=55){
            //Subject Grade 1= C
           output += "Subject Grade "+(i+1)+": C <br/>"
        }
        else if (subjectResults[i]>=40){
            //Subject Grade 1= D
           output += "Subject Grade "+(i+1)+": D <br/>"
        }
        else {
            //Subject Grade 1= Fail
           output += "Subject Grade "+(i+1)+": Fail <br/>"
        }
    }
    document.getElementById("main").innerHTML = output
 

}