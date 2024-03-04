// 9. write a function to generate below pattern
// 	1
// 	2 9
// 	3 8 10
// 	4 7 11 14
// 	5 6 12 13 15

function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';

    
        line += i;

        if (i > 1) {
            if (i === 2) {
                line += ' ' + 9;
            } else if (i === 3) {
                line += ' ' + 8 + ' ' + 10;
            } else if (i === 4) {
                line += ' ' + 7 + ' ' + 11 + ' ' + 14;
            } else if (i === 5) {
                line += ' ' + 6 + ' ' + ' ' + 12 + ' ' + 13 + ' ' + 15;
            }
        }
        console.log(line);
    }
} 
printPattern(5)