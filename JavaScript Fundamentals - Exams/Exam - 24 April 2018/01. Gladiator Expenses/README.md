<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center'>Problem 1 – Gladiator Expenses</h1>

<p class=MsoNormal>As a gladiator, Pesho has <span lang=EN-GB>to repair his
broken equipment when he loses a fight. His equipment consists of helmet, sword,
shield and armor. You will receive the Pesho`s <b>lost fights count</b>. </span></p>

<p class=MsoNormal><span lang=EN-GB>Every <b>second</b> lost game, his helmet
is broken.</span></p>

<p class=MsoNormal><span lang=EN-GB>Every <b>third</b> lost game, his sword is
broken.</span></p>

<p class=MsoNormal><span lang=EN-GB>When both <b>his sword and helmet are
broken </b>in the same lost fight, his <b>shield also brakes</b>.</span></p>

<p class=MsoNormal><b><span lang=EN-GB>Every</span></b><span lang=EN-GB> <b>second
time</b>, when his shield brakes, his armor also needs to be repaired. </span></p>

<p class=MsoNormal><span lang=EN-GB>You will receive the price of each item in
his equipment. Calculate his expenses for the year</span><span lang=EN-GB> </span><span
lang=EN-GB>for renewing his equipment. </span></p>

<h2>Input<span lang=BG> / </span><span lang=EN-GB>Constraints</span></h2>

<p class=MsoNormal><span lang=EN-GB>You will receive 5 parameters to your
function:</span></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>First parameter <span lang=EN-GB>–</span><span lang=EN-GB> </span><b>lost
fights count </b>– integer in the range <b>[0</b><b><span lang=BG>,</span>
1000]</b>.</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-GB>Second parameter –</span><span lang=EN-GB> </span><b><span
lang=EN-GB>helmet price</span></b><span lang=EN-GB> - floating point number in
range <b>[0, 100</b></span><b><span lang=BG>0</span></b><b><span lang=EN-GB>]</span></b>.
</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-GB>Third parameter –</span><span lang=EN-GB> </span><b><span
lang=EN-GB>sword price</span></b><span lang=EN-GB> - floating point number in
range <b>[0, 100</b></span><b><span lang=BG>0</span></b><b><span lang=EN-GB>]</span></b>.
</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-GB>Fourth parameter – <b>shield price</b> - floating
point number in range <b>[0, 100</b></span><b><span lang=BG>0</span></b><b><span
lang=EN-GB>]</span></b>. </p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-GB>Fifth parameter – <b>armor price</b> - floating
point number in range <b>[0, 100</b></span><b><span lang=BG>0</span></b><b><span
lang=EN-GB>]</span></b>. </p>

<h2>Output</h2>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>As output you must print Pesho`s <span lang=EN-GB>total expenses
for new equipment</span>: <b>&quot;Gladiator expenses: {expenses} aureus&quot;</b></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Allowed working <b>time</b> / <b>memory</b>: <b>100ms</b> / <b>16MB</b>.</p>

<h2>Examples</h2>

<table class=TableGrid1 border=1 cellspacing=0 cellpadding=0 width=696
 style='width:521.65pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=115 valign=top style='width:86.2pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b><span
  style='font-size:12.0pt'>Input</span></b></p>
  </td>
  <td width=300 valign=top style='width:225.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b><span
  style='font-size:12.0pt'>Output</span></b></p>
  </td>
  <td width=322 valign=top style='width:241.65pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b><span
  style='font-size:12.0pt'>Comment</span></b></p>
  </td>
 </tr>
 <tr style='height:103.9pt'>
  <td width=115 valign=top style='width:86.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:103.9pt'>
  <p class=Code style='line-height:normal'><span lang=EN-GB style='font-weight:
  normal'>7</span></p>
  <p class=Code style='line-height:normal'><span lang=EN-GB style='font-weight:
  normal'>2</span></p>
  <p class=Code style='line-height:normal'><span lang=EN-GB style='font-weight:
  normal'>3</span></p>
  <p class=Code style='line-height:normal'><span lang=EN-GB style='font-weight:
  normal'>4</span></p>
  <p class=Code style='line-height:normal'><span lang=EN-GB style='font-weight:
  normal'>5</span></p>
  </td>
  <td width=300 valign=top style='width:225.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:103.9pt'>
  <p class=Code style='line-height:normal'><span lang=BG style='font-weight:
  normal'>Gladiator expenses: 16.00 aureus</span></p>
  </td>
  <td width=322 valign=top style='width:241.65pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:103.9pt'>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Trashed
  helmet -&gt; 3 times</span></p>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Trashed
  sword -&gt; 2 times</span></p>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Trashed
  shield -&gt; 1 time</span></p>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Total:
  6 + 6 + 4 = 16.00 aureus;</span></p>
  </td>
 </tr>
 <tr style='height:103.9pt'>
  <td width=115 valign=top style='width:86.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:103.9pt'>
  <p class=Code style='line-height:normal'><span lang=BG style='font-weight:
  normal'>23</span></p>
  <p class=Code style='line-height:normal'><span lang=BG style='font-weight:
  normal'>12.50</span></p>
  <p class=Code style='line-height:normal'><span lang=BG style='font-weight:
  normal'>21.50</span></p>
  <p class=Code style='line-height:normal'><span lang=BG style='font-weight:
  normal'>40</span></p>
  <p class=Code style='line-height:normal'><span lang=BG style='font-weight:
  normal'>200</span></p>
  </td>
  <td width=300 valign=top style='width:225.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:103.9pt'>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Gladiator
  expenses: 608.00 aureus</span></p>
  </td>
  <td width=322 valign=top style='width:241.65pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:103.9pt'>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=BG>&nbsp;</span></p>

</div>

</body>

</html>
