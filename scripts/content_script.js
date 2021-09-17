let userContestRecord;
let userId  = null;
let userRating = null;
const styles = document.querySelector("body");
const tmp = location.hostname;
Main();

async function asyncMain() {
  await fetch(
    `https://atcoder.jp/users/${encodeURIComponent(userId)}/history/json`,
    { mode: "cors" }
  ).then((response) => {
    return response.json().then((userInfo) => {
      userContestRecord = userInfo;
      // console.log(userContestRecord);
    });
  });

  if (userContestRecord[0] === undefined) {
    styles.style.background = "black";
  } else {
    const rating = userContestRecord[userContestRecord.length - 1].NewRating;
    styles.style.background = changeBodyColor(rating);
    // localStorage.setItem("id", userId);
    chrome.storage.local.set({ id: userId }, () => {
      console.log("ID set");
    });
    chrome.storage.local.set({ rating: userRating }, () => {
      console.log("Rating set");
    });
    // localStorage.setItem("rating", userRating);
  }
}

function changeBodyColor(rating) {
  res = `grey`;
  if (rating >= 3600) res = `rgb(255,215,0)`;
  else if (rating >= 3200) res = "rgb(128, 128, 128)";
  else if (rating >= 2800) res = `red`;
  else if (rating >= 2400) res = `rgb(255,128,0)`;
  else if (rating >= 2000) res = `rgb(192,192,0)`;
  else if (rating >= 1600) res = `blue`;
  else if (rating >= 1200) res = `rgb(0,192,192)`;
  else if (rating >= 800) res = `green`;
  else if (rating >= 400) res = `rgb(128,64,0)`;
  return res;
}

function Main() {
  chrome.storage.local.get(`id`, (item) => {
    userId = item != null ? item : userId;
  });
  chrome.storage.local.get(`rating`, (item) => {
    userRating = item != null ? item : userRating;
  });

  if (tmp === `atcoder.jp`) asyncMain();
  else styles.style.background = changeBodyColor(userRating);

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log("called");
    userId = request;
    asyncMain();
  });
}
