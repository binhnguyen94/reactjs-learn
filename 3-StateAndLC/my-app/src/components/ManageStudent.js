import React from 'react';

class ManageStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: [],
            form: { name: '', phone: '', email: '' },
            isValid: false,
            indexSelected: -1
        }
    }

    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form;
            form[event.target.name] = event.target.value;
            return { form };
        }, () => this.checkInvalidForm())
    };

    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
    }

    handleSubmit = () => {
        if (this.state.isValid) {
            const newList = this.state.studentList
            if (this.state.indexSelected > -1) {
                newList.splice(this.state.indexSelected, 1, this.state.form);
            } else {
                newList.push(this.state.form);
            }
            return this.setState({ 
                studentList: newList, 
                form : {name: '', phone: '', email: ''}
            }, () => this.checkInvalidForm())
        } else {
            alert('Khong dc de trống')
        }
    }

    handleDelete = (index) => {
        const deleteStudent = this.state.studentList;
        deleteStudent.splice(index, 1)
        this.setState({studentList: deleteStudent})
    }

    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form;
        const value = name && phone && email;
        this.setState({
            isValid: value
        })
    }

    render() {
        const { studentList, form } = this.state
        return (
            <div>
                <div>
                    <h1>Student List</h1>
                    <div>
                        <label>Name: </label>
                        <input name="name" value={form.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="number" value={form.phone} name="phone" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value={form.email} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Phone</td>
                                <td>Email</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentList.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <button onClick={() => this.handleSelect(student, index)}>Edit</button>
                                            <button onClick={() => this.handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ManageStudent;