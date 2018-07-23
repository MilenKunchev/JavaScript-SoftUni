<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">

</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1>Lab: jQuery</h1>

<p class=MsoNormal>Problems for exercises and homework for the <a
href="https://softuni.bg/courses/javascript-advanced">“JavaScript Advanced”
course @ SoftUni</a>. Submit your solutions in the SoftUni judge system at <a
href="https://judge.softuni.bg/Contests/329">https://judge.softuni.bg/Contests/329</a>.</p>

<h2>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Text from
List</h2>

<p class=MsoNormal>A HTML page holding a <b>list</b> of items and an<span
class=CodeChar> [Extract Text]</span> button is given. Implement the <span
class=CodeChar>extractText</span> function which will be called when the button's
<span class=CodeChar>onClick</span> event is fired.</p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=696
 style='width:7.25in;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=696 valign=top style='width:7.25in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>text.html</p>
  </td>
 </tr>
 <tr>
  <td width=696 valign=top style='width:7.25in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>&lt;!DOCTYPE
  </span><b><span style='font-family:Consolas;color:blue'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>html </span></b><b><span
  style='font-family:Consolas;color:blue'>lang=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;en&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>meta </span></b><b><span
  style='font-family:Consolas;color:blue'>charset=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;UTF-8&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;Text from List&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;
  </span></b><b><span style='font-family:Consolas;color:blue'>integrity=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=&quot;  
  </span></b><b><span style='font-family:Consolas;color:blue'>crossorigin=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;anonymous&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;extractText.js&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>ul </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;items&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
          &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;first item&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
          &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;second item&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
          &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;third item&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;/</span><b><span style='font-family:Consolas;color:navy'>ul</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>button </span></b><b><span
  style='font-family:Consolas;color:blue'>onclick=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;</span></b><i><span
  style='font-family:Consolas;color:black'>extractText</span></i><span
  style='font-family:Consolas;color:black'>()</span><b><span style='font-family:
  Consolas;color:green'>&quot;</span></b><span style='font-family:Consolas;
  color:black'>&gt;<br>
  Extract Text&lt;/</span><b><span style='font-family:Consolas;color:navy'>button</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>div </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;result&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>div</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=696
 style='width:7.25in;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=696 valign=top style='width:7.25in;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>extract-text.js</p>
  </td>
 </tr>
 <tr>
  <td width=696 valign=top style='width:7.25in;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>extractText</span></i><span
  style='font-family:Consolas;color:black'>() {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<h3>Screenshot</h3>

<p class=MsoNormal><img border=0 width=345 height=267
src="README.md_files/image001.jpg"> <img border=0 width=345 height=267
id="Picture 9" src="README.md_files/image002.jpg"></p>

<h2>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Search in
List</h2>

<p class=MsoNormal>An HTML page holds a <b>list</b> of towns, a <b>search</b>
box and a <span class=CodeChar>[Search]</span> button. Implement the <span
class=CodeChar>search</span> function to <b>bold</b> the items from the list
which include the text from the <b>search</b> box. Also print the amount of
items the current search<b> matches</b> in the format <b>&quot;&lt;matches&gt;
matches found.&quot;</b></p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=701
 style='width:526.0pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr style='height:12.85pt'>
  <td width=701 valign=top style='width:526.0pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:12.85pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>list.html</p>
  </td>
 </tr>
 <tr style='height:269.0pt'>
  <td width=701 valign=top style='width:526.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt;height:269.0pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>&lt;!DOCTYPE
  </span><b><span style='font-family:Consolas;color:blue'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>html </span></b><b><span
  style='font-family:Consolas;color:blue'>lang=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;en&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>meta </span></b><b><span
  style='font-family:Consolas;color:blue'>charset=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;UTF-8&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;Search in List&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;
  </span></b><b><span style='font-family:Consolas;color:blue'>integrity=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=&quot;  
  </span></b><b><span style='font-family:Consolas;color:blue'>crossorigin=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;anonymous&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;search.js&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>ul </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;towns&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;Sofia&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;Pleven&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;Varna&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;Plovdiv&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>ul</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>input </span></b><b><span
  style='font-family:Consolas;color:blue'>type=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;text&quot; </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;searchText&quot; </span></b><span
  style='font-family:Consolas;color:black'>/&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>button </span></b><b><span
  style='font-family:Consolas;color:blue'>onclick=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;</span></b><i><span
  style='font-family:Consolas;color:black'>search</span></i><span
  style='font-family:Consolas;color:black'>()</span><b><span style='font-family:
  Consolas;color:green'>&quot;</span></b><span style='font-family:Consolas;
  color:black'>&gt;Search&lt;/</span><b><span style='font-family:Consolas;
  color:navy'>button</span></b><span style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>div </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;result&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>div</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>search.js</p>
  </td>
 </tr>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>search</span></i><span
  style='font-family:Consolas;color:black'>() {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<h3>Screenshots</h3>

<p class=MsoNormal><img border=0 width=346 height=272 id="Picture 12"
src="README.md_files/image003.jpg"> <img border=0 width=346 height=289
id="Picture 13" src="README.md_files/image004.jpg"></p>

<h2>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Countries
Table</h2>

<p class=MsoNormal>You are given and HTML table holding <b>countries</b> and
their <b>capitals</b>. You need to implement a <span class=CodeChar>[Create]</span>
link to create a new country and for each existing country implement <span
class=CodeChar>[Up]</span>, <span class=CodeChar>[Down]</span> and <span
class=CodeChar>[Delete]</span> links to manipulate its position in the table.</p>

<p class=MsoNormal>The table needs to have the following entries when it’s
initialized (<strong><span style='font-family:"Calibri","sans-serif"'>add them
when your functions starts</span></strong>):</p>

<p class=CodeCxSpFirst>Bulgaria, Sofia</p>

<p class=CodeCxSpMiddle>Germany, Berlin</p>

<p class=CodeCxSpLast>Russia, Moscow</p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>countries.html</p>
  </td>
 </tr>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>&lt;!DOCTYPE
  </span><b><span style='font-family:Consolas;color:blue'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>html </span></b><b><span
  style='font-family:Consolas;color:blue'>lang=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;en&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>meta </span></b><b><span
  style='font-family:Consolas;color:blue'>charset=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;UTF-8&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;Countries Table&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>style</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
          </span><b><span style='font-family:Consolas;color:navy'>td</span></b><span
  style='font-family:Consolas;color:black'>, </span><b><span style='font-family:
  Consolas;color:navy'>th </span></b><span style='font-family:Consolas;
  color:black'>{ </span><b><span style='font-family:Consolas;color:blue'>background</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:navy'>#DDD</span></b><span style='font-family:Consolas;
  color:black'>; </span><b><span style='font-family:Consolas;color:blue'>padding</span></b><span
  style='font-family:Consolas;color:black'>: </span><span style='font-family:
  Consolas;color:blue'>5</span><b><span style='font-family:Consolas;color:green'>px
  </span></b><span style='font-family:Consolas;color:blue'>10</span><b><span
  style='font-family:Consolas;color:green'>px </span></b><span
  style='font-family:Consolas;color:black'>}<br>
          </span><b><span style='font-family:Consolas;color:navy'>input</span></b><span
  style='font-family:Consolas;color:black'>[</span><b><span style='font-family:
  Consolas;color:navy'>type</span></b><span style='font-family:Consolas;
  color:black'>=</span><b><span style='font-family:Consolas;color:green'>'text'</span></b><span
  style='font-family:Consolas;color:black'>] { </span><b><span
  style='font-family:Consolas;color:blue'>width</span></b><span
  style='font-family:Consolas;color:black'>: </span><span style='font-family:
  Consolas;color:blue'>60</span><b><span style='font-family:Consolas;
  color:green'>px </span></b><span style='font-family:Consolas;color:black'>}<br>
      &lt;/</span><b><span style='font-family:Consolas;color:navy'>style</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;
  </span></b><b><span style='font-family:Consolas;color:blue'>integrity=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=&quot;  
  </span></b><b><span style='font-family:Consolas;color:blue'>crossorigin=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;anonymous&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;initialize-table.js&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>table </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;countriesTable&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>tr</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
          &lt;</span><b><span style='font-family:Consolas;color:navy'>th</span></b><span
  style='font-family:Consolas;color:black'>&gt;Country&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>th</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
          &lt;</span><b><span style='font-family:Consolas;color:navy'>th</span></b><span
  style='font-family:Consolas;color:black'>&gt;Capital&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>th</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
          &lt;</span><b><span style='font-family:Consolas;color:navy'>th</span></b><span
  style='font-family:Consolas;color:black'>&gt;Action&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>th</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;/</span><b><span style='font-family:Consolas;color:navy'>tr</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>tr</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
          &lt;</span><b><span style='font-family:Consolas;color:navy'>td</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;</span><b><span
  style='font-family:Consolas;color:navy'>input </span></b><b><span
  style='font-family:Consolas;color:blue'>type=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;text&quot; </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;newCountryText&quot; </span></b><span
  style='font-family:Consolas;color:black'>/&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>td</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
          &lt;</span><b><span style='font-family:Consolas;color:navy'>td</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;</span><b><span
  style='font-family:Consolas;color:navy'>input </span></b><b><span
  style='font-family:Consolas;color:blue'>type=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;text&quot; </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;newCapitalText&quot; </span></b><span
  style='font-family:Consolas;color:black'>/&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>td</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
          &lt;</span><b><span style='font-family:Consolas;color:navy'>td</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;</span><b><span
  style='font-family:Consolas;color:navy'>a </span></b><b><span
  style='font-family:Consolas;color:blue'>href=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;#&quot; </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;createLink&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;[Create]&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>a</span></b><span style='font-family:
  Consolas;color:black'>&gt;&lt;/</span><b><span style='font-family:Consolas;
  color:navy'>td</span></b><span style='font-family:Consolas;color:black'>&gt;<br>
      &lt;/</span><b><span style='font-family:Consolas;color:navy'>tr</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>table</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;$(() =&gt; <i>initializeTable</i>())&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>initialize-table.js</p>
  </td>
 </tr>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>initializeTable</span></i><span
  style='font-family:Consolas;color:black'>()</span><span style='font-family:
  Consolas;color:black'> {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<h3>Screenshots</h3>

<p class=MsoNormal><img border=0 width=412 height=267
src="README.md_files/image005.jpg"></p>

<h2>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Link
Buttons</h2>

<p class=MsoNormal>You are given HTML holding some buttons. Implement the <span
class=CodeChar>attachEvents</span> function which should attach <span
class=CodeChar>click</span> events on the buttons. When a button is <b>clicked</b>
it should <b>remove</b> the <span class=CodeChar>class=&quot;selected&quot;</span>
attribute from the button that currently holds it and <b>add it to its own
attributes</b>. </p>

<h3>HTML, CSS and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>buttons.html</p>
  </td>
 </tr>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>&lt;!DOCTYPE
  </span><b><span style='font-family:Consolas;color:blue'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>html </span></b><b><span
  style='font-family:Consolas;color:blue'>lang=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;en&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>meta </span></b><b><span
  style='font-family:Consolas;color:blue'>charset=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;UTF-8&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;Title&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>link </span></b><b><span
  style='font-family:Consolas;color:blue'>rel=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;stylesheet&quot; </span></b><b><span
  style='font-family:Consolas;color:blue'>href=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;link-buttons.css&quot; </span></b><span
  style='font-family:Consolas;color:black'>/&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;link-buttons.js&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>body </span></b><b><span
  style='font-family:Consolas;color:blue'>onload=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;</span></b><span
  style='font-family:Consolas;color:black'>attachEvents()</span><b><span
  style='font-family:Consolas;color:green'>&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>a </span></b><b><span
  style='font-family:Consolas;color:blue'>class=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;button&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;Sofia&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>a</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>a </span></b><b><span
  style='font-family:Consolas;color:blue'>class=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;button&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;Plovdiv&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>a</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>a </span></b><b><span
  style='font-family:Consolas;color:blue'>class=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;button&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;Varna&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>a</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes with this <b>CSS</b>:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>link-buttons.css</p>
  </td>
 </tr>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>a</span></b><span
  style='font-family:Consolas;color:black'>.</span><b><span style='font-family:
  Consolas;color:navy'>button </span></b><span style='font-family:Consolas;
  color:black'>{<br>
      </span><b><span style='font-family:Consolas;color:blue'>border</span></b><span
  style='font-family:Consolas;color:black'>: </span><span style='font-family:
  Consolas;color:blue'>1</span><b><span style='font-family:Consolas;color:green'>px
  solid </span></b><b><span style='font-family:Consolas;color:navy'>#CCC</span></b><span
  style='font-family:Consolas;color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>background</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:navy'>#EEE</span></b><span style='font-family:Consolas;
  color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>padding</span></b><span
  style='font-family:Consolas;color:black'>: </span><span style='font-family:
  Consolas;color:blue'>5</span><b><span style='font-family:Consolas;color:green'>px
  </span></b><span style='font-family:Consolas;color:blue'>10</span><b><span
  style='font-family:Consolas;color:green'>px</span></b><span style='font-family:
  Consolas;color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>border-radius</span></b><span
  style='font-family:Consolas;color:black'>: </span><span style='font-family:
  Consolas;color:blue'>5</span><b><span style='font-family:Consolas;color:green'>px</span></b><span
  style='font-family:Consolas;color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>color</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:navy'>#333</span></b><span style='font-family:Consolas;
  color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>text-decoration</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:green'>none</span></b><span style='font-family:Consolas;
  color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>display</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:green'>inline-block</span></b><span style='font-family:Consolas;
  color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>margin</span></b><span
  style='font-family:Consolas;color:black'>: </span><span style='font-family:
  Consolas;color:blue'>5</span><b><span style='font-family:Consolas;color:green'>px</span></b><span
  style='font-family:Consolas;color:black'>;<br>
  }<br>
  <br>
  </span><b><span style='font-family:Consolas;color:navy'>a</span></b><span
  style='font-family:Consolas;color:black'>.</span><b><span style='font-family:
  Consolas;color:navy'>button</span></b><span style='font-family:Consolas;
  color:black'>.</span><b><span style='font-family:Consolas;color:navy'>selected
  </span></b><span style='font-family:Consolas;color:black'>{<br>
      </span><b><span style='font-family:Consolas;color:blue'>color</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:navy'>#111</span></b><span style='font-family:Consolas;
  color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>font-weight</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:green'>bold</span></b><span style='font-family:Consolas;
  color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>border</span></b><span
  style='font-family:Consolas;color:black'>: </span><span style='font-family:
  Consolas;color:blue'>1</span><b><span style='font-family:Consolas;color:green'>px
  solid </span></b><b><span style='font-family:Consolas;color:navy'>#AAA</span></b><span
  style='font-family:Consolas;color:black'>;<br>
      </span><b><span style='font-family:Consolas;color:blue'>background</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:navy'>#BBB</span></b><span style='font-family:Consolas;
  color:black'>;<br>
  }<br>
  <br>
  </span><b><span style='font-family:Consolas;color:navy'>a</span></b><span
  style='font-family:Consolas;color:black'>.</span><b><span style='font-family:
  Consolas;color:navy'>button</span></b><span style='font-family:Consolas;
  color:black'>.</span><b><span style='font-family:Consolas;color:navy'>selected</span></b><span
  style='font-family:Consolas;color:black'>::</span><b><span style='font-family:
  Consolas;color:navy'>before </span></b><span style='font-family:Consolas;
  color:black'>{<br>
      </span><b><span style='font-family:Consolas;color:blue'>content</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:green'>&quot;\2713\20\20&quot;</span></b><span
  style='font-family:Consolas;color:black'>;<br>
  }<br>
  <br>
  </span><b><span style='font-family:Consolas;color:navy'>a</span></b><span
  style='font-family:Consolas;color:black'>:</span><b><span style='font-family:
  Consolas;color:navy'>hover </span></b><span style='font-family:Consolas;
  color:black'>{<br>
      </span><b><span style='font-family:Consolas;color:blue'>cursor</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:green'>pointer</span></b><span style='font-family:Consolas;
  color:black'>;<br>
  }</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>and the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>link-buttons.js</p>
  </td>
 </tr>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>attachEvents</span></i><span
  style='font-family:Consolas;color:black'>()</span><span style='font-family:
  Consolas;color:black'> {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<h3>Screenshots</h3>

