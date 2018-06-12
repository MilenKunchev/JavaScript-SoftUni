<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">

</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1>Exercises: Functions and Arrow Functions</h1>

<p class=MsoNormal>Problems for exercises and homework for the <a
href="https://softuni.bg/courses/javascript-fundamentals">“JavaScript
Fundamentals” course @ SoftUni</a>. Submit your solutions in the SoftUni judge
system at <a href="https://judge.softuni.bg/Contests/310/">https://judge.softuni.bg/Contests/310/</a><a
href="https://judge.softuni.bg/Contests/XXX/"></a>.</p>

<h2>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Inside
Volume</h2>

<p class=MsoNormal><img width=378 height=337 src="README.md_files/image001.jpg"
align=right hspace=12>Write a JS function that determines whether a point is
inside the volume, defined by the box, shown on the right.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of numbers. Each set of 3
elements are the x, y and z coordinates of a point.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console on a new
line for each point. Print <span class=CodeChar>inside</span> if the point lies
inside the volume and <span class=CodeChar>outisde</span> otherwise.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=227
 style='width:170.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[8, 20, 22]</span></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>outside</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[13.1, 50, 31.5,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>50, 80, 50,</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>-5, 18, 43]</span></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>inside</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>inside</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>outside</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoNormal>This task is very similar to previous assignments where a point
might lie inside an area in 2D space, with just an extra dimension added. If we
look at a classic conditional statement, which checks whether a point is inside
a rectangle:</p>

<p class=MsoNormal><img border=0 width=359 height=106 id="Picture 6"
src="README.md_files/image002.jpg"></p>

<p class=MsoNormal>It checks whether a coordinate is greater than the minimum
and at the same time less than the maximum bounding value for both axes (x and
y). All we have to do is to include an additional check for a coordinate to be
within the vertical limits of the volume (z-axis):</p>

<p class=MsoNormal><img border=0 width=359 height=137 id="Picture 7"
src="README.md_files/image003.jpg"></p>

<p class=MsoNormal>We can then wrap this whole statement in a function and as
we process each set of coordinates, pass them to see if they are inside the
volume and print the correct message to the console. Since the volume is the
same every time, we can hardcode the values, but it’s generally good practice
to pass them as function arguments, so that the function may work with any
arbitrary volume. Later in the course we’ll learn how to shorten this with the
use of objects.</p>

<p class=MsoNormal><img border=0 width=361 height=257 id="Picture 8"
src="README.md_files/image004.jpg"></p>

<p class=MsoNormal>We can extract the sets of coordinates with a loop that
skips 3 elements at a time and assigns them to temporary variables:</p>

<p class=MsoNormal><img border=0 width=360 height=279 id="Picture 10"
src="README.md_files/image005.jpg"></p>

<p class=MsoNormal>We know from the problem description that the input array
will contain sets to three coordinates. Starting at 0, the current element
(denoted by index <b><i>i</i></b> inside the loop) is the x-coordinate, the
element after the current (<b><i>i + 1</i></b>) is the y-coordinate, and the
element two indices after the current (<b><i>i + 2</i></b>) is the
z-coordinate. At the end of the cycle, the index is increased by 3 and we can
obtain the coordinates of the next point, using the same arithmetic (instead of
0, 1 and 2 we will get 3, 4 and 5) and so on, until there are no more elements
in the array. The three coordinates are passed into our function and we get a
Boolean value as a result. If it’s true, we print <span class=CodeChar>inside</span>
for the current point and otherwise we print <span class=CodeChar>outside</span>.</p>

<p class=MsoNormal>The solution may now be submitted to the judge system at <a
href="https://judge.softuni.bg/Contests/310">https://judge.softuni.bg/Contests/310</a></p>

<h2>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Road Radar</h2>

