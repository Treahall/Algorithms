import { Component } from 'react';
import * as React from 'react'
import { Route, Switch } from 'react-router-dom';
import AlgorithmList from "./algorithm-list.js"
import InsertionSortContext from "./contexts/insertion_sort.context"
import MergeSortContext from "./contexts/merge_sort.context"
import QuickSortContext from "./contexts/quick_sort.context"
import BubbleSortContext from "./contexts/bubble_sort.context"
import Home from '../pages/home.js';

export default class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            information: 'main'
        }
    }

    render() {
        return(
            <Switch>
             <Route path="/logged-in/insertion_sort" exact component = {InsertionSortContext} />
            <Route path="/logged-in/merge_sort" exact component = {MergeSortContext} /> 
             <Route path="/logged-in/quick_sort" exact component = {QuickSortContext} />
            <Route path="/logged-in/bubble_sort" exact component = {BubbleSortContext} /> 
            </Switch>
        )
    }
}
