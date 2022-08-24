//mask types
const mask = ['0000 0000 0000 0000', '00', '000'];

//setting masks
$('#cardNumber').mask(mask[0]);
$('#mm').mask(mask[1]);
$('#yy').mask(mask[1]);
$('#cvc').mask(mask[2]);

//listener
$("#mm").change(verifyMaxMonths);
$('#yy').change(verifyMaxDays);


//functions max value on data filds
function verifyMaxMonths() {
  let v = parseInt(this.value);
  if (v < 1) {
    this.value = 1;
  } else if (v > 12) {
    this.value = 12;
  }
}

function verifyMaxDays() {
  let v = parseInt(this.value);
  if (v < 1) {
    this.value = 1;
  } else if (v > 31) {
    this.value = 31;
  }
}

//capturing form
function validateForm() {
  event.preventDefault();

  let cardHolder = document.forms["cardForm"]["cardHolder"].value;
  let cardNumber = document.forms["cardForm"]["cardNumber"].value;
  let cardMonths = document.forms["cardForm"]["cardMonths"].value;
  let cardDays = document.forms["cardForm"]["cardDays"].value;
  let cardCvc = document.forms["cardForm"]["cardCvc"].value;
 
  if (cardHolder == "") {
    $('#cardHolder').css('border', '2px solid var(--error-1)')
  } else {
    $('#cardHolder').css('border', '2px solid var(--neutral-2)')
  }

  if (cardNumber == "") {
    $('#cardNumber').css('border', '2px solid var(--error-1)')
  } else {
    $('#cardNumber').css('border', '2px solid var(--neutral-2)')
  }

  if (cardDays == "") {
    $('#yy').css('border', '2px solid var(--error-1)')
  } else {
    $('#yy').css('border', '2px solid var(--neutral-2)')
  }

  if (cardMonths == "") {
    $('#mm').css('border', '2px solid var(--error-1)')
  } else {
    $('#mm').css('border', '2px solid var(--neutral-2)')
  }

  if (cardCvc == "") {
    $('#cvc').css('border', '2px solid var(--error-1)')
  } else {
    $('#cvc').css('border', '2px solid var(--neutral-2)')
  }

  if (cardHolder != "" && cardNumber != "" && cardMonths != ""  && cardDays != "" && cardCvc != "") {
    body = {
      "cardHolder": cardHolder,
      "cardNumber": cardNumber,
      "cardMonths": cardMonths,
      "cardDays": cardDays,
      "cardCvc": cardCvc
    }
    
    console.log(body)
    

    // *****************************
    //send information
    //sendForm(url , body);
  }
}


