<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1>Exercises: Arrays, Matrices, Multi-Dimensional Arrays</h1>

<p class=MsoNormal>Problems for exercises and homework for the <a
href="https://softuni.bg/courses/javascript-fundamentals">“JavaScript Fundamentals”
course @ SoftUni</a>. Submit your solutions in the SoftUni judge system at <a
href="https://judge.softuni.bg/Contests/313/">https://judge.softuni.bg/Contests/313/</a>.</p>

<h2>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Print an
Array with a given Delimiter</h2>

<p class=MsoNormal>Write a JS function that prints a given array.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. The last element
of the array is the delimiter.</p>

<p class=MsoNormal>The <b>output</b> is the same array, printed on the console,
each element <b>separated</b> from the others by the <b>given delimiter</b>.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=694
 style='width:520.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=58 valign=top style='width:43.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=138 valign=top style='width:103.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=276 valign=top style='width:207.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=58 valign=top style='width:43.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
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
  style='font-family:Consolas'>-</span></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>One-Two-Three-Four-Five</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=138 valign=top style='width:103.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>How about no?</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>I</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>will</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>not</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>do</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>it!</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>_</span></p>
  </td>
  <td width=276 valign=top style='width:207.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>How about no?_I_will_not_do_it!</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Let’s start by extracting the delimiter from the input array:</p>

<p class=MsoListParagraphCxSpMiddle align=center style='text-align:center'><img
border=0 width=411 height=62 id="Picture 6" src="README.md_files/image001.jpg"></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Now that we have the element, we need to delete it from the
array, because we don’t need it in the output. Thankfully, the Array in
JavaScript has a <b>built-in function</b> for <b>removing the last element</b>,
which is <b>Array.pop()</b>.</p>

<p class=MsoListParagraphCxSpMiddle align=center style='text-align:center'><img
border=0 width=395 height=82 id="Picture 7" src="README.md_files/image002.jpg"></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>And last but not least, let’s print each element of the array,
separated with the next one by the delimiter:</p>

<p class=MsoListParagraphCxSpMiddle align=center style='text-align:center'><img
border=0 width=356 height=212 id="Picture 8" src="README.md_files/image003.jpg"></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <span class=CodeChar>result</span> variable holds our final
string. The<span class=CodeChar> if</span> check in the loop is necessary so
that we don’t <b>attach an</b> <b>unneeded delimiter</b> somewhere in the
result string.</p>

<p class=MsoListParagraphCxSpLast align=center style='text-align:center'>&nbsp;</p>

<h2>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Print every
N-th Element from an Array </h2>

<p class=MsoNormal>Write a JS function that prints every element of an array,
on a given step.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. The last element
is <b>N - the step</b>.</p>

<p class=MsoNormal>The <b>output</b> is every element on the <b>N-th</b> step <b>starting
from the first one</b>. If the step is “<span class=CodeChar>3</span>”, you
need to print the <b>1-st</b>, the <b>4-th</b>, the <b>7-th</b> … and so on,
until you reach the end of the array. The elements must be printed each on a
new line.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:.25in;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>20</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>31</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>20</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>31</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>20</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>dsa</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>asd</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>test</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>tset</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>dsa</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>test</span></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>6</span></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Use what you’ve seen from the <b>previous problem</b> to <b>extract
the last element</b> of the array.</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Create a<span class=CodeChar> step</span> variable to hold the <b>given
step</b> of the array. Then <b>print all the elements</b> with a<span
class=CodeChar> for </span>loop, <b>incrementing</b> the <b>loop variable </b>with
the value of the <span class=CodeChar>step</span> variable.</p>

<h2>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>*Add and
Remove Elements from Array</h2>

<p class=MsoNormal>Write a JS function that <b>adds</b> and <b>removes</b> numbers
<b>to / from</b> an array. You will receive a command which can either be “<span
class=CodeChar>add</span>” or “<span class=CodeChar>remove</span>”. </p>

