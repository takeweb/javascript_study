async function main() {
    try {
        const userId = getUserId();
        const userInfo = await fetchUserInfo(userId);
        const view = createView(userInfo);
        displayView(view);
    } catch (error) {
        console.error(`エラーが発生しました。(${error})`);
    }
  }

  function getUserId() {
    const value = document.querySelector('#userId').value;
    return encodeURIComponent(value);
  }

  async function fetchUserInfo(userId) {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`);
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(new Error(`${response.status}:${response.statusText}`));
    }
  }

  function createView(userInfo) {
    return escapeHTML`
    <h4>${userInfo.name} (@${userInfo.login})</h4>
    <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
    <dl>
        <dt>Location</dt>
        <dd>${userInfo.location}</dd>
        <dt>Repositories</dt>
        <dd>${userInfo.public_repos}</dd>
    </dl>
    `;
  }

  function displayView(view) {
    const result = document.querySelector('#result');
    result.innerHTML = view;
  }

  function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
  }

  function escapeHTML(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        } else {
            return result + String(value) + str;
        }
    });
  }