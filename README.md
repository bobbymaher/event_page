# event_page
A Chrome extension to Focus the tab and window on a certain webpage that wants the focus


1. modify manifest to include your URL
2. on your webpage use the following script: 

chrome.runtime.sendMessage("abcdefg app id here jisojd", {action: "switch_tab"});
