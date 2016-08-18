# event_page
Chrome extension to Focus tab and window on page sending message


1. modify manifest to include your URL
2. on your webpage use the following script: 

chrome.runtime.sendMessage("abcdefg app id here jisojd", {action: "switch_tab"});