<p class=MsoNormal>Write a JS function that determines whether a driver is
within the speed limit. You will receive his speed and the area where he’s
driving. Each area has a different limit: on the <strong><span
style='font-family:"Calibri","sans-serif"'>motorway</span></strong> the limit
is <strong><span style='font-family:"Calibri","sans-serif"'>130 </span></strong>km/h,
on the <strong><span style='font-family:"Calibri","sans-serif"'>interstate</span></strong>
the limit is <strong><span style='font-family:"Calibri","sans-serif"'>90</span></strong>,
inside a <strong><span style='font-family:"Calibri","sans-serif"'>city</span></strong>
the limit is <strong><span style='font-family:"Calibri","sans-serif"'>50</span></strong>
and within a <strong><span style='font-family:"Calibri","sans-serif"'>residential
</span></strong>area the limit is <strong><span style='font-family:"Calibri","sans-serif"'>20
</span></strong>km/h. If the driver is within the limits, your function prints
nothing. If he’s over the limit however, your function prints the severity of
the infraction. For speeds up to <strong><span style='font-family:"Calibri","sans-serif"'>20</span></strong>
km/h<strong><span style='font-family:"Calibri","sans-serif"'> </span></strong>over
the limit, he’s speeding; for speeds up to <strong><span style='font-family:
"Calibri","sans-serif"'>40</span></strong> over the limit, the infraction is <strong><span
style='font-family:"Calibri","sans-serif"'>excessive speeding</span></strong>
and for anything else, <strong><span style='font-family:"Calibri","sans-serif"'>reckless
driving</span></strong>.</p>

<p class=MsoNormal>The <b>input</b> comes as an array of elements. The first
element is the current speed (as number), the second element is the area where
the vehicle is driving.</p>

<p class=MsoNormal>The <b>output</b> should be printed to the console. Note in
certain cases there will be no output.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=416
 style='width:311.85pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=189 valign=top style='width:141.75pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=189 valign=top style='width:141.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[40, city]</span></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-size:10.0pt;font-family:Consolas;
  color:black'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=189 valign=top style='width:141.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[21, residential]</span></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>speeding</span></p>
  </td>
 </tr>
 <tr>
  <td width=189 valign=top style='width:141.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[120, interstate]</span></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>excessive
  speeding</span></p>
  </td>
 </tr>
 <tr>
  <td width=189 valign=top style='width:141.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[200, motorway]</span></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>reckless driving</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoNormal>We can divide the task in two functions – one that
determines what the current speed limit is, depending on zone, and another
which tells us if an infraction is being made, depending on current speed and
current limit. Determining the limit is achieved with a <strong><span
style='font-family:"Calibri","sans-serif"'>switch</span></strong> statement on
the input:</p>

<p class=MsoNormal><img border=0 width=407 height=150 id="Picture 9"
src="README.md_files/image006.jpg"></p>

<p class=MsoNormal>This function takes a string as an argument and returns a
number, depending on what that string is. We can take this directly from the
input, pass it to this function and save the return value in a variable. In our
second function, we pass the current speed and the limit, which we just saved.</p>

<p class=MsoNormal><img border=0 width=408 height=154 id="Picture 11"
src="README.md_files/image007.jpg"></p>

<p class=MsoNormal>We calculate the difference between the current speed and
the limit – if it’s negative or zero, this means the driver is within the rules
and we return <span class=CodeChar>false</span>, and in any other case, return
the infraction as a string and store the result of the operation in a variable.</p>

<p class=MsoNormal><img border=0 width=408 height=97 id="Picture 12"
src="README.md_files/image008.jpg"></p>

<p class=MsoNormal>We can use the fact that JavaScript functions can return
different data types and directly use the result we stored in a conditional
statement – if it’s <strong><span style='font-family:"Calibri","sans-serif"'>false</span></strong>
(no infraction), do nothing, if it’s <strong><span style='font-family:"Calibri","sans-serif"'>truthy</span></strong>
(non-empty string in this case), print the value store in the variable.</p>

<h2>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Template
format</h2>

