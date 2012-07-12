var hands = [];

hands[0] = [ [3,"H"], ["A","S"], [1,"D"], ["J","H"], ["Q","D"] ];
hands[1] = [ [9,"C"], [6,"C"], ["K","H"], [3,"C"], ["K","H"] ];

for ( i=0; i < hands.length; i++ ) {
    for ( j=0; j < hands[i].length; j++ ) {
        for ( k=0; k < hands[i][j].length; k++ ) {
            console.log(hands[i][j][k]);
        }
    }
}
