		
        var form = document.getElementById("myForm");
        form.addEventListener("submit", submitted);

        // initially we are setting to false 
        var validZipCode = false;
        var validEmail = false;
        var validPhone = false;
        var validText = false;

        // regular expressions for name, email and phone
        var regExZipCode = /^\d{5}(-\d{4})?$/;
        var regExEmail = /([\w\.]+)@(northeastern.edu)/;
        var regExPhone = /\d{3}-?\d{3}-\d{4}$/;

        //values 
        var zipCode = document.getElementById("zipCode");
        zipCode.addEventListener("input", validate)

        var emailId = document.getElementById("emailId");
        emailId.addEventListener("input", validate)

        var phoneNumber = document.getElementById("phoneNumber");
        phoneNumber.addEventListener("input", validate)

        var text = document.getElementById("myTextfield");
        phoneNumber.addEventListener("input", validate)

        
        function validate(e){
            var value = e.target.value;
            var type = this.id; 
            var em = "error_" + type;

            switch(type){
                case "zipCode":
                    if(!value.trim().match(regExZipCode)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validZipCode = false;
                        console.log("validZipCode", validZipCode)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validZipCode = true;
                        console.log("validZipCode", validZipCode)
                    }
                    break;
                case "emailId":
                    if(!value.trim().match(regExEmail)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validEmail = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validEmail = true;
                    }
                    break;
                case "phoneNumber":
                    if(!value.trim().match(regExPhone)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validPhone = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validPhone = true;
                    }
                    break;
                case "text":
                    if(text=""){
                        this.style.border = "2px solid red";
                        validText= false;
                        
                    }
                    else{
                        this.style.border = "";
                        validText = true;
                    }
            }

        }
        

        function submitted(e){
            e.preventDefault();
        }

            document.getElementById("mySelect").onchange = function() {
            var checkboxContainer = document.getElementById("checkboxContainer");
            checkboxContainer.innerHTML = "";

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "myCheckbox";
            checkboxContainer.appendChild(checkbox);
            checkboxContainer.innerHTML += this.value + "<br>";

            document.getElementById("myCheckbox").onchange = function() {
                var textfieldContainer = document.getElementById("textfieldContainer");
                textfieldContainer.innerHTML = "";

                if (this.checked) {
                textfieldContainer.style.display = "block";
                var textfield = document.createElement("input");
                
                textfield.type = "text";
                textfield.id = "myTextfield";
                textfield.required = true;
                textfieldContainer.appendChild(textfield);
                } else {
                textfieldContainer.style.display = "none";
                }
            };
            }

            
            
            document.getElementById("myForm").onsubmit = function(event) {
            event.preventDefault();
            var ele = document.querySelectorAll('input[type="radio"]');
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                 var title= ele[i].value;
            }
            var firstName = document.getElementById("firstName").value;
            var lastName= document.getElementById("lastName").value;  
            var phoneNumber = document.getElementById("phoneNumber").value;
            var email = document.getElementById("emailId").value;
            var city = document.getElementById("city").value;
            var state = document.getElementById("state").value;
            var zipCode = document.getElementById("zipCode").value;
            var selectedOption = document.getElementById("mySelect").value;
            var textfield = document.getElementById("myTextfield") ? document.getElementById("myTextfield").value : "";
            var streetAddress1 = document.getElementById("streetAddress1").value;
            var streetAddress2 = document.getElementById("streetAddress2").value;
            var how = document.getElementById("how").value;
            var comments = document.getElementById("comments").value;

           


            // Create a new table row with the submitted data

            var table = document.getElementById("resultsTable");

            
            if (email === "" || phoneNumber === "" || title === "" || firstName=== "" || lastName=== "" || city ==="" || zipCode=== "" || textfield==="" || streetAddress1 ==="" || how === "" || comments === "" || state === "" || selectedOption=== "") {
            alert("All fields are required");
            }    
            else{
                        
                var hearbyArray = document.getElementsByName("source");
                var hearby = ""
                            for(i=0;i<hearbyArray.length;i++)
                            {
                                if(hearbyArray[i].checked)
                                {
                                    hearby = hearby + hearbyArray[i].getAttribute('value') +","
                                }
                            }
                hearby = hearby.substring(0,hearby.length-1)

            var newRow = table.insertRow(-1);
            newRow.insertCell(0).innerHTML = title;
            newRow.insertCell(1).innerHTML = firstName;
            newRow.insertCell(2).innerHTML = lastName;
            newRow.insertCell(3).innerHTML = email;
            newRow.insertCell(4).innerHTML = phoneNumber;
            newRow.insertCell(5).innerHTML = streetAddress1;
            newRow.insertCell(6).innerHTML = streetAddress2;
            newRow.insertCell(7).innerHTML = city;
            newRow.insertCell(8).innerHTML = state;
            newRow.insertCell(9).innerHTML = zipCode;
            newRow.insertCell(10).innerHTML = hearby;
            newRow.insertCell(11).innerHTML = selectedOption;
            newRow.insertCell(12).innerHTML = textfield;
            newRow.insertCell(13).innerHTML = comments;
            table.style.display = "inline-block";
            alert("Data entered successfully!")
            
            // Clear the form fields
            form.reset();

            var checkedboxes = document.querySelectorAll('input[type="checkbox"]');
            checkedboxes[0].checked=false;
            checkedboxes[1].checked=false;
            checkedboxes[2].checked=false;
            checkedboxes[3].checked=false;


            

            }

        };