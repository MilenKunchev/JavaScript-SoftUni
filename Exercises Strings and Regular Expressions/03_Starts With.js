function checkStart(str, subStr) {

    console.log(str.substring(0, subStr.length) === subStr);
}

checkStart('How have you been?', 'how');
checkStart('The quick brown fox…', 'The quick brown fox…');
checkStart('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta');