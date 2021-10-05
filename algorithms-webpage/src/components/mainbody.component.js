import {Component } from 'react';
import * as React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AlgorithmList from "./algorithm-list.js"
import InsertionSortComponent from "./insertion_sort.js"
import MergeSortComponent from "./merge_sort.js"
import QuickSortComponent from "./quick_sort.js"
import BubbleSortComponent from "./bubble_sort.js"

export default class MainBody extends Component {
    constructor(props) {
        super(props)

        this.state = {
            information: 'main'
        }
    }

    render() {
        return(
            <div>
                <Switch>
                <Route path="/insertion_sort" component = {InsertionSortComponent} />
                <Route path="/merge_sort" component = {MergeSortComponent} />
                <Route path="/quick_sort" component = {QuickSortComponent} />
                <Route path="/bubble_sort" component = {BubbleSortComponent} />
                <Route path="/" exact component = {AlgorithmList} />
                </Switch>
            </div>
        )
    }
}
