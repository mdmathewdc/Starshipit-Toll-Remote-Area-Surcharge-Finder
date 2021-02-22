        /* THIS SCRIPT IS NOT IN USE */
        
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    localStorage.setItem('alerted', item.Pincode);
    if (request.greeting != alerted)
    {
      localStorage.setItem('alerted', greeting)
      alert("PIN CODE SURCHARGE!! :" + request.greeting)
      sendResponse({farewell: "goodbye"});
    }
  }
  );  