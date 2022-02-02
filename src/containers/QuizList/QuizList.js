import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './QuizList.module.css'
import axios from '../../axios/axios-quiz'
import Loader from '../../components/UI/Loader/Loader';

export default class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    }

    renderQuizes() {
        return this.state.quizes.map((quiz) => {
            return (
                <li key={quiz.id}>
                    <Link to={'/quiz/' + quiz.id}>
                        Test {quiz.name}
                    </Link>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const res = await axios.get('/quizes.json')

            const quizes = []
            Object.keys(res.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test N${index + 1}`
                })
            })

            this.setState({
                quizes,
                loading: false
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>List Test</h1>
                    {
                        this.state.loading
                            ? <Loader />
                            : <ul>
                                {this.renderQuizes()}
                            </ul>
                    }
                </div>
            </div>);
    }
}
