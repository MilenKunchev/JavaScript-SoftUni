<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">

</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1>Lab: Objects and Associative Arrays</h1>

<p class=MsoNormal>Problems for in-class lab for the <a
href="https://softuni.bg/courses/javascript-fundamentals">“JavaScript
Fundamentals” course @ SoftUni</a>. Submit your solutions in the SoftUni judge
system at <a href="https://judge.softuni.bg/Contests/315/">https://judge.softuni.bg/Contests/315/</a>.</p>

<h2>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Towns to
JSON</h2>

<p class=MsoNormal>You’re tasked to create and print a JSON from a text table.
You will receive input as an array of strings, where each string represents a
row of a table, with values on the row encompassed by pipes <b>&quot;|&quot; </b>and
optionally spaces. The table will consist of exactly 3 columns <b>“Town”</b>,<b>
“Latitude” </b>and<b> “Longitude”</b>. The <b>latitude</b> and <b>longitude</b>
columns will always contain <b>valid numbers</b>. Check the examples to get a
better understanding of your task.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of strings – the first
string contains the table’s headings, each next string is a row from the table.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console – for
each entry row in the input print the object representing it.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=706
 style='width:529.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['| Town | Latitude | Longitude |',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'| Sofia | 42.696552 | 23.32601 |',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'| Beijing | 39.913818 | 116.363625 |'];</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[{&quot;Town&quot;:&quot;Sofia&quot;,&quot;Latitude&quot;:42.69,&quot;Longitude&quot;:23.32},<br>
  {&quot;Town&quot;:&quot;Beijing&quot;,&quot;Latitude&quot;:39.91,&quot;Longitude&quot;:116.36}]</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>Input</p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>['| Town | Latitude | Longitude |',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'| Veliko Turnovo | 43.0757 | 25.6172 |',</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'| Monatevideo | 34.50 | 56.11 |']</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[{&quot;Town&quot;:&quot;Veliko
  Turnovo&quot;,&quot;Latitude&quot;:43.0757,&quot;Longitude&quot;:25.6172},<br>
  {&quot;Town&quot;:&quot;Monatevideo&quot;,&quot;Latitude&quot;:34.5,&quot;Longitude&quot;:56.11}]</span></p>
  </td>
 </tr>
</table>

<h2>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Score to
HTML</h2>

<p class=MsoNormal>You are given a JSON string representing an array of
objects, parse the JSON and create a table using the supplied objects. The table
should have 2 columns <b>&quot;name&quot;</b> and <b>&quot;score&quot;</b>,
each object in the array will also have these keys.</p>

<p class=MsoNormal>Any text elements must also be <b>escaped</b> in order to
ensure no dangerous code can be passed.</p>

<p class=MsoNormal>You can either write the HTML escape function yourself or
use the one from the Strings and Regular Expressions Lab.</p>

<p class=MsoNormal>The <b>input</b> comes as a single string argument – the
array of objects as a JSON.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console – a table
with 2 columns - <b>&quot;name&quot;</b> and <b>&quot;score&quot;</b>,
containing the values from the objects as rows.</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=706
 style='width:529.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'[{&quot;name&quot;:&quot;Pesho&quot;,&quot;score&quot;:479},{&quot;name&quot;:&quot;Gosho&quot;,&quot;score&quot;:205}]'</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;table&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> 
  &lt;tr&gt;&lt;th&gt;name&lt;/th&gt;&lt;th&gt;score&lt;/th&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> 
  &lt;tr&gt;&lt;td&gt;Pesho&lt;/td&gt;&lt;td&gt;479&lt;/td&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> 
  &lt;tr&gt;&lt;td&gt;Gosho&lt;/td&gt;&lt;td&gt;205&lt;/td&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/table&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>Input</p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'</span><span style='font-family:Consolas'>[{&quot;name&quot;:&quot;Pesho
  &amp; Kiro&quot;,&quot;score&quot;:479},{&quot;name&quot;:&quot;Gosho, Maria
  &amp; Viki&quot;,&quot;score&quot;:205}]'</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;table&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'> 
  &lt;tr&gt;&lt;th&gt;name&lt;/th&gt;&lt;th&gt;score&lt;/th&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;tr&gt;&lt;td&gt;Pesho &amp;amp;
  Kiro&lt;/td&gt;&lt;td&gt;479&lt;/td&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;tr&gt;&lt;td&gt;Gosho, Maria &amp;amp;
  Viki&lt;/td&gt;&lt;td&gt;205&lt;/td&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/table&gt;</span></p>
  </td>
 </tr>
