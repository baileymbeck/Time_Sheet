// configure firebasse
var firebaseConfig = {
    apiKey: "AIzaSyAe0BQ0xQ_3Dtfe9-B16XMXNDt916a-Ab4",
    authDomain: "project1-ed976.firebaseapp.com",
    databaseURL: "https://project1-ed976.firebaseio.com",
    projectId: "project1-ed976",
    storageBucket: "",
    messagingSenderId: "394232390535",
    appId: "1:394232390535:web:99e3caaeb3e28f08c86922"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var name = "";
var role = "";
var start = "";
var rate = "";

// when the submit button is clicked
$("#submit-button").on("click", function(event) {
    // don't refresh!
    event.preventDefault();

    // get the values from the form
    name = $("#name-input").val();
    role = $("#role-input").val();
    start = $("#start-input").val();
    rate = $("#rate-input").val();

    console.log(name, role, start, rate);

    database.ref().push({
        name: name,
        role: role,
        start: start,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })


});

    // this is get code use this later
    database.ref().on("child_added", function(snapshot) {
        var snapshotVal = snapshot.val();
        console.log(snapshotVal.name, snapshotVal.role, snapshotVal.start, snapshotVal.rate);
        
        // build a table row with jquery
        var tableRow = $("<tr>");

        // build a td with jquery
        var tableData = $("<td>");
        // set its text to the name
        
        tableData.text(snapshotVal.name);
        // append it to the table row
        tableRow.append(tableData);

        // build a td with jquery
        tableData = $("<td>");
        // set its text to the role
        tableData.text(snapshotVal.role);

        // append it to the table row
        tableRow.append(tableData);

        // build a td with jquery
        tableData = $("<td>");
        // set its text to the start date
        tableData.text(snapshotVal.start);
        // append it to the table row
        tableRow.append(tableData);

        // build a td with jquery
        tableData = $("<td>");
        // calculate the months worked and store in a variable
        var monthsWorked = getMonthsDiff(snapshotVal.start);
        // set the tds text to the the months worked
        tableData.text(monthsWorked);
        // append it to the table row
        tableRow.append(tableData);

        // build a td with jquery
        tableData = $("<td>");
        // set its text to the rate
        tableData.text(snapshotVal.rate);
        // append it to the table row
        tableRow.append(tableData);

        // build a td with jquery
        tableData = $("<td>");
        // calculate the total bill and store in a variable
        var totalBilled = monthsWorked * snapshotVal.rate
        // set the tds text to the the total bill
        tableData.text(totalBilled);
        // append it to the table row
        tableRow.append(tableData);

        // append the table row to the table
        $("#mytable").append(tableRow);


    }), function(error) {
        console.log("An error occured 💩💩💩", error);
    };

    function getMonthsDiff(startDate) {
        // moment(now.diff(randomMoment, 'months'))
        startDate = moment(startDate, "MM/DD/YYYY")
        var now = moment();
     
        return now.diff(startDate, 'months')
    }