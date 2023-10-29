if (0 > remainingLength) {
    // Split value if greater than 
    var allowedValuePart = currentValue.slice(0, realLength),
        refusedValuePart = currentValue.slice(realLength)
    ;
  
    // Fill the hidden div.
    $placeholderBacker.html(allowedValuePart + '<em>' + refusedValuePart + '</em>');
  } else {
    $placeholderBacker.html('');
  }