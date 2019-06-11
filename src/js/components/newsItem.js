import React, { Component } from 'react';
import { Router, Route, hashHistory, Redirect, browserHistory } from 'react-router';
import 'bootstrap/less/bootstrap.less';
import '../../styles/app.less';
import createReactClass from 'create-react-class';

var newsItem = createReactClass({
    getInitialState: function () {
        return {};
    },

    extractHostname: function (url) {
        var hostname;
        if (url.indexOf("://") > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }
        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];
        return hostname;
    },

    render: function () {
        var item = this.props.item;
        return (
            <div className="news">
                <li>
                    <h4 className="heading">
                        <a href={item.url}>{item.title}</a>
                    {
                        item.url != undefined
                            ?
                            <span className="url">({this.extractHostname(item.url)})</span>
                            :
                            ""
                        }
                    </h4>
                    <p className="score">
                        {item.score} points by
                        <a className="text-muted" href={"https://news.ycombinator.com/user?id=" + item.by}> {item.by}</a>
                    </p>
                    <span className="comments">
                        <a href={"https://news.ycombinator.com/item?id=" + item.id}>| comments</a>
                    </span>
                </li>
            </div>
        )
    }
});
module.exports = newsItem;