<p class=MsoNormal>Write a JS program that receives data about a quiz and
prints it formatted as an XML document. The data comes as pairs of
question-answer entries. The format of the document should be as follows:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=680
 style='width:510.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>XML</b></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;?xml version=&quot;1.0&quot;
  encoding=&quot;UTF-8&quot;?&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;quiz&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;question&gt;</span></p>
  <p class=Code style='line-height:normal'>    {question text}</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/question&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;answer&gt;</span></p>
  <p class=Code style='line-height:normal'>    {answer text}</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/answer&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/quiz&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>The <b>input</b> comes as an array of string elements.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=680
 style='width:510.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='line-height:normal'>[&quot;Who was the forty-second
  president of the U.S.A.?&quot;,</p>
  <p class=MsoNormal style='line-height:normal'>&quot;William Jefferson Clinton&quot;]</p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;?xml version=&quot;1.0&quot;
  encoding=&quot;UTF-8&quot;?&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;quiz&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;question&gt;</span></p>
  <p class=Code style='line-height:normal'>    Who was the forty-second
  president of the U.S.A.?</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/question&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;answer&gt;</span></p>
  <p class=Code style='line-height:normal'>    William Jefferson Clinton</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/answer&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/quiz&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=680
 style='width:510.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='line-height:normal'>[&quot;Dry ice is a frozen form
  of which gas?&quot;,</p>
  <p class=MsoNormal style='line-height:normal'>&quot;Carbon Dioxide&quot;,</p>
  <p class=MsoNormal style='line-height:normal'>&quot;What is the brightest
  star in the night sky?&quot;,</p>
  <p class=MsoNormal style='line-height:normal'>&quot;Sirius&quot;]</p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=680 valign=top style='width:510.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;?xml version=&quot;1.0&quot;
  encoding=&quot;UTF-8&quot;?&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;quiz&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;question&gt;</span></p>
  <p class=Code style='line-height:normal'>    Dry ice is a frozen form of
  which gas?</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/question&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;answer&gt;</span></p>
  <p class=Code style='line-height:normal'>    Carbon Dioxide</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/answer&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;question&gt;</span></p>
  <p class=Code style='line-height:normal'>    What is the brightest star in
  the night sky?</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/question&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;answer&gt;</span></p>
  <p class=Code style='line-height:normal'>    Sirius</p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>  &lt;/answer&gt;</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>&lt;/quiz&gt;</span></p>
  </td>
 </tr>
</table>

<h2>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Cooking by
Numbers</h2>

<p class=MsoNormal>Write a JS program that receives a number and a list of five
operations. Perform the operations in sequence by starting with the input
number and using the result of every operation as starting point for the next.
Print the result of every operation in order. The operations can be one of the
following:</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>chop</span> – divide the number by two</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>dice</span> – square root of number</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>spice</span> – add 1 to number</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>bake</span> – multiply number by 3</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>fillet</span> – subtract 20% from number</p>

<p class=MsoNormal>The <b>input</b> comes as an array of 6 string elements. The
first element is your starting point and must be parsed to a number. The
remaining 5 elements are the names of operations to be performed.</p>

<p class=MsoNormal>The <b>output</b> should be printed on the console.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=491
 style='width:368.5pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=378 valign=top style='width:283.45pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=378 valign=top style='width:283.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>[32,
  chop, chop, chop, chop, chop]</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>16<br>
  8<br>
  4<br>
  2<br>
  1</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=491
 style='width:368.5pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=378 valign=top style='width:283.45pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=378 valign=top style='width:283.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'><pre style='background:
  white'><span style='font-size:11.0pt;color:black'>[9, dice, spice, chop, bake, fillet]</span></pre></td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>4</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>6</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:"Courier New";color:black'>4.8</span></p>
  </td>
 </tr>
</table>

<h2>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Modify
Average</h2>

<p class=MsoNormal>Write a JS program that modifies a number until the average
value of all of its digits is <b>higher than 5</b>. In order to modify the
number, your program should append a <b>9</b> to the end of the number, when
the average value of all of its digits is <b>higher than 5</b> the program
should stop appending. If the number’s average value of all of its digits is
already <b>higher than 5</b>, no appending should be done.</p>

<p class=MsoNormal>The <b>input</b> is a single number.</p>

