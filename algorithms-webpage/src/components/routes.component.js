import { Component } from 'react';
import * as React from 'react'
import { Route, Switch } from 'react-router-dom';
import AlgorithmList from "./algorithm-list.js"
import InsertionSortContext from "./contexts/insertion_sort.context"
import MergeSortContext from "./contexts/merge_sort.context"
import QuickSortContext from "./contexts/quick_sort.context"
import BubbleSortContext from "./contexts/bubble_sort.context"

export default class Routes extends Component {
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
                <Route path="/insertion_sort" component = {InsertionSortContext} />
                <Route path="/merge_sort" component = {MergeSortContext} />
                <Route path="/quick_sort" component = {QuickSortContext} />
                <Route path="/bubble_sort" component = {BubbleSortContext} />
                <Route path="/" exact component = {AlgorithmList} />
                </Switch>
            </div>
        )
    }
}
