import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAnimal } from '../actions';

class AnimalsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params.id  //provided directly by react-router to match a particular id
        this.props.fetchAnimal(id);   //call action creator
    }

    render() {
        return (
            <div>
                Animals Show!
            </div>
        );
    };
}

function mapStateToProps( { animals }) {

}

export default connect(null, { fetchAnimal }) (AnimalsShow);