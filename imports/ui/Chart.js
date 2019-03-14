import React from 'react';
import {Line} from 'react-chartjs-2';
//import RC2 from '../../lib/index';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: "Temperature",
      backgroundColor: 'rgba(255, 128, 0,  0.3)',
      borderColor: 'rgba(255, 128, 0, 0.3)',
      fill: false, //no fill here
      data: [25, 25, 23, 28, 29, 27, 31]
    },
    {
      label: "tMin",
      backgroundColor: 'rgba(255, 128, 0,  0.3)',
      borderColor: 'rgba(255, 128, 0,  0.4)',
      borderDash: [2],
      fill: '-1', //fill until previous dataset
      data: [25, 25, 25, 25, 25, 25, 25]
    }] 
};
var createReactClass = require('create-react-class');

export default GrowChart = createReactClass({
//export default React.createClass({
  displayName: 'GrowChart',
  

  render() {
    return (
      <div>
        <h2>Grow Chart</h2>
        <Line data={data} />
      </div>
    );
  }
});

/* submit and display data in a list - change to graph.
-------------------------------------------------------
handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    GrowData.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <GrowChart />
          <h1>Todo List</h1>
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
-------------------------------------------------------
*/

/* Basic layout for updating charts - unknown if working
----------------------------------------------------------


const data = {
  datasets: [{
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

var createReactClass = require('create-react-class');

export default GrowChart = createReactClass({

  constructor(props) {
    super(props);
    this.growData();
  },
  componentDidMount() {
    this.myChart = this.refs['chart'].getChart();
  },
  getData() {
    let data = [];
    for (let i = 0, len = 5; i < len; i++) {
      data.push(parseInt(Math.random() * 50));
    }
    return data;
  },
  growData() {
    setInterval(() => {
      this.myChart.data.datasets[0].data = this.getData();
      this.myChart.update();
    }, 1500);
  },
  render() {
    return (
      <Line data={data} ref='chart' />
    );
  }
})
*/

//export default GrowChart;
