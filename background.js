        //localStorage.setItem('alerted', item.Pincode);

chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
        localStorage.setItem('alerted', item.Pincode);

      //console.log(sender.tab ?
        //          "from a content script:" + sender.tab.url :
         //         "from the extension");
      if (request.greeting != alerted)
      {
          localStorage.setItem('alerted', greeting)
          alert("PIN CODE SURCHARGE!! :" + request.greeting)
          sendResponse({farewell: "goodbye"});


      }
        //alert("Back ground alrt!!")

        //localStorage.setItem('alerted', item.Pincode);


    }
  );  