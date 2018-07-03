<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center'><a name="_Hlk505645974">Problem 3 –
Survey Parser</a></h1>

<p class=MsoNormal>Write a JavaScript program that <strong><span
style='font-family:"Calibri","sans-serif"'>parses</span></strong> a given <strong><span
style='font-family:"Calibri","sans-serif"'>document</span></strong> that may
contain the results of a <strong><span style='font-family:"Calibri","sans-serif"'>rating
survey</span></strong> and outputs a <strong><span style='font-family:"Calibri","sans-serif"'>summary</span></strong>
of the votes. You will receive a <strong><span style='font-family:"Calibri","sans-serif"'>string</span></strong>
that contains XML-formatted data. From this data, you must extract a <strong><span
style='font-family:"Calibri","sans-serif"'>valid label</span></strong> and <strong><span
style='font-family:"Calibri","sans-serif"'>average rating</span></strong> (sum
of ratings, divided by their count). Input, containing valid survey data will
follow these rules:</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The document may contain <strong><span style='font-family:"Calibri","sans-serif"'>any
symbol</span></strong> <strong><span style='font-family:"Calibri","sans-serif"'>before
and after</span></strong> the survey data</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
class=CodeChar><span style='font-family:Symbol;font-weight:normal'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span>The survey data <strong><span style='font-family:"Calibri","sans-serif"'>always</span></strong>
begins with <span class=CodeChar>&lt;svg&gt;</span> and ends with <span
class=CodeChar>&lt;/svg&gt;</span>:</p>

<p class=Code align=center style='text-align:center'><i><span style='background:
#D9D9D9;font-weight:normal'>&nbsp;Any text </span></i>&lt;svg&gt;<i><span
style='background:#D9D9D9;font-weight:normal'> Survey data </span></i>&lt;/svg&gt;<i><span
style='background:#D9D9D9;font-weight:normal'> Any text&nbsp;</span></i></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Each valid survey will contain <strong><span style='font-family:
"Calibri","sans-serif"'>exactly two</span></strong> <strong><span
style='font-family:"Calibri","sans-serif"'>sections</span></strong> beginning
with <span class=CodeChar>&lt;cat&gt;</span> and ending with <span
class=CodeChar>&lt;/cat&gt;</span></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There may be <strong><span style='font-family:"Calibri","sans-serif"'>whitespace</span></strong>
<strong><span style='font-family:"Calibri","sans-serif"'>between</span></strong>
the sections</p>

<p class=Code align=center style='text-align:center'>&lt;cat&gt;<i><span
style='background:#D9D9D9;font-weight:normal'> Survey heading and label </span></i>&lt;/cat&gt;&lt;cat&gt;<i><span
style='background:#D9D9D9;font-weight:normal'> Ratings </span></i>&lt;/cat&gt;</p>

<p class=MsoListParagraph style='text-indent:-.25in'><span class=CodeChar><span
style='font-family:Symbol;font-weight:normal'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span>The contents of the first <span class=CodeChar>cat</span>
section must begin with <span class=CodeChar>&lt;text&gt;</span> and end with <span
class=CodeChar>&lt;/text&gt;</span>; it may contain <strong><span
style='font-family:"Calibri","sans-serif"'>any text</span></strong>, but needs
to have a <strong><span style='font-family:"Calibri","sans-serif"'>valid label</span></strong>,
inside brackets <span class=CodeChar>[]</span></p>

