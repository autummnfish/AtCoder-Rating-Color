// Main();


// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.farewell);
// });
// async function Main() {
//   const userId = "autumn_fish";
//   console.log("strat");
//   let myRecord;
//   await fetch(
//     `https://atcoder.jp/users/${encodeURIComponent(userId)}/history/json`
//   ).then((response) => {
//     console.log(response.status);
//     return response.json().then((userInfo) => {
//       myRecord = userInfo;
//     });
//   });
//   console.log(myRecord);
//   await chrome.runtime.sendMessage(myRecord);
//   console.log(111);
// }
/**
 * やること
 *
 * ////
 * popupで入力したIDをbackground.jsで受け取る//TODO:無理そうならconstでIDつくって下のほうを実装する
 * background上でfetchする
 * IDがおかしければエラーを出すようにする(popupがよさそう？)
 * historyからとったオブジェクトの配列をcontent_script.jsに送る//HACK:ここで動かなくなった、ドキュメントを読もう
 * おそらくは実行される順番とか優先度だと思われる
 * ///ここらへんまで非同期処理よ
 * とりあえずは最新のNewRatingを送る
 * その後、受け取った値によってレートごとの色をつけて、CSSを書き換える
 *
 *
 */
