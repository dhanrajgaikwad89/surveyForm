
        function submitForm() {
            // Get form data
            const form = document.getElementById("surveyForm");
            const formData = new FormData(form);

            // Check if all required fields are filled
            let isValid = true;
            formData.forEach((value, key) => {
                if (!value) {
                    isValid = false;
                    alert(`Please fill in the ${key} field.`);
                }
            });

            if (isValid) {
                // Display selected values in a popup
                let popupMessage = "Survey Form Data:\n";
                formData.forEach((value, key) => {
                    popupMessage += `${key}: ${value}\n`;
                });

                alert(popupMessage);

                // Reset the form
                form.reset();
            }
        }
