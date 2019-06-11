var TableActions = require('../actions/TableActions');
var alt = require('../alt');
var TableApi = require('../utils/TableApi');

class TableStore {
    constructor() {
        this.bindActions(TableActions);
        this.totalStories = [];
        this.stories = [];
        this.news = [];
        this.numberOfStories = 30;
    }

    onGetStories() {
        TableApi.topStories();
    }

    onRecieveStories(data) {
        this.totalStories = data;
        this.stories = data.slice(0 ,this.numberOfStories);
        this.getNewsFromIds(this.stories);
    }

    getNewsFromIds(ids){
        for(var i=0; i< ids.length; i++){
            TableApi.getNews(ids[i]);
        }
    }

    onRecieveNews(data){
        console.log(data);
        this.news.push(data);
    }

    onShowMoreNews(){
        this.news = [];
        this.stories = this.totalStories.slice(this.numberOfStories, this.numberOfStories + 30);
        this.numberOfStories+=30;
        //console.log(this.totalStories);
        //console.log(this.numberOfStories);
        //console.log(this.totalStories.slice(this.numberOfStories, this.numberOfStories + 30));
        this.getNewsFromIds(this.stories);
    }
}

module.exports = alt.createStore(TableStore, "TableStore");