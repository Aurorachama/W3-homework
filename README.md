# W3-homework
## Purpose
This week's homework is to use Javascript to create a random generation function for an website password generator.

## User Guide
* The button **Generate Password** is the interaction that an user would want to start generating password

* Upon pressing the button, a series of prompts will be displayed on screen to set criteria used for the password generation
* Criteria includes : **The length of the password**, **The inclusion of UpperCase Letter (Capital Letter)**, **The inclusion of LowerCase Letter**, **The inclusion of number (Numeric Symbol)**, and **The inclusion of special characters ([list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.)**


## Next Step
* After user finished selecting the criteria of the desired password 
* An password will be generated based on the criteria 
* and it will be displayed at the textarea above **Generate Password** button (Previous display "Your Secure Password")

## Additional Notes
* The special characters generated for this random password generator does not include the symbol of 
``` " ``` . Despite it's apperance at the OWASP Website
* The reason is that add the ``` " ``` symbol might break the functio of the variable that have the be set. Despite this, the remining number of letters and symbol are still good enough to generate a unique password