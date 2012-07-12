var table = [
    ["Person",  "Age",     "City"],
    ["Ricky",    25,"Hattiesburg"],
    ["Joe",     45,     "Jackson"]
    ];
    var rows = table.length;
    var r;
    for (r=0;r<rows;r++) {
        var c;
        var cells = table[r].length;
        var rowText = "";
        for(c=0;c<cells;c++){
            if(c<cells-1){
            rowText+=table[r][c]+"    ";
            }else{
                
            rowText += table[r][c];
        }
    }
        console.log(rowText);
}