</table>

<h2>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>From JSON
to HTML Table</h2>

<p class=MsoNormal>You’re tasked with creating an HTML table of students and
their scores. You will receive a single string representing an <b>array of objects</b>,
the <b>table’s headings</b> should be equal to the <b>objects’ keys</b>, while <b>each
object’s values</b> should be a <b>new entry</b> in the table. Any <b>text
values</b> in an object should be <b>escaped</b>, in order to avoid introducing
dangerous code into the HTML. </p>

<p class=MsoNormal>Object’s keys will always be the<b> same. </b></p>

<p class=MsoNormal>The <b>input</b> comes as single string argument – the array
of objects.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console – for
each entry row in the input print the object representing it.</p>

<h3>HTML</h3>

<p class=MsoNormal>You are provided with an HTML file to test your table in the
browser.</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>index.html</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-size:9.0pt;font-family:"Courier New";
  color:black;background:#EFEFEF'>&lt;!DOCTYPE </span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:blue;background:#EFEFEF'>html</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-size:
  9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>html </span></b><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:blue;background:#EFEFEF'>lang=</span></b><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:green;background:#EFEFEF'>&quot;en&quot;</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-size:
  9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>head</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
      <span style='background:#EFEFEF'>&lt;</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>meta
  </span></b><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:blue;background:#EFEFEF'>charset=</span></b><b><span style='font-size:
  9.0pt;font-family:"Courier New";color:green;background:#EFEFEF'>&quot;UTF-8&quot;</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
      <span style='background:#EFEFEF'>&lt;</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>title</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'>FromJSONToHTMLTable<span
  style='background:#EFEFEF'>&lt;/</span></span><b><span style='font-size:9.0pt;
  font-family:"Courier New";color:navy;background:#EFEFEF'>title</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
      <span style='background:#EFEFEF'>&lt;</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>style</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
          </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:navy'>table</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>,</span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:navy'>th</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>{<br>
              </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:blue'>border</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>: </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:green'>groove</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>;<br>
              </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:blue'>border-collapse</span></b><span style='font-size:9.0pt;
  font-family:"Courier New";color:black'>: </span><b><span style='font-size:
  9.0pt;font-family:"Courier New";color:green'>collapse</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'>;<br>
          }<br>
          </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:navy'>td</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>{<br>
              </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:blue'>border</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>: </span><span style='font-size:9.0pt;font-family:"Courier New";
  color:blue'>1</span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:green'>px solid black</span></b><span style='font-size:9.0pt;
  font-family:"Courier New";color:black'>;<br>
          }<br>
          </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:navy'>td</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>,</span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:navy'>th</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>{<br>
              </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:blue'>padding</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>: </span><span style='font-size:9.0pt;font-family:"Courier New";
  color:blue'>5</span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:green'>px</span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>;<br>
          }<br>
      <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>style</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
  <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>head</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
  <span style='background:#EFEFEF'>&lt;</span></span><b><span style='font-size:
  9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>body</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
      <span style='background:#EFEFEF'>&lt;</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>div
  </span></b><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:blue;background:#EFEFEF'>id=</span></b><b><span style='font-size:9.0pt;
  font-family:"Courier New";color:green;background:#EFEFEF'>&quot;wrapper&quot;</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
      <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>div</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
      <span style='background:#EFEFEF'>&lt;</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>script</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
          </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:navy'>function </span></b><i><span style='font-size:9.0pt;font-family:
  "Courier New";color:black'>fromJSONToHTMLTable</span></i><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'>(input){<br>
              </span><i><span style='font-size:9.0pt;font-family:"Courier New";
  color:gray'>//Write your code here<br>
          </span></i><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>}<br>
          </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:#660E7A'>window</span></b><span style='font-size:9.0pt;font-family:
  "Courier New";color:black'>.</span><span style='font-size:9.0pt;font-family:
  "Courier New";color:#7A7A43'>onload </span><span style='font-size:9.0pt;
  font-family:"Courier New";color:black'>= </span><b><span style='font-size:
  9.0pt;font-family:"Courier New";color:navy'>function</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'>(){<br>
              </span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:navy'>let </span></b><span style='font-size:9.0pt;font-family:"Courier New";
  color:#458383'>container </span><span style='font-size:9.0pt;font-family:
  "Courier New";color:black'>= </span><b><span style='font-size:9.0pt;
  font-family:"Courier New";color:#660E7A'>document</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'>.</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:#7A7A43'>getElementById</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'>(</span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:green'>'wrapper'</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'>);<br>
              </span><span style='font-size:9.0pt;font-family:"Courier New";
  color:#458383'>container</span><span style='font-size:9.0pt;font-family:"Courier New";
  color:black'>.</span><b><span style='font-size:9.0pt;font-family:"Courier New";
  color:#660E7A'>innerHTML </span></b><span style='font-size:9.0pt;font-family:
  "Courier New";color:black'>= <i>fromJSONToHTMLTable</i>([</span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:green'>'[{&quot;Name&quot;:&quot;Tomatoes
  &amp; Chips&quot;,&quot;Price&quot;:2.35},{&quot;Name&quot;:&quot;J&amp;B
  Chocolate&quot;,&quot;Price&quot;:0.96}]'</span></b><span style='font-size:
  9.0pt;font-family:"Courier New";color:black'>]);<br>
          };<br>
      <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>script</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
  <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>body</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span><span
  style='font-size:9.0pt;font-family:"Courier New";color:black'><br>
  <span style='background:#EFEFEF'>&lt;/</span></span><b><span
  style='font-size:9.0pt;font-family:"Courier New";color:navy;background:#EFEFEF'>html</span></b><span
  style='font-size:9.0pt;font-family:"Courier New";color:black;background:#EFEFEF'>&gt;</span></p>
  </td>
 </tr>
