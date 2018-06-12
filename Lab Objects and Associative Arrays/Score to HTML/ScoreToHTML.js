function scoreToHtml(input) {

    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';
    let scores = JSON.parse(input);

    for (let score of scores) {
        html += '  <tr>';

        html += `<td>${escapeChars(score.name)}</td>`;
        html += `<td>${Number(score.score)}</td>`;
        html += '</tr>\n';
    }

    html += '</table>';

    function escapeChars(str) {

        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    return html;
    //console.log(scores);
}

console.log(scoreToHtml('[{"name":"Pesho <div>Gosho</div>","score":479},{"name":"Gosho","score":205}]'));
//scoreToHtml('[{"name":"Pesho","score":479}]');