<p class=MsoNormal>The <b>initial number</b> is <b>1</b>. Each input command
should <b>increase that number</b>, regardless of what it is.</p>

<p class=MsoNormal><br>
Upon receiving an “<span class=CodeChar>add</span>” command you should add the current
number to your array. <br>
Upon receiving the “<span class=CodeChar>remove</span>” command you should remove
the last entered number, currently existent in the array.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. Each element
holds a <b>command</b>. </p>

<p class=MsoNormal>The <b>output</b> is the array itself, with each element
printed on a new line. In case of an empty array, just print “<span
class=CodeChar>Empty</span>”.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:.25in;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>add</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>add</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>add</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>add</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>add</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>add</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>remove</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>add</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>add</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>remove</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>remove</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>remove</span></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Empty</span></p>
  </td>
 </tr>
</table>

<h2>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Rotate
Array</h2>

<p class=MsoNormal>Write a JS function that rotates an array. The array should
be rotated to the right side, meaning that the last element should become the
first, upon rotation. </p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. The <b>last
element </b>of the array is the amount of rotation you need to perform.</p>

<p class=MsoNormal>The <b>output</b> is the resulted array after the rotations.
The elements should be printed on one line, separated by a <b>single space</b>.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=586
 style='width:439.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=246 valign=top style='width:184.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 4 1 2</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Banana</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Orange</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Coconut</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Apple</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>15</span></p>
  </td>
  <td width=246 valign=top style='width:184.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Orange Coconut Apple Banana</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Check if there is a <b>built-in function</b> for inserting
elements <b>at the</b> <b>start </b>of the array.</p>

<h2>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Extract an
Non-decreasing Subsequence from an Array</h2>

<p class=MsoNormal>Write a JS function that extracts only those numbers that <b>form
a</b> <b>non-decreasing subsequence</b>. In other words, you start from the <b>first
element</b> and continue to <b>the end</b> of the <b>given array of numbers</b>.
Any number which is <b>LESS THAN </b>the <b>current biggest one</b> is <b>ignored</b>,
alternatively if it’s equal or higher than the <b>current biggest one</b> you
set it as the <b>current biggest one</b> and you continue to the next number. </p>

<p class=MsoNormal>The <b>input</b> comes as array of numbers.</p>

<p class=MsoNormal>The <b>output</b> is the processed array after the
filtration, which should be a non-decreasing subsequence. Each element should
be printed on a new line.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:.25in;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>8</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>10</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>12</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>24</span></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>8</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>10</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>12</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>24</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>20</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>15</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>6</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1</span></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>20</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>Array.filter()</b> built-in function might help you a lot
with this problem.</p>

<h2>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Sort an
Array by 2 Criteria</h2>

<p class=MsoNormal>Write a JS function that orders a <b>given array of strings</b>,
by <b>length</b> in <b>ascending order</b> as <b>primary criteria</b>, and by <b>alphabetical
value </b>in<b> ascending order </b>as <b>second criteria</b>. The comparison
should be <b>case-insensitive</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings.</p>

<p class=MsoNormal>The <b>output</b> is the ordered array of strings.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:.25in;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>alpha</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>beta</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>gamma</span></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>beta</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>alpha</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>gamma</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Isacc</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Theodor</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Jack</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Harrison</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>George</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Jack</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Isacc</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>George</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Theodor</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Harrison</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>test</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Deny</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>omen</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Default</span></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Deny</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>omen</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>test</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Default</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>An array can be sorted by passing a comparing function to the <b>Array.sort()</b>
function.</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Creating a comparing function by 2 criteria can be achieved by
first comparing by the <b>main criteria</b>, if the 2 items are different (the
result of the compare is not 0) - return the result as the result of the
comparing function. If the two items are the same by the <b>main criteria</b>
(the result of the compare is 0), we need to compare by the <b>second criteria</b>
and the result of that comparison is the result of the comparing function.</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>You can check more about <b>Array.sort()</b> here - <a
href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort%20">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort</a>
</p>

<h1>Multidimensional Arrays</h1>

