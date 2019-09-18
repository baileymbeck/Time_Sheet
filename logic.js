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
    database.ref().on("child-added", function(snapshot) {
        var snapshotVal = snapshot.val();
        console.log(sv.name, snapshotVal.role, snapshotVal.start, snapshotVal.rate);
        
        // build a table row with jquery

        // build a td with jquery
        // set its text to the name
        // append it to the table row

        // build a td with jquery
        // set its text to the role
        // append it to the table row

        // build a td with jquery
        // set its text to the start date
        // append it to the table row

        // build a td with jquery
        // calculate the months worked and store in a variable
        // set the tds text to the the months worked
        // append it to the table row

        // build a td with jquery
        // set its text to the rate
        // append it to the table row

        // build a td with jquery
        // calculate the total bill and store in a variable
        // set the tds text to the the total bill
        // append it to the table row

        // append the table row to the table


    }), function(error) {
        console.log("An error occured 💩💩💩", error);
    };