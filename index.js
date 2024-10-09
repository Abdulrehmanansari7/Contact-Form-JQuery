function seterror(id, error) {
    $("#" + id).find(".formerror").html(error);
  }
  
  function validateForm() {
    let returnval = true;
  
    // Name validation
    const name = $("form[name='myForm'] input[name='fname']").val();
    if (name.length < 5) {
      seterror("name", "*Length of name is too short");
      returnval = false;
    }
  
    // Number validation
    const number = $("form[name='myForm'] input[name='fnumber']").val();
    if (number.length !== 8 && number.length != 10) {
      seterror("number", "*number should be 8 or 10 digits");
      returnval = false;
    }
  
    // Email validation
    const email = $("form[name='myForm'] input[name='femail']").val();
    if (email.length > 15) {
      seterror("email", "*Length of email is too long");
      returnval = false;
    }
  
    // Password validation
    const pass = $("form[name='myForm'] input[name='fpass']").val();
    if (pass.length > 8) {
      seterror("pass", "*Length of password is too long");
      returnval = false;
    }
  
    // Confirm password validation
    const pass2 = $("form[name='myForm'] input[name='fpass2']").val();
    if (pass2 !== pass) {  // Corrected operator
      seterror("pass2", "*Passwords do not match");
      returnval = false;
    }
  
    return returnval;
  }