var Alt = require('../alt');

class TableActions{
    constructor(){
        this.generateActions(
            'getStories',
            'recieveStories',
            'recieveNews',
            'showMoreNews'
        )
    }
}
module.exports = Alt.createActions(TableActions);