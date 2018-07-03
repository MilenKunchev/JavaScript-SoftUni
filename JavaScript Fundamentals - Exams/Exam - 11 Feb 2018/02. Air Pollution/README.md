<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center'>Problem 2 – Air Pollution</h1>

<p class=MsoNormal><i>Because of recent events you have become very conscious
of the air quality in Sofia. That’s why you decided to keep track of the air
pollution levels by making a map. Each block of the map displays a number that
represents the current particle pollution in the air at this moment. There are
different forces which affect the air quality in various ways. So how clean is
the air in Sofia now?</i></p>

<p class=MsoNormal>Write a JavaScript program that tracks the<b> pollution</b> <b>in
the air</b> above Sofia. You will receive <b>two arguments</b> – the <b>first</b>
is the <b>map of Sofia</b> represented by a <b>matrix of numbers</b> and the
second is an <b>array of strings</b> representing the <b>forces</b> <b>affecting</b>
the <b>air quality</b>. The <b>map</b> will <b>always</b> be with <b>5 rows</b>
and <b>5 columns</b> in <b>total</b> <b>of</b> <b>25 elements - blocks</b>. Each
block’s particle pollution (PM) is <b>affected</b> by <b>3 forces </b>received<b>
</b>in the following formats<b><span lang=BG>:</span></b></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span lang=BG
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>&quot;</b><b><span lang=EN-GB>breeze {index}</span>&quot;</b><b><span
lang=EN-GB> –</span></b><span lang=EN-GB> index is <b>the row </b>where <b>all
column’s value drops </b>by <b>15 </b>PM</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span lang=BG
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>&quot;</b><b><span lang=EN-GB>gale {index}</span>&quot;</b><b><span
lang=EN-GB> – </span></b><span lang=EN-GB>index is <b>the column in all rows </b>where
<b>value drops </b>by <b>20 </b>PM</span></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span lang=BG
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>&quot;</b><b><span lang=EN-GB>smog {value}</span>&quot;</b><b><span
lang=EN-GB> – all</span></b><span lang=EN-GB> <b>blocks </b>in the map <b>increase</b>
equally by <b>the given value’s </b>PM</span></p>

<p class=MsoNormal>The threshold in each block is <b>50 </b>PM. If <span
lang=EN-GB>it is <b>below</b> <b>that number</b>, the block’s air is considered
<b>normal</b> but if it <b>reaches or goes over it,</b> that block’s air is
considered <b>polluted</b>. Also note, that the <b>polluted particles</b> in a
block <b>cannot go below</b> <b>zero</b>.</span></p>

<p class=MsoNormal><span lang=EN-GB>Finally, your program needs to <b>find</b>
if there are <b>any polluted blocks</b> and <b>print them </b>in the format
given below.</span></p>

<h3>Input</h3>

<p class=MsoNormal>You will receive <b>two</b> <b>arguments</b>: </p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The<b> first</b> argument is an <b>array with five strings</b> – <b>rows</b>
of the matrix with <b>columns separated by space </b>that must be parsed as <b>numbers</b>,
representing the <b>map of Sofia</b>. </p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>second</b> argument is an <b>array of strings</b> – each <b>string</b>
consists of one of the <b>words (breeze/gale/smog)</b> and a <b>number</b> <b>separated
by space</b>, representing the <b>different forces</b>.</p>

<h3>Output</h3>

<p class=MsoNormal>Print on the <strong><span style='font-family:"Calibri","sans-serif"'>console</span></strong><strong><span
style='font-family:"Calibri","sans-serif";font-weight:normal'> a </span></strong><strong><span
style='font-family:"Calibri","sans-serif"'>single line</span></strong>:</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>If there are <b>polluted blocks</b> in the map, <b>use</b> their <b>coordinates</b>
in the following format:</p>

<p class=MsoListParagraphCxSpLast style='margin-left:50.2pt;text-indent:-.25in'><span
style='font-family:"Courier New"'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><b>&quot;[{rowIndex}-{columnIndex}]&quot;</b></p>

<p class=MsoNormal style='margin-left:35.9pt'>Note that you must <b>start</b>
from the <b>top left corner</b> of the map moving to the <b>bottom right corner</b>
<b>horizontally</b>. Then <b>separate</b> each <b>formatted block’s coordinates</b>
with <b>comma and space</b> and print them in a single line in the following
format:</p>

<p class=MsoListParagraphCxSpFirst style='margin-left:50.2pt;text-indent:-.25in'><span
style='font-family:"Courier New"'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><b>&quot;Polluted areas: {block1}, {block2}, {block3}, …&quot;</b></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>If there are <b>no polluted blocks</b> in the map print:</p>

<p class=MsoListParagraphCxSpLast style='margin-left:50.2pt;text-indent:-.25in'><span
style='font-family:"Courier New"'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><b>&quot;No polluted areas&quot;</b></p>

