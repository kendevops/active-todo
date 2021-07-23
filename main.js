


function func(task){
   task.value=""
   document.querySelector('.addbutn').checked= false 
}



//toggle background color
let icon=document.getElementById("sunset")
let urls=icon.src
icon.addEventListener("click",changes)


    

    let toggle= false;
    
    function changes(index){
       
        if(toggle===false){
           
        document.body.style.backgroundColor="black"
        document.body.style.backgroundImage="url(images/bg-desktop-dark.jpg)"
        document.body.style.color= " hsl(233, 11%, 84%)"
        document.querySelector('.typearea').style.backgroundColor=" hsl(235, 24%, 19%)"
        document.querySelector('.addbutn').style.backgroundColor=" hsl(235, 24%, 19%)"
        document.querySelector('.addtask').style.backgroundColor=" hsl(235, 24%, 19%)"
        document.querySelector('.footer').style.backgroundColor=" hsl(235, 24%, 19%)"
        document.querySelector('.list').style.backgroundColor=" hsl(235, 24%, 19%)"
        document.querySelector('.addtask').style.color="hsl(234, 11%, 52%)"
        
        document.querySelector('.foot').style.backgroundColor=" hsl(235, 24%, 19%)"
        icon.src='images/icon-sun.svg'}
        else{
            document.body.style.backgroundColor="white"
            document.body.style.backgroundImage="url(images/bg-desktop-light.jpg)"
            icon.src='images/icon-moon.svg'
            document.body.style.color=""
            document.body.style.color= " hsl(235, 19%, 35%)"
        document.querySelector('.typearea').style.backgroundColor=" white"
        document.querySelector('.addbutn').style.backgroundColor=" white"
        document.querySelector('.addtask').style.backgroundColor=" white"
        document.querySelector('.footer').style.backgroundColor=" white"
        document.querySelector('.list').style.backgroundColor=" white"
        document.querySelector('.addtask').style.color=" hsl(235, 19%, 35%)"
       
        document.querySelector('.foot').style.backgroundColor="  white"
            document.body.style.backgroundColor="white";
            
        }
        toggle=!toggle
    }
    
        //to cancel an element
        let cancelelement;
        let ind
       let elementind;


       function cancel(index){
           
        ind=index
       
        cancelelement=elements[index]
        

            if(elements[index].includes("<strike>")){
                let indcomplete=completedarr.indexOf(cancelelement)
               completedarr.splice(indcomplete,1)
        elements.splice(index,1);
        document.getElementById("allcount").innerHTML= activearr.length +" " +"items left"
        
    }
    else{
        let indactive=activearr.indexOf(cancelelement)
        activearr.splice(indactive,1)
        elements.splice(index,1)
        document.getElementById("allcount").innerHTML= activearr.length +" " +"items left"
        
    }
    if((localStorage.getItem("todo-elements")==null)&&
            (localStorage.getItem("todo-active")==null)&&
            (localStorage.getItem("todo-completed")==null))
            {
                localStorage.setItem("todo-elements",JSON.stringify(elements));
                localStorage.setItem("todo-active",JSON.stringify(activearr));
                localStorage.setItem("todo-completed",JSON.stringify(completedarr));
            }
            else{
                localStorage.setItem("todo-elements",JSON.stringify(elements));
                localStorage.setItem("todo-active",JSON.stringify(activearr));
                localStorage.setItem("todo-completed",JSON.stringify(completedarr));
            }

    addlist()
    
}
            
    let allcount=0;
    let allcountarr=[];
    let completedarr=[];;
    let activearr=[];
    let activecount;
    let elements=[];
    let completedcount;
    window.onload=function(){
        if(JSON.parse(localStorage.getItem("todo-elements"))!=null){
          elements=JSON.parse(localStorage.getItem("todo-elements"));  
        addlist();   
        }
        if(JSON.parse(localStorage.getItem("todo-completed"))!=null){
           completedarr=JSON.parse(localStorage.getItem("todo-completed"));  
           addlist();   
          }
          if(JSON.parse(localStorage.getItem("todo-active"))!=null){
            activearr=JSON.parse(localStorage.getItem("todo-active"));  
           addlist();   
          }
         
    }


    


   
   
    function addnew(e){
        
        if(document.querySelector(".addtask").value.trim() !==""){
            elements.push(document.querySelector(".addtask").value.trim())
            activearr.push(document.querySelector(".addtask").value.trim())
            

           
            allcount+=1
            if(document.querySelector(".list").innerHTML!==""){
              
                
               
        }
        console.log(localStorage.getItem("todo-elements",JSON.stringify(elements)))
            
             if(document.getElementById("allcount").innerHTML===""){
                document.getElementById("allcount").innerHTML=activearr.length+ " " + "items left"
             }
             else{document.getElementById("allcount").innerHTML=activearr.length+ " " + "items left"}
             document.querySelector(".addtask").value=""
             addlist() 
             
        }
        if((localStorage.getItem("todo-elements")==null)&&
        (localStorage.getItem("todo-active")==null)&&
        (localStorage.getItem("todo-completed")==null))
        {
            localStorage.setItem("todo-elements",JSON.stringify(elements));
            localStorage.setItem("todo-active",JSON.stringify(activearr));
            localStorage.setItem("todo-completed",JSON.stringify(completedarr));
        }
        else{
            localStorage.setItem("todo-elements",JSON.stringify(elements));
            localStorage.setItem("todo-active",JSON.stringify(activearr));
            localStorage.setItem("todo-completed",JSON.stringify(completedarr));
        }



    }
    

   

    

    function addlist(){
        document.querySelector(".list").innerHTML="";
     
        document.getElementById("allcount").innerHTML= activearr.length+ " " + "items left"
       for(let i=0; i<elements.length; i++){
          
           
           
           document.querySelector(".list").innerHTML += 
           "<div class='outerinput'><div class='listtask'  ><div class='butndiv'><button type='radio' class='addbutns' id='butnadd'  onclick='strike(" +  i +")'   ><img id= 'click' src='images/icon-check.svg'></button>  </div>" +elements[i] + "</div><img id='cancel' onclick='cancel(" + i +")' src='images/icon-cross.svg'></div>"
           
           
       }
      
   }

    function strike(index){
        let elem= elements[index]
        if(elements[index].includes("<strike>")){
            elements[index]= elements[index].replace("<strike>","")
            elements[index]= elements[index].replace("</strike>","")
            


            let indcompleted=completedarr.indexOf(elem)
            completedarr.splice(indcompleted,1)
            activearr.push(elements[index])
            activecount=activearr.length
            completedcount=completedarr.length
            completedcount-=1
            document.getElementById("allcount").innerHTML= activearr.length+ " " + "items left"
           
            activecount+=1
            
            
            
            

            
            
       
        }
        else{
            elements[index]= "<strike>" + elements[index] + "</strike>"
            
            document.getElementById("allcount").innerHTML= activearr.length+ " " + "items left"
            let indactivetask=activearr.indexOf(elem)
            
            activearr.splice(indactivetask,1)
            activecount-=1

            document.getElementById("allcount").innerHTML= activearr.length +" " +"items left"
            
            completedarr.push(elements[index])
           

          
           
           completedcount=completedarr.length
           
            

        }
        if(localStorage.getItem("todo-elements")==null){
            localStorage.setItem("todo-elements",JSON.stringify(elements));
           
        }
        else{
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }
        if(localStorage.getItem("todo-active")==null){
            localStorage.setItem("todo-active",JSON.stringify(activearr));
           
        }
        else{
            localStorage.setItem("todo-active",JSON.stringify(activearr));
        }
        if(localStorage.getItem("todo-completed")==null){
            localStorage.setItem("todo-completed",JSON.stringify(completedarr));
           
        }
        else{
            localStorage.setItem("todo-completed",JSON.stringify(completedarr));
        }
        
        addlist();
     
        
        
        
    }
    //to show all tasks
    function alltasks(){
        
       
        document.getElementById("all").style.color="hsl(220, 98%, 61%)"
        document.getElementById("allId").style.color="hsl(220, 98%, 61%)"

        if(document.getElementById("allcount").innerHTML==="" || document.getElementById("allcount").innerHTML.includes("active")
        || document.getElementById("allcount").innerHTML.includes("completed") || document.getElementById("allcount").innerHTML.includes("items")){
        document.getElementById("allcount").innerHTML= activearr.length+ " " + "items left"
        document.querySelector("#all").style.color="hsl(220, 98%, 61%)"
        document.querySelector("#allId").style.color="hsl(220, 98%, 61%)"
        document.querySelector("#active").style.color="hsl(234, 11%, 52%)"
        document.querySelector("#activeId").style.color="hsl(234, 11%, 52%)"
        document.querySelector("#completed").style.color="hsl(234, 11%, 52%)"
        document.querySelector("#completedId").style.color="hsl(234, 11%, 52%)"}
        else{document.getElementById("allcount").innerHTML=""}
        document.querySelector(".list").innerHTML="";
        for(let i=0; i<elements.length; i++){
            
            
            
            document.querySelector(".list").innerHTML += 
            "<div class='outerinput'><div class='listtask'  ><div><button type='radio' class='addbutns' id='butnadd'  onclick='strike(" +  i +")'  ><img id= 'click' src='images/icon-check.svg'></button>  </div>" +elements[i] + "</div><img id='cancel' onclick='cancel()' src='images/icon-cross.svg'></div>"
           
        }
        if(localStorage.getItem("todo-elements")==null){
            localStorage.setItem("todo-elements",JSON.stringify(elements));
           
        }
        else{
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }
       addlist()

    }
   
    
    // to show completed tasks
    function completedtask(){
        
        if(document.getElementById("allcount").innerHTML.includes("items") ||
         document.getElementById("allcount").innerHTML==="" || document.getElementById("allcount").innerHTML.includes("active")){
            document.querySelector("#completed").style.color="hsl(220, 98%, 61%)"
            document.querySelector("#completedId").style.color="hsl(220, 98%, 61%)"
            document.querySelector("#active").style.color="hsl(234, 11%, 52%)"
            document.querySelector("#activeId").style.color="hsl(234, 11%, 52%)"
            document.querySelector("#all").style.color="hsl(234, 11%, 52%)"
            document.querySelector("#allId").style.color="hsl(234, 11%, 52%)"
            document.querySelector(".list").innerHTML="";
            document.getElementById("allcount").innerHTML= completedarr.length + " " + "completed tasks"
            for(let i=0; i<completedarr.length; i++){
            
               
                
                document.querySelector(".list").innerHTML += 
                "<div class='outerinput'><div class='listtask'  ><div><button class='addbutns'  ><img id= 'click' src='images/icon-check.svg'></button></div>" +completedarr[i] + "</div></div>"}
               
                
        }
        else{
            alltasks()
           
        } 
        if(localStorage.getItem("todo-elements")==null){
            localStorage.setItem("todo-elements",JSON.stringify(elements));
            
        }
        else{
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }
        
    }
