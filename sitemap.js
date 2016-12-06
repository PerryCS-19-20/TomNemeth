function buildMap(x){
    var y = document.getElementById(x);
    var bullet = document.createElement('UL');
    var listItem = document.createElement('LI');
    y.appendChild(bullet);
    
    var linkHome = document.createElement('A');
    var listItem = document.createElement('LI');
    linkHome.setAttribute("href", "index.html");
    linkHome.textContent = "Home";
    listItem.appendChild(linkIndex);
    bullet.appendChild(listItem);
    
    var linkBio = document.createElement('A');
    var listItem = document.createElement('LI');
    linkBio.setAttribute("href", "aboutme.html");
    linkBio.textContent = "About me";
    listItem.appendChild(linkBio);
    bullet.appendChild(listItem);
    
    var listItem = document.createElement('LI');
    listItem.textContent = "Class Projects:";
    bullet.appendChild(listItem);
    
    var List2 = document.createElement('UL');
    listItem.appendChild(nestedList);
    
    var linkBreakout = document.createElement('A');
    var subListItem = document.createElement('LI');
    linkBreakout.setAttribute("href", "breakout.html");
    linkBreakout.textContent = "Something that resembles Breakout";
    subListItem.appendChild(linkBreakout);
    List2.appendChild(nestedListItem);
    
    var linkJavaEvent = document.createElement('A');
    var subListItem = document.createElement('LI');
    linkJavaEvent.setAttribute("href", "background-game.html");
    linkJavaEvent.textContent = "JavaScript Events";
    subListItem.appendChild(linkJavaEvent);
    List2.appendChild(subListItem);
    
    
    var linkChalkboard = document.createElement('A');
    var subListItem = document.createElement('LI');
    linkChalkboard.setAttribute("href", "chalkboard.html");
    linkChalkboard.textContent = "Chalkboard";
    subListItem.appendChild(linkChalkboard);
    List2.appendChild(subListItem);
    
    var linkTicTacToe = document.createElement('A');
    var subListItem = document.createElement('LI');
    linkTicTacToe.setAttribute("href", "tictactoe.html");
    linkTicTacToe.textContent = "Tic-Tac-Toe";
    subListItem.appendChild(linkTicTacToe);
    List2.appendChild(subListItem);
    
    var linkMultiplication = document.createElement('A');
    var subListItem = document.createElement('LI');
    linkMultiplication.setAttribute("href", "multTable.html");
    linkMultiplication.textContent = "Multiplication";
    subListItem.appendChild(linkMultiplication);
    List2.appendChild(subListItem);
    

}
