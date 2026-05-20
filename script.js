
let aircraftData = JSON.parse(localStorage.getItem("aircraftData")) || [];
let maintenanceData = JSON.parse(localStorage.getItem("maintenanceData")) || [];

showAircraft();
showMaintenance();

function addAircraft() {
    let aircraft = document.getElementById("aircraftName").value;
    let reg = document.getElementById("registration").value;
    let flightHours = document.getElementById("flightHours").value;

    aircraftData.push({
        aircraft: aircraft,
        registration: reg,
        flightHours: flightHours
    });

    localStorage.setItem("aircraftData", JSON.stringify(aircraftData));

    showAircraft();

    document.getElementById("aircraftName").value = "";
    document.getElementById("registration").value = "";
    document.getElementById("flightHours").value = "";
}
function showAircraft() {

    let aircraftList = document.getElementById("aircraftList");

    aircraftList.innerHTML = "";

    aircraftData.forEach(function(item, index) {

        aircraftList.innerHTML += `
            <div class="aircraft-card">

                <p><b>Aircraft:</b> ${item.aircraft}</p>

                <p><b>Registration:</b> ${item.registration}</p>

                <p><b>Flight Hours:</b> ${item.flightHours}</p>

                <button onclick="deleteAircraft(${index})">
                    Delete
                </button>

            </div>
        `;
    });
}
function deleteAircraft(index) {

    aircraftData.splice(index, 1);

    localStorage.setItem("aircraftData", JSON.stringify(aircraftData));

    showAircraft();
}

function addMaintenance() {

    let date = document.getElementById("maintenanceDate").value;
    let fault = document.getElementById("fault").value;
    let action = document.getElementById("action").value;
    let engineer = document.getElementById("engineer").value;
    let status = document.getElementById("status").value;

    maintenanceData.push({
        date: date,
        fault: fault,
        action: action,
        engineer: engineer,
        status: status
    });

    localStorage.setItem("maintenanceData", JSON.stringify(maintenanceData));

    showMaintenance();

    document.getElementById("maintenanceDate").value = "";
    document.getElementById("fault").value = "";
    document.getElementById("action").value = "";
    document.getElementById("engineer").value = "";
    document.getElementById("status").value = "Open";
}

    localStorage.setItem("maintenanceData", JSON.stringify(maintenanceData));

   function showMaintenance() {

    let maintenanceList = document.getElementById("maintenanceList");

    maintenanceList.innerHTML = "";

    maintenanceData.forEach(function(item, index) {

        maintenanceList.innerHTML += `
            <div class="aircraft-card ${item.status}">

                <p><b>Date:</b> ${item.date}</p>
                <p><b>Fault:</b> ${item.fault}</p>
                <p><b>Action Taken:</b> ${item.action}</p>
                <p><b>Engineer:</b> ${item.engineer}</p>
                <p><b>Status:</b> ${item.status}</p>

                <button onclick="deleteMaintenance(${index})">
                    Delete
                </button>

            </div>
        `;
    });
}
function deleteMaintenance(index) {

    maintenanceData.splice(index, 1);

    localStorage.setItem("maintenanceData", JSON.stringify(maintenanceData));

    showMaintenance();
}