<p class=MsoNormal><img border=0 width=311 height=133 id="Picture 7"
src="README.md_files/image006.jpg"></p>

<h3>Hints</h3>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Use the <span class=CodeChar>attachEventListener</span> function.</p>

<h2>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Selectable
Towns</h2>

<p class=MsoNormal>Create an HTML page listing <b>towns</b>, a town should be
selectable. Clicking on a town should <b>select/deselect</b> it, a selected
town should have the <span class=CodeChar>data-selected</span> attribute added
to it and its background color should be changed to <span class=CodeChar>#DDD</span>.
Also create a button <span class=CodeChar>[Show Towns]</span> that prints the
text <b>&quot;Selected towns: &quot;</b> followed by all selected towns joined
with a <b>&quot;, &quot;</b>.</p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>towns.html</p>
  </td>
 </tr>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>&lt;!DOCTYPE
  </span><b><span style='font-family:Consolas;color:blue'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>html </span></b><b><span
  style='font-family:Consolas;color:blue'>lang=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;en&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>meta </span></b><b><span
  style='font-family:Consolas;color:blue'>charset=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;UTF-8&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;Selectable Towns&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>style</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
          </span><b><span style='font-family:Consolas;color:navy'>li </span></b><span
  style='font-family:Consolas;color:black'>{<br>
              </span><b><span style='font-family:Consolas;color:blue'>display</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:green'>inline-block</span></b><span style='font-family:Consolas;
  color:black'>;<br>
              </span><b><span style='font-family:Consolas;color:blue'>cursor</span></b><span
  style='font-family:Consolas;color:black'>: </span><b><span style='font-family:
  Consolas;color:green'>pointer</span></b><span style='font-family:Consolas;
  color:black'>;<br>
              </span><b><span style='font-family:Consolas;color:blue'>padding</span></b><span
  style='font-family:Consolas;color:black'>: </span><span style='font-family:
  Consolas;color:blue'>10</span><b><span style='font-family:Consolas;
  color:green'>px</span></b><span style='font-family:Consolas;color:black'>;<br>
          }<br>
          </span><b><span style='font-family:Consolas;color:navy'>ul </span></b><span
  style='font-family:Consolas;color:black'>{ </span><b><span style='font-family:
  Consolas;color:blue'>padding</span></b><span style='font-family:Consolas;
  color:black'>:</span><span style='font-family:Consolas;color:blue'>0</span><span
  style='font-family:Consolas;color:black'>; }<br>
      &lt;/</span><b><span style='font-family:Consolas;color:navy'>style</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;select-towns.js&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>h2</span></b><span
  style='font-family:Consolas;color:black'>&gt;Towns&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>h2</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>ul </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;items&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;Sofia&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;Varna&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;Plovdiv&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;Bourgas&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>li</span></b><span
  style='font-family:Consolas;color:black'>&gt;Rousse&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>li</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>ul</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>button </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;showTownsButton&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;Show Towns&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>button</span></b><span
  style='font-family:Consolas;color:black'>&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>&lt;</span><b><span
  style='font-family:Consolas;color:navy'>div</span></b><span style='font-family:
  Consolas;color:black'> </span><b><span style='font-family:Consolas;
  color:blue'>id=</span></b><b><span style='font-family:Consolas;color:green'>&quot;selectedTowns&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>div</span></b><span style='font-family:
  Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;$(<i>attachEvents</i>())&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>select-towns.js</p>
  </td>
 </tr>
 <tr>
  <td width=700 valign=top style='width:525.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>attachEvents</span></i><span
  style='font-family:Consolas;color:black'>()</span><span style='font-family:
  Consolas;color:black'> {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<h3>Screenshots</h3>

<h3><img border=0 width=372 height=254 id="Picture 8"
src="README.md_files/image007.jpg"></h3>

</div>

</body>

</html>
