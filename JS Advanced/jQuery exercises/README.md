<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<meta name=Generator content="Microsoft Word 14 (filtered)">

</head>

<body lang=EN-US link=blue vlink=purple>

<div class=WordSection1>

<h1>Exercises: jQuery, DOM and Events</h1>

<p class=MsoNormal>Problems for exercises and homework for the <a
href="https://softuni.bg/courses/javascript-advanced">“JavaScript Advanced”
course @ SoftUni</a>. Submit your solutions in the SoftUni judge system at <a
href="https://judge.softuni.bg/Contests/278/jQuery-and-DOM">https://judge.softuni.bg/Contests/278/jQuery-and-DOM</a>.</p>

<h2>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Increment
Counter</h2>

<p class=MsoNormal>You are tasked with creating a piece of <b>HTML</b>
dynamically using JavaScript and <b>appending</b> it to a given element using a
passed in <b>selector</b>.</p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>incrementCounter.html</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
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
  style='font-family:Consolas;color:black'>&gt;Increment Counter&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.0.min.js&quot;<br>
              </span></b><b><span style='font-family:Consolas;color:blue'>integrity=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=&quot;<br>
              </span></b><b><span style='font-family:Consolas;color:blue'>crossorigin=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;anonymous&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>div </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;wrapper&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;/</span><b><span style='font-family:Consolas;color:navy'>div</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;incrementCounter.js&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
          </span><b><span style='font-family:Consolas;color:#660E7A'>window</span></b><span
  style='font-family:Consolas;color:black'>.</span><span style='font-family:
  Consolas;color:#7A7A43'>onload </span><span style='font-family:Consolas;
  color:black'>= </span><b><span style='font-family:Consolas;color:navy'>function</span></b><span
  style='font-family:Consolas;color:black'>(){<br>
              <i>increment</i>(</span><b><span style='font-family:Consolas;
  color:green'>&quot;#wrapper&quot;</span></b><span style='font-family:Consolas;
  color:black'>);<br>
          }<br>
      &lt;/</span><b><span style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>incrementCounter.js</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>increment</span></i><span
  style='font-family:Consolas;color:black'>() {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>Your function will receive a <b>string </b>value
representing a <b>selector</b> (for example &quot;<span class=CodeChar>#wrapper</span>&quot;
or &quot;<span class=CodeChar>.root</span>&quot;), all elements created should
be appended to the <b>selector</b>.  </p>

<p class=MsoNormal>The HTML you create should contain 4 elements:</p>

<p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
margin-bottom:10.0pt;margin-left:.5in;text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>&lt;textarea&gt;</span> with <span
class=CodeChar>class=&quot;counter&quot;</span>, <span class=CodeChar>value=&quot;0&quot;</span>
and the <span class=CodeChar>disabled</span> attribute.</p>

<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:10.0pt;margin-left:.5in;text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>&lt;button&gt;</span> with <span
class=CodeChar>class=&quot;btn&quot;</span>, <span class=CodeChar>id=&quot;incrementBtn&quot;</span>
and text &quot;<b>Increment</b>&quot;.</p>

<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:10.0pt;margin-left:.5in;text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>&lt;button&gt;</span> with <span
class=CodeChar>class=&quot;btn&quot;</span>, <span class=CodeChar>id=&quot;addBtn&quot;</span>
and text &quot;<b>Add</b>&quot;.</p>

<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
margin-bottom:10.0pt;margin-left:.5in;text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Unordered list <span class=CodeChar>&lt;ul&gt;</span> with <span
class=CodeChar>class=&quot;results&quot;</span>.</p>

<p class=MsoNormal>When the <span class=CodeChar>[Increment]</span> is clicked
the value of the <b>textarea</b> should go up by <b>one</b> (if it was 0 it
should become 1 e.t.c.). When the <span class=CodeChar>[Add]</span> is clicked
a new list item (<span class=CodeChar>&lt;li&gt;</span>) with text equal to the
current value of the textarea should be added to the unordered list.</p>

<p class=MsoNormal>Submit in the judge the JS code (implementation) of the
above function. It may hold other functions in its body.</p>

<h3>Screenshots</h3>

<p class=MsoNormal><img border=0 width=530 height=217 id="Picture 89"
src="README.md_files/image001.jpg"></p>

<p class=MsoNormal><img border=0 width=530 height=140 id="Picture 91"
src="README.md_files/image002.jpg"></p>

<h3>Hints</h3>

<p class=MsoNormal>We’ll start off by creating the needed elements and parsing
the <b>selector</b>, we can do it easily with <b>jQuery</b> like this:</p>

<p class=MsoNormal align=center style='text-align:center'><img border=0
width=695 height=205 id="Picture 6" src="README.md_files/image003.png"></p>

<p class=MsoNormal>Adding multiple elements to the DOM can be expensive,
instead of repeatedly adding to the DOM we can create a <span class=CodeChar>DocumentFragment</span>
and <b>add</b> the elements to it instead. When we have built our hierarchy we
can <b>append the</b> <span class=CodeChar>DocumentFragment</span> to the DOM,
which will add all of the fragment’s elements to the specified selector.<br>
<br>
The next step is to <b>add values</b>, and <b>attributes</b> to the <b>elements</b>
and <b>events</b> to the <b>buttons</b>:</p>

<p class=MsoNormal align=center style='text-align:center'><img border=0
width=606 height=618 id="Picture 11" src="README.md_files/image004.png"></p>

<p class=MsoNormal>The last step is to <b>add</b> our elements to the DOM:</p>

<p class=MsoNormal align=center style='text-align:center'><img border=0
width=358 height=150 id="Picture 95" src="README.md_files/image005.jpg"></p>

<p class=MsoNormal>Our code is now ready to be submitted to Judge.</p>

<h2>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Timer</h2>

<p class=MsoNormal>You will be given an <b>HTML</b> file, containing the markup
of a<b> timer</b> with spans for <b>seconds</b>, <b>minutes</b> and <b>hours</b>
and buttons to <span class=CodeChar>[Start]</span> and <span class=CodeChar>[Pause]</span>
the timer. Your task is to create a JavaScript application that <b>starts</b>
the timer whenever the <span class=CodeChar>[Start]</span> button is pressed and
<b>pauses</b> it when the <span class=CodeChar>[Pause]</span> button is
pressed.</p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>timer.html</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
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
  style='font-family:Consolas;color:black'>&gt;Timer&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>title</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.0.min.js&quot;<br>
              </span></b><b><span style='font-family:Consolas;color:blue'>integrity=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=&quot;<br>
              </span></b><b><span style='font-family:Consolas;color:blue'>crossorigin=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;anonymous&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>style</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
          </span><b><span style='font-family:Consolas;color:navy'>#timer </span></b><span
  style='font-family:Consolas;color:black'>{<br>
              </span><b><span style='font-family:Consolas;color:blue'>font-size</span></b><span
  style='font-family:Consolas;color:black'>: </span><span style='font-family:
  Consolas;color:blue'>5</span><b><span style='font-family:Consolas;color:green'>em</span></b><span
  style='font-family:Consolas;color:black'>;<br>
          }<br>
      &lt;/</span><b><span style='font-family:Consolas;color:navy'>style</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>head</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>div </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;timer&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>span </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;hours&quot; </span></b><b><span
  style='font-family:Consolas;color:blue'>class=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;timer&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;00&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>span</span></b><span
  style='font-family:Consolas;color:black'>&gt;:<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>span </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;minutes&quot; </span></b><b><span
  style='font-family:Consolas;color:blue'>class=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;timer&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;00&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>span</span></b><span
  style='font-family:Consolas;color:black'>&gt;:<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>span </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;seconds&quot; </span></b><b><span
  style='font-family:Consolas;color:blue'>class=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;timer&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;00&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>span</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>button </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;start-timer&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;Start&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>button</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span style='font-family:Consolas;color:navy'>button </span></b><b><span
  style='font-family:Consolas;color:blue'>id=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;stop-timer&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;Stop&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>button</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>div</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>script </span></b><b><span
  style='font-family:Consolas;color:blue'>src=</span></b><b><span
  style='font-family:Consolas;color:green'>&quot;timer.js&quot;</span></b><span
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
      </span><b><span style='font-family:Consolas;color:#660E7A'>window</span></b><span
  style='font-family:Consolas;color:black'>.</span><span style='font-family:
  Consolas;color:#7A7A43'>onload</span><span style='font-family:Consolas;
  color:black'>=</span><b><span style='font-family:Consolas;color:navy'>function</span></b><span
  style='font-family:Consolas;color:black'>(){<br>
          <i>timer</i>();<br>
      }<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>script</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>body</span></b><span
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span style='font-family:Consolas;color:navy'>html</span></b><span
  style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>timer.js</p>
  </td>
 </tr>
 <tr>
  <td width=51 valign=top style='width:38.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>timer</span></i><span
  style='font-family:Consolas;color:black'>() {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>Submit in the judge the JS code (implementation) of the
above function. It may hold other functions in its body.</p>

<h3>Constraints</h3>

<p class=MsoListParagraph style='text-indent:-.25in'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The initial value of the timer must always be <b>00:00:00</b></p>

<h3>Hints</h3>

<p class=MsoNormal>Note the spans have unique <span class=CodeChar>id</span>
values – we can use these to select and modify the elements with <b>jQuery</b>.</p>

<p class=MsoNormal><img border=0 width=479 height=156 id="Picture 97"
src="README.md_files/image006.jpg"></p>

<p class=MsoNormal>JavaScript has a built-in function <span class=CodeChar>setInterval()</span>
for executing and repeating an action after a set period of time. It returns an
object which can later be used to stop the execution with <span class=CodeChar>clearInterval()</span>.</p>

<p class=MsoNormal><img border=0 width=389 height=182 id="Picture 98"
src="README.md_files/image007.jpg"></p>

<p class=MsoNormal>The <b>first argument</b> can be an inline declaration or a <b>named
function</b>. The <b>second argument</b> is the <b>time interval</b>, specified
in <b>milliseconds</b>. We can easily attach these two functions to the click
event of a button.</p>

<p class=MsoNormal>To get and set the text of a markup element you can either
use its <span class=CodeChar>textContent</span> property, or jQuery’s <span
class=CodeChar>text()</span> function.</p>

<p class=MsoNormal>Keep in mind that that you should only have one <span
class=CodeChar>setInterval()</span> function active when the the timer is
working, multiple presses of the <span class=CodeChar>[Start]</span> button
should not attach more <span class=CodeChar>setInterval()</span> functions as
that would break the correct operation of the timer. </p>

<h2>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Book
Generator</h2>

<p class=MsoNormal>Create a function that accepts a <span class=CodeChar>selector</span>,
a <span class=CodeChar>title</span>, an <span class=CodeChar>author</span> and
an <span class=CodeChar>ISBN</span> and <b>uses</b> them to <b>create</b> the <b>HTML
code</b> for a <b>book</b> and <b>inserts it</b> into the <b>selector</b>. </p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>book-generator.html</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span lang=BG style='font-family:Consolas;color:black'>&lt;!DOCTYPE
  </span><b><span lang=BG style='font-family:Consolas;color:blue'>html</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>html </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>lang=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;en&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>head</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>meta </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>charset=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;UTF-8&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>title</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;Book Generator&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>title</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>script
  </span></b><b><span lang=BG style='font-family:Consolas;color:blue'>src=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.0.min.js&quot;<br>
              </span></b><b><span lang=BG style='font-family:Consolas;
  color:blue'>integrity=</span></b><b><span lang=BG style='font-family:Consolas;
  color:green'>&quot;sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=&quot;<br>
              </span></b><b><span lang=BG style='font-family:Consolas;
  color:blue'>crossorigin=</span></b><b><span lang=BG style='font-family:Consolas;
  color:green'>&quot;anonymous&quot;</span></b><span lang=BG style='font-family:
  Consolas;color:black'>&gt;&lt;/</span><b><span lang=BG style='font-family:
  Consolas;color:navy'>script</span></b><span lang=BG style='font-family:Consolas;
  color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>head</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>body</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>div </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>id=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;wrapper&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  <br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>div</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>script </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>src=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;book</span></b><b><span
  style='font-family:Consolas;color:green'>-g</span></b><b><span lang=BG
  style='font-family:Consolas;color:green'>enerator.js&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>script</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>script</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      window.onload = </span><b><span lang=BG style='font-family:Consolas;
  color:navy'>function </span></b><span lang=BG style='font-family:Consolas;
  color:black'>() {<br>
          <i>createBook</i>(</span><b><span lang=BG style='font-family:Consolas;
  color:green'>&quot;#wrapper&quot;</span></b><span lang=BG style='font-family:
  Consolas;color:black'>, </span><b><span lang=BG style='font-family:Consolas;
  color:green'>&quot;Alice in Wonderland&quot;</span></b><span lang=BG
  style='font-family:Consolas;color:black'>, </span><b><span lang=BG
  style='font-family:Consolas;color:green'>&quot;Lewis Carroll&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>, </span><span lang=BG
  style='font-family:Consolas;color:blue'>1111</span><span lang=BG
  style='font-family:Consolas;color:black'>);<br>
      }<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>script</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>body</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>html</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>book-generator.js</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>createBook</span></i><span
  style='font-family:Consolas;color:black'>() {<br>
  </span><span style='font-family:Consolas;color:black'>    </span><i><span
  style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>Your function will receive <b>4 parameters</b> - a <b>string
value</b> representing a <span class=CodeChar>selector </span>(for example <span
class=CodeChar><span style='font-weight:normal'>&quot;</span>#wrapper</span><span
class=CodeChar><span style='font-weight:normal'>&quot;</span></span> or &quot;<span
class=CodeChar>.root</span>&quot;), a <b>string value</b> representing the <span
class=CodeChar>title</span><b> </b>of the book, a <b>string value</b>
representing the <span class=CodeChar>author</span><b> </b>of the book and a <b>number</b>
representing the <span class=CodeChar>ISBN </span>of the book. <b>After</b> the
book is <b>created</b> it should be <b>attached</b> to the passed in <b>selector</b>.</p>

<p class=MsoNormal>The <b>number</b> in the <span class=CodeChar>Id</span> of
the containing <span class=CodeChar>div</span> should be <b>incremented</b> by <b>one</b>
<b>for each successive book created</b> (i.e. first book should have <span
class=CodeChar>id = &quot;book1&quot;</span>, second <span class=CodeChar>id =
&quot;book2&quot;</span> and so on…). The <span class=CodeChar>title</span>, <span
class=CodeChar>author</span> and <span class=CodeChar>ISBN</span> should be <b>paragraphs</b>
with a <span class=CodeChar>class</span> equal to their <b>respective role</b>
- <span class=CodeChar>class=&quot;title&quot;</span> for the <b>title
paragraph</b>, <span class=CodeChar>class=&quot;author&quot;</span> for the <b>author
paragraph</b> and <span class=CodeChar>class=&quot;isbn&quot;</span> for the <b>ISBN
paragraph</b>. A book should also contain <b>2 buttons</b> – <span
class=CodeChar>[Select] </span>and <span class=CodeChar>[Deselect]</span>, when
the <span class=CodeChar>[Select]</span> button is pressed the border of the <span
class=CodeChar>div</span> element should be set to &quot;<span class=CodeChar>2px
solid blue</span>&quot;. When the <span class=CodeChar>[Deselect]</span> button
is pressed it should be set to &quot;<span class=CodeChar>none</span>&quot;.</p>

<h3>Screenshots</h3>

<p class=MsoNormal>The HTML code for a book should have the following
structure:</p>

<p class=MsoNormal><img border=0 width=391 height=130 id="Picture 5"
src="README.md_files/image008.jpg"><img border=0 width=290 height=326
id="Picture 10" src="README.md_files/image009.jpg"></p>

<p class=MsoNormal>Selected book:</p>

<p class=MsoNormal><img border=0 width=525 height=200 id="Picture 7"
src="README.md_files/image010.png"></p>

<p class=MsoNormal><img border=0 width=695 height=275 id="Picture 9"
src="README.md_files/image011.jpg"></p>

<h3>Hints</h3>

<p class=MsoNormal>You can use what is known as an <b>IIFE</b> (Immediately
Invoked Function Expression) to declare and instantly execute a function that
will keep the id variable in its scope. This way you will receive the inner
function and for it the variable <span class=CodeChar>id</span> will be <b>shared
between all calls</b>, essentially becoming like a <b>static variable</b> for
the function:</p>

<p class=MsoNormal><img border=0 width=696 height=150 id="Picture 8"
src="README.md_files/image012.jpg"></p>

<p class=MsoNormal>An <b>element’s</b> <b>css properties</b> can easily be
changed with <b>jQuery</b> in the following way:</p>

<p class=MsoNormal><img border=0 width=473 height=28 id="Picture 12"
src="README.md_files/image013.jpg"></p>

<h2>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>Form
Validation</h2>

<p class=MsoNormal>You are given the task to write <b>validation</b> for the
fields of a simple form.</p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are provided a <b>skeleton</b> containing the necessary
files for your program.</p>

<p class=MsoNormal>The validations should be as follows:</p>

<p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
margin-bottom:10.0pt;margin-left:.5in;text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <span class=CodeChar>username</span> needs to be between <b>3</b>
and <b>20</b> symbols <b>inclusively</b> and only <b>letters</b> and <b>numbers</b>
are allowed.</p>

<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:10.0pt;margin-left:.5in;text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <span class=CodeChar>password</span> and <span
class=CodeChar>confirm-password</span> must be between <b>5</b> and <b>15</b> <b>inclusively</b>
symbols and only <b>word characters</b> are allowed (<b>letters</b>, <b>numbers</b>
and <b>_</b>).</p>

<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:10.0pt;margin-left:.5in;text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>inputs</b> of the <span class=CodeChar>password</span> and
<span class=CodeChar>confirm-password</span> field <b>must match</b>.</p>

<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
margin-bottom:10.0pt;margin-left:.5in;text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <span class=CodeChar>email </span>field must contain the “<b>@</b>”
symbol and <b>at least one</b> &quot;<b>.</b>&quot;(<b>dot</b>) after it.</p>

<p class=MsoNormal style='margin-left:.25in'>If the &quot;<span class=CodeChar>Is
company?</span>&quot; checkbox is <span class=CodeChar>checked</span>, the <span
class=CodeChar>CompanyInfo</span> fieldset should become <b>visible</b> and the
<span class=CodeChar>Company Number</span> field must also be <b>validated</b>,
if it isn’t checked the <span class=CodeChar>Company</span> fieldset should
have the style <span class=CodeChar>&quot;display: none;&quot;</span> and the <b>value</b>
of the <span class=CodeChar>Company Number</span> field shouldn’t matter. </p>

<p class=MsoListParagraph style='margin-top:0in;margin-right:0in;margin-bottom:
10.0pt;margin-left:.5in;text-indent:-.25in'><span style='font-family:Symbol'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <span class=CodeChar>Company Number</span> field must be a
number between <b>1000</b> and <b>9999</b>.</p>

<p class=MsoNormal>Every field with an <b>incorrect</b> value when the <span
class=CodeChar>[Submit]</span> button is <b>pressed</b> should have the
following style applied <span class=CodeChar>border-color: red;</span>,
alternatively if it’s correct it should have style <span class=CodeChar>border:
none;</span>. If there are <b>required fields</b> with an incorrect value when
the <span class=CodeChar>[Submit]</span> button is pressed, the <span
class=CodeChar>div </span>with <span class=CodeChar>id=&quot;valid&quot;</span>
should become <b>hidden</b> (<b>&quot;</b><span class=CodeChar>display: none;&quot;</span>),
<b>alternatively</b> if all fields are correct the <span class=CodeChar>div</span>
should become <b>visible</b>.</p>

<h3>Constraints</h3>

<p class=MsoListParagraph style='margin-top:0in;margin-right:0in;margin-bottom:
10.0pt;margin-left:.5in;text-indent:-.25in'><span lang=EN-GB style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>You are NOT allowed to change the HTML or CSS files provided.</b></p>

<h3>Screenshots</h3>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;
margin-left:0in'><b><img border=0 width=532 height=311 id="Picture 19"
src="README.md_files/image014.jpg"><img border=0 width=536 height=396
id="Picture 83" src="README.md_files/image015.jpg"></b></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;
margin-left:0in'><b><img border=0 width=544 height=348 id="Picture 84"
src="README.md_files/image016.jpg"></b></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;
margin-left:0in'><b><img border=0 width=550 height=440 id="Picture 88"
src="README.md_files/image017.jpg"></b></p>

<h3>Hints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Use <span class=CodeChar>addEventListener()</span> or jQuery’s <span
class=CodeChar>on()</span> function to <b>attach</b> an <b>event listener</b>
for the &quot;<span class=CodeChar>change</span>&quot; event to the <b>checkbox</b>.</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>All buttons within a <span class=CodeChar>&lt;form&gt;</span>
automatically work as <b>submit</b> buttons, unless their type is <b>manually</b>
<b>assigned</b> to something else, in order to avoid <b>reloading</b> <b>the
page</b> upon <b>clicking</b> the <span class=CodeChar>[Submit]</span> button
you can add the following code in the function that handles the on click event:</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=303 height=47
id="Picture 13" src="README.md_files/image018.jpg"></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The validation for the separate fields can be done using <b>regex</b>.</p>

<h2>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>DOM Search</h2>

<p class=MsoNormal>Write a JS function that <b>generates a form</b> for
managing a list of items and inserts it in an HTML document by given <b>selector</b>
(e.g. by <span class=CodeChar>div id</span>). </p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>dom-search.html</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'><pre style='background:
  white'><span lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>&lt;!DOCTYPE </span><b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:blue'>html</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;<br>
&lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>html </span></b><b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:blue'>lang=</span></b><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>&quot;en&quot;</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;<br>
&lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>head</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>&gt;<br>
    &lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>meta </span></b><b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:blue'>charset=</span></b><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>&quot;UTF-8&quot;</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;<br>
    &lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>title</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>&gt;DOM Search&lt;/</span><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:navy'>title</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;<br>
    &lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>script </span></b><b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:blue'>src=</span></b><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.0.min.js&quot;<br>
            </span></b><b><span style='font-size:11.0pt;font-family:Consolas;
  color:blue'>integrity=</span></b><b><span style='font-size:11.0pt;font-family:
  Consolas;color:green'>&quot;sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=&quot;<br>
  </span></b><b><span style='font-size:11.0pt;font-family:Consolas;color:blue'>            crossorigin=</span></b><b><span
  style='font-size:11.0pt;font-family:Consolas;color:green'>&quot;anonymous&quot;</span></b><span
  style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  style='font-size:11.0pt;font-family:Consolas;color:navy'>script</span></b><span
  style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;</span><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'><br>
    &lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>style</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>&gt;<br>
        .</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>add-controls</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>, .</span><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:navy'>search-controls </span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>{<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>width</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>: </span><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:blue'>20</span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:green'>em</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>height</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:blue'>2</span><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>em</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
        }<br>
        </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>input </span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>{<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>position</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:green'>absolute</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>left</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>:</span><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:blue'>6</span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:green'>em</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
        }<br>
        .</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>button </span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>{<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>background-color</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:green'>darkgrey</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>color</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>: </span><b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:green'>white</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>font-weight</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:green'>bold</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>position</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:green'>absolute</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>left</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>: </span><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:blue'>15</span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:green'>em</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>border</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:blue'>1</span><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>px solid black</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>padding</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:blue'>0 5</span><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>px </span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:blue'>0 5</span><b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:green'>px</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
        }<br>
        .</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>result-controls </span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>.</span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:navy'>button </span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>{<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>position</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:green'>relative</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>left</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>: </span><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:blue'>0</span><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>font-size</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:blue'>50</span><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>%;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>margin-right</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>:</span><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:blue'>1</span><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>em</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>padding</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:blue'>0</span><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>bottom</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:blue'>3</span><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>px</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
        }<br>
        </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>li </span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>{<br>
            </span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:blue'>list-style-type</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>: </span><b><span lang=BG style='font-size:
  11.0pt;font-family:Consolas;color:green'>none</span></b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:black'>;<br>
        }<br>
    &lt;/</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>style</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>&gt;<br>
&lt;/</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>head</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>&gt;<br>
&lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>body</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>&gt;<br>
&lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>div </span></b><b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:blue'>id=</span></b><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>&quot;content&quot;</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:navy'>div</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;<br>
&lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>script </span></b><b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:blue'>src=</span></b><b><span lang=BG
  style='font-size:11.0pt;font-family:Consolas;color:green'>&quot;</span></b><b><span
  style='font-size:11.0pt;font-family:Consolas;color:green'>dom</span></b><b><span
  style='font-size:11.0pt;font-family:Consolas;color:green'>-search</span></b><b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:green'>.js&quot;</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:navy'>script</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>&gt;<br>
&lt;</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>script</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>&gt;<br>
    </span><i><span style='font-size:11.0pt;font-family:Consolas;color:black'>domSearch</span></i><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>(</span><b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:green'>&quot;#content&quot;</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>,</span><b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:navy'>false</span></b><span
  lang=BG style='font-size:11.0pt;font-family:Consolas;color:black'>);<br>
&lt;/</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>script</span></b><span lang=BG style='font-size:11.0pt;
  font-family:Consolas;color:black'>&gt;<br>
&lt;/</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>body</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>&gt;<br>
&lt;/</span><b><span lang=BG style='font-size:11.0pt;font-family:Consolas;
  color:navy'>html</span></b><span lang=BG style='font-size:11.0pt;font-family:
  Consolas;color:black'>&gt;</span></pre></td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>dom-search.js</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>domSearch</span></i><span
  style='font-family:Consolas;color:black'>() {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Your function will receive <b>two arguments</b> – the <b>first</b>
is a <b>selector</b> to an HTML element, the <b>second</b> is a <b>Boolean
value</b>, indicating whether the search function is <b>case-sensitive</b>. If
set to <span class=CodeChar>true</span>, searches are case sensitive, if set to
<span class=CodeChar>false</span>, or not set, searches ignore casing.</p>

<p class=MsoNormal>The user must be able to:</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Add a new item with specified string content. </p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Delete an existing element. </p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Search for all elements containing a given string.</p>

<p class=MsoNormal>Each of the controls must be in a separate <span
class=CodeChar>div</span>. Place the add controls inside a <span
class=CodeChar>div</span> with a class <span class=CodeChar>add-controls</span>,
and provide a <span class=CodeChar>label</span> with the text “<span
class=CodeChar>Enter text:</span>”, an <b>empty input field</b> and an <span
class=CodeChar>anchor</span> with the class <span class=CodeChar>button</span>
applied to it. The <span class=CodeChar>anchor</span> acts as an <b>add button</b>
and when the user presses it, a <b>new item must be added to the list</b>,
using the string in the <b>input field</b> as its <b>name</b>.</p>

<p class=MsoNormal>Place the search controls inside a <span class=CodeChar>div</span>
with a class <span class=CodeChar>search-controls</span>, and provide a <span
class=CodeChar>label</span> with the text &quot;<b>Search:</b>&quot; and an
empty input field. When the user starts typing, the list of items should
display <b>only the items</b> that <b>contain</b> the given string. The search <b>is
case-sensitive only if specified with an argument</b>. When nothing is entered,
the list will contain all elements.</p>

<p class=MsoNormal>Place the result controls inside a <span class=CodeChar>div</span>
with a class <span class=CodeChar>result-controls</span> and in a list of class
<span class=CodeChar>items-list</span>. Each element has the class <span
class=CodeChar>list-item</span>. When the list is filtered with a search, all
elements that need to be left out must be applied a style of <span
class=CodeChar>display:none;</span>. Don’t forget to <b>remove the style</b>
after the search string is <b>removed</b>!</p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;
margin-left:0in'>Every element is composed of an <span class=CodeChar>anchor</span>
with inner text &quot;<span class=CodeChar>X</span>&quot; functioning as a <b>delete
button</b> and its name wrapped in a <span class=CodeChar>&lt;strong&gt;</span>
tag. The anchor has the class <span class=CodeChar>button</span>. When the
button is clicked, the element is <b>deleted</b> from the list.</p>

<h3>Screenshots<br>
<img border=0 width=345 height=224 id="Picture 90"
src="README.md_files/image019.jpg"><img border=0 width=342 height=157
id="Picture 99" src="README.md_files/image020.jpg"></h3>

<h3>Hints</h3>

<p class=MsoNormal>Take a look at the following screenshot – it contains the
HTML hierarchy for the form you see in the previous images. Note the last three
elements in the list are set to style <span class=CodeChar>display:none;</span>,
which will hide them from view.</p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;
margin-left:0in'><img border=0 width=586 height=445 id="Picture 101"
src="README.md_files/image021.png"></p>

<h2>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>*Calendar</h2>

<p class=MsoNormal>Write a program that <b>generates</b> a monthly calendar by
given date. It should be formatted as an <b>HTML table</b> with a <b>caption</b>
for the month and year and headings for each column for the days of the week.
The current date must be <b>highlighted</b> with a <b>different style</b> than
the rest of the table cells.</p>

<h3>Screenshots</h3>

<p class=MsoNormal><img border=0 width=627 height=339 id="Picture 102"
src="README.md_files/image022.png"></p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<p class=MsoNormal>&nbsp;</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>calendar.html</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span lang=BG style='font-family:Consolas;color:black'>&lt;!DOCTYPE
  </span><b><span lang=BG style='font-family:Consolas;color:blue'>html</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>html </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>lang=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;en&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>head</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>meta </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>charset=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;UTF-8&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>title</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;Calendar&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>title</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>script
  </span></b><b><span lang=BG style='font-family:Consolas;color:blue'>src=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.0.min.js&quot;<br>
              </span></b><b><span lang=BG style='font-family:Consolas;
  color:blue'>integrity=</span></b><b><span lang=BG style='font-family:Consolas;
  color:green'>&quot;sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=&quot;<br>
              </span></b><b><span lang=BG style='font-family:Consolas;
  color:blue'>crossorigin=</span></b><b><span lang=BG style='font-family:Consolas;
  color:green'>&quot;anonymous&quot;</span></b><span lang=BG style='font-family:
  Consolas;color:black'>&gt;&lt;/</span><b><span lang=BG style='font-family:
  Consolas;color:navy'>script</span></b><span lang=BG style='font-family:Consolas;
  color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>style</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
          </span><b><span lang=BG style='font-family:Consolas;color:navy'>table</span></b><span
  lang=BG style='font-family:Consolas;color:black'>, </span><b><span lang=BG
  style='font-family:Consolas;color:navy'>th</span></b><span lang=BG
  style='font-family:Consolas;color:black'>, </span><b><span lang=BG
  style='font-family:Consolas;color:navy'>td </span></b><span lang=BG
  style='font-family:Consolas;color:black'>{<br>
              </span><b><span lang=BG style='font-family:Consolas;color:blue'>border</span></b><span
  lang=BG style='font-family:Consolas;color:black'>: </span><span lang=BG
  style='font-family:Consolas;color:blue'>1</span><b><span lang=BG
  style='font-family:Consolas;color:green'>px solid black</span></b><span
  lang=BG style='font-family:Consolas;color:black'>;<br>
              </span><b><span lang=BG style='font-family:Consolas;color:blue'>padding</span></b><span
  lang=BG style='font-family:Consolas;color:black'>: </span><span lang=BG
  style='font-family:Consolas;color:blue'>0.25</span><b><span lang=BG
  style='font-family:Consolas;color:green'>em</span></b><span lang=BG
  style='font-family:Consolas;color:black'>;<br>
              </span><b><span lang=BG style='font-family:Consolas;color:blue'>margin</span></b><span
  lang=BG style='font-family:Consolas;color:black'>: </span><span lang=BG
  style='font-family:Consolas;color:blue'>0</span><span lang=BG
  style='font-family:Consolas;color:black'>;<br>
              </span><b><span lang=BG style='font-family:Consolas;color:blue'>border-collapse</span></b><span
  lang=BG style='font-family:Consolas;color:black'>: </span><b><span lang=BG
  style='font-family:Consolas;color:green'>collapse</span></b><span lang=BG
  style='font-family:Consolas;color:black'>;<br>
              </span><b><span lang=BG style='font-family:Consolas;color:blue'>border-spacing</span></b><span
  lang=BG style='font-family:Consolas;color:black'>: </span><span lang=BG
  style='font-family:Consolas;color:blue'>0</span><span lang=BG
  style='font-family:Consolas;color:black'>;<br>
          }<br>
          </span><b><span lang=BG style='font-family:Consolas;color:navy'>th</span></b><span
  lang=BG style='font-family:Consolas;color:black'>, </span><b><span lang=BG
  style='font-family:Consolas;color:navy'>td </span></b><span lang=BG
  style='font-family:Consolas;color:black'>{<br>
              </span><b><span lang=BG style='font-family:Consolas;color:blue'>width</span></b><span
  lang=BG style='font-family:Consolas;color:black'>: </span><span lang=BG
  style='font-family:Consolas;color:blue'>2.5</span><b><span lang=BG
  style='font-family:Consolas;color:green'>em</span></b><span lang=BG
  style='font-family:Consolas;color:black'>;<br>
          }<br>
          .</span><b><span lang=BG style='font-family:Consolas;color:navy'>today
  </span></b><span lang=BG style='font-family:Consolas;color:black'>{<br>
              </span><b><span lang=BG style='font-family:Consolas;color:blue'>background-color</span></b><span
  lang=BG style='font-family:Consolas;color:black'>: </span><b><span lang=BG
  style='font-family:Consolas;color:green'>orange</span></b><span lang=BG
  style='font-family:Consolas;color:black'>;<br>
              </span><b><span lang=BG style='font-family:Consolas;color:blue'>color</span></b><span
  lang=BG style='font-family:Consolas;color:black'>: </span><b><span lang=BG
  style='font-family:Consolas;color:green'>white</span></b><span lang=BG
  style='font-family:Consolas;color:black'>;<br>
          }<br>
      &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>style</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>head</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>body</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>div </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>id=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;content&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>div</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>script </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>src=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;</span></b><b><span
  style='font-family:Consolas;color:green'>calendar</span></b><b><span lang=BG
  style='font-family:Consolas;color:green'>.js&quot;</span></b><span lang=BG
  style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span lang=BG
  style='font-family:Consolas;color:navy'>script</span></b><span lang=BG
  style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>script</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      </span><b><span lang=BG style='font-family:Consolas;color:#660E7A'>window</span></b><span
  lang=BG style='font-family:Consolas;color:black'>.</span><span lang=BG
  style='font-family:Consolas;color:#7A7A43'>onload </span><span lang=BG
  style='font-family:Consolas;color:black'>= </span><b><span lang=BG
  style='font-family:Consolas;color:navy'>function</span></b><span lang=BG
  style='font-family:Consolas;color:black'>(){<br>
          </span><i><span style='font-family:Consolas;color:black'>calendar</span></i><span
  lang=BG style='font-family:Consolas;color:black'>([</span><span lang=BG
  style='font-family:Consolas;color:blue'>15</span><span lang=BG
  style='font-family:Consolas;color:black'>,</span><span lang=BG
  style='font-family:Consolas;color:blue'>1</span><span lang=BG
  style='font-family:Consolas;color:black'>,</span><span lang=BG
  style='font-family:Consolas;color:blue'>2017</span><span lang=BG
  style='font-family:Consolas;color:black'>]);<br>
      }<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>script</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>body</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>html</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>calendar.js</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>calendar</span></i><span
  style='font-family:Consolas;color:black'>() {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>Your script needs to insert the generated calendar in the <span
class=CodeChar>#content</span> <span class=CodeChar>div</span>. The resulting
table should have the following format:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>HTML</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span lang=BG style='font-family:Consolas;color:black'>&lt;</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>table</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>caption</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;January 2017&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>caption</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt; </span><i><span
  lang=BG style='font-family:Consolas;color:gray'>&lt;!-- Table caption --&gt;<br>
      </span></i><span lang=BG style='font-family:Consolas;color:black'>&lt;</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>tbody</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>tr</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
          &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>th</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;Mon&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>th</span></b><span lang=BG
  style='font-family:Consolas;color:black'>&gt; </span><i><span lang=BG
  style='font-family:Consolas;color:gray'>&lt;!-- Heading --&gt;<br>
          </span></i><span lang=BG style='font-family:Consolas;color:black'>…<br>
      &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>tr</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>tr</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
          &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>td</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>td</span></b><span lang=BG
  style='font-family:Consolas;color:black'>&gt; </span><i><span lang=BG
  style='font-family:Consolas;color:gray'>&lt;!-- Empty element --&gt;<br>
          </span></i><span lang=BG style='font-family:Consolas;color:black'>…<br>
          &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>td</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;1&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>td</span></b><span lang=BG
  style='font-family:Consolas;color:black'>&gt;<br>
      &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>tr</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>tr</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
          …<br>
          &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>td
  </span></b><b><span lang=BG style='font-family:Consolas;color:blue'>class=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;today&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;15&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>td</span></b><span lang=BG
  style='font-family:Consolas;color:black'>&gt; </span><i><span lang=BG
  style='font-family:Consolas;color:gray'>&lt;!-- Current date is highlighted
  --&gt;<br>
      </span></i><span lang=BG style='font-family:Consolas;color:black'>&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>tr</span></b><span lang=BG
  style='font-family:Consolas;color:black'>&gt;<br>
      …<br>
      &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>tbody</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>table</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;</span><span lang=BG
  style='font-family:Consolas;color:black'> </span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>Your function will receive an array of three numbers
representing a date as follows: <span class=CodeChar>[day, month, year]</span></p>

<h3>Requirements</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Current <b>month</b> and <b>year</b> are listed in a <span
class=CodeChar>&lt;caption&gt;</span> element with the month displayed as a <b>full
capitalized name</b> and the <b>year</b> with <b>all digits</b>;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The <b>first row</b> contains <b>headings</b> for the <b>days</b>
<b>of the week</b>, <b>shortened</b> to <b>3 letters</b>: <b>Mon</b>, <b>Tue</b>,
<b>Wed</b>, etc.;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Each week is a complete row – <b>pad</b> the week with <b>empty
cells</b> (empty string as cell content) if the month <b>doesn’t start on a
Monday</b> or <b>end on a Sunday</b>;</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>The table should contain <b>only as many rows as needed</b> –
some months may need 6 weeks, others just 5.</p>

<h3>Hints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>JavaScript has a built-in <span class=CodeChar>Date</span>
object, which can be used to construct a date with arguments and then extract
the current day of the week using the <span class=CodeChar>getDay()</span>
method. You can familiarize yourself with the object properties here: <a
href="http://www.w3schools.com/jsref/jsref_obj_date.asp">http://www.w3schools.com/jsref/jsref_obj_date.asp</a></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Try setting the day of the <b>month</b> to <b>0</b> and see what
the result will be.</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Notice that the passed in arguments in the example <b>[15, 1,
2017]</b> correspond to <b>15<sup>th</sup> January 2017</b></p>

<h2>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span>**Wiki
Parser</h2>

<p class=MsoNormal>You are tasked by Wikipedia to write a JS program that
parses text according to their internal markup in the browser. Your program
will receive a <b>selector</b> to a <b>paragraph</b> of text and has to scan it
for special symbol combinations that denote specific style for the text that is
enclosed in them. For instance, text surrounded by double single quotes (''<span
class=CodeChar>text</span>'') must be displayed in italics. Look bellow for a
full list of features.</p>

<h3>Screenshots</h3>

<p class=MsoNormal><img border=0 width=583 height=147 id="Picture 18"
src="README.md_files/image023.jpg"></p>

<p class=MsoNormal><img border=0 width=598 height=235 id="Picture 16"
src="README.md_files/image024.jpg"></p>

<p class=MsoNormal><img border=0 width=365 height=24 id="Picture 14"
src="README.md_files/image025.png"></p>

<p class=MsoNormal><img border=0 width=311 height=17 id="Picture 15"
src="README.md_files/image026.png"></p>

<h3>HTML and JavaScript Code</h3>

<p class=MsoNormal>You are given the following <b>HTML</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>wiki-parser.html</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><span lang=BG style='font-family:Consolas;color:black'>&lt;!DOCTYPE
  </span><b><span lang=BG style='font-family:Consolas;color:blue'>html</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>html </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>lang=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;en&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>head</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>meta </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>charset=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;UTF-8&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>title</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;Wiki Parser&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>title</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>script
  </span></b><b><span lang=BG style='font-family:Consolas;color:blue'>src=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;https://code.jquery.com/jquery-3.1.0.min.js&quot;<br>
              </span></b><b><span lang=BG style='font-family:Consolas;
  color:blue'>integrity=</span></b><b><span lang=BG style='font-family:Consolas;
  color:green'>&quot;sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=&quot;<br>
              </span></b><b><span lang=BG style='font-family:Consolas;
  color:blue'>crossorigin=</span></b><b><span lang=BG style='font-family:Consolas;
  color:green'>&quot;anonymous&quot;</span></b><span lang=BG style='font-family:
  Consolas;color:black'>&gt;&lt;/</span><b><span lang=BG style='font-family:
  Consolas;color:navy'>script</span></b><span lang=BG style='font-family:Consolas;
  color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>head</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>body</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>div</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>p </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>id=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;wiki&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
          =Document title=<br>
          ==First segment==<br>
          '''bold 1''' word ''italics 1'' '''bold2'''<br>
          [[hyper first]] '''Bold three''' ''italics2'''<br>
          word [[hyper2]] [[hyperlink2|with Label]]<br>
          ==Second segment==<br>
          ===Third segment===<br>
          word '''word'''[[pipe|bomb]]<br>
      &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>p</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>div</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>script </span></b><b><span
  lang=BG style='font-family:Consolas;color:blue'>src=</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>&quot;</span></b><b><span
  style='font-family:Consolas;color:green'>wiki-parser</span></b><b><span
  lang=BG style='font-family:Consolas;color:green'>.js&quot;</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;&lt;/</span><b><span
  lang=BG style='font-family:Consolas;color:navy'>script</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;</span><b><span lang=BG style='font-family:Consolas;color:navy'>script</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
      </span><b><span lang=BG style='font-family:Consolas;color:#660E7A'>window</span></b><span
  lang=BG style='font-family:Consolas;color:black'>.</span><span lang=BG
  style='font-family:Consolas;color:#7A7A43'>onload </span><span lang=BG
  style='font-family:Consolas;color:black'>= </span><b><span lang=BG
  style='font-family:Consolas;color:navy'>function</span></b><span lang=BG
  style='font-family:Consolas;color:black'>(){<br>
          </span><i><span style='font-family:Consolas;color:black'>wikiParser</span></i><span
  lang=BG style='font-family:Consolas;color:black'>(</span><b><span lang=BG
  style='font-family:Consolas;color:green'>'#wiki'</span></b><span lang=BG
  style='font-family:Consolas;color:black'>);<br>
      }<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>script</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>body</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;<br>
  &lt;/</span><b><span lang=BG style='font-family:Consolas;color:navy'>html</span></b><span
  lang=BG style='font-family:Consolas;color:black'>&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>It comes together with the following <b>JavaScript</b> code:</p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=664
 style='width:498.25pt;margin-left:1.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  background:#D9D9D9;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=Code align=center style='margin:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>wiki-parser.js</p>
  </td>
 </tr>
 <tr>
  <td width=664 valign=top style='width:498.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:2.85pt 4.25pt 2.85pt 4.25pt'>
  <p class=MsoNormal style='margin:0in;margin-bottom:.0001pt;line-height:normal;
  background:white'><b><span style='font-family:Consolas;color:navy'>function </span></b><i><span
  style='font-family:Consolas;color:black'>wikiParser</span></i><span
  style='font-family:Consolas;color:black'>() {<br>
      </span><i><span style='font-family:Consolas;color:gray'>// </span></i><b><i><span
  style='font-family:Consolas;color:#0073BF'>TODO<br>
  </span></i></b><span style='font-family:Consolas;color:black'>}</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>Your function will receive a selector to an HTML element.</p>

<h3>Markup</h3>

<p class=MsoNormal>The following symbols must be recognized and parsed:</p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>''text''</span> becomes <span
class=CodeChar>&lt;i&gt;text&lt;/i&gt;</span> (two single quotes)</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>'''text'''</span> becomes <span
class=CodeChar>&lt;b&gt;text&lt;/b&gt;</span> (three single quotes)</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>=text=</span>, <span class=CodeChar>==text==</span>
and <span class=CodeChar>===text===</span> become <span class=CodeChar>&lt;h1&gt;text&lt;/h1&gt;</span>,
<span class=CodeChar>&lt;h2&gt;text&lt;/h2&gt;</span> and <span class=CodeChar>&lt;h3&gt;text&lt;/h3&gt;</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span class=CodeChar>[[link]]</span> becomes an anchor to <span
class=CodeChar>/wiki/link</span> with the same text, <span class=CodeChar>&lt;a
href=&quot;/wiki/link&quot;&gt;link&lt;/a&gt;</span></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
class=CodeChar><span style='font-family:Symbol;font-weight:normal'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span class=CodeChar>[[link|Text]]</span> becomes an
anchor to <span class=CodeChar>/wiki/link</span> with the argument after the
pipe as text, <span class=CodeChar>&lt;a&nbsp;href=&quot;/wiki/link&quot;&gt;Text&lt;/a&gt;</span></p>

<p class=MsoNormal>Note all resulting hyperlinks are relative to <span
class=CodeChar>/wiki</span></p>

<h3>Constraints</h3>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>There will be no overlapping markup, i.e. there won’t be bold
text inside a heading or a link</p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>All hyperlinks will only consist of valid characters</p>

</div>

</body>

</html>
