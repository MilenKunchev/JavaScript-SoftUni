<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">

</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1>Exercises: Strings and Regular Expressions</h1>

<p class=MsoNormal>Problems for exercises and homework for the <a
href="https://softuni.bg/courses/javascript-fundamentals">“JavaScript
Fundamentals” course @ SoftUni</a>. Submit your solutions in the SoftUni judge
system at <a href="https://judge.softuni.bg/Contests/314/">https://judge.softuni.bg/Contests/314/</a>.</p>

<p class=MsoNormal>In this exercise you are supposed to <b>write program logic</b>
using the basic operations between Strings and the built-in String functions,
as well as regular expressions, in JavaScript. You will practice working with <b>strings</b>,
<b>regular expressions</b> and using <b>built-in</b> <b>functions</b> (<span
class=CodeChar>concat(), trim(), split()…</span>). In some of the exercises you
might need to combine both in order to find the best solution.</p>

<h1>Text Processing and String Manipulation</h1>

<h2>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Split a String
with a Delimiter</h2>

<p class=MsoNormal>Write a JS function that <b>splits</b> a <b>string</b> with a
given <b>delimiter</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as 2 string arguments. The<b> first
one is the string</b> you need to split and the <b>second</b> <b>one is the
delimiter</b>.</p>

<p class=MsoNormal>The <b>output</b> should consist of all elements you’ve
received, after you’ve <b>split</b> <b>the given string</b> by <b>the given
delimiter</b>. Each element should be printed on a new line.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=688
 style='width:516.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=208 valign=top style='width:156.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=61 valign=top style='width:45.45pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=17 valign=top style='width:13.05pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=222 valign=top style='width:166.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=180 valign=top style='width:135.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=208 valign=top style='width:156.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>One-Two-Three-Four-Five</span><span
  style='font-family:Consolas'> </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>-</span></p>
  </td>
  <td width=61 style='width:45.45pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>One</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Two</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Three</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Four</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Five</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=17 valign=top style='width:13.05pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=222 valign=top style='width:166.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>http://platform.softuni.bg</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=180 valign=top style='width:135.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>http://platform</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>softuni</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>bg</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>This “<span class=CodeChar>main</span>” function will hold all of
the code of our solution.<br>
<br>
</p>

<p class=MsoListParagraphCxSpMiddle align=center style='text-align:center'><img
border=0 width=369 height=78 id="Picture 20" src="README_files/image001.png"></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span> Now that we have the string and the delimiter, we can split the
string and save the split elements we received as result to the action we did. </p>

<p class=MsoListParagraphCxSpMiddle align=center style='text-align:center'><img
border=0 width=594 height=47 id="Picture 13" src="README_files/image002.jpg"></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <span class=CodeChar>split()</span> function returns an array
of elements, which we can iterate over. The last thing we need to do is print
each of the elements on a new line.<br>
<br>
</p>

<p class=MsoListParagraphCxSpLast align=center style='text-align:center'><img
border=0 width=610 height=90 id="Picture 15" src="README_files/image003.jpg"></p>

<h2>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span> Repeat a
String N Times</h2>

<p class=MsoNormal>Write a JS function that repeats a given string, N times.</p>

<p class=MsoNormal>The <b>input</b> comes as 2 arguments. The <b>first argument
is a string that</b> will represent <b>the one you need to repeat</b>. The
second one is a number will represent <b>the times you need to repeat it</b>.</p>

<p class=MsoNormal>The <b>output</b> is a big string, containing the <b>given
one</b>, <b>repeated N times</b>.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=448
 style='width:336.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=118 valign=top style='width:88.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=330 valign=top style='width:247.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=118 valign=top style='width:88.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>repeat</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  </td>
  <td width=330 style='width:247.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>repeatrepeatrepeatrepeatrepeat</span></p>
  </td>
 </tr>
 <tr>
  <td width=448 colspan=2 valign=top style='width:336.1pt;border:none;
  border-bottom:solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=118 valign=top style='width:88.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=330 style='width:247.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=118 valign=top style='width:88.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>magic is real</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  </td>
  <td width=330 style='width:247.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>magic is realmagic is realmagic is real</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>You can easily use <b>string concatenation</b> to solve this
