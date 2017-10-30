        var start = new Date().getTime();
  
            function getRandomColor() {
                
                var letters = "0123456789ABCDEF".split("");
                var color = "#";
                for (var i = 0; i < 6; i++) {
                
                    color += letters[Math.floor(Math.random() * 16)];
            }
                
                return color;
            }
            
            
            
            function shape() {
                
                if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0%";
                }
                
                document.getElementById("shape").style.backgroundColor = color;
             
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();
            }
            
            function appearAfterDelay(){
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
            }
            
            appearAfterDelay();
            
            document.getElementById("shape").onclick = function(){
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var time = (end - start) / 1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterDelay();
            }