<p class=MsoNormal>The <b>output</b> should consist of a single number - the
final modified number which has an average value of all of its digits <b>higher
than 5</b>. The <b>output</b> should be printed on the console.</p>

<h3>Constraints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>The input number will consist of no more than 6 digits.</b></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>The input will be a valid number (there will be no leading
zeroes).</b></p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=268
 style='width:201.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=112 valign=top style='width:84.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=156 valign=top style='width:117.0pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=112 valign=top style='width:84.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>101</span></p>
  </td>
  <td width=156 valign=top style='width:117.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>1019999</span></p>
  </td>
 </tr>
 <tr>
  <td width=112 valign=top style='width:84.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>5835</span></p>
  </td>
  <td width=156 valign=top style='width:117.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>5835</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><b>&nbsp;</b></p>

<h2>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Validity
Checker</h2>

<p class=MsoNormal>Write a JS program that receives two points in the format <b>[x1,
y1, x2, y2] </b>and checks if the distances between each point and the start of
the cartesian coordinate system (0, 0) and between the points themselves is <b>valid</b>.
A distance between two points is considered <b>valid</b>, if it is an <b>integer
value</b>. In case a distance is valid write &quot;<b>{x1, y1} to {x2, y2} is
valid&quot;</b>, in case the distance is invalid write <b>&quot;{x1, y1} to
{x2, y2} is invalid&quot;</b>. </p>

<p class=MsoNormal>The order of comparisons should always be first <b>{x1, y1}</b>
to <b>{0, 0}</b>, then <b>{x2, y2}</b> to <b>{0, 0}</b> and finally <b>{x1, y1}</b>
to <b>{x2, y2}</b>. </p>

<p class=MsoNormal>The <b>input</b> consists of two points given as an array of
numbers.</p>

<p class=MsoNormal>For each comparison print on the <b>output</b> either &quot;<b>{x1,
y1} to {x2, y2} is valid&quot; </b>if the distance between them is valid, or <b>&quot;{x1,
y1} to {x2, y2} is invalid&quot;</b>- if it’s invalid.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=700
 style='width:525.1pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=346 valign=top style='width:259.6pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=354 valign=top style='width:265.5pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=346 valign=top style='width:259.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[3, 0, 0, 4]</span></p>
  </td>
  <td width=354 valign=top style='width:265.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>{3, 0} to {0,
  0} is valid</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>{0, 4} to
  {0, 0} is valid</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>{3, 0} to
  {0, 4} is valid</span></p>
  </td>
 </tr>
 <tr>
  <td width=346 valign=top style='width:259.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[2, 1, 1, 1]</span></p>
  </td>
  <td width=354 valign=top style='width:265.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>{2, 1} to
  {0, 0} is invalid</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>{1, 1} to
  {0, 0} is invalid</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>{2, 1} to
  {1, 1} is valid</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<h2>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Treasure
Locator</h2>

<p class=MsoNormal><img width=355 height=344 src="README.md_files/image009.png"
align=right hspace=12>You will be given a series of coordinates, leading to a
buried treasure. Use the map to the right to write a program that locates on
which island it is. After you find where all the treasure chests are, compose a
list and print it on the console. If a chest is not on any of the islands,
print “On the bottom of the ocean” to inform your treasure-hunting team to
bring diving gear. If the location is on the shore (border) of the island, it’s
still considered to lie inside.</p>

<p class=MsoNormal>The <b>input</b> comes as an array with a variable number of
elements that are numbers. Each pair is the coordinates to a buried treasure
chest.</p>

<p class=MsoNormal>The <b>output</b> is a list of the locations of every
treasure chest, either the name of an island or “On the bottom of the ocean”,
printed on the console.</p>

<p class=MsoNormal>&nbsp;</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=529
 style='width:396.85pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=302 valign=top style='width:226.75pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[4, 2, 1.5, 6.5, 1, 3]</span></p>
  </td>
  <td width=302 valign=top style='width:226.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>On the
  bottom of the ocean</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Tonga</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Tuvalu</span></p>
  </td>
 </tr>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[6, 4]</span></p>
  </td>
  <td width=302 valign=top style='width:226.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Samoa</span></p>
  </td>
 </tr>
