var players = [];
players[0] = {'name': 'Robert', hand: []};
players[1] = {'name': 'Joe', hand: []};

var suits = ['clubs','diamonds','hearts','spades'];
var ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
var deck = [];
for (var i=0;i<suits.length;i++) {
    for (var j=0;j<ranks.length;j++) {
        var card = {'rank': ranks[j], 'suit':suits[i]};
        deck.push(card);
    }
}

var c = 0;
for(var i = 0; i < 5; i ++){
    for(var p=0; p<players.length;p++){
        var cards = deck[c];
        players[p].hand.push(card);
        c++;
    }
}


deck.sort(function() {return 0.5 - Math.random()});