problem.</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>You could, however, see if there is a <b>built-in function</b>
that does the same thing. </p>

<h2>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Check if
String starts with a given Substring.</h2>

<p class=MsoNormal>Write a JS function that checks if a <b>given string</b>, <b>starts
with a given substring</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as 2 string arguments. The <b>first
string</b> will represent <b>the main one</b>. The second one will represent <b>the
substring</b>.</p>

<p class=MsoNormal>The <b>output</b> is either “<span class=CodeChar>true</span>”
or “<span class=CodeChar>false</span>” based on the result of the check.<br>
The comparison is <b>case-sensitive</b>!</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=678
 style='width:508.5pt;margin-left:-.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=264 colspan=2 valign=top style='width:2.75in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=60 valign=top style='width:45.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=270 colspan=2 valign=top style='width:202.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=60 valign=top style='width:45.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=264 colspan=2 valign=top style='width:2.75in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>How have you been?</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>how</span></p>
  </td>
  <td width=60 style='width:45.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>false</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=270 colspan=2 valign=top style='width:202.5pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>The quick brown fox…</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>The quick brown fox…</span></p>
  </td>
  <td width=60 valign=top style='width:45.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>true</span></p>
  </td>
 </tr>
 <tr style='height:13.3pt'>
  <td width=264 colspan=2 valign=top style='width:2.75in;border:none;
  padding:2.85pt 4.25pt 2.85pt 4.25pt;height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=60 style='width:45.0pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=270 colspan=2 valign=top style='width:202.5pt;border:none;
  padding:2.85pt 4.25pt 2.85pt 4.25pt;height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=60 valign=top style='width:45.0pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td style='border:none;padding:0in 0in 0in 0in' width=108><p class='MsoNormal'>&nbsp;</td>
  <td width=432 colspan=4 valign=top style='width:4.5in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=78 style='width:58.5pt;border:solid windowtext 1.0pt;border-left:
  none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=60><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr>
  <td style='border:none;padding:0in 0in 0in 0in' width=108><p class='MsoNormal'>&nbsp;</td>
  <td width=432 colspan=4 valign=top style='width:4.5in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Marketing Fundamentals, starting 19/10/2016</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Marketing Fundamentals, sta</span></p>
  </td>
  <td width=78 style='width:58.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>true</span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=60><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr height=0>
  <td width=108 style='border:none'></td>
  <td width=156 style='border:none'></td>
  <td width=60 style='border:none'></td>
  <td width=24 style='border:none'></td>
  <td width=192 style='border:none'></td>
  <td width=78 style='border:none'></td>
  <td width=60 style='border:none'></td>
 </tr>
</table>

<h2>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Check if
String ends with given Substring.</h2>

<p class=MsoNormal>Write a JS function that checks if a <b>given string</b>, <b>ends
with a given substring</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as 2 string arguments. The <b>first
string</b> will represent <b>the main one</b>. The second one will represent <b>the
substring</b>.</p>