</table>

<h2>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Trip
Length</h2>

<p class=MsoNormal>You will be given the coordinates of 3 points on a 2D plane.
Write a program that finds the two shortest segments that connect them (without
going back to the starting point). When determining the listing order, use the
order with the lowest numerical value (see the figure in the hints for more
information).</p>

<p class=MsoNormal>The <b>input</b> comes as an array of 6 numbers. The order
is <strong><span style='font-family:"Calibri","sans-serif"'>[x1, y1, x2, y2,
x3, y3]</span></strong>.</p>

<p class=MsoNormal>The <b>output</b> is the return value of your program as a
string, representing the order in which the three points must be visited and
the final distance between them. See the examples for more info.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=454
 style='width:340.2pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas'>[0, 0, 2, 0, 4, 0]</span></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1-&gt;2-&gt;3: 4</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=454
 style='width:340.2pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas'>[5, 1, 1, 1, 5, 4]</span></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>2-&gt;1-&gt;3: 7</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=454
 style='width:340.2pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas'>[-1, -2, 3.5, 0, 0, 2]</span></p>
  </td>
  <td width=227 valign=top style='width:170.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>1-&gt;3-&gt;2: 8.154234499766936</span></p>
  </td>
 </tr>
</table>

<h3>Hints</h3>

<p class=MsoNormal><img width=302 height=220 src="README.md_files/image010.jpg"
align=right hspace=12>You can find the horizontal and vertical offset between
two points by calculating the difference between their coordinates. Use
Pythagoras’ theorem to find the distance.</p>

<p class=MsoNormal>If more than one shortest paths exist, choose the one with
lowest numerical value. For instance, in the figure on the right, 1<span
style='font-family:Wingdings'>&agrave;</span>2<span style='font-family:Wingdings'>&agrave;</span>3
is the same distance as 3<span style='font-family:Wingdings'>&agrave;</span>2<span
style='font-family:Wingdings'>&agrave;</span>1, but we chose to start at 1,
since it’s lower than 3. When choosing the second point, we encounter the same
issue – 1<span style='font-family:Wingdings'>&agrave;</span>3<span
style='font-family:Wingdings'>&agrave;</span>2 would be the same as 1<span
style='font-family:Wingdings'>&agrave;</span>2<span style='font-family:Wingdings'>&agrave;</span>3,
but we chose to visit 2 first, because it’s lower than 3.</p>

<h2>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>*Radio
Crystals</h2>

<p class=MsoNormal>It’s time to put your skills to work for the war effort –
creating management software for a radio transmitter factory. Radios require a
finely tuned quartz crystal in order to operate at the correct frequency. The
resource used to produce them is quartz ore that comes in big chunks and needs
to undergo several processes, before it reaches the desired properties.</p>

<p class=MsoNormal>You need to write a JS program that monitors the current
thickness of the crystal and recommends the next procedure that will bring it
closer to the desired frequency. To reduce waste and the time it takes to make
each crystal your program needs to complete the process with the least number
of operations. Each operation takes the same amount of time, but since they are
done at different parts of the factory, the crystals have to be transported and
thoroughly washed every time an operation different from the previous must be
performed, so this must also be taken into account. When determining the order,
always attempt to start from the operation that removes the largest amount of
material.</p>

<p class=MsoNormal>The different operations you can perform are the following:</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>Cut</span> – cuts the crystal in 4</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>Lap</span> – removes 20% of the crystal’s
thickness</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>Grind</span> – removes 20 microns of
thickness</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>Etch</span> – removes 2 microns of thickness</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>X-ray</span> – increases the thickness of
the crystal by 1 micron; this operation can only be done once!</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>Transporting and washing </span>– <span
lang=BG>removes any imperfections smaller than 1</span> micron (round down the
number)<span lang=BG>; </span>do this after every batch of operations that
remove material</p>

