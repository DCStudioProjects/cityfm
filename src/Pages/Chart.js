import React, { Component } from 'react'
import Chart from '../Components/Chart';

export default class Top extends Component {
    render() {
        fetch("https://billboard-api2.p.rapidapi.com/hot-100?date=2020-01-15&range=1-10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f80b7ae353msh1afab289a2e7bc4p191f27jsn62794a80c9bc",
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
        return (
<p>1</p>        )
    }
}