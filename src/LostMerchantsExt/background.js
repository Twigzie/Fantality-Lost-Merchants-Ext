console.log('loaded')
chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, info => {
        if (/^https:\/\/lostmerchants/.test(info.url)) {
            chrome.tabs.executeScript(null, { file: './foreground.js' }, () => {
                console.log('executed forground script')
            })
        }
    })
})