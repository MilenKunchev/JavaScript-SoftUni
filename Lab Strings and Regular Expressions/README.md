<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">

</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1>Lab: Strings and Regular Expressions</h1>

<p class=MsoNormal>Problems for in-class lab for the <a
href="https://softuni.bg/courses/javascript-fundamentals">“JavaScript
Fundamentals” course @ SoftUni</a>. Submit your solutions in the SoftUni judge
system at <a href="https://judge.softuni.bg/Contests/312">https://judge.softuni.bg/Contests/312</a>.</p>

<h2>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Print
Letters</h2>

<p class=MsoNormal>Write a JS function that prints all the symbols of a string,
each on a new line.</p>

<p class=MsoNormal>The <b>input</b> comes as a single string argument.</p>

<p class=MsoNormal>The <b>output</b> is printed on the console, each letter on
a new line.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=302
 style='width:3.15in;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=161 valign=top style='width:120.5pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=142 valign=top style='width:106.3pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=161 valign=top style='width:120.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'Hello, World!'</span></p>
  </td>
  <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[0] -&gt; H</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[1] -&gt; e</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[2] -&gt; l</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[3] -&gt; l</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[4] -&gt; o</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[5] -&gt; ,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[6] -&gt;  </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[7] -&gt; W</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[8] -&gt; o</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[9] -&gt; r</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[10] -&gt; l</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[11] -&gt; d</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[12] -&gt; !</span></p>
  </td>
 </tr>
 <tr>
  <td width=161 valign=top style='width:120.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'SoftUni'</span></p>
  </td>
  <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[0] -&gt; S</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[1] -&gt; o</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[2] -&gt; f</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[3] -&gt; t</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[4] -&gt; U</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[5] -&gt; n</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>str[6] -&gt; i</span></p>
  </td>
 </tr>
</table>

<h2>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Concatenate
Reversed</h2>

<p class=MsoNormal>Write a JS function that reverses a series of strings and
prints them concatenated from last to first.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of strings.</p>

<p class=MsoNormal>The <b>output</b> is printed on the console. Print all
strings concatenated on a single line, starting from the last input string,
going to the first. Reverse each individual string’s letters.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=321
 style='width:241.0pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=208 valign=top style='width:155.95pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=208 valign=top style='width:155.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['I', 'am', 'student']</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>tnedutsmaI</span></p>
  </td>
 </tr>
 <tr>
  <td width=208 valign=top style='width:155.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['race', 'car']</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>racecar</span></p>
  </td>
 </tr>
</table>

<h2>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Count
Occurrences</h2>

<p class=MsoNormal>Write a JS function that counts how many times a string
occurs in a given text. Overlapping strings are allowed.</p>

<p class=MsoNormal>The <b>input</b> comes as two string arguments. The first
element is the target string and the second element is the text in which to
search for occurrences.</p>

<p class=MsoNormal>The <b>output</b> should be a number, printed on the
console.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=680
 style='width:510.3pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=614 valign=top style='width:460.7pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=614 valign=top style='width:460.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'the', 'The quick brown fox jumps over <span
  style='color:red'>the </span>lay dog.'</span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  </td>
 </tr>
 <tr>
  <td width=614 valign=top style='width:460.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'ma', 'Marine <span style='color:red'>ma</span>m<span
  style='color:red'>ma</span>l training is the training and caring for <span
  style='color:red'>ma</span>rine life such as, dolphins, killer whales, sea
  lions, walruses, and other <span style='color:red'>ma</span>rine <span
  style='color:red'>ma</span>m<span style='color:red'>ma</span>ls. It is also a
  duty of the trainer to do mental and physical exercises to keep the ani<span
  style='color:red'>ma</span>l healthy and happy.'</span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>7</span></p>
  </td>
 </tr>
</table>

<h2>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Extract Text</h2>

<p class=MsoNormal>You will be given a text as a string. Write a JS function
that extracts and prints only the text that’s surrounded by parentheses.</p>

<p class=MsoNormal>The <b>input</b> comes as a single string argument.</p>

<p class=MsoNormal>The <b>output</b> is printed on the console on a single
line, in the form of a comma-separated list.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=567
 style='width:425.25pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=567 valign=top style='width:425.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=567 valign=top style='width:425.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'Rakiya (<span style='color:red'>Bulgarian
  brandy</span>) is self-made liquor (<span style='color:red'>alcoholic drink</span>)'</span></p>
  </td>
 </tr>
 <tr>
  <td width=567 valign=top style='width:425.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=567 valign=top style='width:425.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Bulgarian brandy, alcoholic drink</span></p>
  </td>
 </tr>