// to show active tasks
    function activetask(){
        if(document.getElementById("allcount").innerHTML.includes("items") ||
        document.getElementById("allcount").innerHTML==="" || document.getElementById("allcount").innerHTML.includes("completed")){
            document.querySelector("#all").style.color="hsl(234, 11%, 52%)"
            document.querySelector("#allId").style.color="hsl(234, 11%, 52%)"
            document.querySelector("#completed").style.color="hsl(234, 11%, 52%)"
            document.querySelector("#completedId").style.color="hsl(234, 11%, 52%)"
           document.querySelector(".list").innerHTML="";
           document.getElementById("allcount").innerHTML= activearr.length + " " + "active tasks"
           document.querySelector("#active").style.color="hsl(220, 98%, 61%)"
           document.querySelector("#activeId").style.color="hsl(220, 98%, 61%)"
           for(let i=0; i<activearr.length; i++){
           
             
               
               document.querySelector(".list").innerHTML += 
               "<div class='outerinput'><div class='listtask'  ><div><button class='addbutns' ><img id= 'click' src='images/icon-check.svg'></button></div>" +activearr[i] + "</div></div>"}
   
   
       }

       else{alltasks()
        document.querySelector(".active").style.fontWeight=""
        
        }
        

        if(localStorage.getItem("todo-elements")==null){
            localStorage.setItem("todo-elements",JSON.stringify(elements));
            
        }
        else{
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }


        
       
       
    }
// to clear completed tasks
    function clearcompletedtask(){
        
                elements=activearr.slice()
                completedarr=[]
                allcount=activearr.length
                
                document.getElementById("allcount").innerHTML= activearr.length +" " +"items left"


                if((localStorage.getItem("todo-elements")==null)&&
            (localStorage.getItem("todo-active")==null)&&
            (localStorage.getItem("todo-completed")==null))
            {
                localStorage.setItem("todo-elements",JSON.stringify(elements));
                localStorage.setItem("todo-active",JSON.stringify(activearr));
                localStorage.setItem("todo-completed",JSON.stringify(completedarr));
            }
            else{
                localStorage.setItem("todo-elements",JSON.stringify(elements));
                localStorage.setItem("todo-active",JSON.stringify(activearr));
                localStorage.setItem("todo-completed",JSON.stringify(completedarr));
            }

                addlist()
        
            }
            document.getElementById("allcount").innerHTML= activearr.length + " " + "completed tasks"
            
        
       
       
       
       
    
   