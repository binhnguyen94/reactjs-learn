import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            item: ""
        }
    }

    handleChange = (e) => {
        this.setState({ item: e.target.value })
    }

    handleAddItem = (e) => {
        const { list } = this.state
        if (!list.includes(this.state.item)) {
            list.push(this.state.item)
            this.setState({ list: list})
        } else {
            alert('Item existed')
        }
    }

    render() {
        return (
            <div className='container mt-5 text-center'>
                <h1>Todo List</h1>
                <div className="pt-3">
                    <input type="text" onChange={this.handleChange} placeholder="Enter todo" />
                    <button onClick={this.handleAddItem}>Add</button>
                </div>
                <ol>
                    {
                        this.state.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default Todo;