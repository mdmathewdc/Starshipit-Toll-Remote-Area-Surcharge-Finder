localStorage.setItem('alerted','no');

setInterval(function() {
console.log("Content script looping...");

/* Retrieve the pincode */
var pinCode = document.getElementById('ctl00_NewOrderControlModal_ContactEdit_Destination_RadComboBox_PostCode_Input').value; 
var suburb = document.getElementById('ctl00_NewOrderControlModal_ContactEdit_Destination_RadComboBox_Suburb_Input').value; 
var city = document.getElementById('ctl00_NewOrderControlModal_ContactEdit_Destination_TextBox_City').value; 

if (pinCode != "") {

    console.log("The pin, suburb, city : "+ pinCode +" "+ suburb + " " +city); 

    const url = chrome.runtime.getURL('data/tolllist.json');
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var json = JSON.parse(this.response);
       // console.log(json);

        json.forEach((item) => {
            //console.log('ID: ' + item.Pincode);
            if(item.Pincode == "6330")
            {

                chrome.runtime.sendMessage({greeting: pinCode}, function(response) {
                    console.log(response.farewell);
                  });

                console.log("GReat success!");
                //if(alerted)
                  //  alert("Toll Surcharge for " + pinCode + " is " + " $" + item.Cost);
                    //break;

                    var alerted = localStorage.getItem('alerted') || '';
        if (alerted != item.Pincode) {
         //alert("You are using Internet Explorer to view this webpage.");
         localStorage.setItem('alerted', item.Pincode);
        }
            
            }
          });
          //localStorage.setItem('alerted','no');
    };

    xhr.open('GET', chrome.extension.getURL('data/tolllist.json'), true);
    xhr.send();



}
},3000);

