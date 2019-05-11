import React from 'react';
import FusionCharts from "fusioncharts";
import './Colum.css';
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import ReactFC from 'react-fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
    chart: {
        caption: "",
        yaxisname: "",
        subcaption: "",
        numbersuffix: " ",
        rotatelabels: "1",
        setadaptiveymin: "1",
        theme: "ocean"
    },
    data: []
};

class Main extends React.Component {
    render() {
        dataSource.data = [];
        this.props.projects && this.props.projects.forEach((data) => {
            dataSource.data.push({label:data.title,value:data.goalAchieved});
        })
        return (
            <ReactFusioncharts
                type="line"
                width="100%"
                height="100%"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        );
        
    }
}

export default Main;