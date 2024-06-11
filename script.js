function volume_sphere(event) {
            event.preventDefault(); 
            
            let radius = parseFloat(document.getElementById("radius").value);
            let volume = document.getElementById("volume");
            
         if (isNaN(radius) || radius < 0) {
    volume.value = 'NaN';
    return;
}
            
           
            let result = (4 / 3) * Math.PI * Math.pow(radius, 3);
            
           
            volume.value = result.toFixed(4);
        }
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
