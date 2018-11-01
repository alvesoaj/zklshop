/* eslint-disable no-console */
/* eslint-disable no-undef */
window.client = (function () {
  const endpoint = 'http://localhost:3000';
  const token = '1'

  function getCategories(success) {
    return fetch(endpoint + '/api/categories', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then(checkStatus)
      .then(parseJSON)
      .then(success);
  }

  function getItems(success, category_id, order, per, page) {
    query = '?per=' + per + '&page=' + page + '&q[s]=' + order + '';
    if (category_id != null) {
      query += '&q[product_category_id_eq]=' + category_id;
    }
    return fetch(endpoint + '/api/items' + query, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then(checkStatus)
      .then(parseJSON)
      .then(success);
  }

  function createTimer(data) {
    return fetch('/api/timers', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function updateTimer(data) {
    return fetch('/api/timers', {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function deleteTimer(data) {
    return fetch('/api/timers', {
      method: 'delete',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function startTimer(data) {
    return fetch('/api/timers/start', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function stopTimer(data) {
    return fetch('/api/timers/stop', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  function parseJSON(response) {
    return response.json();
  }

  return {
    getCategories,
    getItems,
    createTimer,
    updateTimer,
    startTimer,
    stopTimer,
    deleteTimer,
  };
}());
