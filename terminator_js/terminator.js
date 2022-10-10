_about = ()=>
      print(`Welcome to Σ Terminal, brought to you with ♥ from 
      <a href="https://teamenigma.ml">Team Enigma</a>, Harrow School.<br/>
      We hope you'll find this a useful resource in conjunction with the Cross-Curricular Lecture.<br/>
      Type <code>/help</code> to learn more about how to use Sigma Terminal.<br/>
      You can check out our <a href="https://github.com/PerceptronV/sigma_terminal">source code here</a>.`, html=true, color="white");

_examples = ()=>{
  runTerminal(`// OK. Let's see some examples of using Sigma Terminal.`);
  runTerminal(`// This Terminal runs everything JavaScript, plus some additional functions that Vincent has written up.`);
  runTerminal(`a = 18 // You can define variables`);
  runTerminal(`a * 2 // and operate on them`);
}
    
_help = ()=>
  print(`
  <code>gcd(a, b)</code> : Computes Greatest Common Divisor of <code>a</code> and <code>b</code><br/>
  <code>inv(a, m)</code> : Computes modular inverse of <code>a</code> (modulo <code>m</code>)
  `, html=true);

_links = ()=> print(null);

_slides = ()=> print(null);

_vincent = ()=> 
  print(`Hmmm wassup? Since you've ended up here, either you're very smart (meaning you probably found
    this function in the source code), or you're very smart (you somehow guessed that someone like me 
    would hide a command like this), or you're very smart (cuz I can't figure out how you got here).<br/>
    In any case, I hope the talk's been interesting! Feel free to email me at
    <a href="mailto:19songy@harrowschool.org.uk">19songy@harrowschool.org.uk</a>
    if you have any questions, or ideas, or anything!`, html=true, color="yellow");

_chungus = ()=>
  print(`<img src="https://media.thetab.com/blogs.dir/90/files/2019/01/bunny-rabbit-rodent-hare-mammal-animal.jpeg"></img>`, html=true);

_random = ()=>
  print()

function print(str, html=false, color="inherit", breakline=false) {
  if (_DEVICE == "console") console.log(str);
  else {
    if (!(str == null || str == undefined)) {
      if (html) var newDiv = $(`<div style="color: ` + color + `;">` + str + "</div>");
      else var newDiv = $(`<div style="color: ` + color + `;"></div>`).text(str);
      newDiv.addClass("terminal-line");
      newDiv.addClass("hiddenscrollbar");
      if(breakline) newDiv.addClass("terminal-break");
      $("#"+_DEVICE).append(newDiv);
    }
  }
}

function runTerminal(script) {
  script = script.trim();
  if (script.length != 0) {
    print("↩ " + script, html=false, color="green");

    if (script[0] == "/" && script[1] != "/") {
      var cmd = "_" + script.slice(1) + "()"; // Convert, say, /about to _about()
      try {eval(cmd);}
      catch {print(script + " is not a valid `/` command", html=false, color="red");}
    } else {
      try {print(eval(script), html=false, color="inherit");}
      catch (error) {print(error, html=false, color="red");}
    }

    print("", html=false, color="inherit", breakline=true);

    document.getElementById(_KEYBOARD).scrollIntoView();
    
  }
}

function initTerminal() {
  $("#"+_KEYBOARD).keydown(function(event) {
    if (event.which==13) {
      var val = $("#"+_KEYBOARD).val();
      $("#"+_KEYBOARD).val("");
      runTerminal(val, _KEYBOARD);
    };
  });
}
