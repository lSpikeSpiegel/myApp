import React, { Component } from "react";

class App extends Component {
    constructor() {
        super()
        console.log(1)
        this.state = {
            monsters: [],
            searchName: ''
        }
    }
    componentDidMount() {
        console.log(3)
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                this.setState(
                    () => {
                        return { monsters: res }
                    },
                    () => {
                        console.log(this.state)
                    }
                )
            })
    }



    render() {
        console.log(2)

        let renderMonsters = this.state.monsters.filter(item => {
            return item.name.toLocaleLowerCase().includes(this.state.searchName)
        })
        return (
            <>
                <input className="search-box" type='search' placeholder='search monster'
                    onChange={(e) => {
                        this.setState(() => {
                            return { searchName: e.target.value }
                        })
                    }} />
                {renderMonsters.map(item => (
                    <h1 key={item.id}>{item.name}</h1>
                ))}
            </>
        )
    }

}
export default App