<p class=MsoNormal>We will mainly work with 2-dimensional arrays. The concept
is as simple as working with a simple 1-dimensional array. It is just an array
of arrays.</p>

<h2>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Magic
Matrices</h2>

<p class=MsoNormal>Write a JS function that checks if a given matrix of numbers
is magical. A matrix is magical if the <b>sums of the cells</b> of <b>every row</b>
and <b>every column</b> are <b>equal</b>. </p>

<p class=MsoNormal>The <b>input</b> comes as an array of arrays, containing
numbers (number 2D matrix). The input numbers will <b>always be positive</b>.</p>

<p class=MsoNormal>The <b>output</b> is a Boolean result indicating whether the
matrix is magical or not.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=628
 style='width:470.9pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=113 valign=top style='width:85.05pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=18 valign=top style='width:13.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=132 valign=top style='width:99.2pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:.25in;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=113 valign=top style='width:85.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[[4, 5, 6],</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> [6, 5, 4],</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> [5, 5, 5]]</span></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>true</span></p>
  </td>
  <td width=18 valign=top style='width:13.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=132 valign=top style='width:99.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[[11, 32, 45],</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> [21, 0, 1],</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> [21, 1, 1]]</span></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>false</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[[1, 0, 0],</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> [0, 0, 1],</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> [0, 1, 0]]</span></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>true</span></p>
  </td>
 </tr>
</table>

<h2>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>*Spiral
Matrix</h2>

<p class=MsoNormal>Write a JS function that generates a <b>Spirally-filled</b>
matrix with numbers, with given dimensions.</p>

<p class=MsoNormal>The <b>input</b> comes as 2 numbers that represent the <b>dimension
of the matrix</b>. </p>

<p class=MsoNormal>The <b>output</b> is the matrix filled spirally starting
from <b>1</b>. You need to print <b>every row on a new line</b>, with the cells
<b>separated by a space</b>. Check the examples below. </p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=192 valign=top style='width:2.0in;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=126 valign=top style='width:94.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=174 valign=top style='width:130.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=106 valign=top style='width:79.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5, 5</span></p>
  </td>
  <td width=192 valign=top style='width:2.0in;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1 2 3 4 5</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>16 17 18 19 6</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>15 24 25 20 7</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>14 23 22 21 8</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>13 12 11 10 9</span></p>
  </td>
  <td width=126 valign=top style='width:94.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3, 3</span></p>
  </td>
  <td width=174 valign=top style='width:130.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1 2 3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>8 9 4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>7 6 5</span></p>
  </td>
 </tr>
</table>

<h2>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>*Diagonal
Attack</h2>

<p class=MsoNormal>Write a JS function that reads a given matrix of numbers,
and checks if both <b>main diagonals have equal sum</b>. If they do, set every
element that is <b>NOT</b> part of <b>the main diagonals</b> to that sum, alternatively
just print the matrix unchanged.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. Each element
represents a <b>string of numbers</b>, with <b>spaces</b> between them. Parse
it into a <b>matrix of numbers</b>, so you can work with it.</p>

<p class=MsoNormal>The <b>output</b> is either the new matrix, with all cells
not belonging to a main diagonal changed to the diagonal sum or the original
matrix, if the two diagonals have different sums. You need to print <b>every
row on a new line</b>, with cells <b>separated by a space</b>. Check the
examples below. </p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=154 valign=top style='width:115.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=156 valign=top style='width:117.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=174 valign=top style='width:130.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=154 valign=top style='width:115.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['5 3 12 3 1',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'11 4 23 2 5',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'101 12 3 21 10',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'1 4 5 2 2',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'5 22 33 11 1']</span></p>
  </td>
  <td width=156 valign=top style='width:117.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5 15 15 15 1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>15 4 15 2 15</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>15 15 3 15 15</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>15 4 15 2 15</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5 15 15 15 1</span></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=102 valign=top style='width:76.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['1 1 1',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'1 1 1'</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'1 1 0']</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=174 valign=top style='width:130.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1 1 1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1 1 1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1 1 0</span></p>
  </td>
 </tr>
