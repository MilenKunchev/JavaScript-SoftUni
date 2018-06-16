<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link="#0563C1" vlink="#954F72">

<div class=WordSection1>

<h1 align=center style='text-align:center;text-indent:14.2pt'>Problem 2 –
Travel Investigation</h1>

<p class=MsoNormal><i>Mariyka has gathered some money already and now it’s time
for our next step. We need to make some investigation about the travel
companies and pick some.</i></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Write a JavaScript program that finds <b>specific unique companies
</b>in a text. We need to <b>filter</b> our text so that we <b>separate</b> the
<b>valid</b> and <b>invalid</b> sentences. Our <b>companies</b> will be
separated by <b>exact delimiter</b>. The <b>rest of the input</b> will be <b>strings</b>
which will be the text we will have to filter.</p>

<p class=MsoNormal>As <b>input</b> we will receive <b>array of strings</b>. On
the <b>first</b> index of our array we always will be given the <b>companies</b>
which will be a string <b> separated by</b> the given on the <b>second</b>
index <b>delimiter,</b> <b>followed by the sentences</b> we need to process.</p>

<p class=Code><span style='font-family:"Calibri","sans-serif";font-weight:normal'>The
companies will always be given </span><span style='font-family:"Calibri","sans-serif"'>to
lower.</span></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Each string will consist of the following information with
format:</p>

<p class=CodeCxSpFirst align=left style='text-align:left'><span
style='font-family:"Calibri","sans-serif"'>[ “company1@, company2@, company3”,</span></p>

<p class=CodeCxSpMiddle align=left style='text-align:left'><span
style='font-family:"Calibri","sans-serif"'>“@,  “,</span></p>

<p class=CodeCxSpMiddle align=left style='text-align:left'><span
style='font-family:"Calibri","sans-serif"'>“some text company1 more text
company2 some more text company3”]</span></p>

<p class=CodeCxSpMiddle align=left style='text-align:left'><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>&nbsp;</span></p>

<p class=CodeCxSpMiddle><span style='font-family:"Calibri","sans-serif";
font-weight:normal'>As </span><span style='font-family:"Calibri","sans-serif"'>output</span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'> you need  to
print the </span><span style='font-family:"Calibri","sans-serif"'>valid
sentences in format – “ValidSentences” </span><span style='font-family:"Calibri","sans-serif";
font-weight:normal'>followed by the numbered sentences each on a new line, a
separator between the valid and invalid sentences in this case </span><span
style='font-family:"Calibri","sans-serif"'>30x”=“, </span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>followed by the </span><span
style='font-family:"Calibri","sans-serif"'>“InvalidSentences” </span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>each on a new
line and numbered.</span></p>

<p class=CodeCxSpMiddle><span style='font-family:"Calibri","sans-serif"'>Have
in mind </span><span style='font-family:"Calibri","sans-serif";font-weight:
normal'>that there might be case of </span><span style='font-family:"Calibri","sans-serif"'>all</span><span
style='font-family:"Calibri","sans-serif";font-weight:normal'> </span><span
style='font-family:"Calibri","sans-serif"'>Valid or all Invalid sentences.</span></p>

<p class=CodeCxSpLast><span style='font-family:"Calibri","sans-serif"'>We
consider Valid, a sentence which has all of the companies.</span></p>

<h3>Input</h3>

<p class=MsoNormal>You will receive <b>one argument – </b>an <strong><span
style='font-family:"Calibri","sans-serif"'>array strings </span></strong>as
shown above.</p>

<h3>Output</h3>

<p class=MsoNormal>Print on the <strong><span style='font-family:"Calibri","sans-serif"'>console</span></strong>
the <b>Valid </b>sentences if you found any, the delimiter shown above and the <b>Invalid
</b>sentences if you found any.</p>

<h3>Constraints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>number</b> of <b>sentences</b> in the<b> input argument</b>
will be in range <b>[1..15] inclusive</b></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There <b>will</b> be <b>no invalid</b> <b>input</b></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There <b>will </b>be <b>no repeated companies</b></p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=695
 style='width:521.55pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=CodeCxSpFirst>[&quot;bulgariatour@, minkatrans@, koftipochivkaltd&quot;,</p>
  <p class=CodeCxSpMiddle>&quot;@,&quot;,</p>
  <p class=CodeCxSpMiddle>&quot;Mincho e KoftiPochivkaLTD Tip 123  ve
  MinkaTrans BulgariaTour&quot;,</p>
  <p class=CodeCxSpMiddle>&quot;dqdo mraz some text but is KoftiPochivkaLTD
  MinkaTrans&quot;,</p>
  <p class=CodeCxSpLast>&quot;someone continues as no &quot;]</p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:121.65pt'>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:121.65pt'>
  <p class=CodeCxSpFirst>ValidSentences</p>
  <p class=CodeCxSpMiddle>1.mincho  e koftipochivkaltd tip 123  ve minkatrans bulgariaatour</p>
  <p class=CodeCxSpMiddle>==============================</p>
  <p class=CodeCxSpMiddle>InvalidSentences</p>
  <p class=CodeCxSpMiddle>1. dqdo mraz  some text but is koftipochivkaltd
  minkatrans</p>
  <p class=CodeCxSpLast>2. someone continues as no</p>
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
  text-align:center'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=CodeCxSpFirst>[&quot;bulgariatour@, minkatrans@, koftipochivkaltd&quot;,</p>
  <p class=CodeCxSpMiddle>&quot;@,&quot;,</p>
  <p class=CodeCxSpMiddle>&quot;Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans
  BulgariaTour&quot;,</p>
  <p class=CodeCxSpMiddle>&quot;We will koftipochivkaLTD travel e expenses no
  MinkaTrans mu e BulgariaTour&quot;,</p>
  <p class=CodeCxSpLast>&quot;dqdo BuLGariaTOUR mraz some text but is
  KoftiPochivkaLTD minkaTRANS&quot;]</p>
  </td>
 </tr>
 <tr>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:121.65pt'>
  <td width=695 valign=top style='width:521.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:121.65pt'>
  <p class=CodeCxSpFirst>ValidSentences</p>
  <p class=CodeCxSpMiddle>1. mincho  e koftipochivkaltd tip 123  ve minkatrans bulgariatour</p>
  <p class=CodeCxSpMiddle>2. we will koftipochivkaltd traavel e expenses no
  minkatrans mu e bulgariatour</p>
  <p class=CodeCxSpLast>3. dqdo bulgariatour mraz  some text but is
  koftipochivkaltd minkatrans</p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