<p class=Code align=center style='text-align:center'>&lt;text&gt;<i><span
style='background:#D9D9D9;font-weight:normal'> Survey heading </span></i>[<i><span
style='background:#D9D9D9;font-weight:normal'> Survey Label </span></i>]&lt;/text&gt;</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The second <span class=CodeChar>cat</span> section contains all
of the <strong><span style='font-family:"Calibri","sans-serif"'>ratings</span></strong>
with each vote beginning with <span class=CodeChar>&lt;g&gt;</span> and ending
with <span class=CodeChar>&lt;/g&gt;</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><strong><span
style='font-family:Symbol;font-weight:normal'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></strong>A <strong><span style='font-family:"Calibri","sans-serif"'>valid
rating</span></strong> contains a <strong><span style='font-family:"Calibri","sans-serif"'>value</span></strong>
and <strong><span style='font-family:"Calibri","sans-serif"'>count</span></strong>,
with the <strong><span style='font-family:"Calibri","sans-serif"'>value</span></strong>
surrounded by <span class=CodeChar>&lt;val&gt;</span> and <span class=CodeChar>&lt;/val&gt;</span>
and the <strong><span style='font-family:"Calibri","sans-serif"'>count</span></strong>
right <strong><span style='font-family:"Calibri","sans-serif"'>after the value</span></strong></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There may be any number of <strong><span style='font-family:"Calibri","sans-serif"'>valid</span></strong>
and <strong><span style='font-family:"Calibri","sans-serif"'>invalid ratings</span></strong>
inside the second cat; you should <strong><span style='font-family:"Calibri","sans-serif"'>only</span></strong>
<strong><span style='font-family:"Calibri","sans-serif"'>process</span></strong>
the valid ones, and <strong><span style='font-family:"Calibri","sans-serif"'>ignore</span></strong>
the invalid ratings</p>

<p class=Code align=center style='text-align:center'>&lt;g&gt;&lt;val&gt;<i><span
style='background:#D9D9D9;font-weight:normal'> Rating value </span></i>&lt;/val&gt;<i><span
style='background:#D9D9D9;font-weight:normal'> Vote count </span></i>&lt;/g&gt;</p>

<p class=MsoListParagraphCxSpFirst style='margin-left:1.0in;text-indent:-.25in'><span
style='font-family:"Courier New"'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><strong><span style='font-family:"Calibri","sans-serif"'>Valid</span></strong>
rating:                                                         <span
class=CodeChar>&lt;g&gt;&lt;val&gt;1&lt;/val&gt;0&lt;/g&gt;</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.0in;text-indent:-.25in'><span
style='font-family:"Courier New"'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><strong><span style='font-family:"Calibri","sans-serif"'>Invalid</span></strong>
rating (<strong><span style='font-family:"Calibri","sans-serif"'>ignore</span></strong>
and continue):  <span class=CodeChar>&lt;g&gt;&lt;val&gt;Seafood&lt;/val&gt;1&lt;/g&gt;</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <strong><span style='font-family:"Calibri","sans-serif"'>value</span></strong>
must be a number between <strong><span style='font-family:"Calibri","sans-serif"'>1</span></strong>
and <strong><span style='font-family:"Calibri","sans-serif"'>10</span></strong></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <strong><span style='font-family:"Calibri","sans-serif"'>count</span></strong>
must be a number <strong><span style='font-family:"Calibri","sans-serif"'>0</span></strong>
or larger</p>

<p class=MsoNormal>If the document <strong><span style='font-family:"Calibri","sans-serif"'>does
not</span></strong> contain survey data (no opening and closing <span
class=CodeChar>svg</span> tags), print on the console &quot;<strong><span
style='font-family:"Calibri","sans-serif"'>No survey found</span></strong>&quot;.
If there is survey data, but the rest of the rules aren’t followed, print on
the console &quot;<strong><span style='font-family:"Calibri","sans-serif"'>Invalid
format</span></strong>&quot;.</p>

<p class=MsoNormal>At the <strong><span style='font-family:"Calibri","sans-serif"'>end</span></strong>
of the program, print on the <strong><span style='font-family:"Calibri","sans-serif"'>console</span></strong>
the <strong><span style='font-family:"Calibri","sans-serif"'>label</span></strong>
of the survey and the <strong><span style='font-family:"Calibri","sans-serif"'>average
rating</span></strong>, <strong><span style='font-family:"Calibri","sans-serif"'>rounded</span></strong>
to two decimal places.</p>

<h3>Input</h3>

