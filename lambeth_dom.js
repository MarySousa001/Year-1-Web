
var Lin=document.getElementsByClassName('social')[0];
Lin.style.color = '#3f3f3f';
Lin.textContent = 'Follow Us in';

//FootServ = document.getElementsByClassName('sup');
FotSup = document.getElementsByClassName('sup')[0];
FotSup.textContent = 'Support';

Fotassis = document.getElementsByClassName('assis')[0];
Fotassis.textContent = 'Assistance';

Fotemer = document.getElementsByClassName('emer')[0];
Fotemer.textContent = 'Emergency';

//console.log(document.getElementsByTagName('h5'));
var subT = document.getElementsByTagName('h5');
for(var i=0; i<subT.length; i++){
    subT[i].style.color = '#FFD700';
}

var foot=document.getElementsByTagName('footer')[0];
foot.style.color = '#d5d5d5';
foot.style.backgroundColor = '#3f3f3f';

var Identity= [
        " msous001 ",
        " Goldsmith University ",
        " January ",
        2020,
        " Mary Sousa ",
        
];
var output = document.getElementById("output");
    output.addEventListener("click", function(){
    output.innerHTML = Identity;
})
output.style.color = '#40E0D0';
output.style.backgroundColor = '#3f3f3f';

 