let tab = "&nbsp;"
let tab5 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
let tab4 = "&nbsp;&nbsp;&nbsp;&nbsp;"
let tab3 = "&nbsp;&nbsp;&nbsp;"
let tab2 = "&nbsp;"
let br = "<br>"
let tr = "`--------` "

let py = `
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&#8209;&quot; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;&#8209;.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|, &nbsp;&nbsp;.&#8209;. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&#8209;. &nbsp;&nbsp;,|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| )(__/&nbsp;&nbsp;&nbsp;&nbsp;\\__)( |<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^^ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\__|IIIIII|__/ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| \\IIIIII/ |<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tr}<br>

`
var typed = new Typed(".write",{
    strings : [py],
    typeSpeed : 50,
    backSpeed : 100,
    looped : true
})