</table>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=706
 style='width:529.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'[{&quot;Name&quot;:&quot;Tomatoes &amp; Chips&quot;,&quot;Price&quot;:2.35},{&quot;Name&quot;:&quot;J&amp;B
  Chocolate&quot;,&quot;Price&quot;:0.96}]'</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;table&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  
  &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Price&lt;/th&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>   &lt;tr&gt;&lt;td&gt;Tomatoes &amp;amp;
  Chips&lt;/td&gt;&lt;td&gt;2.35&lt;/td&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>   &lt;tr&gt;&lt;td&gt;J&amp;amp;B
  Chocolate&lt;/td&gt;&lt;td&gt;0.96&lt;/td&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/table&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>Input</p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'</span><span style='font-family:Consolas'>[{&quot;Name&quot;:&quot;Pesho
  &lt;div&gt;-a&quot;,&quot;Age&quot;:20,&quot;City&quot;:&quot;Sofia&quot;},<br>
  {&quot;Name&quot;:&quot;Gosho&quot;,&quot;Age&quot;:18,&quot;City&quot;:&quot;Plovdiv&quot;},{&quot;Name&quot;:&quot;Angel&quot;,&quot;Age&quot;:18,&quot;City&quot;:&quot;Veliko
  Tarnovo&quot;}]'</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;table&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  
  &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Age&lt;/th&gt;&lt;th&gt;City&lt;/th&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>   &lt;tr&gt;&lt;td&gt;Pesho
  &amp;lt;div&amp;gt;-a&lt;/td&gt;&lt;td&gt;20&lt;/td&gt;&lt;td&gt;Sofia&lt;/td&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  
  &lt;tr&gt;&lt;td&gt;Gosho&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;Plovdiv&lt;/td&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  
  &lt;tr&gt;&lt;td&gt;Angel&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;Veliko
  Tarnovo&lt;/td&gt;&lt;/tr&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/table&gt;</span></p>
  </td>
 </tr>
</table>

<h2>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Sum by
Town</h2>

<p class=MsoNormal>You’re tasked with calculating the total sum of income for a
number of Towns. You will receive an array of strings representing towns and
their incomes, every <b>even</b> index will be a <b>town</b> and every <b>odd</b>
index will be an <b>income</b> belonging to that town. Create an object that
will hold all the <b>towns as keys</b> and their <b>total income</b> (the sum
of their incomes) <b>as values </b>to those keys and print it as a JSON. </p>

<p class=MsoNormal>The <b>input</b> comes as an array of strings - each even
index is the name of a town and each odd index is an income belonging to that
town.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console - JSON representation
of the object containing all towns and their total incomes.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=552
 style='width:5.75in;margin-left:4.25pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=161 valign=top style='width:120.5pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=391 valign=top style='width:293.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=161 valign=top style='width:120.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Sofia</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>20</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Varna</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Sofia</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Varna</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  </td>
  <td width=391 valign=top style='width:293.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>{&quot;Sofia&quot;:25,&quot;Varna&quot;:7}</span></p>
  </td>
 </tr>
 <tr>
  <td width=161 valign=top style='width:120.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Sofia</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>20</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Varna</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>sofia</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>varna</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  </td>
  <td width=391 valign=top style='width:293.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>{&quot;Sofia&quot;:20,&quot;Varna&quot;:3,&quot;sofia&quot;:5,&quot;varna&quot;:4}</span></p>
  </td>
 </tr>