<p class=MsoNormal>The <b>output</b> is either “<span class=CodeChar>true</span>”
or “<span class=CodeChar>false</span>” based on the result of the check.<br>
The comparison is <b>case-sensitive</b>!</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=678
 style='width:508.5pt;margin-left:-.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=264 colspan=2 valign=top style='width:2.75in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=60 valign=top style='width:45.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=270 colspan=2 valign=top style='width:202.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=60 valign=top style='width:45.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=264 colspan=2 valign=top style='width:2.75in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>This sentence ends with fun?</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>fun?</span></p>
  </td>
  <td width=60 style='width:45.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>true</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=270 colspan=2 valign=top style='width:202.5pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>This is Houston, we have…</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>We have…</span></p>
  </td>
  <td width=60 valign=top style='width:45.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>false</span></p>
  </td>
 </tr>
 <tr style='height:13.3pt'>
  <td width=264 colspan=2 valign=top style='width:2.75in;border:none;
  padding:2.85pt 4.25pt 2.85pt 4.25pt;height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=60 style='width:45.0pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=270 colspan=2 valign=top style='width:202.5pt;border:none;
  padding:2.85pt 4.25pt 2.85pt 4.25pt;height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=60 valign=top style='width:45.0pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td style='border:none;padding:0in 0in 0in 0in' width=108><p class='MsoNormal'>&nbsp;</td>
  <td width=432 colspan=4 valign=top style='width:4.5in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=78 style='width:58.5pt;border:solid windowtext 1.0pt;border-left:
  none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=60><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr>
  <td style='border:none;padding:0in 0in 0in 0in' width=108><p class='MsoNormal'>&nbsp;</td>
  <td width=432 colspan=4 valign=top style='width:4.5in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>The new iPhone has no headphones jack.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>o headphones jack.</span></p>
  </td>
  <td width=78 style='width:58.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>true</span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=60><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr height=0>
  <td width=108 style='border:none'></td>
  <td width=156 style='border:none'></td>
  <td width=60 style='border:none'></td>
  <td width=24 style='border:none'></td>
  <td width=192 style='border:none'></td>
  <td width=78 style='border:none'></td>
  <td width=60 style='border:none'></td>
 </tr>
</table>

<h2>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>*Capitalize
the Words</h2>

<p class=MsoNormal>Write a JS function that capitalizes the given words. You
need to make <b>every word</b>’s <b>first letter</b> – <b>uppercase</b> and <b>all</b>
<b>other letters</b> – <b>lowercase</b>. </p>

<p class=MsoNormal>The <b>input</b> comes as a <b>single string</b>, containing
words, separated by a space.</p>

<p class=MsoNormal>The <b>output</b> is the same string, however with all of
its words capitalized.</p>

<p class=MsoNormal>Note: The words can contain <b>any ASCII character</b>. You
need to <b>affect only the letters</b>.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=624
 style='width:6.5in;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=312 valign=top style='width:3.25in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=312 valign=top style='width:3.25in;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=312 valign=top style='width:3.25in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Capitalize these words</span></p>
  </td>
  <td width=312 style='width:3.25in;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Capitalize These Words</span></p>
  </td>
 </tr>
 <tr style='height:13.3pt'>
  <td width=312 valign=top style='width:3.25in;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=312 style='width:3.25in;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=312 valign=top style='width:3.25in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=312 style='width:3.25in;border:solid windowtext 1.0pt;border-left:
  none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=312 valign=top style='width:3.25in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Was that Easy? tRY thIs onE for SiZe!</span></p>
  </td>
  <td width=312 style='width:3.25in;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Was That Easy? Try This One For Size!</span></p>
  </td>
 </tr>
</table>

<h1><span style='font-size:16.0pt;line-height:115%;color:#8F400B'>&nbsp;</span></h1>

<h1>Working with Regular Expressions</h1>

<p class=MsoNormal>For the following tasks, it will be most appropriate, if you
use regular expressions in your solutions.</p>

<h2>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Capture the
Numbers</h2>

<p class=MsoNormal>Write a JS function that <b>finds all numbers</b> in a
sequence of strings.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. Each element represents
one of the strings.</p>

<p class=MsoNormal>The <b>output</b> is all the numbers, <b>extracted</b> and <b>printed
on a single line</b> – each separated by a <b>single space</b>.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=624
 style='width:6.5in;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=234 valign=top style='width:175.5pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=390 valign=top style='width:292.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=234 valign=top style='width:175.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>The300</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>What is that?</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I think it’s the 3rd movie.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Lets watch it at 22:45</span></p>
  </td>
  <td width=390 valign=top style='width:292.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>300 3 22 45</span></p>
  </td>
 </tr>
 <tr style='height:13.3pt'>
  <td width=234 valign=top style='width:175.5pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=390 style='width:292.5pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=234 valign=top style='width:175.5pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=390 style='width:292.5pt;border:solid windowtext 1.0pt;border-left:
  none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=234 valign=top style='width:175.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>123a456</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>789b987</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>654c321</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>0</span></p>
  </td>
  <td width=390 valign=top style='width:292.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>123 456 789 987 654 321 0</span></p>
  </td>
 </tr>
 <tr>
  <td width=234 valign=top style='width:175.5pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=390 style='width:292.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=234 valign=top style='width:175.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Let’s go11!!!11!</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Okey!1!</span></p>
  </td>
  <td width=390 valign=top style='width:292.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>11 11 1</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoNormal>We can solve this problem in multiple ways; first let’s see
