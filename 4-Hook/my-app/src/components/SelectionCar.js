import { useState } from 'react';

export default function SelectionCar() {
    const arrCars = ['Volvo', 'Mercedes', 'Audi', 'Porche'];
    const arrColor = ['Red', 'Black', 'White', 'Yellow']
    const [selectionCar, setSelectionCar] = useState({
        car: arrCars[0],
        color: arrColor[0]
    });

    const handleSelect = (e) => setSelectionCar({ ...selectionCar, [e.target.name]: e.target.value})

    return (
        <div>
            <h1>Select your car </h1>
            <span style={{paddingRight: '12px'}}>Select a car</span>
            <select name="car" id="car" onChange={handleSelect}>
                {
                    arrCars.map((car, index) => (
                        <option key={index} value={car}>{car}</option>
                    ))
                }
            </select>
            <br />
            <span style={{paddingRight: '12px'}}>Select color</span>
            <select name="color" id="color" onChange={handleSelect}>
                {
                    arrColor.map((color, index) => (
                        <option key={index} value={color}>{color}</option>
                    ))
                }
            </select>
            <h3>You selected a: {selectionCar.car} - {selectionCar.color}</h3>
        </div>
    )
}