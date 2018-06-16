<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">


</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1 align=center style='text-align:center'>Problem 3 – Minke, decode</h1>

<p class=MsoNormal><i>Minka was kidnapped by some crazy coders just before her
travel. They tasked her to decode her travel destination or she can’t go. She
is in dire straits and you have to help her:</i></p>

<p class=MsoNormal><i>&nbsp;</i></p>

<p class=MsoNormal>You will recieve a <b>string</b> with the <span lang=BG>е</span>ncrypted
message which contains <b><span style='color:black'>the encrypted country</span></b><span
style='color:black'> </span>and the code that need to be decrypted . The <b>country</b>
will always <b>starts</b> with capital letter and <b>end</b> with capital
letter. You’ll recieve char <b>starting point</b> and char <b>end points</b>
with which you will decode the country.</p>

<p class=MsoNormal>Example for country is Mol<span style='background:aqua'>g</span>a<span
style='background:aqua'>r</span>A which needs to become Mol<span
style='background:fuchsia'>dov</span>A</p>

<p class=MsoNormal>For <b>example</b> in the input we will recieve <b>char
start point</b> <b>-3</b>  which is the letter <b><span style='font-size:14.0pt;
line-height:115%'>g</span></b> and <b>char end point</b> <b>- 5</b> which is <b><span
style='font-size:14.0pt;line-height:115%'>r</span></b>. We need to <b>replace</b>
everything from g to r with “<span style='background:fuchsia'>dov</span>” which
will be given in the input aswell. </p>

<p class=MsoNormal>The final result must be <b>Moldova</b> (the last char needs
to be lowered).</p>

<p class=MsoNormal>The second part is to <b>decode</b> <b>the numbers</b> from
the <b>input string</b>. To extract the numbers from the input string you need
to <b>match every three-digit number</b> (<b>whole</b> or <b>fractional</b>).</p>

<p class=MsoNormal> If the number is <b>fractional</b> you have to  round it
up. When you receive all maches they need to be decoded from <b>ascii to text</b>
and print it next to the country <b>capitalized</b> and <b>separated by “ =&gt;</b>
“.</p>

<h2>Input</h2>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The input will consist of<b> array of strings, containing </b>4
strings:</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>First is <span style='background:aqua'>char</span> <b>start point</b>
for the country decoding:</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Second is <span style='background:aqua'>char</span> <b>end point</b>
for the country decoding:</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Third is the <b><span style='background:fuchsia'>right word</span></b>:</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Fourth is the <b>encrypted text</b>:</p>

<h2>Constraints</h2>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There will be always only one country in the input.</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The separator for the fractional num will always be dot</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>All inputs in the array will be string</p>

<p class=MsoNormal><span lang=BG>&nbsp;</span></p>

<h2>Examples</h2>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=732
 style='width:548.75pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=564 valign=top style='width:422.75pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b><span
  style='font-size:12.0pt'>Input</span></b></p>
  </td>
  <td width=168 valign=top style='width:1.75in;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center;line-height:normal'><b><span
  style='font-size:12.0pt'>Output</span></b></p>
  </td>
 </tr>
 <tr style='height:31.9pt'>
  <td width=564 valign=top style='width:422.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:31.9pt'>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>[&quot;<span
  style='background:aqua'>3</span>&quot;, &quot;<span style='background:aqua'>5</span>&quot;,
  &quot;<span style='background:fuchsia'>gar</span>&quot;,&quot;<span
  style='color:black;background:lime'>114</span> sDfia 1, riDl10 confin$4%#ed<span
  style='background:lime'>117</span> likewise it humanity aTe<span
  style='background:lime'>114.223432</span> Bul<span style='background:aqua'>tor</span>iA
  - Varn</span><span lang=BG style='font-weight:normal'>d</span><span
  style='font-weight:normal'> railLery<span style='background:lime'>101</span>
  an unpacked as he&quot;]</span></p>
  </td>
  <td width=168 valign=top style='width:1.75in;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:31.9pt'>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Bulgaria
  =&gt; Ruse</span></p>
  </td>
 </tr>
 <tr>
  <td width=564 valign=top style='width:422.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='text-align:justify;line-height:normal'><span
  style='font-weight:normal'>[&quot;1&quot;, &quot;4&quot;,&quot;loveni&quot;,
  &quot;SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity 
  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he&quot;]</span></p>
  </td>
  <td width=168 valign=top style='width:1.75in;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Code style='line-height:normal'><span style='font-weight:normal'>Slovenia
  =&gt; Lom</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-GB>&nbsp;</span></p>

</div>

</body>

</html>
