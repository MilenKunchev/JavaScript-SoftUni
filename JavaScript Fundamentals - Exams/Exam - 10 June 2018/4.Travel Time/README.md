<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center'>Problem 4 – Travel Time</h1>

<p class=MsoNormal><i>It’s finally time for Mariyka</i><i><span lang=BG>ь</span>
to organize her traveling plans. So far we already know that she wishes to go
on a world trip and she already collected some money and made some useful
research for the traveling destinations. To organize her plans and travel route
she need your great help. So, let’s begin…..</i></p>

<p class=MsoNormal>Write a JavaScript program that <b>collects</b> and <b>orders
</b>information about traveling destinations.</p>

<p class=MsoNormal>As <b>input </b>you will receive an array of strings.</p>

<p class=MsoNormal>Each string will consist of the following information with
format:</p>

<p class=CodeCxSpFirst>“Country name &gt; Town name &gt; Travel cost”</p>

<p class=CodeCxSpMiddle><span style='font-family:"Calibri","sans-serif";
font-weight:normal'>Country name will be unique string, Town name will also be
unique string, Travel cost will be a number.</span></p>

<p class=CodeCxSpMiddle><span style='font-family:"Calibri","sans-serif";
font-weight:normal'>If you receive </span><span style='font-family:"Calibri","sans-serif"'>the
same</span><span style='font-family:"Calibri","sans-serif";font-weight:normal'>
Town name twice, you should keep the </span><span style='font-family:"Calibri","sans-serif"'>cheapest</span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'> offer. </span><span
style='font-family:"Calibri","sans-serif"'>Have in mind</span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'> that one Country
may have </span><span style='font-family:"Calibri","sans-serif"'>several </span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>Towns to visit.</span></p>

<p class=CodeCxSpLast><span style='font-family:"Calibri","sans-serif";
font-weight:normal'>If you receive Town name starting with lower case letter
,you should make it to upper, as shown in the example above.</span></p>

<p class=MsoNormal>After you finish the organizational part, you need to let Mariyka
know which destination point to visit first.. The order will be as follows:  First
sort Country names <b>alphabetically </b>and then sort Town names by <b>lowest</b>
Travel cost.</p>

<h3>Input</h3>

<p class=MsoNormal>You will receive <b>one argument– </b>an <strong><span
style='font-family:"Calibri","sans-serif"'>array strings </span></strong>as
shown above.</p>

<h3>Output</h3>

<p class=MsoNormal>Print on the <strong><span style='font-family:"Calibri","sans-serif"'>console</span></strong>
the information you’ve collected, <b>sorted </b>by the given rules,<b> formatted
</b>as seen in the examples.</p>

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
</span></span>There <b>will </b>be <b>no negative Travel cost</b></p>

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
  <p class=CodeCxSpFirst style='line-height:normal'>[&quot;Bulgaria &gt; Sofia
  &gt; 500&quot;,</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>&quot;Bulgaria &gt; Sopot
  &gt; 800&quot;,</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>&quot;France &gt; Paris
  &gt; 2000&quot;,</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>&quot;Albania &gt; Tirana
  &gt; 1000&quot;,</p>
  <p class=CodeCxSpMiddle style='line-height:normal'>&quot;Bulgaria &gt; Sofia
  &gt; 200&quot; ]</p>
  <p class=CodeCxSpLast style='line-height:normal'>&nbsp;</p>
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
  <p class=CodeCxSpFirst style='line-height:normal'><span lang=EN-GB>Albania
  -&gt; Tirana -&gt; 1000</span></p>
  <p class=CodeCxSpMiddle style='line-height:normal'><span lang=EN-GB>Bulgaria
  -&gt; Sofia -&gt; 200 Sopot -&gt; 800</span></p>
  <p class=CodeCxSpLast style='line-height:normal'><span lang=EN-GB>France
  -&gt; Paris -&gt; 2000</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
