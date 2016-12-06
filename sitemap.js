buildMap(nomer){
  var ele = document.getElementById(nomer);
  
/*  var list1 = document.createElement("li");
  var list2 = document.createElement("li");
  var list3 = document.createElement("li");
  var sub1list1 = document.createElement("li");
  var sub1list2 = document.createElement("li");
  var sub1list3 = document.createElement("li");
  var sub1list4 = document.createElement("li");
  var sub1list5 = document.createElement("li");
  var sub1list6 = document.createElement("li");
  var sub1list7 = document.createElement("li");
  
  list1.textContent = "Home";
  list2.textContent = "Biography";
  list3.textContent = "Class Projects";
  sub1list1.textContent = "Breakout";
  sub1list2.textContent = "JavaScript Events";
  sub1list3.textContent = "Pop-Up!";
  sub1list4.textContent = "To Do List";
  sub1list5.textContent = "Chalkboard";
  sub1list6.textContent = "Tic Tac Toe";
  sub1list7.textContent = "Multiplication Table";
*/  
  
  var para = document.createElement("li");                      // Create a <li> element
  var t = document.createTextNode("This is a paragraph.");      // Create a text node
  para.appendChild(t);                                          // Append the text to <li>
  document.getElementById("nomer").appendChild(para);           // Append <li> 
  
  //ele.appendChild((document.createElement("ul")));
  
}
