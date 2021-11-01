function myFunction() {
    alert("Thank you for your time from Muchemwe and Harrison!");
  }

  function InvalidMsg(textbox) {
    if (textbox.value === '') {
        textbox.setCustomValidity('Required email address');
    } else if (textbox.validity.typeMismatch){
        textbox.setCustomValidity('please enter a valid email address');
    } else {
       textbox.setCustomValidity('');
    }

    return true;
}