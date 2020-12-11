import React, { Component } from 'react'
import { Container, Divider, Switch } from '@material-ui/core'

class About extends Component {
    state = {
        checked: true,
        heading: 'ABOUT OJITOS APP'
    }

    toggleSwitch = () => {
        const newVal = !this.state.checked
        if (newVal) {
            return this.setState({
                heading: 'ABOUT OJITOS APP',
                checked: newVal
            })
        }
        return this.setState({
            heading: 'ABOUT OJITOS APP',
            checked: newVal
        })
    }
    render() {
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1>
                    <p style={{ textAlign: 'justify' }}>
                    This application is an option for children who need to learn or identify vowels,
                    it will facilitate the child's learning based on a simple game of cards, each of
                    which includes the vowel letters.
                    vowels were chosen because it is considered practical as being 5 children will begin to memorize.
                    Images were also added so that the child can associate each letter and thus acquire
                    their cognitive development.
                    The idea of putting images helps the child not to be distracted from her main objective,
                    which is to learn vowels through a method of letter repetition.
                    This activity is a part of getting ready for school.
                    This page is designed in a simple 3-step way:</p>
                    <p style={{ textAlign: 'justify' }}>
                    Step 1: parents will create their own registration account, entering with the username and
                    password, after registration select the entry tab in which access to the application will be given.</p>
                    <p style={{ textAlign: 'justify' }}>
                    Step 2: The child will enter a page where they will have access to cards and images, they
                    will be able to select the desired cards, these will be part of the game.</p>
                    <p style={{ textAlign: 'justify' }}>
                    step 3: exit the game, the tasks in this application are:
                    Children will be able to visualize, identify and pronounce the vowel letters.
                    This game will help to memorize using the repetition of vowel letters.</p>
                    <h1 style={{ textAlign: 'center' }}>Now let's get started!</h1>
                   
                </Container>
            </div>
        )
    }
}

export default About