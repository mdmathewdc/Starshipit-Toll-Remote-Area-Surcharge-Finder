localStorage.setItem('alerted','no');
localStorage.setItem('flag', 'unset');
console.log("FIRST STATEMENT");

setInterval(function()  {
console.log("Content script looping...");

/* Retrieve the pincode */
var pinCode = document.getElementById('ctl00_NewOrderControlModal_ContactEdit_Destination_RadComboBox_PostCode_Input').value; 
var suburb = document.getElementById('ctl00_NewOrderControlModal_ContactEdit_Destination_RadComboBox_Suburb_Input').value; 
var city = document.getElementById('ctl00_NewOrderControlModal_ContactEdit_Destination_TextBox_City').value; 

if (pinCode == "") {
  localStorage.setItem('flag', 'unset');

}
if (pinCode != "") {

    if ( (localStorage.getItem('flag') || '') != 'set') {
    if (pinCode == localStorage.getItem('alerted') || '')
    {
      localStorage.setItem('flag', 'set');

      //alert ("PICODE ! : " + pinCode);
      const url = chrome.runtime.getURL('data/tolllist.json');
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var json = JSON.parse(this.response);
       // console.log(json);

        json.forEach((item) => {
            //console.log('ID: ' + item.Pincode);
            if ((item.Pincode == pinCode) && ((item.Name == suburb) || (item.Name == city)))
            {

              //  chrome.runtime.sendMessage({greeting: pinCode}, function(response) {
              //      console.log(response.farewell);
              //    });

                console.log("GReat success!");
                //localStorage.setItem('alerted', item.Pincode);

                //if(alerted)
                  //  alert("Toll Surcharge for " + pinCode + " is " + " $" + item.Cost);
                    //break;

                    var alerted = localStorage.getItem('alerted') || '';

                    console.log("ALERTED: "+ alerted);
       // if (alerted != item.Pincode) {
         alert("Toll RA surcharge: $" + item.Cost);
         localStorage.setItem('alerted', item.Pincode);
        //}
            
            }
          });
          //localStorage.setItem('alerted','no');
    };

    xhr.open('GET', chrome.extension.getURL('data/tolllist.json'), true);
    xhr.send();









  }
    }
    }


    /////////////////////////////
    console.log("The pin, suburb, city : "+ pinCode +" "+ suburb + " " +city); 

    const url = chrome.runtime.getURL('data/tolllist.json');
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var json = JSON.parse(this.response);
       // console.log(json);

        json.forEach((item) => {
            //console.log('ID: ' + item.Pincode);
            if ((item.Pincode == pinCode) && ((item.Name == suburb) || (item.Name == city)))
            {

              //  chrome.runtime.sendMessage({greeting: pinCode}, function(response) {
              //      console.log(response.farewell);
              //    });

                console.log("GReat success!");
                //localStorage.setItem('alerted', item.Pincode);

                //if(alerted)
                  //  alert("Toll Surcharge for " + pinCode + " is " + " $" + item.Cost);
                    //break;

                    var alerted = localStorage.getItem('alerted') || '';

                    console.log("ALERTED: "+ alerted);
        if (alerted != item.Pincode) {
         alert("Toll RA surcharge: $" + item.Cost);
         localStorage.setItem('alerted', item.Pincode);

        }
            
            }
          });
          //localStorage.setItem('alerted','no');
    };

    xhr.open('GET', chrome.extension.getURL('data/tolllist.json'), true);
    xhr.send();



},3000);

