var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentHr = moment().hour()


$("#currentDay").text(currentDay);

var hourOfDay = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM"
];

var militaryHr = [
    9, 
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17
]

$(".container").empty();


for (let i = 0; i < hourOfDay.length; i++) {
   var timeStatus = ""
    if (currentHr === militaryHr[i]) {   
        timeStatus = "present"     
    }
    if (currentHr < militaryHr[i]) {   
        timeStatus = "future"     
    }
    if (currentHr > militaryHr[i]) {   
        timeStatus = "past"     
    }

    $(".container").append(` 
  <div class="row">
    <div class="col-sm-1 hour">${hourOfDay[i]}</div>
    <div class="col-sm-10 description"><textarea name="event" class="form-control ${timeStatus}" id="${i}"></textarea></div>
    <div class="col-sm-1 saveBtn"><button class="save" data-id=${i}><i class="fas fa-save"></i></button></div>
  </div>`)
}

$(".save").on("click",function(){
     var id = $(this).attr("data-id")
     var text = $("#"+id).val()
     console.log(text)

     localStorage.setItem(id, text);

     document.getElementById(id).innerHTML = localStorage.getItem(text);
}) 

