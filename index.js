//charts 
var charts = document.querySelectorAll('.chart');
charts.forEach(function(elem) {
    elem.width = 170;
    elem.height = 170;
    var ctx = elem.getContext('2d');
    //first circle
    ctx.beginPath();
    ctx.strokeStyle = '#7b6c63';
    ctx.lineWidth = 3;
    ctx.arc(elem.width/2, elem.height/2, 80, 2 * Math.PI, false)
    ctx.stroke();
    //outside circle
    var counter =  1.5;
    animate();
    //fill text
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText("85%", elem.width/2, elem.height/2+7);
    //added animate function here, since ctx isn't defends in global
    function animate() {
        setInterval(function() {
            if (counter <= 2.975) {
                ctx.beginPath();
                ctx.strokeStyle = "white";
                ctx.lineWidth = 2;
                ctx.arc(elem.width/2, elem.height/2, 72, 1.5 * Math.PI, counter * Math.PI, false)
                ctx.stroke();
                counter += 0.0035;
             }
        }, 7)
    }
});