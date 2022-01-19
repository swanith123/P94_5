var firebaseConfig = {
    apiKey: "AIzaSyCsgh_1wbAWOr3maJM3yyMlyP7OIz7piOE",
    authDomain: "let-chat-web-app-66cf8.firebaseapp.com",
    projectId: "let-chat-web-app-66cf8",
    storageBucket: "let-chat-web-app-66cf8.appspot.com",
    messagingSenderId: "270549214391",
    appId: "1:270549214391:web:65930265c05dfedb545932",
    measurementId: "G-6B52B2SNLQ"
  };
  
  // Initialize Firebase
  var app = (firebaseConfig);
  username=localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome " + username + "!";
  firebase.initializeApp(firebaseConfig);

function send(){
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
}