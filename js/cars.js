function alarm(){
  $('scene').append("<AudioClip url='mp3/siren.mp3' loop='false' enabled='true' />");

}
function changeColor(){
    if(document.getElementById("auto__color").getAttribute('diffuseColor')=="0 1 0")
        document.getElementById("auto__color").setAttribute('diffuseColor', '0 0.5 1');
    else
        document.getElementById("auto__color").setAttribute('diffuseColor', '0 1 0');
}
