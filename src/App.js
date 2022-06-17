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

    onSearchChange = (e) => {
        this.setState(() => {
            return { searchName: e.target.value }
        })
    }


    render() {
        console.log(2)

        const { searchName, monsters } = this.state
        const { onSearchChange } = this

        let renderMonsters = monsters.filter(item => {
            return item.name.toLocaleLowerCase().includes(searchName)
        })
        return (
            <>
                <input className="search-box" type='search' placeholder='search monster'
                    onChange={onSearchChange} />
                {renderMonsters.map(item => (
                    <h1 key={item.id}>{item.name}</h1>
                ))}
            </>
        )
    }

}
export default App