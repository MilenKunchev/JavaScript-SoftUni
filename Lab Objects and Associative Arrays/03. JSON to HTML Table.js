function jsonToHtml(jsonArr) {

    let arr = JSON.parse(jsonArr);

    let html = '<table>\n';
    html += '  <tr>';

    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += '</tr>\n';

    for (let obj of arr) {
        html += '  <tr>';
        for (let key of Object.keys(obj)) {

            let value = obj[key];
            html += `<td>${htmlEscape(value)}</td>`;
        }
        html += '</tr>\n';
    }

    html += '</table>';

    function htmlEscape(input) {

        let str = input.toString();
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    return html;
}

console.log(jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));
//console.log(jsonToHtml(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},
//{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`));