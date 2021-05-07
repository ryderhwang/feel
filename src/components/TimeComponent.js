import React, { Component } from 'react';
import { Dimensions } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit';
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
}

class TimeComponent extends Component {

    constructor(props){
        super(props);
        this.state = { data: {
                labels: ["800ms", "1600ms", "Now"],
                datasets: [
                    {
                        data: [500, 580, 505, 520, 510, 500, 580, 505, 520, 510, 500, 580, 505, 520, 510],
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2 // optional
                    }
                ],
                legend: ["Heart Rate Variability"] // optional
            } };
    }
    render(){
        return(
            <LineChart
                data={this.state.data}
                width={screenWidth}
                height={256}
                verticalLabelRotation={30}
                chartConfig={chartConfig}
                bezier
            />
        );
    }
    componentDidMount() {

        this.interval = setInterval(() => {
                this.state.data.datasets[0].data.push(this.state.data.datasets[0].data.shift());
                this.setState({data: this.state.data});
        }, 100);

    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}
export default TimeComponent;
