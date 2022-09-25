import { Component } from "react";

class StudentInfoComponent extends Component {
    render() {
        const students = [
            {
                id: 1,
                name: 'Nguyễn Văn A',
                age: 30,
                address: 'Hà Nội'
            },
            {
                id: 2,
                name: 'Nguyễn Văn b',
                age: 20,
                address: 'HCM'
            }
        ]
        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr>
                            <td key={index}>{student.id}</td>
                            <td key={index}>{student.name}</td>
                            <td key={index}>{student.age}</td>
                            <td key={index}>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default StudentInfoComponent;