the more complex way in order to understand how the regex actually works:</p>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>We receive several sentences in the form of an array of strings.
Let’s create a variable named text, and gather all the sentences into one big
string. Also, we need to initialize our regex pattern, and an array that will
hold the numbers we found.</p>

<p class=MsoNormal align=center style='text-align:center'><img border=0
width=255 height=94 id="Picture 8" src="README_files/image004.jpg"></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>We create the needed things. The regex is “<span class=CodeChar>\d+</span>”
which will catch <b>one or more consecutive digits</b>. We also give it a
global modifier, “<span class=CodeChar>g</span>”, which will prevent the regex
from returning on the first match.</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>We can now proceed with combining all the strings into one big
string.</p>

<p class=MsoNormal align=center style='margin-left:.25in;text-align:center'><img
border=0 width=421 height=92 id="Picture 10" src="README_files/image005.jpg"></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Now that we have that, we can proceed to the main thing. The
matching.</p>

<p class=MsoListParagraphCxSpMiddle align=center style='text-align:center'><img
border=0 width=376 height=183 id="Picture 11" src="README_files/image006.jpg"></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>First we create a <span class=CodeChar>match</span> variable
which will hold our matches. The regex <b>anchors itself</b> every time, to the
index of the match it has found, thus to iterate all matches we need a <span
class=CodeChar>while</span> loop. Every time we <b>match something</b>, we <b>push
it</b> to the array of numbers… The match variable represents an <b>array of
all groups it has found</b>, so we just take the first element, which
represents the <b>whole match</b>. Then we match again, to <b>move the anchor</b>.
</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Last but not least, we print the result:</p>

<p class=MsoNormal align=center style='text-align:center'><img border=0
width=378 height=28 id="Picture 14" src="README_files/image007.jpg"></p>

<p class=MsoNormal>Now that we understand how the matching works underneath, we
can actually write a simpler solution. Having learned the Array built-in
functions we know we can group the input into one string using the <b>Array.join()</b>
function:</p>

<p class=MsoNormal align=center style='text-align:center'><img border=0
width=274 height=24 id="Picture 21" src="README_files/image008.png"></p>

<p class=MsoNormal>The regex we’ll use will be the same:</p>

<p class=MsoNormal align=center style='text-align:center'><img border=0
width=196 height=28 id="Picture 19" src="README_files/image009.png"></p>

<p class=MsoNormal> In case we don’t need capturing subgroups, as it is in this
problem, we can just use the <b>String.match()</b> function to get all matches
from our string (the regex still has to have the global flag <b>“g”</b>).</p>

<p class=MsoNormal align=center style='text-align:center'><img border=0
width=335 height=24 id="Picture 12" src="README_files/image010.png"></p>

<p class=MsoNormal>Thus we managed to write the program in just a few lines:</p>

<p class=MsoNormal align=center style='text-align:center'><img border=0
width=327 height=95 id="Picture 23" src="README_files/image011.png"></p>

<h2>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Find Variable
Names in Sentences</h2>

<p class=MsoNormal>Write a JS function that finds all <b>variable names</b> in a
given string. A variable name starts with an <b>underscore</b> (<span
class=CodeChar>“_”</span>) and contains<b> only Capital and Non-Capital English
Alphabet letters and digits</b>. Extract only their names, <b>without the underscore.
</b>Try to do this <b>only with regular expressions</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as single string, on which you have
to perform the matching.</p>

