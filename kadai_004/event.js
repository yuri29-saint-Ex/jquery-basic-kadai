//HTMLドキュメントが読み込み完了したとき、「loadイベントが発生しました」とコンソールに出力する
$(window).on('load', function (){
  console.log('loadイベントが発生しました');
});
//画面をスクロールしたときに「scrollイベントが発生しました」とコンソールに出力する
$(window).scroll(function (){
  console.log('scrollイベントが発生しました');
});

