

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
      console.log('got external call');
      console.log('req',request);
      console.log('sender',sender);
      
      
      chrome.tabs.update(sender.tab.id, {selected: true});
      
      console.log('window id', sender.tab.id);
       console.log('tab id', sender.tab.windowId);
      chrome.windows.update(sender.tab.windowId, {focused: true});
  });
  
  