<p class=MsoNormal>The <b>output</b> consists of all variable names, <b>extracted</b>
and <b>printed on a single line</b>, each <b>separated </b>by a <b>comma</b>.</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=678
 style='width:508.5pt;margin-left:-.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=480 valign=top style='width:5.0in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=480 valign=top style='width:5.0in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>The _id and _age variables are both integers.</span></p>
  </td>
  <td width=198 style='width:148.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>id,age</span></p>
  </td>
 </tr>
 <tr style='height:13.3pt'>
  <td width=480 valign=top style='width:5.0in;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=198 style='width:148.5pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=480 valign=top style='width:5.0in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=198 style='width:148.5pt;border:solid windowtext 1.0pt;border-left:
  none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=480 valign=top style='width:5.0in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Calculate the _area of the _perfectRectangle
  object.</span></p>
  </td>
  <td width=198 style='width:148.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>area,perfectRectangle</span></p>
  </td>
 </tr>
 <tr>
  <td width=480 valign=top style='width:5.0in;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=198 style='width:148.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=480 valign=top style='width:5.0in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>__invalidVariable _evenMoreInvalidVariable_
  _validVariable</span></p>
  </td>
  <td width=198 style='width:148.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>validVariable</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Think how to ensure that your match is a separate word (not part
of a bigger word that may be invalid).</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Think of a way to ensure your regex matches only the variable and
not parts before/after it. Check the <a
href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">special
characters</a> online to see if one of them fits your needs.</p>

<h2>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Find
Occurrences of Word in Sentence</h2>

<p class=MsoNormal>Write a JS function that finds, <b>how many times</b> a <b>given
word</b>, is <b>used</b> in a <b>given sentence. </b>Note that letter case does
not matter – it is <b>case-insensitive</b>. </p>

<p class=MsoNormal>The <b>input</b> comes as 2 string arguments. The <b>first
one</b> will be the <b>sentence</b>, and the <b>second one</b> – the <b>word</b>.</p>

<p class=MsoNormal>The <b>output</b> is a single number indicating the <b>amount
of times</b> the sentence contains the word.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=672
 style='width:7.0in;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=612 valign=top style='width:459.0pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=60 valign=top style='width:45.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=612 valign=top style='width:459.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>The waterfall was so high, that the child
  couldn’t see its peak.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>the</span></p>
  </td>
  <td width=60 style='width:45.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  </td>
 </tr>
 <tr style='height:13.3pt'>
  <td width=612 valign=top style='width:459.0pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=60 style='width:45.0pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=612 valign=top style='width:459.0pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=60 style='width:45.0pt;border:solid windowtext 1.0pt;border-left:
  none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=612 valign=top style='width:459.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>How do you plan on achieving that? How? How can
  you even think of that?</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>how</span></p>
  </td>
  <td width=60 style='width:45.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  </td>
 </tr>
 <tr>
  <td width=612 valign=top style='width:459.0pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=60 style='width:45.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#D9D9D9;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=612 valign=top style='width:459.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>There was one. Therefore I bought it. I wouldn’t
  buy it otherwise.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>there</span></p>
  </td>
  <td width=60 style='width:45.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Remember how we always used the global modifier <b>“g”</b>. There
is also a modifier for case-insensitive matching. It might help you since the
case does <b>NOT</b> matter in this problem.</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Think how to create a regex that includes a string that will be
known only at runtime. It is important to note that there is a Regex
constructor that accepts a string representing the regex pattern.</p>

<h2>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>*Extract
the Links</h2>

<p class=MsoNormal>Write a JS function that <b>extracts links</b> from a <b>given
text</b>. The text will come in the form of strings, each representing a
sentence. You need to extract <b>only the valid links</b> from it. Example:</p>

