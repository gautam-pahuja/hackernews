var TableActions = require('../actions/TableActions');
var token = null;

module.exports = {
    topStories: function () {
        var url = "https://hacker-news.firebaseio.com/v0/topstories.json";
        var req = new Request(url, {
            method: 'GET'
        });
        fetch(req)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                TableActions.recieveStories(json);
                return json;
            });
    },

    getNews: function (id) {
        var url = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty";
        var req = new Request(url, {
            method: 'GET'
        });
        fetch(req)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                TableActions.recieveNews(json);
                return json;
            });
    }
};
