function colors1(){
    let a= document.querySelector("#b1");
    let b= document.querySelector("#b2");
    let c= document.querySelector("#b3");
    let d= document.querySelector("#b4");
    let e= document.querySelector("#b5");
    
 a.style.backgroundColor = "orange";
 b.style.backgroundColor = "rgb(46, 43, 43)";
 c.style.backgroundColor = "rgb(46, 43, 43)";
 d.style.backgroundColor = "rgb(46, 43, 43)";
 e.style.backgroundColor = "rgb(46, 43, 43)";    
}
function colors2(){
    let a= document.querySelector("#b1");
    let b= document.querySelector("#b2");
    let c= document.querySelector("#b3");
    let d= document.querySelector("#b4");
    let e= document.querySelector("#b5");
    
 b.style.backgroundColor = "orange";
 a.style.backgroundColor = "rgb(46, 43, 43)";
 c.style.backgroundColor = "rgb(46, 43, 43)";
 d.style.backgroundColor = "rgb(46, 43, 43)";
 e.style.backgroundColor = "rgb(46, 43, 43)";    
}
function colors3(){
    let a= document.querySelector("#b1");
    let b= document.querySelector("#b2");
    let c= document.querySelector("#b3");
    let d= document.querySelector("#b4");
    let e= document.querySelector("#b5");
    
 c.style.backgroundColor = "orange";
 b.style.backgroundColor = "rgb(46, 43, 43)";
 a.style.backgroundColor = "rgb(46, 43, 43)";
 d.style.backgroundColor = "rgb(46, 43, 43)";
 e.style.backgroundColor = "rgb(46, 43, 43)";    
}
function colors4(){
    let a= document.querySelector("#b1");
    let b= document.querySelector("#b2");
    let c= document.querySelector("#b3");
    let d= document.querySelector("#b4");
    let e= document.querySelector("#b5");
    
 d.style.backgroundColor = "orange";
 b.style.backgroundColor = "rgb(46, 43, 43)";
 c.style.backgroundColor = "rgb(46, 43, 43)";
 a.style.backgroundColor = "rgb(46, 43, 43)";
 e.style.backgroundColor = "rgb(46, 43, 43)";    
}
function colors5(){
    let a= document.querySelector("#b1");
    let b= document.querySelector("#b2");
    let c= document.querySelector("#b3");
    let d= document.querySelector("#b4");
    let e= document.querySelector("#b5");
    
 e.style.backgroundColor = "orange";
 b.style.backgroundColor = "rgb(46, 43, 43)";
 c.style.backgroundColor = "rgb(46, 43, 43)";
 d.style.backgroundColor = "rgb(46, 43, 43)";
 a.style.backgroundColor = "rgb(46, 43, 43)";    
}

function hide(){
    let a= document.querySelector("#b1");
    let b= document.querySelector("#b2");
    let c= document.querySelector("#b3");
    let d= document.querySelector("#b4");
    let e= document.querySelector("#b5");
    let f = document.querySelector("h4");
    let g = document.querySelector(".container");
    let h = document.querySelector(".container1");
    
    let a1= a.style.backgroundColor ;
    let b1= b.style.backgroundColor ;
    let c1= c.style.backgroundColor ;
    let d1= d.style.backgroundColor ;
    let e1= e.style.backgroundColor ;
    
    let aa= document.querySelector("#one");
    let bb= document.querySelector("#two");
    let cc= document.querySelector("#three");
    let dd= document.querySelector("#four");
    let ee= document.querySelector("#five");

if (a1!== "orange")
{
    if(b1!== "orange")
    {
        if(c1 !== "orange")
        {
            if(d1!== "orange")
            {
                if(e1 !== "orange")
                {
                    f.style.display= "block";
                    exit(0);
                }
            }
        }
    }
}

g.style.display="none";
h.style.display="block";

if(a1 === "orange")
{
    aa.style.display = "block";
    
}
else if(b1 === "orange")
{
    bb.style.display = "block";
    
}
else if(c1 === "orange")
{
    cc.style.display = "block";
    
}
else if(d1 === "orange")
{
    dd.style.display = "block";
    
}
else if(e1 === "orange")
{
    ee.style.display = "block";   
}

}