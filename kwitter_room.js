var firebaseConfig = {
    apiKey: "AIzaSyBbMFbGKnOeV5EEw0OmZjIj1D_pXN6xr9g",
    authDomain: "kwiter-676d6.firebaseapp.com",
    databaseURL: "https://kwiter-676d6-default-rtdb.firebaseio.com",
    projectId: "kwiter-676d6",
    storageBucket: "kwiter-676d6.appspot.com",
    messagingSenderId: "1087590697981",
    appId: "1:1087590697981:web:835fd9f0350090ddb9a794"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
