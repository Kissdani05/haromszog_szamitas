function megszerkesztheto(){
  const befogo1 = document.getElementById("befogo1").value;   
  const befogo2 = document.getElementById("befogo2").value;
  const atfogo = document.getElementById("atfogo").value;
  if (Math.pow(befogo1*1,2)+Math.pow(befogo2*1,2)==Math.pow(atfogo*1,2)) {
    alert("A derékszögű háromszög megszerkeszthető");
  }
  else{
    alert("A derékszögű háromszög NEM megszerkeszthető");
  }
}
function veletlen(){
    document.getElementById("befogo1").value = Math.floor(Math.random()*90)+10;
    document.getElementById("befogo2").value = Math.floor(Math.random()*90)+10;
    document.getElementById("atfogo").value = Math.floor(Math.random()*90)+10;
}
function kiszamitas(){
  const befogo1 = document.getElementById("befogo1").value;   
  const befogo2 = document.getElementById("befogo2").value;
  document.getElementById("atfogo").value = Math.sqrt(Math.pow(befogo1*1,2)+Math.pow(befogo2*1,2));
}