</table>

<h2>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Count
Words in a Text</h2>

<p class=MsoNormal>You are tasked to count the number of words in a text using
an object as an associative array, any combination of letters, digits and _
(underscore) should be counted as a word. The words should be stored in the
object as properties - the <b>key</b> being the <b>word</b> and the <b>value</b>
being the<b> amount of times the word is contained</b> <b>in the text</b>. </p>

<p class=MsoNormal>The <b>input</b> comes as an array of strings containing one
entry - the text whose words should be counted. The text may consist of more
than one sentence.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console - the JSON
representation of the object containing the words.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=706
 style='width:529.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Far too slow, you're far too slow.</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>{&quot;Far&quot;:1,&quot;too&quot;:2,&quot;slow&quot;:2,&quot;you&quot;:1,&quot;re&quot;:1,&quot;far&quot;:1}</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>Input</p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>JS devs use Node.js for server-side JS.-- JS for
  devs</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>{&quot;JS&quot;:3,&quot;devs&quot;:2,&quot;use&quot;:1,&quot;Node&quot;:1,&quot;js&quot;:1,&quot;for&quot;:2,&quot;server&quot;:1,&quot;side&quot;:1}</span></p>
  </td>
 </tr>
</table>

<h2>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Count
Words with Maps</h2>

<p class=MsoNormal>You are tasked to count the number of words in a text using
a Map, any combination of letters, digits and _ (underscore) should be counted
as a word. The words should be stored in a Map - the <b>key</b> being the <b>word</b>
and the <b>value</b> being the<b> amount of times the word is contained</b> <b>in
the text</b>. The matching should be <b>case insensitive</b>. Print the words
in a <b>sorted order</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of strings containing one
entry - the text whose words should be counted. The text may consist of more
than one sentence.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console - print
each word in the map in the format <b>&quot;'&lt;word&gt;' -&gt; &lt;count&gt;
times&quot;</b>, each on a new line.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=706
 style='width:529.6pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>Far too slow, you're far too slow.</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'far' -&gt; 2 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'re' -&gt; 1 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'slow' -&gt; 2 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'too' -&gt; 2 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'you' -&gt; 1 times</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>Input</p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>JS devs use Node.js for server-side JS. JS devs
  use JS. -- JS for devs --</span></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=706 valign=top style='width:529.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'devs' -&gt; 3 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'for' -&gt; 2 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'js' -&gt; 6 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'node' -&gt; 1 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'server' -&gt; 1 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'side' -&gt; 1 times</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>'use' -&gt; 2 times</span></p>
  </td>
 </tr>
</table>

<h2>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Populations
in Towns</h2>

<p class=MsoNormal>You have been tasked to create a register for different <b>towns</b>
and their <b>population</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. Each element
will contain data for a town and its population in the following format:</p>

<p class=MsoNormal>“<span class=CodeChar>{townName} &lt;-&gt; {townPopulation}</span>”</p>

<p class=MsoNormal>If you receive the same town twice, <b>you should add</b>
the <b>given population</b> to the <b>current one</b>.</p>

<p class=MsoNormal>As<b> output</b>, you must print all the towns, and their
population.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=703
 style='width:527.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=165 valign=top style='width:123.55pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=176 valign=top style='width:132.15pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=13 valign=top style='width:9.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=170 valign=top style='width:127.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=179 valign=top style='width:134.55pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=165 valign=top style='width:123.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sofia
  &lt;-&gt; 1200000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Montana
  &lt;-&gt; 20000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>New
  York &lt;-&gt; 10000000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Washington
  &lt;-&gt; 2345000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Las
  Vegas &lt;-&gt; 1000000</p>
  </td>
  <td width=176 valign=top style='width:132.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sofia
  : 1200000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Montana
  : 20000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>New
  York : 10000000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Washington
  : 2345000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Las
  Vegas : 1000000</p>
  </td>
  <td width=13 valign=top style='width:9.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>&nbsp;</p>
  </td>
  <td width=170 valign=top style='width:127.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Istanbul
  &lt;-&gt; 100000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Honk
  Kong &lt;-&gt; 2100004</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Jerusalem
  &lt;-&gt; 2352344</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Mexico
  City &lt;-&gt; 23401925</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Istanbul
  &lt;-&gt; 1000</p>
  </td>
  <td width=179 valign=top style='width:134.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Istanbul
  : 101000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Honk
  Kong : 2100004</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Jerusalem
  : 2352344</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Mexico
  City : 23401925</p>
  </td>
 </tr>
