<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">
</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center;text-indent:14.2pt'>Problem 1 – Travel
Plans</h1>

<p class=MsoNormal><i>Mariyka really wishes to go on a world trip, but so far
she’s never had the chance and so she finally decided to give it a try. But as
beginning she need to collect some money, right?</i></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Write a JavaScript program that calculates the <b>total
amount</b> of <b>gold</b> Mariyka managed to collect. Mariyka is <b>specialized</b>
in some professions, <b>average</b> in others and <b>clumsy</b> at yet others.
Your program will receive an <b>array with professions and the amount of gold</b>
for each activity. Mariyka is so good at her <b>Specialized</b> professions
that <b>every second</b> customer of Specialized profession gives her <b>additional
gold of cost: 200 gold right after she spend the gold mentioned below for
candies</b>. She’s as well so bad at her <b>Clumsy</b> professions that every <b>second</b>
customer from the Clumsy professions gives her <b>5% less</b> of the first
given amount and <b>every third – 10%.</b></p>

<p class=MsoNormal>Also, Mariyka is <b>spending 20% of every</b> activity she
does that she’s <b>specialized</b> in, of course she spends them for candies.</p>

<p class=MsoNormal>Have in mind that Mariyka <b>does not</b> accept to work for
<b>less</b> than <b>200 gold</b> in her <b>specialized</b> professions.</p>

<p class=MsoNormal>As <b>input </b>you will receive an array of strings.</p>

<p class=MsoNormal>Each string will consist of the following information with
format:</p>

<p class=CodeCxSpFirst>“Professions : Gold offered”</p>

<p class=CodeCxSpMiddle><span style='font-weight:normal'>&nbsp;</span></p>

<p class=CodeCxSpMiddle align=center style='text-align:center'><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>Professions will
be as follows:</span></p>

<p class=CodeCxSpMiddle align=center style='text-align:center'><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>Specialized:<br>
Programming, Hardware maintenance, Cooking, Translating, Designing.<br>
Average:<br>
Driving, Managing, Fishing, Gardening.</span></p>

<p class=CodeCxSpMiddle align=center style='text-align:center'><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>Clumsy:<br>
Singing, Accounting, Teaching, Exam-Making, Acting, Writing, Lecturing,
Modeling, Nursing.</span></p>

<p class=CodeCxSpMiddle align=center style='text-align:center'><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>&nbsp;</span></p>

<p class=CodeCxSpMiddle><span style='font-family:"Calibri","sans-serif";
font-weight:normal'>As </span><span style='font-family:"Calibri","sans-serif"'>output</span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'> you need  to
print the </span><span style='font-family:"Calibri","sans-serif"'>total cash</span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'> Mariyka has
made.</span></p>

<p class=CodeCxSpLast><span style='font-family:"Calibri","sans-serif"'>If</span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'> the amount is </span><span
style='font-family:"Calibri","sans-serif"'>less than 1000 gold</span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'> , she need to
collect more gold until she get enough. Else she will be able to move to the
next task and start planning her travel!</span></p>

<h3>Input</h3>

<p class=MsoNormal>You will receive <b>one argument– </b>an <strong><span
style='font-family:"Calibri","sans-serif"'>array strings </span></strong>as
shown above.</p>

<h3>Output</h3>

<p class=MsoNormal>Print on the <strong><span style='font-family:"Calibri","sans-serif"'>console</span></strong>
the total amount of <b>gold</b> and if Mariyka has collected <b>enough or not</b>.</p>

<p class=MsoNormal>The output should be <b>formatted</b> to the second
delimiter.</p>

<h3>Constraints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>number</b> of <b>elements</b> in the<b> input argument</b>
will be in range <b>[1..100] inclusive</b></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There <b>will</b> be <b>no invalid</b> <b>input</b></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There <b>will </b>be <b>no negative Gold</b></p>

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
  <p class=Code style='line-height:normal'>[&quot;Programming : 500&quot;, &quot;Driving
  : 243&quot;, &quot;Singing : 100&quot;, &quot;Cooking : 199&quot;]</p>
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
  <p class=CodeCxSpFirst style='line-height:normal'>Final sum: 743.00</p>
  <p class=CodeCxSpLast style='line-height:normal'>Mariyka need to earn 257.00
  gold more to continue in the next task.</p>
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
  <p class=Code style='line-height:normal'>[&quot;Programming : 500&quot;, &quot;Driving
  : 243.55&quot;, &quot;Acting : 200&quot;, &quot;Singing : 100&quot;, &quot;Cooking
  : 199’, &quot;Hardware maintenance : 800&quot;, &quot;Gardening : 700&quot;, &quot;Programming
  : 500&quot;]</p>
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
  <p class=CodeCxSpFirst style='line-height:normal'>Final sum: 2878.55</p>
  <p class=CodeCxSpLast style='line-height:normal'>Mariyka earned 1878.55 gold
  more.</p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
