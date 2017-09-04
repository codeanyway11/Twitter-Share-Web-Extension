
alert();
var contextLists = ["selection", "page", "link", "image"];

chrome.contextMenus.removeAll(function() {
  for(var i=0; i<contextLists.length; i++){
    var context = contextLists[i];
    var titleX = "Twitter Toolkit: Share this "+context+" on your twitter profile!";

    chrome.contextMenus.create({
      id: context,
      title: titleX,
      contexts: [context],
    });
  }
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  switch(info.menuItemId) {
    case 'selection':
    chrome.windows.create({
      url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(info.selectionText)
      // type = "popup"
    });
    break;

    case 'link':
    chrome.windows.create({
      url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(info.linkUrl),
      // type="panel"
    });
    break;

    case 'image':
    chrome.windows.create({
      url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(info.srcUrl),
      // type="panel"
    });
    break;

    case 'page':
    chrome.windows.create({
      url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url=" +encodeURIComponent(info.pageUrl) ,
      // type="panel"
    });
    break;

  }

});
