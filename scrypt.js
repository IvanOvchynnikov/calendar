
let MonthOnPage=document.querySelector(".cur_month");
let WeeksOnPage=document.querySelector(".weeks");

const d = new Date();
const Month = (numMonth) => {
    if(numMonth==0) return "January";
    else if(numMonth==1) return "February";
    else if(numMonth==2) return "March";
    else if(numMonth==3) return "April";
    else if(numMonth==4) return "May";
    else if(numMonth==5) return "June";
    else if(numMonth==6) return "July";
    else if(numMonth==7) return "August";
    else if(numMonth==8) return "September";
    else if(numMonth==9) return "October";
    else if(numMonth==10) return "November";
    else if(numMonth==11) return "December";
}

let curMonth=d.getMonth();
let curYear=d.getFullYear();
AppearenceForward(curYear,curMonth);


document.querySelector(".forward_button").onclick=()=>{

    curMonth=curMonth+1;
    if(curMonth>11)
    {
        curYear++;
        curMonth=0;
    }
    AppearenceForward(curYear,curMonth);
}

function AppearenceForward(curYear,curMonth){
    MonthOnPage.innerHTML=Month(curMonth)+" "+curYear;

    while(WeeksOnPage.firstChild){
        WeeksOnPage.removeChild(WeeksOnPage.firstChild);
    }

    let cur=new Date(curYear,curMonth);
    console.log(cur);
    for(let i=0; i<6; i++)
    {
        let WeekOnPage=document.createElement("div");
        WeekOnPage.className="week";
        for(let j=0; j<7; j++)
        {
            let DayOnPage=document.createElement("div");
            DayOnPage.className="day_number non-hover";
            WeekOnPage.appendChild(DayOnPage);
        }
        WeeksOnPage.appendChild(WeekOnPage);
    }
    let b=cur.getMonth();
    let num=0;
    WeeksOnPage.childNodes.forEach(function (index){
        index.childNodes.forEach(function (day){
            if(b===cur.getMonth()) {
                console.log(num,cur.getUTCDay());
                if (num === cur.getUTCDay()) {
                    day.textContent = cur.getDate();
                    day.className="day_number";
                    cur.setDate(cur.getDate() + 1);
                }
                num = (num + 1) % 7;
            }
        });
    });
    cur=new Date(curYear,cur.getMonth()-1);
}