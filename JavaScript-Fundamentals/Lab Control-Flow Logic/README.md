<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1>Lab: Control Flow Logic</h1>

<p class=MsoNormal>Problems for in-class lab for the <a
href="https://softuni.bg/courses/javascript-fundamentals">“JavaScript
Fundamentals” course @ SoftUni</a>. Submit your solutions in the SoftUni judge
system at <a href="https://judge.softuni.bg/Contests/288/">https://judge.softuni.bg/Contests/288/</a>.</p>

<h2>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Multiply
Numbers</h2>

<p class=MsoNormal>Write a JS function that calculates the product of two
numbers.</p>

<p class=MsoNormal>The <b>input</b> comes as two number arguments.</p>

<p class=MsoNormal>The <b>output</b> should be the returned as a result of your
function.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=553
 style='width:414.9pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=113 valign=top style='width:3.0cm;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=151 valign=top style='width:4.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=113 valign=top style='width:3.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=151 valign=top style='width:4.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=113 valign=top style='width:3.0cm;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  </td>
  <td width=151 valign=top style='width:4.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>6</span></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=113 valign=top style='width:3.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>23632.36</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>-12.3249</span></p>
  </td>
  <td width=151 valign=top style='width:4.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>-291266.473764</span></p>
  </td>
 </tr>
</table>

<h2>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Boxes and
Bottles</h2>

<p class=MsoNormal>Write a JS function to calculate how many boxes will be
needed to fit <strong><span style='font-family:"Calibri","sans-serif"'>n</span></strong>
bottles if each box fits <strong><span style='font-family:"Calibri","sans-serif"'>k</span></strong>
bottles.</p>

<p class=MsoNormal>The <b>input</b> comes as two number arguments. The first
element is the number of bottles and the second is the capacity of a single
box.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=389
 style='width:291.75pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:18.0pt;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>20</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>15</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>7</span></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>10</span></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  </td>
 </tr>
</table>

<h2>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Leap Year</h2>

<p class=MsoNormal>Write a JS function to check whether a year is leap. Leap
years are either divisible by 4 but not by 100 or are divisible by 400.</p>

<p class=MsoNormal>The <b>input</b> comes as a single number argument.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console. Print <span
class=CodeChar>yes</span> if the year is leap and <span class=CodeChar>no</span>
otherwise.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=389
 style='width:291.75pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:18.0pt;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1999</span></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>no</span></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2000</span></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>yes</span></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1900</span></p>
  </td>
  <td width=62 valign=top style='width:46.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>no</span></p>
  </td>
 </tr>
</table>

<h2>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Circle
Area</h2>

<p class=MsoNormal>Write a JS function that calculates circle area by given
radius. Print the area as it is calculated and then print it rounded to two
decimal places.</p>

<p class=MsoNormal>The <b>input</b> comes as a single number argument.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console on a new
line for each result.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=265
 style='width:7.0cm;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=189 valign=top style='width:5.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'>5</p>
  </td>
  <td width=189 valign=top style='width:5.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>78.53981633974483</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>78.54</span></p>
  </td>
 </tr>
</table>

<h2>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Triangle
Area</h2>

<p class=MsoNormal>Write a JS function that calculates a triangle’s area by its
3 sides.</p>

<p class=MsoNormal>The <b>input</b> comes as three number arguments,
representing one side of a triangle.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=265
 style='width:7.0cm;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=189 valign=top style='width:5.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'>2</p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'>3.5</p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'>4</p>
  </td>
  <td width=189 valign=top style='width:5.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3.4994419198</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoNormal>Use <a href="https://en.wikipedia.org/wiki/Heron%27s_formula">Heron’s
formula</a> to obtain the result.</p>

<h2>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Cone</h2>

<p class=MsoNormal>Write a JS function to calculate a cone’s volume and surface
area by given height and radius at the base.</p>

<p class=MsoNormal>The <b>input</b> comes as two number arguments. The first
element is the cone’s <strong><span style='font-family:"Calibri","sans-serif"'>radius</span></strong>
and the second is its <strong><span style='font-family:"Calibri","sans-serif"'>height</span></strong>.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console on a new
line for every result.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=553
 style='width:414.9pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=189 valign=top style='width:5.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=189 valign=top style='width:5.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  </td>
  <td width=189 valign=top style='width:5.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>volume = 47.1239</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>area = 83.2298</span></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3.3</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>7.8</span></p>
  </td>
  <td width=189 valign=top style='width:5.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>volume = 88.9511</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>area = 122.016</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoNormal>You can use this online tool to check your results: <a
href="http://www.calculatorsoup.com/calculators/geometry-solids/cone.php">http://www.calculatorsoup.com/calculators/geometry-solids/cone.php</a></p>

<h2>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Odd / Even</h2>

<p class=MsoNormal>Write a JS function to check if a number is <strong><span
style='font-family:"Calibri","sans-serif"'>odd</span></strong> or <strong><span
style='font-family:"Calibri","sans-serif"'>even</span></strong> or <strong><span
style='font-family:"Calibri","sans-serif"'>invalid </span></strong>(fractions
are neither odd nor even).</p>

<p class=MsoNormal>The <b>input</b> comes as a single number argument.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console. Print <span
class=CodeChar>odd</span> for odd numbers, <span class=CodeChar>even</span> for
even number and <span class=CodeChar>invalid</span> for numbers that contain
decimal fractions.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=429
 style='width:321.45pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:18.0pt;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>odd</span></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>8</span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>even</span></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1.5</span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>invalid</span></p>
  </td>
 </tr>
