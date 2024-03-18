//! This file contains the the planner application of the dashboard. 

// import '../app.css';\

// Loop to determine the color of each hour.
for (hour = 9; hour <= 17; hour++) {
    if (currentHour === hour) {
      color = presentColor;
    }else{
      if (hour > currentHour) {
        color = futureColor;
      }else{
        color = pastColor;
      }  
    }; 
    if (hour>12){
        fixedHour = hour - 12;
    } else{
        fixedHour=hour;
    }; 
    if (hour>=12){
          AmPm='PM';
    } else {
        AmPm='AM';
    };

export default function plannerApp() {
    return (
        <div className="planner-app">

            <body>

            <header className="planner-header">
                <h1>The Planner Application</h1>
                <p className="planner-description"> A simple calander Application for scheduling your workday. </p>
            </header>

          <div id="barf" class="container-fluid px-5" />

          <div id="hour9">
            <p> 9AM </p>
            <textarea id="hour-9" class="col-8 col-md-10 description" rows="3"></textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save">  Save <i class="fas fa-save" aria-hidden="true"></i></button>
          </div>
          <div id="hour9">
            <p> 10AM </p>
            <textarea id="hour-9" class="col-8 col-md-10 description" rows="3"></textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save"> Save  <i class="fas fa-save" aria-hidden="true"></i></button>
          </div>
          <div id="hour9">
            <p>11AM </p>
            <textarea id="hour-9" class="col-8 col-md-10 description" rows="3"></textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save"> Save  <i class="fas fa-save" aria-hidden="true"></i></button>
          </div>
          <div id="hour9">
            <p> 12PM </p>
            <textarea id="hour-9" class="col-8 col-md-10 description" rows="3"></textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save"> Save  <i class="fas fa-save" aria-hidden="true"></i></button>
          </div>
          <div id="hour9">
            <p> 1PM </p>
            <textarea id="hour-9" class="col-8 col-md-10 description" rows="3"></textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save"> Save  <i class="fas fa-save" aria-hidden="true"></i></button>
          </div>
          <div id="hour9">
            <p> 2PM </p>
            <textarea id="hour-9" class="col-8 col-md-10 description" rows="3"></textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save"> Save  <i class="fas fa-save" aria-hidden="true"></i></button>
          </div>
          <div id="hour9">
            <p> 3PM </p>
            <textarea id="hour-9" class="col-8 col-md-10 description" rows="3"></textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save"> Save  <i class="fas fa-save" aria-hidden="true"></i></button>
          </div>
          <div id="hour9">
            <p> 4PM </p>
            <textarea id="hour-9" class="col-8 col-md-10 description" rows="3"></textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save"> Save  <i class="fas fa-save" aria-hidden="true"></i></button>
          </div>
          {/* <div id="hour9">
            <p> 5PM </p>
            <textarea id="hour-9" class="col-8 col-md-10 description" rows="3"></textarea>
          </div> */}

          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
          integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U="
          crossorigin="anonymous"></script>

          <script src="client/src/scripts/planner.js" /> 


            </body>

        </div>
    )
}