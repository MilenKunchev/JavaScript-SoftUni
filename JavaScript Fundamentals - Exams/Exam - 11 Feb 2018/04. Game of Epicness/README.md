<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center'>Problem 4 – Game of Epicness</h1>

<p class=MsoNormal><i>Welcome to the Game of Epicness where different kingdoms
are fighting for the grant price of a bucket of Bitcoins… EPIC! In this amazing
game there are many kingdoms with many generals and every general have their
own army. To decide who is the winner for this totally amazing price they fight
battles between them. But they are not so awesome at math, so they need you to
help them record their battle results. </i></p>

<p class=MsoNormal>Write a JavaScript program that <b>determines</b> the <b>winner</b>
from <b>all battles</b>. You will receive <b>two</b> arguments:</p>

<p class=MsoNormal>The <b>first </b>argument is an <strong><span
style='font-family:"Calibri","sans-serif"'>array of kingdoms </span></strong><strong><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>with</span></strong><strong><span
style='font-family:"Calibri","sans-serif"'> generals </span></strong><strong><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>and their</span></strong><strong><span
style='font-family:"Calibri","sans-serif"'> army</span></strong> in the form of
an <strong><span style='font-family:"Calibri","sans-serif"'>object</span></strong>
with format:</p>

<p class=Code>{ kingdom: String, general: String, army: Number }</p>

<p class=MsoNormal>Every <b>general</b> has his own <b>army</b> that fights for
a certain <b>kingdom</b>. Note that, every <b>kingdom’s name </b><span
lang=EN-GB>is <b>unique, </b>and every general’s <b>name </b>is <b>unique </b>in
<b>this kingdom</b>. If the <b>general</b> already <b>exists</b> <b>in</b> this
<b>kingdom</b> <b>add</b> the <b>army</b> to his current one. After you g</span>o
through all the kingdoms with their generals with armies and store the
information about them, it’s time to start the battles.</p>

<p class=MsoNormal>The <b>second </b>argument is <b>matrix of strings </b>showing
which <b>kingdom’s generals</b> are <b>fighting</b> in this format:</p>

<p class=MsoNormal><b>[</b></p>

<p class=MsoNormal><b>      [ &quot;{AttackingKingdom} &quot;, &quot;{AttackingGeneral}&quot;,
&quot;{DefendingKingdom} &quot;, &quot;{DefendingGeneral}&quot; ],</b></p>

<p class=MsoNormal><b>      …</b></p>

<p class=MsoNormal><b>]</b></p>

<p class=MsoNormal>The <b>first two elements </b>are the <b>names </b>of the <b>attacking
general from </b><span lang=EN-GB>certain </span><b>kingdom</b> and the <b>second
two</b> are the <b>names</b> of the <b>defending general from </b><span
lang=EN-GB>certain </span><b>kingdom</b>. <b>Compare</b><b> </b><span
lang=EN-GB>the two general’s <b>armies to determine</b> who <b>wins</b> and who
<b>losses </b>based on who have the <b>larger army wins. </b>The <b>winner’s
army increases </b>with <b>10% </b>and the <b>loser’s army decreases </b>with <b>10%.
</b>Keep in mind to <b>round</b> them <b>down</b> if there is any excess <b>army</b>
<b>after the battle. </b>If there is a <b>draw</b>, <b>do not do anything</b>.<b>
Keep track</b> of the <b>wins </b>and <b>losses</b> for every general’s battle.
</span></p>

<p class=MsoNormal>Note that, <b>generals</b> from the <b>same kingdom</b> <b>cannot</b>
<b>attack</b> <b>each other</b>. </p>

<p class=MsoNormal>After you finish with all battles you need to <b>find</b>
which <b>kingdom</b> <b>wins</b> the game. To decide that, <b>first</b> <b>order
them </b>by all their <b>general’s wins (descending)</b> then by their <b>losses
(ascending), </b>and finally by the <b><span lang=EN-GB>kingdom’s name </span></b><span
lang=EN-GB>in </span><b>ascending alphabetical</b> order.</p>

<h3>Input</h3>

<p class=MsoNormal>You will receive <b>two arguments – </b>an <strong><span
style='font-family:"Calibri","sans-serif"'>array of objects</span></strong>
with properties and a <b>matrix of strings</b> as shown above.</p>

<h3>Output</h3>

<p class=MsoNormal>Print on the <strong><span style='font-family:"Calibri","sans-serif"'>console</span></strong>
the winning kingdom and <b>sort </b>the generals by their <b>armies in</b> <b>descending
</b>order,<b> formatted </b>as seen in the examples.</p>

