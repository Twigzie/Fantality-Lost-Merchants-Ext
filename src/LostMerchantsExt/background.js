console.log('loaded')
chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, info => {
        if (/^https:\/\/lostmerchants/.test(info.url)) {
            chrome.tabs.insertCSS(null, { file: './mystyles.css' }, () => {
                console.log('inserted custom css')
            })
            chrome.tabs.executeScript(null, { file: './foreground.js' }, () => {
                console.log('executed forground script')
            })
        }
    })
})
// chrome.tabs.onUpdated.addListener((tabId, info) => {    
//     chrome.tabs.get(tabId, info => {
//         if (/^https:\/\/lostmerchants/.test(info.url)) {
//             chrome.tabs.insertCSS(null, { file: './mystyles.css' }, () => {
//                 console.log('inserted custom css')
//             })
//             chrome.tabs.executeScript(null, { file: './foreground.js' }, () => {
//                 console.log('executed forground script')
//             })
//         }
//     })
// });