</table>

<h2>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>City
Markets</h2>

<p class=MsoNormal>You have been tasked to follow the sales of products in the
different towns. For every town you need to keep track of all the products
sold, and for every product, the amount of total income.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. Each element
will represent data about a product and its sales. The format of input is:</p>

<p class=Code>{town} -&gt; {product} -&gt; {amountOfSales} : {priceForOneUnit}</p>

<p class=MsoNormal>The <b>town</b> and <b>product</b> are both <b>strings</b>.
The <b>amount of sales</b> and <b>price for one unit</b> will be <b>numbers</b>.
Store all towns, for every town, store its products, and for every product, its
amount of <b>total income</b>. The total income is calculated with the
following formula - <b>amount of sales * price for one unit</b>. If you receive
as input a town you already have, you should just <b>add</b> the <b>new product</b>
to it.</p>

<p class=MsoNormal>As <b>output</b> you must print every town, its products and
their total income in the following format:</p>

<p class=Code>“Town – {townName}</p>

<p class=Code> $$${product1Name} : {productTotalIncome}</p>

<p class=Code> $$${product2Name} : {productTotalIncome}</p>

<p class=Code> ...”</p>

<p class=MsoNormal>The <b>order of output</b> for each of those entries is – by
<b>order of entrance</b>.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=713
 style='width:534.75pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=354 valign=top style='width:265.35pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=359 valign=top style='width:269.4pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=354 valign=top style='width:265.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sofia
  -&gt; Laptops HP -&gt; 200 : 2000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sofia
  -&gt; Raspberry -&gt; 200000 : 1500</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sofia
  -&gt; Audi Q7 -&gt; 200 : 100000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Montana
  -&gt; Portokals -&gt; 200000 : 1</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Montana
  -&gt; Qgodas -&gt; 20000 : 0.2</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Montana
  -&gt; Chereshas -&gt; 1000 : 0.3</p>
  </td>
  <td width=359 valign=top style='width:269.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Town
  - Sofia</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>$$$Laptops
  HP : 400000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>$$$Raspberry
  : 300000000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>$$$Audi
  Q7 : 20000000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Town
  - Montana</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>$$$Portokals
  : 200000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>$$$Qgodas
  : 4000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>$$$Chereshas
  : 300</p>
  </td>
 </tr>
</table>

<h2>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Lowest
Prices in Cities</h2>

<p class=MsoNormal>You will be given several towns, with products and their
price. You need to find <b>the lowest price</b> for <b>every product</b> and <b>the
town it is sold at</b> for that price.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. Each element
will hold data about a <b>town</b>, <b>product</b>, and <b>its price</b> at
that town. The <b>town</b> and <b>product</b> will be <b>strings</b>; the <b>price</b>
will be a <b>number</b>. The input will come in the following format:</p>

<p class=Code>{townName} | {productName} | {productPrice}</p>

<p class=MsoNormal>If you receive the same <b>town</b> and <b>product</b> <b>more
than once, </b>you should <b>update</b> the <b>old value</b> with the <b>new
one</b>.</p>

<p class=MsoNormal>As <b>output</b> you must print <b>each</b> <b>product</b>
with its <b>lowest price</b> and <b>the town</b> at which the product is <b>sold
at that</b> <b>price</b>. If <b>two towns share</b> the <b>same lowest price</b>,
print the one that was <b>entered first</b>. <br>
The output, for every product, should be in the following format:</p>

<p class=MsoNormal><span class=CodeChar>{productName} -&gt;
{productLowestPrice} ({townName})</span></p>

<p class=MsoNormal>The <b>order of output</b> is – <b>order of entrance</b>.
See the examples for more info.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=713
 style='width:534.75pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=354 valign=top style='width:265.35pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=359 valign=top style='width:269.4pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=354 valign=top style='width:265.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sample
  Town | Sample Product | 1000</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sample
  Town | Orange | 2</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sample
  Town | Peach | 1</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sofia
  | Orange | 3</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sofia
  | Peach | 2</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>New
  York | Sample Product | 1000.1</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>New
  York | Burger | 10</p>
  </td>
  <td width=359 valign=top style='width:269.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sample
  Product -&gt; 1000 (Sample Town)</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Orange
  -&gt; 2 (Sample Town)</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Peach
  -&gt; 1 (Sample Town)</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Burger
  -&gt; 10 (New York)</p>
  </td>
 </tr>