<h3>Constraints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>number</b> of <b>elements</b> in the <b>first input
argument</b> will be in range <b>[1..100] inclusive</b> </p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>number</b> of <b>elements</b> in the <b>second input
argument</b> will be in range <b>[0..100] inclusive</b> </p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-GB>General’s <b>army </b>will be always an <b>integer
</b>in range <b>[0..1,000,000] inclusive</b></span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There <b>will</b> be <b>no invalid</b> <b>input</b></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There <b>will </b>be <b>no matching number </b>of <b>armies </b>in
the <b>output</b></p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=695
 style='width:521.55pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=CodeCxSpFirst style='line-height:normal'>[ { kingdom: &quot;Maiden
  Way&quot;, general: &quot;Merek&quot;, army: 5000 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom:
  &quot;Stonegate&quot;, general: &quot;Ulric&quot;, army: 4900 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom:
  &quot;Stonegate&quot;, general: &quot;Doran&quot;, army: 70000 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom:
  &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 0 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom:
  &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 2000 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom: &quot;Maiden
  Way&quot;, general: &quot;Berinon&quot;, army: 100000 } ],</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>[
  [&quot;YorkenShire&quot;, &quot;Quinn&quot;, &quot;Stonegate&quot;,
  &quot;Ulric&quot;],</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  [&quot;Stonegate&quot;,
  &quot;Ulric&quot;, &quot;Stonegate&quot;, &quot;Doran&quot;],</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  [&quot;Stonegate&quot;,
  &quot;Doran&quot;, &quot;Maiden Way&quot;, &quot;Merek&quot;],</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  [&quot;Stonegate&quot;,
  &quot;Ulric&quot;, &quot;Maiden Way&quot;, &quot;Merek&quot;],</p>
  <p class=CodeCxSpLast style='line-height:normal'>  [&quot;Maiden Way&quot;,
  &quot;Berinon&quot;, &quot;Stonegate&quot;, &quot;Ulric&quot;] ]</p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:121.65pt'>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:121.65pt'>
  <p class=CodeCxSpFirst style='line-height:normal'><span lang=EN-GB>Winner:
  Stonegate</span></p>
  <p class=CodeCxSpMiddle style='line-height:normal'><span lang=EN-GB>/\general:
  Doran</span></p>
  <p class=CodeCxSpMiddle style='line-height:normal'><span lang=EN-GB>---army:
  77000</span></p>
  <p class=CodeCxSpMiddle style='line-height:normal'><span lang=EN-GB>---wins:
  1</span></p>
  <p class=CodeCxSpMiddle style='line-height:normal'><span lang=EN-GB>---losses:
  0</span></p>
  <p class=CodeCxSpMiddle style='line-height:normal'><span lang=EN-GB>/\general:
  Ulric</span></p>
  <p class=CodeCxSpMiddle style='line-height:normal'><span lang=EN-GB>---army:
  5336</span></p>
  <p class=CodeCxSpMiddle style='line-height:normal'><span lang=EN-GB>---wins:
  2</span></p>
  <p class=CodeCxSpLast style='line-height:normal'><span lang=EN-GB>---</span>losses:
  1</p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Explanation</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>After you successfully store the kingdoms information, the first
  battle’s result is <span lang=EN-GB>victory for the defender Ulric and a loss
  for the attacker Quinn. Second battle is ignored because the generals are
  from the same kingdom. Third battle is a victory for Doran and a loss for
  Merek. Fourth battle is a win for Ulric and a loss for Merek. Fifth battle is
  a victory for Berinon and a defeat for Ulric. All winners increase their
  armies with 10% for each win and all losers decrease their armies with 10%
  for each loss.</span></p>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB>The result from the battles are – Stonegate: 3 wins
  and 1 loss; Maiden Way: 1 win and 2 losses; YorkenShire: 0 wins and 1 loss.
  Making Stonegate the winner of the games because they have the most wins from
  kingdoms.</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=695
 style='width:521.55pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=CodeCxSpFirst style='line-height:normal'>[ { kingdom:
  &quot;Stonegate&quot;, general: &quot;Ulric&quot;, army: 5000 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom:
  &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 5000 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom: &quot;Maiden
  Way&quot;, general: &quot;Berinon&quot;, army: 1000 } ],</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>[
  [&quot;YorkenShire&quot;, &quot;Quinn&quot;, &quot;Stonegate&quot;,
  &quot;Ulric&quot;],</p>
  <p class=CodeCxSpLast style='line-height:normal'>  [&quot;Maiden Way&quot;,
  &quot;Berinon&quot;, &quot;YorkenShire&quot;, &quot;Quinn&quot;] ]</p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=CodeCxSpFirst style='line-height:normal'>Winner: YorkenShire</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>/\general: Quinn</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>---army: 5500</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>---wins: 1</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>---losses: 0</p>
  <p class=CodeCxSpLast style='line-height:normal'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Explanation</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>The
  first battle between Quinn and Ulric is a draw because they have even armies
  because of that it is not recorded and their armies size does not change. The
  second battle is a win for Quinn and a loss for Berinon making YorkenShire
  the winner of the game with 1 win and 0 losses.</p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=695
 style='width:521.55pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=CodeCxSpFirst style='line-height:normal'>[ { kingdom: &quot;Maiden
  Way&quot;, general: &quot;Merek&quot;, army: 5000 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom:
  &quot;Stonegate&quot;, general: &quot;Ulric&quot;, army: 4900 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom:
  &quot;Stonegate&quot;, general: &quot;Doran&quot;, army: 70000 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom:
  &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 0 },</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>  { kingdom:
  &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 2000 <span
  lang=EN-GB>}</span><span lang=EN-GB> </span>],</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>[
  [&quot;YorkenShire&quot;, &quot;Quinn&quot;, &quot;Stonegate&quot;, &quot;Doran&quot;],</p>
  <p class=CodeCxSpLast style='line-height:normal'>  [&quot;Stonegate&quot;,
  &quot;Ulric&quot;, &quot;Maiden Way&quot;, &quot;Merek&quot;] ]</p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=CodeCxSpFirst style='line-height:normal'>Winner: Maiden Way</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>/\general: Merek</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>---army: 5500</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>---wins: 1</p>
  <p class=CodeCxSpLast style='line-height:normal'>---losses: 0</p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