</table>

<h2>10.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>**Orbit</h2>

<p class=MsoNormal>You will be given an empty rectangular space of cells. Then
you will be given the position of a star. You need to build the orbits around
it.</p>

<p class=MsoNormal>You will be given a coordinate of a cell, which will <b>always
be</b> <b>inside the matrix</b>, on which you will put the value – <span
class=CodeChar>1</span>. Then you must set the values of the cells <b>directly
surrounding that cell</b>, including the <b>diagonals</b>, <b>to </b><span
class=CodeChar>2</span>. After which you must set the values of the next
surrounding cells to 3 and so on. Check the pictures for more info.</p>

<p class=MsoNormal>For example we are given a matrix which has 5 rows and 5
columns and the star is at coordinates – <span class=CodeChar>0, 0</span>. Then
the following should happen:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 align=left
 style='border-collapse:collapse;border:none;margin-left:4.8pt;margin-right:
 4.8pt'>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  background:yellow;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'><span style='background:yellow'>1</span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:yellow;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>1</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:yellow;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>1</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#E5DFEC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>4</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#FBD4B4;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>5</p>
  </td>
 </tr>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'> </p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#E5DFEC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>4</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FBD4B4;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>5</p>
  </td>
 </tr>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>   </p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#E5DFEC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>4</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FBD4B4;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>5</p>
  </td>
 </tr>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#E5DFEC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>4</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#E5DFEC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>4</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#E5DFEC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>4</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#E5DFEC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>4</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FBD4B4;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>5</p>
  </td>
 </tr>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FBD4B4;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>5</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FBD4B4;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>5</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FBD4B4;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>5</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FBD4B4;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>5</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FBD4B4;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>5</p>
  </td>
 </tr>
</table>

<p class=MsoNormal><br clear=all>
   </p>

<p class=MsoNormal>If the coordinates of the star are somewhere in the middle
of the matrix for example – <span class=CodeChar>2, 2</span>, then it should
look like this:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 align=left
 style='border-collapse:collapse;border:none;margin-left:4.8pt;margin-right:
 4.8pt'>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
 </tr>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'> </p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
 </tr>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>   </p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:yellow;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>1</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:yellow;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>1</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:yellow;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>1</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
 </tr>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#92D050;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>2</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
 </tr>
 <tr>
  <td width=28 valign=top style='width:21.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;background:white;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;border-right:solid windowtext 1.0pt;
  background:white;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>&nbsp;</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#C4BC96;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'>3</p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>The <b>input</b> comes as an array of 4 numbers <b>[width,
height, x, y]</b> which represents the <b>dimensions of the matrix</b> and the <b>coordinates
of the star.</b></p>

<p class=MsoNormal>The <b>output</b> is the filled matrix, with the cells <b>separated
by a space</b>, each <b>row on a new line</b>.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=108 valign=top style='width:81.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=106 valign=top style='width:79.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=116 valign=top style='width:86.75pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=88 valign=top style='width:66.25pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:.25in;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=108 valign=top style='width:81.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[4, 4, 0, 0]</span></p>
  </td>
  <td width=106 valign=top style='width:79.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1 2 3 4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2 2 3 4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 3 3 4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4 4 4 4</span></p>
  </td>
  <td width=24 valign=top style='width:.25in;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=116 valign=top style='width:86.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[5, 5, 2, 2]</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=88 valign=top style='width:66.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 3 3 3 3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 2 2 2 3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 2 1 2 3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 2 2 2 3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 3 3 3 3 </span></p>
  </td>
  <td width=120 valign=top style='width:1.25in;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[3, 3, 2, 2]</span></p>
  </td>
  <td width=114 valign=top style='width:85.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 3 3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 2 2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3 2 1</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Check if there is some <b>dependency</b> or <b>relation</b>
between the <b>position of the numbers</b> and the <b>rows</b> and <b>columns </b>of
those positions.</p>

</div>

</body>

</html>
