<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center'>Problem 3 – Ancient VS Memory</h1>

<p class=MsoNormal>As a gladiator, Pesho is thrilled with ancient scrolls and
is excited to have deeper understanding of the encoded knowledge, so he started
digging. But because he can`t read the ancient computer codes, you should write
a programm which transforms it in readable form. </p>

<p class=MsoNormal><span lang=EN-GB>You will receive lines from the ancient memory
view in 2-byte integer unsigned display. Each line consists of exactly 22
integers, separated by whitespace. You should find every string in the whole
input and print them on the console.</span></p>

<p class=MsoNormal><span lang=EN-GB>Every string starts with -&gt; </span><span
class=CodeChar>&quot;</span><span class=CodeChar><span lang=EN-GB>32656 19759
32763</span>&quot;</span></p>

<p class=MsoNormal><span lang=EN-GB>After the pointer there is one zero and the
size of the string -&gt; </span><span class=CodeChar>&quot;0 5&quot;</span></p>

<p class=MsoNormal>After the size of string there is one more zero and on the
next n columns are the integers for </p>

<p class=MsoNormal>each character -&gt; <b>&quot;</b><b> 0 80 101 115 104
111&quot; </b></p>

<p class=MsoNormal><span lang=EN-GB>The above example is the string </span><span
lang=BG>&quot;</span><span lang=EN-GB>Pesho</span><span lang=BG>&quot;</span><span
lang=EN-GB>.</span></p>

<p class=MsoNormal>You must find all strings and display them on the console<span
lang=BG>, </span><span lang=EN-GB>using the ASCII code for each character<b>.</b></span></p>

<h2>Input</h2>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The input will consist of <b>an array of strings, containing 22 integers
each, separated by whitespaces</b>.</p>

<h2>Output</h2>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>You should print on a new line every string you`ve found in the
input in their order of appearance.</p>

<h2>Constraints</h2>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The lines of the input may contain any <span lang=BG>32-</span><span
lang=EN-GB>bit integer</span>. </p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Allowed working <b>time</b> / <b>memory</b>: <b>100ms</b> / <b>16MB</b>.</p>

<h2>Examples</h2>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=564 valign=top style='width:422.75pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b><span
  style='font-size:12.0pt'>Input</span></b></p>
  </td>
  <td width=131 valign=top style='width:98.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b><span
  style='font-size:12.0pt'>Output</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=564 valign=top style='width:422.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'><span style='background:aqua;
  font-weight:normal'>32656 19759 32763</span><span style='font-weight:normal'>
  0 <span style='background:yellow'>5</span> 0 <span style='background:lime'>80
  101 115 104 111</span> 0 0 0 0 0 0 0 0 0 0 0</span></p>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>0 <span
  style='background:aqua'>32656 19759 32763</span> 0 <span style='background:
  yellow'>7</span> 0 <span style='background:lime'>83 111 102 116 117 110 105</span>
  0 0 0 0 0 0 0 0</span></p>
  </td>
  <td width=131 valign=top style='width:98.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Pesho</span></p>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Softuni</span></p>
  </td>
 </tr>
 <tr>
  <td width=564 valign=top style='width:422.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='text-align:justify;line-height:normal'><span
  style='font-weight:normal'>0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 <span
  style='background:aqua'>32656 19759 32763</span> 0</span></p>
  <p class=Code style='text-align:justify;line-height:normal'><span
  style='background:yellow;font-weight:normal'>5</span><span style='font-weight:
  normal'> 0 <span style='background:lime'>71 111 115 104 111</span> 0 0 0 0 0
  0 0 0 0 <span style='background:aqua'>32656 19759 32763</span> 0 <span
  style='background:yellow'>4</span> 0</span></p>
  <p class=Code style='text-align:justify;line-height:normal'><span
  style='background:lime;font-weight:normal'>75 105 114 111</span><span
  style='font-weight:normal'> 0 0 0 0 0 0 0 0 0 0 <span style='background:aqua'>32656
  19759 32763</span> 0 <span style='background:yellow'>8</span> 0 <span
  style='background:lime'>86 101</span></span></p>
  <p class=Code style='text-align:justify;line-height:normal'><span
  style='background:lime;font-weight:normal'>114 111 110 105 107 97</span><span
  style='font-weight:normal'> 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0</span></p>
  </td>
  <td width=131 valign=top style='width:98.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Gosho</span></p>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Kiro</span></p>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Veronika</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-GB>&nbsp;</span></p>

</div>

</body>

</html>
