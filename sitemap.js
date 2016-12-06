function buildMap(x){
    var y = document.getElementById(x);
    var bullet = document.createElement('UL');
    var listItem = document.createElement('LI');
    y.appendChild(bullet);
    
    var linkIndex = document.createElement('A');
    var listItem = document.createElement('LI');
    linkIndex.setAttribute("href", "index.html");
    linkIndex.textContent = "Index";
    listItem.appendChild(linkIndex);
    bullet.appendChild(listItem);
    
    var linkBio = document.createElement('A');
    var listItem = document.createElement('LI');
    linkBio.setAttribute("href", "aboutme.html");
    linkBio.textContent = "Bio";
    listItem.appendChild(linkBio);
    bullet.appendChild(listItem);
    
    var listItem = document.createElement('LI');
    listItem.textContent = "Class Projects";
    bullet.appendChild(listItem);
    
    var nestedList = document.createElement('UL');
    listItem.appendChild(nestedList);
    
    var linkBreakout = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkBreakout.setAttribute("href", "breakout.html");
    linkBreakout.textContent = "Breakout";
    nestedListItem.appendChild(linkBreakout);
    nestedList.appendChild(nestedListItem);
    
    var linkJSEvents = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkJSEvents.setAttribute("href", ".html");
    linkJSEvents.textContent = "JavaScript Events";
    nestedListItem.appendChild(linkJSEvents);
    nestedList.appendChild(nestedListItem);
    
    var linkEureka = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkEureka.setAttribute("href", "popup.html");
    linkEureka.textContent = "Pop-Up!";
    nestedListItem.appendChild(linkEureka);
    nestedList.appendChild(nestedListItem);
    
    var linkChalkboard = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkChalkboard.setAttribute("href", "chalkboard.html");
    linkChalkboard.textContent = "Chalkboard";
    nestedListItem.appendChild(linkChalkboard);
    nestedList.appendChild(nestedListItem);
    
    var linkTicTacToe = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkTicTacToe.setAttribute("href", "tictactoe.html");
    linkTicTacToe.textContent = "Tic-Tac-Toe";
    nestedListItem.appendChild(linkTicTacToe);
    nestedList.appendChild(nestedListItem);
    
    var linkMultiplication = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkMultiplication.setAttribute("href", "multTable.html");
    linkMultiplication.textContent = "Multiplication";
    nestedListItem.appendChild(linkMultiplication);
    nestedList.appendChild(nestedListItem);
    

}
