function shindan() {
  // 診断したいURLの配列
  var urls = ["",　""];
  
  for(var i = 0; i < urls.length; i++){
    var url = urls[i];  
    var payload = {
      "u" : "" // 診断する名前
    };  
    // POSTオプション
    var options = {
      "method" : "POST",
      "payload" : payload
    };
    var contentText = UrlFetchApp.fetch(url, options).getContentText();
    
    var start = '<textarea id="copy_text_140" class="form-control" rows="2">';
    var idx = contentText.indexOf(start);
    
    var str = contentText.substring(idx);
    str = str.slice(0, str.indexOf("</textarea>")).replace(start, "");
    
    postTweet(str);
  }  
}

function postTweet(tweet) {
  var url = "{your webhook URL}";
  
  var payload = {
    "value1" : tweet
  };  
  // POSTオプション
  var options = {
    "method" : "POST",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
  Logger.log(response.getResponseCode());
}
