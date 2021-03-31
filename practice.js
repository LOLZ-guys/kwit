 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAP_ry70WQqbFsaYVy-oxlPXc7y4G0pIN0",
    authDomain: "practice-70879.firebaseapp.com",
    databaseURL: "https://practice-70879-default-rtdb.firebaseio.com",
    projectId: "practice-70879",
    storageBucket: "practice-70879.appspot.com",
    messagingSenderId: "158783671937",
    appId: "1:158783671937:web:79b5aa7f306f42938e8780",
    measurementId: "G-QDWTRBQ1FW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser()
  {
      user_name = document.getElementById("user_name").value
  firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
  });
    }