<p class=MsoNormal>You will receive a single <b>string</b>, containing a
document to be parsed.</p>

<h3>Output</h3>

<p class=MsoNormal>Depending on outcome, print on the <strong><span
style='font-family:"Calibri","sans-serif"'>console </span></strong><strong><span
style='font-family:"Calibri","sans-serif";font-weight:normal'>a single line</span></strong>:</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><strong><span
style='font-family:Symbol;font-weight:normal'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></strong><strong><span style='font-family:"Calibri","sans-serif"'>No
survey found</span></strong></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><strong><span
style='font-family:Symbol;font-weight:normal'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></strong><strong><span style='font-family:"Calibri","sans-serif"'>Invalid
format</span></strong></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><strong><span
style='font-family:Symbol;font-weight:normal'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></strong><strong><span style='font-family:"Calibri","sans-serif"'>{label}:
{average rating}</span></strong></p>

<p class=MsoNormal><strong><span style='font-family:"Calibri","sans-serif"'>&nbsp;</span></strong></p>

<h3>Constraints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There will never be more than one valid survey</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Rating <strong><span style='font-family:"Calibri","sans-serif"'>value</span></strong>
will be in range <strong><span style='font-family:"Calibri","sans-serif"'>[1…10]</span></strong></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><strong><span
style='font-family:Symbol;font-weight:normal'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></strong>Rating <strong><span style='font-family:"Calibri","sans-serif"'>count</span></strong>
will be in range <strong><span style='font-family:"Calibri","sans-serif"'>[1…1
000&nbsp;000]</span></strong></p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=696
 style='width:521.65pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:45.7pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:45.7pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>&lt;p&gt;Some
  random text&lt;/p&gt;&lt;svg&gt;&lt;cat&gt;&lt;text&gt;How do you rate our
  food? [<span style='background:lightgrey'>Food - General</span>]&lt;/text&gt;&lt;/cat&gt;&lt;cat&gt;&lt;g&gt;<span
  style='background:yellow'>&lt;val&gt;1&lt;/val&gt;0</span>&lt;/g&gt;&lt;g&gt;<span
  style='background:lime'>&lt;val&gt;2&lt;/val&gt;1</span>&lt;/g&gt;&lt;g&gt;<span
  style='background:aqua'>&lt;val&gt;3&lt;/val&gt;3</span>&lt;/g&gt;&lt;g&gt;<span
  style='background:fuchsia'>&lt;val&gt;4&lt;/val&gt;10</span>&lt;/g&gt;&lt;g&gt;<span
  style='background:red'>&lt;val&gt;5&lt;/val&gt;7</span>&lt;/g&gt;&lt;/cat&gt;&lt;/svg&gt;&lt;p&gt;Some
  more random text&lt;/p&gt;</span></p>
  </td>
 </tr>
 <tr style='height:13.6pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt;
  height:13.6pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:2.1pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:2.1pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Food - General: 4.1</span></p>
  </td>
 </tr>
 <tr style='height:2.1pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt;
  height:2.1pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Explanation</b></p>
  </td>
 </tr>
 <tr style='height:2.1pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:2.1pt'>
  <p class=MsoNormal style='line-height:normal'>The survey data is surrounded
  by <span class=CodeChar>&lt;svg&gt;</span> and <span class=CodeChar>&lt;/svg&gt;</span>,
  the remaing data is discarded. The first cat contains our label, surrounded
  by brackets: <span style='background:lightgrey'>Food – General</span>.</p>
  <p class=MsoNormal style='line-height:normal'>The second cat contains five
  ratings, all surrounded with <span class=CodeChar>&lt;g&gt;</span> and <span
  class=CodeChar>&lt;/g&gt;</span>, and when parsed we get the following:</p>
  <p class=MsoNormalCxSpMiddle style='line-height:normal'><span
  style='background:yellow'>0 votes with value 1</span> = 0</p>
  <p class=MsoNormalCxSpMiddle style='line-height:normal'><span
  style='background:lime'>1 votes with value 2</span> = 2</p>
  <p class=MsoNormalCxSpMiddle style='line-height:normal'><span
  style='background:aqua'>3 votes with value 3</span> = 9</p>
  <p class=MsoNormalCxSpMiddle style='line-height:normal'><span
  style='background:fuchsia'>10 votes with value 4</span> = 40</p>
  <p class=MsoNormal style='line-height:normal'><span style='background:red'>7
  votes with value 5</span> = 35</p>
  <p class=MsoNormal style='line-height:normal'>The sum of all ratings is 86,
  divided by their count 21 gives us the average rating <strong><span
  style='font-family:"Calibri","sans-serif"'>4.095…</span></strong>, which we
  round to the second decimal – <strong><span style='font-family:"Calibri","sans-serif"'>4.1</span></strong>.</p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=696
 style='width:521.65pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=696 valign=top style='width:521.65pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:19.95pt'>
  <td width=696 valign=top style='width:521.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:19.95pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>&lt;svg&gt;&lt;cat&gt;&lt;text&gt;How
  do you rate the special menu? [<span style='background:lime'>Food - Special</span>]&lt;/text&gt;&lt;/cat&gt;
  &lt;cat&gt;&lt;g&gt;&lt;val&gt;<span style='background:yellow'>1</span>&lt;/val&gt;<span
  style='background:yellow'>5</span>&lt;/g&gt;&lt;g&gt;&lt;val&gt;<span
  style='background:yellow'>5</span>&lt;/val&gt;<span style='background:yellow'>13</span>&lt;/g&gt;&lt;g&gt;&lt;val&gt;<span
  style='background:yellow'>10</span>&lt;/val&gt;<span style='background:yellow'>22</span>&lt;/g&gt;&lt;/cat&gt;&lt;/svg&gt;</span></p>
  </td>
 </tr>
 <tr style='height:13.6pt'>
  <td width=696 valign=top style='width:521.65pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt;
  height:13.6pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:2.1pt'>
  <td width=696 valign=top style='width:521.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:2.1pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas;background:lime'>Food - Special</span><span
  style='font-family:Consolas'>: <span style='background:yellow'>7.25</span></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=696
 style='width:521.65pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:19.95pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:19.95pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>&lt;p&gt;How
  do you suggest we improve our service?&lt;/p&gt;&lt;p&gt;More
  tacos.&lt;/p&gt;&lt;p&gt;It's great, don't mess with
  it!&lt;/p&gt;&lt;p&gt;I'd like to have the option for delivery&lt;/p&gt;</span></p>
  </td>
 </tr>
 <tr style='height:13.6pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt;
  height:13.6pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:2.1pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:2.1pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>No survey found</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=696
 style='width:521.65pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr style='height:19.95pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:19.95pt'>
  <p class=MsoNormal align=left style='margin:0in;margin-bottom:.0001pt;
  text-align:left;line-height:normal'><span style='font-family:Consolas'>&lt;svg&gt;&lt;cat&gt;&lt;text&gt;Which
  is your favourite meal from our
  selection?&lt;/text&gt;&lt;/cat&gt;&lt;cat&gt;&lt;g&gt;&lt;val&gt;Fish&lt;/val&gt;15&lt;/g&gt;&lt;g&gt;&lt;val&gt;Prawns&lt;/val&gt;31&lt;/g&gt;&lt;g&gt;&lt;val&gt;Crab
  Langoon&lt;/val&gt;12&lt;/g&gt;&lt;g&gt;&lt;val&gt;Calamari&lt;/val&gt;17&lt;/g&gt;&lt;/cat&gt;&lt;/svg&gt;</span></p>
  </td>
 </tr>
 <tr style='height:13.6pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:1.4pt 4.25pt 1.4pt 4.25pt;
  height:13.6pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr style='height:2.1pt'>
  <td width=140 valign=top style='width:104.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.4pt 4.25pt 1.4pt 4.25pt;height:2.1pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Invalid format</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