<p class=MsoNormal>At the beginning of your program, you will receive a number
representing the desired final thickness and a series of numbers, representing
the thickness of crystal ore in microns. Process each chunk and print to the
console the order of operations and number of times they need to be repeated to
bring them to the desired thickness.</p>

<p class=MsoNormal>The <b>input</b> comes as a numeric array with a variable
number of elements. The first number is the target thickness and all following
numbers are the thickness of different chunks of quartz ore.</p>

<p class=MsoNormal>The <b>output</b> is the order of operation and how many
times they are repeated, every operation on a new line. See the examples for
more information.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=529
 style='width:396.85pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=302 valign=top style='width:226.75pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[1375, 50000]</span></p>
  </td>
  <td width=302 valign=top style='width:226.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Processing
  chunk 50000 microns</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Cut x2</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Transporting
  and washing</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Lap x3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Transporting
  and washing</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Grind x11</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Transporting
  and washing</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Etch x3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Transporting
  and washing</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>X-ray x1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Finished crystal
  1375 microns</span></p>
  </td>
 </tr>
</table>

<h4>Explanation</h4>

<p class=MsoNormal>The operation that would remove the most material is always
cutting – it removes three quarters of the chunk. Starting from 50000, if we
perform it twice, we bring the chunk down to 3125. If we cut again, the chunk
will be 781.25, which is less than the desired thickness, so we move to the
next operation, but we first round down the number (transporting &amp;
washing). Next, we lap the chunk – after three operations, the crystal reaches
1600 microns. One more lapping would take it to 1280, so we move on to the next
operation instead. We do the same check with grinding, and finally by etching 2
times, the crystal has reached 1376 microns, which is one more than desired. We
don’t have an operation which only takes away 1 micron, so instead we etch once
more to get to 1374, wash and then x-ray to add 1 micron, which brings us to
the desired thickness.</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=529
 style='width:396.85pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=302 valign=top style='width:226.75pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=227 valign=top style='width:170.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>[1000, 4000, 8100]</span></p>
  </td>
  <td width=302 valign=top style='width:226.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Processing
  chunk 4000 microns</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Cut x1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Transporting
  and washing</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Finished crystal
  1000 microns</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Processing
  chunk 8100 microns</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Cut x1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Transporting
  and washing</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Lap x3</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Transporting
  and washing</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Grind x1</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Transporting
  and washing</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Etch x8</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Transporting
  and washing</span></p>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-family:Consolas;color:black'>Finished crystal
  1000 microns</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<h2>10.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>**DNA
Helix</h2>

<p class=MsoNormal>Write a JS program that prints a DNA helix with length,
specified by the user. The helix has a repeating structure, but the symbol in
the chain follows the sequence ATCGTTAGGG. See the examples for more
information.</p>

<p class=MsoNormal>The <b>input</b> comes as a single number. It represents the
length of the required helix.</p>

<p class=MsoNormal>The <b>output</b> is the completed structure, printed on the
console.</p>

<h3>Examples</h3>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=402
 style='width:301.5pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=76 valign=top style='width:56.7pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
  <td width=24 rowspan=2 valign=top style='width:.25in;border:none;border-right:
  solid windowtext 1.0pt;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>&nbsp;</b></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Input</b></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border:solid windowtext 1.0pt;
  border-left:none;background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b>Output</b></p>
  </td>
 </tr>
 <tr>
  <td width=76 valign=top style='width:56.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>4</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span style='font-size:10.0pt;font-family:"Courier New";
  color:black'>**AT**<br>
  *C--G*<br>
  T----T<br>
  *A--G*</span></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:Consolas'>10</span></p>
  </td>
  <td width=113 valign=top style='width:85.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:2.85pt 4.25pt 2.85pt 4.25pt'><pre style='background:white'><span
  style='color:black'>**AT**<br>
*C--G*<br>
T----T<br>
*A--G*<br>
**GG**<br>
*A--T*<br>
C----G<br>
*T--T*<br>
**AG**<br>
*G--G*</span></pre></td>
 </tr>
</table>

<h2 style='margin-left:0in;text-indent:0in'>&nbsp;</h2>

</div>

</body>

</html>