<p class=MsoNormal align=center style='text-align:center'><span
style='position:absolute;z-index:251663360;left:0px;margin-left:414px;
margin-top:35px;width:161px;height:36px'><img width=161 height=36
src="README_files/image012.png"></span><span style='position:absolute;
z-index:251661312;left:0px;margin-left:341px;margin-top:42px;width:11px;
height:26px'><img width=11 height=26 src="README_files/image013.png"></span><span
style='position:absolute;z-index:251659264;left:0px;margin-left:140px;
margin-top:37px;width:145px;height:36px'><img width=145 height=36
src="README_files/image014.png"></span><br>
<span class=CodeChar>“www.internet.com”</span></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>                         <b>Sub-Domain      </b>                                                   <b>Domain</b>
<b>name</b>                                                            <b>Domain
extension</b></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>The <b>Sub-Domain</b> must always be “<span class=CodeChar>www</span>”.
The <b>Domain name </b>can consist of English alphabet letters (<b>uppercase</b>
and <b>lowercase</b>), digits and dashes (“<span class=CodeChar>–</span>“). The
<b>Domain extension </b>consists of one or more <b>domain blocks</b>, a <b>domain
block</b> consists of a <b>dot</b> followed by <b>one or more lowercase </b>English
alphabet <b>letters</b>, a <b>Domain extension</b> must have at least <b>one</b>
<b>domain block</b> in order to be <b>valid</b>. The Sub-Domain and Domain name
must be separated by a single <b>dot</b>. Any link that <b>does NOT follow</b>
the specified above rules should be treated as <b>invalid</b>.</p>

<p class=MsoNormal><b>Example incorrect links:</b>  </p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;<b><span style='color:red'>ww</span></b>.justASite.bg&quot;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;<b><span style='color:red'>lel</span></b>.awesome.com&quot;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;www.stamat<b><span style='color:red'>_</span></b>gosho.hit.bg&quot;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;www.no-symb<b><span style='color:red'>#^</span></b>ols-allow<b><span
style='color:red'>%</span></b>ed.com&quot;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;www.pesho<b><span style='color:red'>.12</span></b>&quot;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;www.gosho-site<b><span style='color:red'>.</span></b>&quot;</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;www.example-site<b><span style='color:red'>._*^#</span></b>&quot;</p>

<p class=MsoNormal><b>Example correct links:  </b></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;Some text<span style='color:#00B050'>www.softuni.bg</span>&quot;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;Just a link in a <span style='color:#00B050'>www.sea-of-text.bg</span>-swimming
around&quot;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;Instruments <span style='color:#00B050'>www.Instruments.rom.com.trombone</span>2000
Instrument here&quot;</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>&quot;All your ice cream flavors-<span style='color:#00B050'>www.scream.for.ice.cream</span>(We 
also have squirrels)&quot;</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. Each element
represents a sentence.</p>

<p class=MsoNormal>The <b>output</b> is all valid links you’ve found, printed –
each on a new line.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=672
 style='width:7.0in;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=462 valign=top style='width:346.5pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=210 valign=top style='width:157.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=462 valign=top style='width:346.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Join WebStars now for free, at www.web-stars.com</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>You can also support our partners:</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Internet - www.internet.com</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>WebSpiders - www.webspiders101.com</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Sentinel - www.sentinel.-ko </span></p>
  </td>
  <td width=210 style='width:157.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>www.web-stars.com</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>www.internet.com</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>www.webspiders101.com</span></p>
  </td>
 </tr>
 <tr style='height:13.3pt'>
  <td width=462 valign=top style='width:346.5pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=210 style='width:157.5pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:13.3pt'>
  <td width=462 valign=top style='width:346.5pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=210 style='width:157.5pt;border:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:13.3pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=462 valign=top style='width:346.5pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=210 style='width:157.5pt;border:solid windowtext 1.0pt;border-left:
  none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=462 valign=top style='width:346.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Need information about cheap hotels in London?</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>You can check us at www.london-hotels.co.uk!</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>We provide the best services in London.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Here are some reviews in some blogs:</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&quot;London Hotels are awesome!&quot; -
  www.indigo.bloggers.com</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&quot;I am very satisfied with their
  services&quot; - ww.ivan.bg</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&quot;Best Hotel Services!&quot; -
  www.rebel21.sedecrem.moc </span></p>
  </td>
  <td width=210 style='width:157.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>www.london-hotels.co.uk</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>www.indigo.bloggers.com</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>www.rebel21.sedecrem.moc</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Sites such as <a href="https://regex101.com/">https://regex101.com/</a>
can be very helpful, when designing regular expressions.</p>

<h2>10.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>**Secret
Data</h2>