</table>

<h2>10.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Extract
Unique Words</h2>

<p class=MsoNormal>Write a JS function that <b>extracts</b> all <b>UNIQUE</b>
words from a <b>valid text</b>, and <b>stores them</b>. Ensure that there are <b>NO
duplicates</b> in the stored words. Once you find a word, there is no need for
you to store it again if you meet it again in the text. You also need to make
all characters from the words you’ve stored – <b>lowercase</b>.</p>

<p class=MsoNormal>The <b>input</b> comes as array of strings. Each element
will represent a sentence.</p>

<p class=MsoNormal>The <b>output</b> is all of the unique words you’ve found,
each with each, <b>separated</b> by a <b>coma and a space</b>, printed in the
order in which you’ve found them. </p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=713
 style='width:534.75pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=382 valign=top style='width:286.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=331 valign=top style='width:248.15pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=382 valign=top style='width:286.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  lang=BG>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
  quis hendrerit dui. </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  lang=BG>Quisque fringilla est urna, vitae efficitur urna vestibulum
  fringilla. </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  lang=BG>Vestibulum dolor diam, dignissim quis varius non, fermentum non
  felis. </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  lang=BG>Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  lang=BG>Morbi in ipsum varius, pharetra diam vel, mattis arcu. </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  lang=BG>Integer ac turpis commodo, varius nulla sed, elementum lectus. </span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  lang=BG>Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas
  metus.</span></p>
  </td>
  <td width=331 valign=top style='width:248.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  lang=BG>lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit,
  pellentesque, quis, hendrerit, dui, quisque, fringilla, est, urna, vitae,
  efficitur, vestibulum, diam, dignissim, varius, non, fermentum, felis,
  ultrices, ex, massa, faucibus, nunc, aliquam, ut, morbi, in, pharetra, vel,
  mattis, arcu, integer, ac, turpis, commodo, nulla, sed, elementum, lectus,
  vivamus, malesuada, dapibus, congue, egestas, metus</span></p>
  </td>
 </tr>
 <tr>
  <td width=382 valign=top style='width:286.6pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
  <td width=331 style='width:248.15pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=382 valign=top style='width:286.6pt;border:solid windowtext 1.0pt;
  border-top:none;background:#DDD9C3;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Input</span></strong></p>
  </td>
  <td width=331 style='width:248.15pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#DDD9C3;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><strong><span style='font-family:"Calibri","sans-serif"'>Output</span></strong></p>
  </td>
 </tr>
 <tr>
  <td width=382 valign=top style='width:286.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Interdum
  et malesuada fames ac ante ipsum primis in faucibus.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Vestibulum
  volutpat lacinia blandit.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Pellentesque
  dignissim odio in hendrerit lacinia.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Vivamus
  placerat porttitor purus nec hendrerit.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Aliquam
  erat volutpat. Donec ac augue ligula.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Praesent
  venenatis sapien vitae libero ornare, nec pulvinar velit finibus.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Proin
  dui neque, rutrum vel dolor ut, placerat blandit sapien.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Pellentesque
  at est arcu.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Nullam
  eget orci laoreet, feugiat nisi vitae, egestas libero.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Pellentesque
  pulvinar aliquet felis.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Interdum
  et malesuada fames ac ante ipsum primis in faucibus.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Etiam
  sit amet nisl ex.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Sed
  lacinia pretium metus quis fermentum.</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>Praesent
  a ante suscipit, efficitur risus cursus, scelerisque risus.</p>
  </td>
  <td width=331 valign=top style='width:248.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'>interdum,
  et, malesuada, fames, ac, ante, ipsum, primis, in, faucibus, vestibulum,
  volutpat, lacinia, blandit, pellentesque, dignissim, odio, hendrerit,
  vivamus, placerat, porttitor, purus, nec, aliquam, erat, donec, augue,
  ligula, praesent, venenatis, sapien, vitae, libero, ornare, pulvinar, velit,
  finibus, proin, dui, neque, rutrum, vel, dolor, ut, at, est, arcu, nullam,
  eget, orci, laoreet, feugiat, nisi, egestas, aliquet, felis, etiam, sit,
  amet, nisl, ex, sed, pretium, metus, quis, fermentum, a, suscipit, efficitur,
  risus, cursus, scelerisque</p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