</table>

<h2>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Aggregate
Table</h2>

<p class=MsoNormal>You will be given a list of towns and incomes for each town,
formatted in a table, separated by pipes (|). Write a JS function that extracts
the names of all towns and produces a sum of the incomes. Note that splitting
may result in empty string elements and the number of spaces may be different
in every table.</p>

<p class=MsoNormal>The <b>input</b> comes as array of string elements. Each
element is one row in a formatted table.</p>

<p class=MsoNormal>The <b>output</b> is printed on the console on two lines. On
the first line, print a comma-separated list of all towns and on the second,
the sum of all incomes.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=601
 style='width:450.45pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=601 valign=top style='width:450.45pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['| Sofia           | 300',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> '| Veliko Tarnovo  | 500',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> '| Yambol          | 275']</span></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Sofia, Veliko Tarnovo, Yambol</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1075</span></p>
  </td>
 </tr>
</table>

<h2>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Restaurant
Bill</h2>

<p class=MsoNormal>You are tasked to write a JS function that receives an array
of purchases and their prices and prints all your purchases and their total
sum.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of string elements – the
elements on even indexes (0, 2, 4…) are the product names, while the elements
on odd indexes (1, 3, 5…) are the corresponding prices.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console - a
single sentence containing all products and their total sum in the format “<b>You
purchased {all products separated by comma + space} for a total sum of {total
sum of products}</b>”.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=676
 style='width:507.15pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:11.5pt'>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.5pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna',
  '5.69']</span></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>You purchased Beer Zagorka, Tripe soup, Lasagna
  for a total sum of 16.14</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=676
 style='width:507.15pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:11.5pt'>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.5pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['Cola', '1.35', 'Pancakes', '2.88']</span></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>You purchased Cola, Pancakes for a total sum of
  4.23</span></p>
  </td>
 </tr>
</table>

<h2>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Usernames</h2>

<p class=MsoNormal>Write a JS function that parses a list of emails and returns
a list of usernames, generated from them. Each username is composed from the
name of the email address, a period and the first letter of every element in
the domain name. See the examples for more information.</p>

<p class=MsoNormal>The <b>input</b> comes as array of string elements. Each element
is an email address.</p>

<p class=MsoNormal>The <b>output</b> is printed on the console on a single line
as a comma-formatted list.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=601
 style='width:450.45pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=601 valign=top style='width:450.45pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['<span style='color:red'>peshoo</span>@<span
  style='color:#92D050'>g</span>mail.<span style='color:#0070C0'>c</span>om', 'todor_43@mail.dir.bg',
  'foo@bar.com']</span></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas;color:red'>peshoo</span><span style='font-family:
  Consolas'>.<span style='color:#92D050'>g</span><span style='color:#00B0F0'>c</span>,
  todor_43.mdb, foo.bc</span></p>
  </td>
 </tr>
</table>

<h2>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Censorship</h2>

<p class=MsoNormal>The thought police are at it again and they need your help!
Write a JS function that would <b>censor news articles</b>. You will be given a
text and then a list of strings that need to be blacked out from the text.
Replace all occurrences of the strings with dashes of the same length as the
string. The strings will <strong><span style='font-family:"Calibri","sans-serif"'>not
overlap</span></strong>, so order of processing is not important. See the
examples for more information.</p>

<p class=MsoNormal>The <b>input</b> comes as two arguments – one string and one
array of strings. The first element is the text to scan and the array contains
the strings to be censored.</p>

