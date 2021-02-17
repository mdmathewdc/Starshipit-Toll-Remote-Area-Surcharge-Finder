setInterval(function() {
console.log("Content script looping...");

var pinCode = document.getElementById('ctl00_NewOrderControlModal_ContactEdit_Destination_RadComboBox_PostCode_Input').value;


if (pinCode != "") {

    console.log("The pin-code is : "+ pinCode);

}
},2000);