</table>

<h2>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Fruit or
Vegetable</h2>

<p class=MsoNormal>Write a JS function to print &quot;<strong><span
style='font-family:"Calibri","sans-serif"'>fruit</span></strong>&quot;, &quot;<strong><span
style='font-family:"Calibri","sans-serif"'>vegetable</span></strong>&quot; or
&quot;<strong><span style='font-family:"Calibri","sans-serif"'>unknown</span></strong>&quot;
depending on the input string.</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-18.0pt'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-18.0pt'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-18.0pt'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>All others are unknown</p>

<p class=MsoNormal>The <b>input</b> comes as a single string argument, the name
of the fruit.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=672
 style='width:503.7pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=94 valign=top style='width:70.85pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=113 valign=top style='width:3.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=94 valign=top style='width:70.85pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=113 valign=top style='width:3.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:18.0pt;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=94 valign=top style='width:70.85pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=113 valign=top style='width:3.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=94 valign=top style='width:70.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>banana</span></p>
  </td>
  <td width=113 valign=top style='width:3.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>fruit</span></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=94 valign=top style='width:70.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>cucumber</span></p>
  </td>
  <td width=113 valign=top style='width:3.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>vegetable</span></p>
  </td>
  <td width=94 valign=top style='width:70.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>pizza</span></p>
  </td>
  <td width=113 valign=top style='width:3.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>unknown</span></p>
  </td>
 </tr>
</table>

<h2>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Colorful
Numbers</h2>

<p class=MsoNormal>Write a JS function to print the numbers from 1 to <strong><span
style='font-family:"Calibri","sans-serif"'>n</span></strong>. Return a string
holding HTML list with the odd lines in blue and even lines in green. See the example
for more information.</p>

<p class=MsoNormal>The <b>input</b> comes as a single number argument <strong><span
style='font-family:"Calibri","sans-serif"'>n</span></strong>.</p>

<p class=MsoNormal>The <b>output</b> should be returned as a result of your
function in the form of a string.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=529
 style='width:396.85pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=454 valign=top style='width:340.15pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>10</span></p>
  </td>
  <td width=454 valign=top style='width:340.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;ul&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span
  style='color:green'&gt;1&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span style='color:blue'&gt;2&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span
  style='color:green'&gt;3&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span
  style='color:blue'&gt;4&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span
  style='color:green'&gt;5&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span
  style='color:blue'&gt;6&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span
  style='color:green'&gt;7&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span
  style='color:blue'&gt;8&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span
  style='color:green'&gt;9&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;li&gt;&lt;span
  style='color:blue'&gt;10&lt;/span&gt;&lt;/li&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/ul&gt;</span></p>
  </td>
 </tr>
</table>

<h2>10.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Chess
Board</h2>

<p class=MsoNormal>Write a JS function to print a chessboard of size <strong><span
style='font-family:"Calibri","sans-serif"'>n X n</span></strong>. See the
example for more information.</p>

<p class=MsoNormal>The <b>input</b> comes as a single number argument <strong><span
style='font-family:"Calibri","sans-serif"'>n</span></strong>.</p>

<p class=MsoNormal>The <b>output</b> should be returned as a result of your
function in the form of a string.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=529
 style='width:396.85pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=454 valign=top style='width:340.15pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  </td>
  <td width=454 valign=top style='width:340.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;div class=&quot;chessboard&quot;&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;div&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>    &lt;span
  class=&quot;black&quot;&gt;&lt;/span&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>    &lt;span
  class=&quot;white&quot;&gt;&lt;/span&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>    &lt;span
  class=&quot;black&quot;&gt;&lt;/span&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/div&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;div&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>    &lt;span
  class=&quot;white&quot;&gt;&lt;/span&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>    &lt;span
  class=&quot;black&quot;&gt;&lt;/span&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>    &lt;span
  class=&quot;white&quot;&gt;&lt;/span&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/div&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;div&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>    &lt;span
  class=&quot;black&quot;&gt;&lt;/span&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>    &lt;span
  class=&quot;white&quot;&gt;&lt;/span&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>    &lt;span
  class=&quot;black&quot;&gt;&lt;/span&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/div&gt;</span></p>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/div&gt;</span></p>
  </td>
 </tr>
</table>

<h2>11.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Binary
Logarithm</h2>

<p class=MsoNormal>Write a JS function that prints the <strong><span
style='font-family:"Calibri","sans-serif"'>binary logarithm</span></strong>&nbsp;(<b><i>log<sub>2</sub>&#8202;x</i></b>)
for each number in the input.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of number elements.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console, on a new
line for each number.</p>

<h2>12.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Prime
Number Checker</h2>

<p class=MsoNormal>Write a JS function to check if a number is prime (only
wholly divisible by itself and one).</p>

<p class=MsoNormal>The <b>input</b> comes as a single number argument.</p>

<p class=MsoNormal>The <b>output</b> should be the return value of your
function. Return <span class=CodeChar>true</span> for prime number and <span
class=CodeChar>false</span> otherwise.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=429
 style='width:321.45pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:18.0pt;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>7</span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>true</span></p>
  </td>
  <td width=24 valign=top style='width:18.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>8</span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>false</span></p>
  </td>
  <td width=51 valign=top style='width:38.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>81</span></p>
  </td>
  <td width=76 valign=top style='width:2.0cm;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0cm;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>false</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
