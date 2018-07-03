<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center'>Problem 4 – Arena Tier</h1>

<p class=MsoNormal>Pesho is a pro gladiator, he is struggling to become master
of the Arena. // TODO some more story</p>

<p class=MsoNormal>You will receive <b>several input lines</b> in one of the
following formats:</p>

<p class=Code><span lang=EN-GB>&quot;{gladiator} -&gt; {technique} -&gt;
{skill}&quot;</span></p>

<p class=Code><span lang=EN-GB>&quot;{gladiator} vs {gladiator}&quot;</span></p>

<p class=MsoNormal>The <span class=CodeChar><span lang=EN-GB style='font-family:
"Calibri","sans-serif"'>gladiator and technique </span></span>are strings, the
given <b>skill</b> will be an integer number. You need to keep track of <b>every
gladiator</b>. </p>

<p class=MsoNormal>When you receive a <b>gladiator and his technique and skill</b>,
add him to the gladiator pool, if he isn`t present, else add his technique or update
his skill, only if the current technique skill is lower than the new value.</p>

<p class=MsoNormal>If you receive <b>&quot;{gladiator} vs {gladiator}&quot;</b>
and both gladiators exist in the tier, they duel with the following rules:</p>

<p class=MsoNormal>Compare their techniques, if they got at least one in
common, the gladiator with better total skill points wins and the other is
demoted from the tier -&gt; remove him.</p>

<p class=MsoNormal>If they don`t have techniques in common, the duel isn`t
happening and both continue in the Season.</p>

<p class=MsoNormal>You should end your program when you receive the command <span
class=CodeChar>&quot;Ave Cesar&quot;</span>. At that point you should <span
lang=EN-GB>print the gladiators, <b>ordered by total skill in desecending order,
then ordered by name in ascending order</b>. Foreach gladiator print their technique
and skill, <b>ordered desecending, then ordered by technique name in ascending
order</b></span></p>

<h2>Input / Constraints</h2>

<p class=MsoNormal>You will receive an <b>array of strings</b> as a parameter
to your solution.</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The input comes in the form of commands in one of the formats
specified above.</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Gladiator and technique <b>will always be one word string,
containing no whitespaces</b>.</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Skill will be an <b>integer</b> in the <b>range [0, 1000]</b>.</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There will be <b>no invalid</b> input lines.</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The programm ends when you receive the command <span
class=CodeChar>&quot;Ave Cesar&quot;</span>.<br>
<br>
</p>

<h2>Output</h2>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The output format for each gladiator is:</p>

<p class=Code style='margin-left:.5in'>&quot;{gladiator}: {totalSkill} skill&quot;</p>

<p class=Code style='text-indent:35.4pt'><span lang=EN-GB>&quot;- {technique}</span><span
lang=EN-GB> </span>&lt;!&gt; {skill}&quot;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal><b><i>Scroll down to see examples.</i></b></p>

<b><i><span style='font-size:11.0pt;line-height:115%;font-family:"Calibri","sans-serif"'><br
clear=all style='page-break-before:always'>
</span></i></b>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;
margin-left:0in'><b><i>&nbsp;</i></b></p>

<h2>Examples</h2>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=718
 style='width:538.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr style='height:15.1pt'>
  <td width=226 valign=top style='width:169.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:15.1pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><a
  name="_Hlk507808303"><b>Input</b></a></p>
  </td>
  <td width=197 valign=top style='width:147.95pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:15.1pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=295 valign=top style='width:221.05pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt;
  height:15.1pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b>Comments</b></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Pesho
  -&gt; BattleCry -&gt; 400</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gosho
  -&gt; PowerPunch -&gt; 300</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Stamat
  -&gt; Duck -&gt; 200</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Stamat
  -&gt; Tiger -&gt; 250</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Ave
  Cesar</span></p>
  </td>
  <td width=197 valign=top style='width:147.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Stamat:
  450 skill</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>-
  Tiger &lt;!&gt; 250</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>-
  Duck &lt;!&gt; 200</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Pesho:
  400 skill</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>-
  BattleCry &lt;!&gt; 400</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gosho:
  300 skill</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>-
  PowerPunch &lt;!&gt; 300</span></p>
  </td>
  <td width=295 valign=top style='width:221.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>We
  order the gladiators by total skill points descending, then by name. We print
  every technique along its skill ordered descending by skill, then by technique
  name.</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=197 valign=top style='width:147.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=295 valign=top style='width:221.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Pesho
  -&gt; Duck -&gt; 400</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Julius
  -&gt; Shield -&gt; 150</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gladius
  -&gt; Heal -&gt; 200</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gladius
  -&gt; Support -&gt; 250</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gladius
  -&gt; Shield -&gt; 250</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Pesho
  vs Gladius</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gladius
  vs Julius</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gladius
  vs Gosho</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Ave
  Cesar</span></p>
  </td>
  <td width=197 valign=top style='width:147.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gladius:
  700 skill</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>-
  Support &lt;!&gt; 250</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>-
  Shield &lt;!&gt; 250</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>-
  Heal &lt;!&gt; 200</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Pesho:
  400 skill</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>-
  Duck &lt;!&gt; 400</span></p>
  </td>
  <td width=295 valign=top style='width:221.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gladius
  and Pesho don`t have common technique, so the duel isn`t valid.</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gladius
  wins vs Julius /common technique: &quot;Shield&quot;. Julius is demoted.</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>Gosho
  doesn`t exist so the duel isn`t valid.</span></p>
  <p class=MsoNormal style='line-height:normal'><span style='font-family:Consolas'>We
  print every gladiator left in the tier.</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-GB>&nbsp;</span></p>

</div>

</body>

</html>
