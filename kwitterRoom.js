var firebaseConfig = {
    apiKey: "AIzaSyDzmiVM1UsHtRd5OudCw02vOa4bGrJr10M",
    authDomain: "project-94-b3501.firebaseapp.com",
    databaseURL: "https://project-94-b3501-default-rtdb.firebaseio.com",
    projectId: "project-94-b3501",
    storageBucket: "project-94-b3501.appspot.com",
    messagingSenderId: "1063180428862",
    appId: "1:1063180428862:web:2965aa8ce91c594365136f"
  };
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("Username");

document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("room_name");
  window.location = "index.html";
}
