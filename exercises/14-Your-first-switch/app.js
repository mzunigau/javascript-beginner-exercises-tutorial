function getColor(selection) {

    switch (selection) {
        // Add more options here
        case 'RED':
            return true;
        case 'BLUE':
            return true;
        case 'GREEN':
            return true;
        default:
            return false;  //returns false because the user picked an unavailable color
            break;
    }
}

var colorname = prompt('What color do you want?');
colorname.toUpperCase();
var isAvailable = getColor(colorname);

if (isAvailable)
    console.log('Good news! That color is available');
else
    console.log('We are sorry, that color is not available');
