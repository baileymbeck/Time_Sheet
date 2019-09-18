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

// when the submit button is clicked
$("#submit-button").on("click", function(event) {
    // don't refresh!
    event.preventDefault();

    // get the values from the form
    var name = $("#name-input").val();
    var role = $("#role-input").val();
    var start = $("#start-input").val();
    var rate = $("#rate-input").val();

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
    // database.ref().on("child-added", function(snapshot) {
    //     var snapshotVal = snapshot.val();
    //     console.log(sv.name);
    //     console.log(snapshotVal.role);
    //     console.log(snapshotVal.start);
    //     console.log(snapshotVal.rate);

    // });