<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center'><a name="_Hlk505645974">Problem 1 – Bitcoin
&quot;Mining&quot;</a></h1>

<p class=MsoNormal><i>So you have heard that a lot of people are using Bitcoins
as alternative currency and mining them can make you rich quickly, without
doing </i><i><span lang=EN-GB>any</span>thing. Because of this you decided to become
a miner at the local mine and start digging Bitcoins out of the ground. Well,
after a few days you realized that there are no burried Bitcoins in the ground...
But luckily, you started digging up gold and decided to invest it in Bitcoins,
because they are cool and gold sucks. So you started exchanging gold for BGN
and buying Bitcoins with the money, and keeping track of the whole process. How
many Bitcoins did you buy and how much money were you left with it at the end?</i></p>

<p class=MsoNormal>Write a JavaScript program that calculates the <b>total
amount</b> of <b>bitcoins</b> you purchased with the gold you mined during your
<b>shift </b><span lang=EN-GB>at the mine</span>. Your shift consists of a certain
number of days where you mine an amount of <b>gold</b> in <b>grams</b>. Your
program will receive an <b>array with the amount of gold </b>you mined <b>each
day</b>, where the <b>first day</b> of your <b>shift</b> is the <b>first index
of the array</b>. Also, someone was stealing <b>every third day</b> from the
start of your shift <b>30%</b> from the mined <b>gold</b> for <b>this day</b>. For
the different exchanges use these <b>prices</b>:</p>

<div align=center>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr style='height:12.75pt'>
  <td width=116 style='width:87.2pt;border:solid windowtext 1.0pt;background:
  #BFBFBF;padding:0in 5.4pt 0in 5.4pt;height:12.75pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b>1
  Bitcoin</b></p>
  </td>
  <td width=95 style='width:71.05pt;border:solid windowtext 1.0pt;border-left:
  none;padding:0in 5.4pt 0in 5.4pt;height:12.75pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'>11949.16
  lv.</p>
  </td>
 </tr>
 <tr style='height:2.5pt'>
  <td width=116 style='width:87.2pt;border:solid windowtext 1.0pt;border-top:
  none;background:#BFBFBF;padding:0in 5.4pt 0in 5.4pt;height:2.5pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b>1
  g of gold</b></p>
  </td>
  <td width=95 style='width:71.05pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:2.5pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'>67.51
  lv.</p>
  </td>
 </tr>
</table>

</div>

<h3>Input</h3>

<p class=MsoNormal>You will receive an array of <b>strings</b> that must be
parsed as <b>numbers</b>, representing your <b>shift </b>at the mine.</p>

<h3>Output</h3>

<p class=MsoNormal>Print on the <strong><span style='font-family:"Calibri","sans-serif"'>console
</span></strong><strong><span style='font-family:"Calibri","sans-serif";
font-weight:normal'>these lines in the following formats</span></strong>:</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>First line</b> prints the <b>total</b> <b>amount </b>of bought
<b>bitcoins</b>:</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:50.2pt;text-indent:6.6pt'> &quot;<b>Bought
bitcoins: {count}</b>&quot;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Second line</b> <span lang=EN-GB>prints </span><b>witch day</b>
you <b>bought</b> your <b>first bitcoin</b>: </p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:50.2pt;text-indent:6.6pt'> &quot;<b>Day
of the first purchased bitcoin: {day}</b>&quot;</p>

<p class=MsoListParagraphCxSpMiddle>In case you <b>did not</b> <b>purchased any
bitcoins,</b> do not print the second line.</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Third line</b> prints the <b>amount</b> of <b>money</b> that’s
left after the bitcoin purchases <b>rounded by the second digit</b> after the
decimal point:</p>

<p class=MsoListParagraphCxSpLast style='margin-left:50.2pt;text-indent:6.6pt'> &quot;<b>Left
money: {money} lv.</b>&quot;</p>

<h3>Constraints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>input</b> array may contain up to <b>1,000</b> elements</p>

