export default (request) => {
    var words;
    var leadingCapitals = [];
    var trailingPeriods = [];

    deconstructString();
    translateString();
    reconstructString();

    request.message.text = words;
    return request.ok(); // Return a promise when you're done 

    //function
    function deconstructString() {
        //split
        words = request.message.text.split(' ');

        for (var i = 0, len = words.length; i < len; i++) {
            //mark capitals
            if (words[i].charAt(0) == words[i].charAt(0).toUpperCase()) {
                leadingCapitals.push(1);
                //strip capitals
                words[i] = words[i].toLowerCase();
            } else {
                leadingCapitals.push(0);
            }

            //mark periods
            if (words[i].charAt(words[i].length - 1) == '.') {
                trailingPeriods.push(1);
                //strip periods
                words[i] = words[i].slice(0, -1);
            } else {
                trailingPeriods.push(0);
            }
        }
    }

    function translateString() {
        //replace words
        for (var i = 0, len = words.length; i < len; i++) {
            switch (words[i]) {
                case 'gaffe':
                    words[i] = 'magic spell';
                    break;
                case 'ancient':
                    words[i] = 'haunted';
                    break;
                case 'star-studded':
                    words[i] = 'blood-soaked';
                    break;
                case 'remains':
                    if (words[i + 1] == 'to' && words[i + 2] == 'be' && words[i + 2] == 'seen') {
                        words[i] = 'will';
                        words[i + 1] = 'never';
                        words[i + 2] = 'be';
                        words[i + 3] = 'known';
                    }
                    break;
                case 'silver':
                    if (words[i + 1] == 'bullet') {
                        words[i] = 'way to kill';
                        words[i + 1] = 'werewolves';
                    }
                    break;
                case 'subway':
                    if (words[i + 1] == 'system') {
                        words[i] = 'tunnels';
                        words[i + 1] = 'I found';
                    }
                    break;
                case 'surprising':
                    words[i] = 'surprising (but not to me)';
                    break;
                case 'war':
                    if (words[i + 1] == 'of' && words[i + 1] == 'words') {
                        words[i] = 'interplanetary';
                        words[i + 1] = '';
                        words[i + 2] = 'war';
                    }
                    break;
                case 'tension':
                    words[i] = 'sexual tension';
                    break;
                case 'cautiously optimistic':
                    words[i] = 'delusional';
                    break;
                case 'doctor':
                    if (words[i + 1] == 'who') {
                        words[i] = 'The Big Bang';
                        words[i + 1] = 'Theory';
                    }
                    break;
                case 'win votes':
                    words[i] = 'find Pokémon';
                    break;
                case 'behind the headlines':
                    words[i] = 'beyond the grave';
                    break;
                case 'email':
                case 'tweet':
                    words[i] = 'poem';
                    break;
                case 'facebook':
                    if (words[i + 1] == 'post') {
                        words[i] = '';
                        words[i + 1] = 'poem';

                    } else if (words[i + 1] == 'ceo') {
                        words[i] = 'this';
                        words[i + 1] = 'guy';
                    }
                    break;
                case 'latest':
                    words[i] = 'final';
                    break;
                case 'disrupt':
                    words[i] = 'destroy';
                    break;
                case 'meeting':
                    words[i] = 'ménage à trois';
                    break;
                case 'scientists':
                    words[i] = 'Channing Tatum and his friends';
                    break;
                case 'you':
                    if (words[i + 1] == 'won\t' && words[i + 2] == 'believe') {
                        words[i] = 'I\'m';
                        words[i + 1] = 'really sad';
                        words[i + 2] = 'about';
                    }
                    break;
                default:
                    break;
            }
        }
    }

    function reconstructString(str) {
        for (var i = 0, len = words.length; i < len; i++) {
            //replace capitals
            if (leadingCapitals[i]) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
            }
            //replace periods

            if (trailingPeriods[i]) {
                words[i] = words[i] + '.';
            }
        }

        //join
        words = request.message.text = words.join(' ');

    }
}