<p class=MsoNormal>The <b>output</b> is the return value of your functions.
Save the censored results in a string and return it.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=689
 style='width:516.7pt;margin-left:4.95pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=689 valign=top style='width:516.7pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=689 valign=top style='width:516.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'roses are red, violets are blue', ['<b>,
  violets are</b>', '<b>red</b>']</span></p>
  </td>
 </tr>
 <tr>
  <td width=689 valign=top style='width:516.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=689 valign=top style='width:516.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>roses are ---------------- blue</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=689
 style='width:516.7pt;margin-left:4.95pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=689 valign=top style='width:516.7pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=689 valign=top style='width:516.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'David Ruben Piqtoukun (born 1950) is an Inuit
  artist from Paulatuk, Northwest Territories. His output includes sculpture
  and prints; the sculptural work is innovative in its use of mixed media. His
  materials and imagery bring together modern and traditional Inuit stylistic
  elements in a personal vision. An example of this is his work &quot;The
  Passage of Time&quot; (1999), which portrays a shaman in the form of a salmon
  moving through a hole in a hand. While shamanic imagery is common in much of
  Inuit art, the hand in this work is sheet metal, not a traditional material
  such as walrus ivory, caribou antler or soapstone. Ruben\'s brother, Abraham
  Apakark Anghik Ruben, is also a sculptor. Fellow Inuit artist Floyd Kuptana
  learned sculpting techniques as an apprentice to David Ruben.', ['<b>Inuit</b>']</span></p>
  </td>
 </tr>
 <tr>
  <td width=689 valign=top style='width:516.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=689 valign=top style='width:516.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>David Ruben Piqtoukun (born 1950) is an -----
  artist from Paulatuk, Northwest Territories. His output includes sculpture
  and prints; the sculptural work is innovative in its use of mixed media. His
  materials and imagery bring together modern and traditional ----- stylistic
  elements in a personal vision. An example of this is his work &quot;The
  Passage of Time&quot; (1999), which portrays a shaman in the form of a salmon
  moving through a hole in a hand. While shamanic imagery is common in much of
  ----- art, the hand in this work is sheet metal, not a traditional material
  such as walrus ivory, caribou antler or soapstone. Ruben's brother, Abraham
  Apakark Anghik Ruben, is also a sculptor. Fellow ----- artist Floyd Kuptana
  learned sculpting techniques as an apprentice to David Ruben.</span></p>
  </td>
 </tr>
</table>

<h2>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Escaping</h2>

<p class=MsoNormal>You will be given a list of strings, containing
user-submitted data. Write a JS function that prints an HTML list from the
data. The strings, however, may contain special HTML characters, which is an
oft-used method for injection attacks. To prevent unwanted behavior or harmful
content, all special characters need to be replaced with their encoded
counterparts – they will look the same to the user, but will not pose a
security risk. Use the following table to compose your function:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=185
 style='width:138.65pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=71 valign=top style='width:53.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Raw</b></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Encoded</b></p>
  </td>
 </tr>
 <tr>
  <td width=71 valign=top style='width:53.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-family:Consolas'>&lt;&nbsp;</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-family:Consolas'>&amp;lt;</span></p>
  </td>
 </tr>
 <tr>
  <td width=71 valign=top style='width:53.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-family:Consolas'>&gt;&nbsp;</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-family:Consolas'>&amp;gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width=71 valign=top style='width:53.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-family:Consolas'>&amp;</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-family:Consolas'>&amp;amp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=71 valign=top style='width:53.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-family:Consolas'>&quot;</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-family:Consolas'>&amp;quot;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>Use the provided HTML template to visually test your code –
if you don’t escape the control characters, formatted HTML will show up. Don’t
care how the HTML template works. Your job is to write the JS escaping function
only.</p>

<p class=MsoNormal>The <b>input</b> comes as array of string elements.</p>