<p class=MsoListParagraphCxSpMiddle align=left style='margin-top:0in;
margin-right:0in;margin-bottom:10.0pt;margin-left:.5in;text-align:left;
text-indent:-.25in'><span style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The numbers in the array are in range <b>[0.01..5,000.00]
inclusive</b></p>

<p class=MsoListParagraphCxSpLast align=left style='margin-top:0in;margin-right:
0in;margin-bottom:10.0pt;margin-left:.5in;text-align:left;text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Allowed time/memory: 100ms/16MB</p>

<h3> Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=490
 style='width:367.15pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=350 valign=top style='width:262.2pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:45.7pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:45.7pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>100, 200, 300</span></p>
  </td>
  <td width=350 valign=top style='width:262.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.4pt 4.25pt 1.4pt 4.25pt;height:45.7pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Bought
  </span><span lang=EN-GB style='font-family:Consolas'>b</span><span
  style='font-family:Consolas'>itcoins: 2</span></p>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Day of
  the first</span> <span style='font-family:Consolas'>purchased bitcoin: 2</span></p>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Left money:
  10531.78 lv.</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Scroll down to see the explanation for the first example and
more examples.</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=695
 style='width:521.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=695 valign=top style='width:521.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Explanation</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormalCxSpMiddle align=left style='text-align:left;line-height:
  normal'><b><span lang=EN-GB>Day 1</span></b><b><span lang=EN-GB> </span></b><span
  lang=BG>– </span><span lang=EN-GB>you dig up <b>100 g</b> of gold then
  exchange it for <b>6751.00 lv.</b></span></p>
  <p class=MsoNormalCxSpMiddle align=left style='text-align:left;line-height:
  normal'><b><span lang=EN-GB>&nbsp;</span></b></p>
  <p class=MsoNormalCxSpMiddle align=left style='text-align:left;line-height:
  normal'><b><span lang=EN-GB>Day 2 </span></b><span lang=EN-GB>– you dig up <b>200
  g</b> of gold then exchange it for <b>13,502.00 lv. </b>and the total amount
  of money is <b>20,253.00 lv. </b>Then you buy <b>1 Bitcoin </b>which<b> </b>leaves
  you with <b>8,303.84 lv. </b>Also this purchase is the <b>first day you
  bought bitcoin</b>.</span></p>
  <p class=MsoNormalCxSpMiddle align=left style='text-align:left;line-height:
  normal'><span lang=EN-GB>&nbsp;</span></p>
  <p class=MsoNormalCxSpMiddle align=left style='text-align:left;line-height:
  normal'><b><span lang=EN-GB>Day 3 </span></b><span lang=EN-GB>– you dig up <b>300
  g </b>of gold but then <b>30% </b>of it is stolen and your gold drops to <b>210
  g </b>which you exchange for <b>14,177.10 lv. </b>making your total amount of
  money <b>22,480.94 lv. </b>Then you buy </span><b><span lang=BG>1 </span></b><b><span
  lang=EN-GB>Bitcoin </span></b><span lang=EN-GB>making the final amount of
  money that you are <b>left with</b> <b>10,531.78 lv. </b>with <b>2 bought
  Bitcoins.</b></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=695
 style='width:521.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=45 valign=top style='width:34.05pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=208 valign=top style='width:155.95pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=38 rowspan=2 valign=top style='width:28.35pt;border:none;
  border-right:solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=85 valign=top style='width:63.75pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=319 valign=top style='width:239.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:44.6pt'>
  <td width=45 valign=top style='width:34.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:44.6pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>50, 100</span></p>
  </td>
  <td width=208 valign=top style='width:155.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt;height:44.6pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Bought
  bitcoins: 0</span></p>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Money
  left: 10126.50 lv.</span></p>
  </td>
  <td width=85 valign=top style='width:63.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt;height:44.6pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3124.15, 504.212, 2511.124</span></p>
  </td>
  <td width=319 valign=top style='width:239.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt;height:44.6pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Bought
  bitcoins: 30</span></p>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Day of
  the first purchased bitcoin: 1</span></p>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>Money
  left: 5144.11 lv.</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