<h3>Constraints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <strong><span style='font-family:"Calibri","sans-serif"'>number</span></strong>
of <b>rows</b> and <b>columns</b> for the <b>matrix </b>will<b> always </b>be <b>5</b></p>

<p class=MsoListParagraphCxSpMiddle align=left style='margin-top:0in;
margin-right:0in;margin-bottom:10.0pt;margin-left:.5in;text-align:left;
text-indent:-.25in'><span style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>number</b> in each block will be an <b>integer</b> in
range <b>[0..1000] inclusive</b></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>number</b> of <b>elements</b> in the <b>second input
argument</b> will be in range <b>[0..100] inclusive</b> </p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Given <b>smog’s</b> <b>value </b>will be an <b><span lang=EN-GB>integer
</span></b><span lang=EN-GB>in range </span><b>[0..100] inclusive</b></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Given <b>indexes</b> will <b>always</b> be <b>valid</b></p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=697
 style='width:523.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=282 valign=top style='width:211.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=416 valign=top style='width:311.85pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=282 valign=top style='width:211.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=CodeCxSpFirst style='line-height:normal'>[</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  &quot;5 7 72 14 4&quot;,</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  &quot;41 35 37 27
  33&quot;,</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  &quot;23 16 27 42
  12&quot;,</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  &quot;2 20 28 39
  14&quot;,</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  &quot;16 34 31 10
  24&quot;,</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>],</p>
  <p class=CodeCxSpLast style='line-height:normal'>[&quot;breeze 1&quot;,
  &quot;gale 2&quot;, &quot;smog 25&quot;]</p>
  </td>
  <td width=416 valign=top style='width:311.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Polluted
  areas: [0-2], [1-0], [2-3], [3-3], [4-1]</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><b>&nbsp;</b></p>

<h3>Explanation</h3>

<p class=MsoNormal><span style='position:absolute;z-index:251667450;left:0px;
margin-left:0px;margin-top:21px;width:682px;height:37px'><img width=682
height=37 src="02.%20Air%20Pollution_Условие%20(DOCX)_files/image001.png"></span>Graphic
diagram explaining the <b>first example’s </b><span lang=EN-GB>program flow:</span></p>

<p class=MsoNormal><span lang=EN-GB> </span>                                                                      </p>

<p class=MsoNormal><span style='position:absolute;z-index:251671552;left:0px;
margin-left:543px;margin-top:35px;width:23px;height:27px'><img width=23
height=27 src="02.%20Air%20Pollution_Условие%20(DOCX)_files/image002.png"></span><span
style='position:absolute;z-index:251670528;left:0px;margin-left:402px;
margin-top:35px;width:23px;height:27px'><img width=23 height=27
src="02.%20Air%20Pollution_Условие%20(DOCX)_files/image002.png"></span><span
style='position:absolute;z-index:251669504;left:0px;margin-left:259px;
margin-top:35px;width:24px;height:28px'><img width=24 height=28
src="02.%20Air%20Pollution_Условие%20(DOCX)_files/image003.png"></span><span
style='position:absolute;z-index:251668480;left:0px;margin-left:118px;
margin-top:35px;width:24px;height:28px'><img width=24 height=28
src="02.%20Air%20Pollution_Условие%20(DOCX)_files/image003.png"></span><img
width=683 height=97 id="Group 13"
src="02.%20Air%20Pollution_Условие%20(DOCX)_files/image004.png"></p>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=697
 style='width:523.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr style='height:11.2pt'>
  <td width=282 valign=top style='width:211.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.2pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=416 valign=top style='width:311.85pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:11.2pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:44.5pt'>
  <td width=282 valign=top style='width:211.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:44.5pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;5 7 3 28 32&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;41 12 49 30 33&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;3 16 20 42 12&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;2 20 10 39 14&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;7 34 4 27 24&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>],</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[ </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;smog 11&quot;, &quot;gale 3&quot;, </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;breeze 1&quot;, &quot;smog 2&quot;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>]</span></p>
  </td>
  <td width=416 valign=top style='width:311.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt;height:44.5pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>No polluted
  areas</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=697
 style='width:523.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr style='height:11.2pt'>
  <td width=282 valign=top style='width:211.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:11.2pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=416 valign=top style='width:311.85pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:11.2pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:44.5pt'>
  <td width=282 valign=top style='width:211.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:44.5pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;5 7 2 14 4&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;21 14 2 5 3&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;3 16 7 42 12&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;2 20 8 39 14&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &quot;7 34 1 10 24&quot;,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>],</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[&quot;breeze 1&quot;, &quot;gale 2&quot;, &quot;smog
  35&quot;]</span></p>
  </td>
  <td width=416 valign=top style='width:311.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt;height:44.5pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Polluted
  areas: [2-1], [2-3], [3-1], [3-3], [4-1], [4-4]</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