<p class=MsoNormal>Write a JS function that hides essential client data from
secret documents that went public. You have to hide people’s names, phone
numbers, ids and secret base names. </p>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>names of the clients</b> will be preceded by a single <b>asterisk</b>
(“<span class=CodeChar>*</span>”), they will always be <b>exactly one word</b>,
they will contain <b>only English alphabet letters</b>, they will <b>start with
a capital letter </b>and they will always be followed by either a <b>space, </b>a<b>
tabulation </b>or the <b>end of the string</b>. Anything else is <b>NOT</b> <b>to
be considered</b> as a name.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>phone numbers</b> of the clients will be preceded by a
single <b>plus sign</b> (“<span class=CodeChar>+</span>”) and will consist of
exactly 10 symbols. The phone numbers can consist only of <b>digits</b> and <b>dashes
</b>and they will always be followed by a <b>space, tabulation </b>or the <b>end
of the string</b>. Anything else is <b>NOT to be considered</b> as a phone
number.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>ID</b>s of the clients will be preceded by a single <b>exclamation
mark</b> (“<span class=CodeChar>!</span>”). The IDs of the clients will consist
only of <b>Lowercase</b> and <b>Uppercase English alphabet letters</b> and <b>digits
</b>and they will always be followed by a <b>space, tabulation </b>or the <b>end
of the string</b>. Anything else is <b>NOT to be considered</b> as an ID.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>names of the secret bases</b> will be preceded by a single
<b>underscore </b>(“<span class=CodeChar>_</span>”) and will consist only of <b>Uppercase</b>
and <b>Lowercase English alphabet letters</b> and <b>digits </b>and they will
always be followed by a <b>space, tabulation </b>or the <b>end of the string</b>.
Anything else is <b>NOT to be considered</b> as a secret base name.</p>

<h3>Constraints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Usernames, phone numbers, IDs and names of secret bases</b>
can start glued to other text.</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Usernames, phone numbers, IDs and names of secret bases</b>
will never be split given across 2 lines.</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Usernames, phone numbers, IDs and names of secret bases</b>
will always have a <b>space, tabulation </b>or the<b> end of the string </b>after
them.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of strings. Each string represents
a sentence of the secret document. You need to find every <b>client data element</b>
that is supposed to be secret, and <b>hide it</b>, by <b>replacing it</b> with
a <b>string of</b> <b>vertical bars</b> (“<span class=CodeChar>|</span>”) with
the <b>same length</b>, as the <b>discovered element</b>. </p>

<p class=MsoNormal><b>NOTE: The preceding symbol counts towards the discovered
element’s length when deciding how many pipes to use to cover it.</b></p>

<p class=MsoNormal>The <b>output</b> should be the same document, with the
sensitive <b>client</b> <b>data replaced by pipes</b>.  See the example for
more info.</p>

<h3>Example</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=712
 style='width:534.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=352 valign=top style='width:264.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=360 valign=top style='width:3.75in;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=352 valign=top style='width:264.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Agent *Ivankov was in the room when it all
  happened.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>The person in the room was heavily armed.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Agent *Ivankov had to act quick in order.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>He picked up his phone and called some unknown
  number. </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I think it was +555-49-796</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I can't really remember...</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>He said something about &quot;finishing
  work&quot; with subject !2491a23BVB34Q and returning to Base _Aurora21</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Then after that he disappeared from my sight.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>As if he vanished in the shadows.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>A moment, shorter than a second, later, I saw
  the person flying off the top floor.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I really don't know what happened there.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>This is all I saw, that night.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I cannot explain it myself...</span></p>
  </td>
  <td width=360 style='width:3.75in;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Agent |||||||| was in the room when it all
  happened.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>The person in the room was heavily armed.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Agent |||||||| had to act quick in order.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>He picked up his phone and called some unknown
  number. </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I think it was |||||||||||</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I can't really remember...</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>He said something about &quot;finishing
  work&quot; with subject |||||||||||||| and returning to Base |||||||||</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Then after that he disappeared from my sight.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>As if he vanished in the shadows.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>A moment, shorter than a second, later, I saw
  the person flying off the top floor.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I really don't know what happened there.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>This is all I saw, that night.</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I cannot explain it myself...</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
