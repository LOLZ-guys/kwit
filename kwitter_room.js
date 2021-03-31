var firebaseConfig = {
    apiKey: "AIzaSyBu0TGXcJq98er-bH7vxtVmZKgg26LDfzw",
    authDomain: "kwitter-873f5.firebaseapp.com",
    databaseURL: "https://kwitter-873f5-default-rtdb.firebaseio.com",
    projectId: "kwitter-873f5",
    storageBucket: "kwitter-873f5.appspot.com",
    messagingSenderId: "508475675299",
    appId: "1:508475675299:web:6b2974778358ff96b2a516",
    measurementId: "G-TR3RMZ1Z3D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "tough u are thrkjg krjbgkrjgkdbr dgrkdgbdkbgkrdbgrkjgbsrdkjgbrdkgbdkrjgb and 5*3 is" + 5*3;
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
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
    window.location = "kwitter_page.hmtl";
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html"
  }

  