<p class=MsoNormal>The <b>output</b> is the return value of your function.
Compose the list in a string and return it. See the examples for formatting
details.</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=690
 style='width:517.4pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>HTML</b></p>
  </td>
 </tr>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black;background:
  #EFEFEF'>&lt;!DOCTYPE </span><b><span style='font-family:Consolas;color:blue;
  background:#EFEFEF'>html</span></b><span style='font-family:Consolas;
  color:black;background:#EFEFEF'>&gt;</span><span style='font-family:Consolas;
  color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>html </span></b><b><span
  style='font-family:Consolas;color:blue;background:#EFEFEF'>lang=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;en&quot;</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>head</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
      <span style='background:#EFEFEF'>&lt;</span></span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>meta </span></b><b><span
  style='font-family:Consolas;color:blue;background:#EFEFEF'>charset=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;UTF-8&quot;</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
      <span style='background:#EFEFEF'>&lt;</span></span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>title</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'>Escaping<span style='background:
  #EFEFEF'>&lt;/</span></span><b><span style='font-family:Consolas;color:navy;
  background:#EFEFEF'>title</span></b><span style='font-family:Consolas;
  color:black;background:#EFEFEF'>&gt;</span><span style='font-family:Consolas;
  color:black'><br>
  <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>head</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>body</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>div</span></b><span style='font-family:
  Consolas;color:black;background:#EFEFEF'>&gt;&lt;</span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>label </span></b><b><span
  style='font-family:Consolas;color:blue;background:#EFEFEF'>for=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;userInput&quot;</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'>Paste test input here:<span
  style='background:#EFEFEF'>&lt;/</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>label</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>div</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>div</span></b><span style='font-family:
  Consolas;color:black;background:#EFEFEF'>&gt;</span><span style='font-family:
  Consolas;color:black'><br>
  <span style='background:#EFEFEF'>  &lt;</span></span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>textarea </span></b><b><span
  style='font-family:Consolas;color:blue;background:#EFEFEF'>rows=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;12&quot; </span></b><b><span
  style='font-family:Consolas;color:blue;background:#EFEFEF'>cols=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;40&quot; </span></b><b><span
  style='font-family:Consolas;color:blue;background:#EFEFEF'>id=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;userInput&quot;</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>textarea</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>  &lt;</span></span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>input </span></b><b><span
  style='font-family:Consolas;color:blue;background:#EFEFEF'>type=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;button&quot;
  </span></b><b><span style='font-family:Consolas;color:blue;background:#EFEFEF'>value=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;Escape&quot;<br>
         </span></b><b><span style='font-family:Consolas;color:blue;background:
  #EFEFEF'>onclick=</span></b><b><span style='font-family:Consolas;color:green;
  background:#EFEFEF'>&quot;</span></b><b><span style='font-family:Consolas;
  color:#660E7A'>document</span></b><span style='font-family:Consolas;
  color:black'>.</span><span style='font-family:Consolas;color:#7A7A43'>getElementById</span><span
  style='font-family:Consolas;color:black'>(</span><b><span style='font-family:
  Consolas;color:green'>'result'</span></b><span style='font-family:Consolas;
  color:black'>).</span><b><span style='font-family:Consolas;color:#660E7A'>innerHTML
  </span></b><span style='font-family:Consolas;color:black'>= html<i>Escape</i>(</span><b><span
  style='font-family:Consolas;color:#660E7A'>JSON</span></b><span
  style='font-family:Consolas;color:black'>.</span><span style='font-family:
  Consolas;color:#7A7A43'>parse</span><span style='font-family:Consolas;
  color:black'>(</span><b><span style='font-family:Consolas;color:#660E7A'>document</span></b><span
  style='font-family:Consolas;color:black'>.</span><span style='font-family:
  Consolas;color:#7A7A43'>getElementById</span><span style='font-family:Consolas;
  color:black'>(</span><b><span style='font-family:Consolas;color:green'>'userInput'</span></b><span
  style='font-family:Consolas;color:black'>).</span><b><span style='font-family:
  Consolas;color:#660E7A'>value</span></b><span style='font-family:Consolas;
  color:black'>.</span><span style='font-family:Consolas;color:#7A7A43'>replace</span><span
  style='font-family:Consolas;color:black'>(</span><span style='font-family:
  Consolas;color:blue'>/'/g</span><span style='font-family:Consolas;color:black'>,
  String.</span><span style='font-family:Consolas;color:#7A7A43'>fromCharCode</span><span
  style='font-family:Consolas;color:black'>(</span><span style='font-family:
  Consolas;color:blue'>34</span><span style='font-family:Consolas;color:black'>))));</span><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>/&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>div</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>div</span></b><span style='font-family:
  Consolas;color:black;background:#EFEFEF'>&gt;&lt;</span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>label </span></b><b><span
  style='font-family:Consolas;color:blue;background:#EFEFEF'>for=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;result&quot;</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'>Results will show up here:<span
  style='background:#EFEFEF'>&lt;/</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>label</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>div</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>div </span></b><b><span
  style='font-family:Consolas;color:blue;background:#EFEFEF'>id=</span></b><b><span
  style='font-family:Consolas;color:green;background:#EFEFEF'>&quot;result&quot;</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>div</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-family:
  Consolas;color:navy;background:#EFEFEF'>script</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
      </span><b><span style='font-family:Consolas;color:navy'>function html</span></b><i><span
  style='font-family:Consolas;color:black'>Escape</span></i><span
  style='font-family:Consolas;color:black'>(input) {<br>
          </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
      </span></i></b><span style='font-family:Consolas;color:black'>}<br>
  <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>script</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>body</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span><span
  style='font-family:Consolas;color:black'><br>
  <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-family:Consolas;color:navy;background:#EFEFEF'>html</span></b><span
  style='font-family:Consolas;color:black;background:#EFEFEF'>&gt;</span></p>
  </td>
 </tr>
</table>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=690
 style='width:517.4pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['&lt;b&gt;unescaped text&lt;/b&gt;', 'normal
  text']</span></p>
  </td>
 </tr>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;ul&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&amp;lt;b&amp;gt;unescaped text&amp;lt;/b&amp;gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;normal text&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/ul&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=690
 style='width:517.4pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['&lt;div style=\&quot;color: red;\&quot;&gt;Hello,
  Red!&lt;/div&gt;', '&lt;table&gt;&lt;tr&gt;&lt;td&gt;Cell
  1&lt;/td&gt;&lt;td&gt;Cell 2&lt;/td&gt;&lt;tr&gt;']</span></p>
  </td>
 </tr>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=690 valign=top style='width:517.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;ul&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&amp;lt;div style=\&amp;quot;color:
  red;\&amp;quot;&amp;gt;Hello, Red!&amp;lt;/div&amp;gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&amp;lt;table&amp;gt;&amp;lt;tr&amp;gt;&amp;lt;td&amp;gt;Cell
  1&amp;lt;/td&amp;gt;&amp;lt;td&amp;gt;Cell
  2&amp;lt;/td&amp;gt;&amp;lt;tr&amp;gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/ul&gt;</span></p>
  </td>
 </tr>
</table>

<h2>10.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Match
All Words</h2>

<p class=MsoNormal>Write a JS function that matches all words in a text, a word
is anything that consists of letters, numbers or underscores (_).</p>

<p class=MsoNormal>The <b>input</b> comes as single string argument – the text
from which to extract the words.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console and
should consist of all words concatenated with a <b>“|“</b>(pipe), check the
examples bellow to better understand the format.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=676
 style='width:507.15pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:11.5pt'>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.5pt'>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>'A
  Regular Expression needs to have the global flag in order to match all
  occurrences in the text'</span></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>A|Regular|Expression|needs|to|have|the|global|flag|in|order|to|match|all|occurrences|in|the|text</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=676
 style='width:507.15pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:11.5pt'>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.5pt'>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>'_(Underscores)
  are also word characters'</span></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>_|Underscores|are|also|word|characters</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Read about the special characters in Regular Expressions at MDN
to find some that can ease your task <a
href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions</a></p>

<h2>11.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Simple
Email Validation</h2>

<p class=MsoNormal>Write a JS function that validates simple emails. The emails
should have a <b>username</b>, which consists only of <b>English alphabet
letters</b> and <b>digits</b>, <b>a “@” sign</b>, and a domain name after it.
The domain should consist <b>only of</b> <b>2 strings</b> <b>separated</b> by a
<b>single dot</b>. The 2 strings should contain <b>NOTHING</b> but <b>lowercase
English alphabet letters</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as single string argument which is an
email. </p>

<p class=MsoNormal>The <b>output</b> should be printed on the console. If the
given email is valid, print “<span class=CodeChar>Valid</span>”, if it is not,
print “<span class=CodeChar>Invalid</span>”.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=638
 style='width:478.75pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=298 valign=top style='width:223.65pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=340 valign=top style='width:255.1pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=298 valign=top style='width:223.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>valid@email.bg</span></p>
  </td>
  <td width=340 valign=top style='width:255.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Valid</span></p>
  </td>
 </tr>
 <tr>
  <td width=298 valign=top style='width:223.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>invalid@emai1.bg</span></p>
  </td>
  <td width=340 valign=top style='width:255.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Invalid</span></p>
  </td>
 </tr>
</table>

<h2>12.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>*Expression
Split</h2>

<p class=MsoNormal>Write a JS function that splits a passed in JS code into
separate parts. The passed in code will always have one or more spaces between
operators and operands. Normal brackets (<b>‘(‘</b>,<b>’)’</b>), commas (<b>,</b>),
semicolons (<b>;</b>) and the member access operator (<b>‘.’(dot)</b>, as in
“console<b>.</b>log”) should also be used for splitting. String literals will
always be initialized with double quotes (<span style='font-family:Consolas'>&quot;</span>)
and will <b>contain only letters</b>. Make sure there are no empty entries in
the output.</p>

<p class=MsoNormal>The <b>input</b> comes as a single string argument - the JS
code that has to be split.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console, with
each elements obtained from the split is printed on a new line.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=676
 style='width:507.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=514 valign=top style='width:385.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=162 valign=top style='width:121.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=514 valign=top style='width:385.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'let sum = 4 * 4,b = &quot;wow&quot;;'</span></p>
  </td>
  <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>let</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>sum</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>=</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>*</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>let</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>b</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>=</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&quot;wow&quot;</span></p>
  </td>
 </tr>
 <tr>
  <td width=514 valign=top style='width:385.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'let sum = 1 + 2;if(sum &gt; 2){\tconsole.log(sum);}'</span></p>
  </td>
  <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>let</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>sum</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>=</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>+</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>if</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>sum</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&gt;&nbsp;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>{</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>console</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>log</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>sum</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>}</span></p>
  </td>
 </tr>
</table>

<h2>13.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Match
the Dates</h2>

<p class=MsoNormal>Write a JS function that finds and extracts all the dates in
the given sentences. The dates should be in format <br>
<b>d-MMM-yyyy</b>. <b>Example: 12-Jun-1999</b>, <b>3-Dec-2017</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of strings. Each string
represents a sentence.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console. The
output should consist of all extracted <b>VALID</b> dates. Each element should
be printed on a new line.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=680
 style='width:510.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:11.5pt'>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.5pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I am born on 30-Dec-1994.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>This is not date: 512-Jan-1996.<br>
  My father is born on the 29-Jul-1955.</span></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>30-Dec-1994 (Day: 30, Month: Dec, Year: 1994)</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>29-Jul-1955 (Day: 29, Month: Jul, Year: 1955)</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=680
 style='width:510.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:11.5pt'>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.5pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1-Jan-1999 is a valid date.<br>
  So is 01-July-2000.<br>
  I am an awful liar, by the way – Ivo, 28-Sep-2016.</span></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1-Jan-1999 (Day: 1, Month: Jan, Year: 1999)</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>28-Sep-2016 (Day: 28, Month: Sep, Year: 2016)</span></p>
  </td>
 </tr>
</table>

<h2>14.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Parse
the Employee Data</h2>

<p class=MsoNormal>Write a JS function that <b>validates employee data</b>, and
stores it <b>if it is</b> <b>valid</b>. The employee data consists of 3
elements – <b>employee name</b>, <b>employee salary</b> and <b>employee
position</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of strings. Each element
represents input employee data. You should capture only the valid from them.
The input will have the following format:</p>

<p class=Code>{employeeName} - {employeeSalary} - {employeePosition}</p>

<p class=MsoNormal>The <b>Employee name</b> will be a <b>string</b>, which can
contain only <b>English alphabet letters</b> and must <b>start with a capital</b>.
The <b>Employee salary</b> should be a <b>VALID</b> <b>number</b>. The <b>employee
position</b> can contain <b>English alphabet letters</b>, <b>digits, dashes</b>,
<b>and can consist of several words</b>. Any input that <b>does NOT follow</b>
the specified above rules, is to be treated as <b>invalid, </b>and is to<b> be
ignored</b>.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console. For
every <b>valid employee data</b> found, you should print each of its elements.
Check the examples.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=676
 style='width:507.15pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:11.5pt'>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.5pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Isacc</span><span style='font-family:Consolas'> -
  1000 - CEO</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Ivan - 500 - Employee</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Peter - 500 - Employee</span></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Name: Isacc</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Position: CEO</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Salary: 1000</span></p>
  <p class=MsoNormal style='margin-top:6.0pt;margin-right:0in;margin-bottom:
  0in;margin-left:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Name: Ivan</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Position: Employee</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Salary: 500</span></p>
  <p class=MsoNormal style='margin-top:6.0pt;margin-right:0in;margin-bottom:
  0in;margin-left:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Name: Peter</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Position: Employee</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Salary: 500                       </span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=676
 style='width:507.15pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:11.5pt'>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.5pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Jonathan - 2000 - Manager</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Peter- 1000- Chuck</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>George - 1000 - Team Leader </span></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=676 valign=top style='width:507.15pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Name: Jonathan</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Position: Manager</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Salary: 2000</span></p>
  <p class=MsoNormal style='margin-top:6.0pt;margin-right:0in;margin-bottom:
  0in;margin-left:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Name: George</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Position: Team Leader</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Salary: 1000</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Use <b>Groups</b> for this problem, it would be a lot easier.</p>

<h2>15.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Form
Filler</h2>

<p class=MsoNormal>Write a JS function that automatically fills a form for a
lazy client. The client will give you <b>3 elements</b> of <b>data</b> about
himself – his <b>username</b>, his <b>email</b>, and his <b>phone number</b>.
After those 3 elements you will be given the form, as text, with several
placeholders in it. You must replace each <b>valid placeholder</b> with its
corresponding value. The placeholders have special symbols and can <b>contain
only English alphabet letters</b>. There are <b>3 types</b> of valid placeholders:</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>&lt;!{letters}!&gt;</b> - put the given username in place of
this</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>&lt;@{letters}@&gt;</b> - put the given email in place of this</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>&lt;+{letters}+&gt;</b> - put the given email in place of this</p>

<p class=MsoNormal>The <b>input</b> comes as four string arguments and an array
of strings. The <b>first 3 arguments</b> will represent the <b>username</b>,
the <b>email</b> and the <b>phone number</b>. Each element of the array will
represent a sentence, if you find a placeholder somewhere in those sentences
you should replace it.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console. The
output should consist of all sentences, printed again, this time with their
placeholders replaced with the actual data.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=680
 style='width:510.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:11.5pt'>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.5pt'>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>'Pesho',<br>
  '</span><span style='font-family:Consolas'>pesho@softuni.bg',<br>
  '90-60-90',<br>
  ['Hello, &lt;!username!&gt;!',<br>
   'Welcome to your Personal profile.',<br>
   'Here you can modify your profile freely.',<br>
   'Your current username is: &lt;!fdsfs!&gt;. Would you like to change that?
  (Y/N)',<br>
   'Your current email is: &lt;@DasEmail@&gt;. Would you like to change that?
  (Y/N)',<br>
   'Your current phone number is: &lt;+number+&gt;. Would you like to change
  that? (Y/N)']</span></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Hello, Pesho! <br>
  Welcome to your Personal profile. <br>
  Here you can modify your profile freely. <br>
  Your current username is: Pesho. Would you like to change that? (Y/N)<br>
  Your current email is: pesho@softuni.bg. Would you like to change that? (Y/N)<br>
  Your current phone number is: 90-60-90. Would you like to change that? (Y/N)</span></p>
  </td>
 </tr>
</table>

<h2>16.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>*Match
Multiplication</h2>

<p class=MsoNormal>You are given a text with <b>numbers</b> multiplied by <b>*</b>
in format <b>{num1} * {num2}</b>. Your job is to extract each two numbers in
the above format, multiply them and replace them with their product. The <b>first
number</b> is integer, can be negative. The <b>second number</b> is integer or
floating-point and can be negative. There could be whitespace around the “<b>*</b>”
symbol.</p>

<p class=MsoNormal>The <b>input</b> comes as a single string argument – the
text holding the numbers.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console – it
consists of the same text with the multiplied numbers replaced by their product.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=702
 style='width:526.4pt;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=702 valign=top style='width:526.4pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=702 valign=top style='width:526.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>My bill: <b>2*2.50</b> (beer); <b>2* 1.20</b>
  (kepab); <b>-2  * 0.5</b> (deposit).</span></p>
  </td>
 </tr>
 <tr>
  <td width=702 valign=top style='width:526.4pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=702 valign=top style='width:526.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>My bill: <b>5</b> (beer); <b>2.4</b> (kepab); <b>-1</b>
  (deposit).</span></p>
  </td>
 </tr>
 <tr>
  <td width=702 valign=top style='width:526.4pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>Input</p>
  </td>
 </tr>
</table>

<h3>Hint</h3>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Match the numbers to be multiplied by regex with groups. Check
the overloads for the <b>String.replace</b> function, there may be an overload
with a <b>callback</b> that can help you.</p>

<p class=MsoNormal><span lang=BG>&nbsp;</span></p>

</div>

</body>

</html>
