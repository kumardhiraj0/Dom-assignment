let decbtn = document.querySelector("#decrementBtn");
        let incbtn = document.querySelector("#incrementBtn");
        let displayValue = document.getElementById("displayValue");
        let resetbtn = document.getElementById("resetBtn");

    

        //increament function
        function Increament(){
            let count = Number(displayValue.textContent);
            if(count>=20){
                alert("20+ values are not allowed");
            }
            else{
                displayValue.innerText = count+1;
            }

        }
        //decreament function
        function Deccreament(){
            let count = Number(displayValue.textContent);
            if(count>0){
                displayValue.innerText = count-1;
            }
            else{
                alert("negative value not allowed");
            }

        }
        //reset function
        function Reset(){
            let count = Number(displayValue.textContent);
            displayValue.innerText = 0;
        }

        decbtn.addEventListener("click",Deccreament);
        incbtn.addEventListener("click",Increament);
        resetbtn.addEventListener("click",Reset);
