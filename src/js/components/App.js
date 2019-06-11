import React, { Component } from 'react';
import { Router, Route, hashHistory, Redirect, browserHistory } from 'react-router';
import TableStore from '../stores/TableStore';
import TableActions from '../actions/TableActions';
import 'bootstrap/less/bootstrap.less';
import '../../styles/app.less';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Table from 'react-bootstrap/lib/Table';
import createReactClass from 'create-react-class';
import NewsItem from '../components/NewsItem';

var App = createReactClass({
    getInitialState: function () {
        return TableStore.getState();
    },
    componentDidMount: function () {
        TableActions.getStories();
        TableStore.listen(this.onChange);
    },
    componentWillUnmount: function () {
        TableStore.unlisten(this.onChange);
    },
    onChange: function () {
        this.setState(this.getInitialState());
    },
    showMoreNews: function () {
        TableActions.showMoreNews();
    },
    render: function () {
        var stories = this.state.stories;
        var news = this.state.news;
        return (
            <div>
                <Row>
                    <Col sm={10} smOffset={1} lg={10} lgOffset={1} md={10} mdOffset={1} xs={10} xsOffset={1}>
                        <header className="main-header">
                            <div className="title">Hacker News</div>
                        </header>
                        <div className="board-body">
                            <Row>
                                <Col sm={11} lg={11} md={11} xs={11}>
                                    <ul className="story-list">
                                    {
                                        stories.length > 0 && news.length>0
                                            ?
                                            news.map(function (id, i) {
                                                return (
                                                    <NewsItem key={i} item={id}></NewsItem>
                                                )
                                            })
                                            :
                                            <div>
                                                <span>Loading Data...</span>
                                            </div>
                                        }
                                    </ul>
                                {
                                    news.length>0
                                        ?
                                        <div onClick={this.showMoreNews} className="showMore-container">
                                            <span>Show More</span>
                                        </div>
                                        : ""
                                }
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
});
module.exports = App;