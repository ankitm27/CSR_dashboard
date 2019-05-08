import React, { Component } from 'react';
import FusionCharts from "fusioncharts";
import './PieChart.css';
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
        plottooltext: "",
        showlegend: "",
        showpercentvalues: "",
        legendposition: "",
        usedataplotcolorforlabels: "",
        theme: "ocean"
    },
    data: []
};

class Pie extends React.Component {
    render() {
        // console.log("this props",this.props);
        if(this.props.totalGood && this.props.totalAverage && this.props.totalPoor){
            dataSource.data = [];
            dataSource.data.push({lable:"TotalGood",value:this.props.totalGood});
            dataSource.data.push({lable:"TotalAverage",value:this.props.totalAverage});
            dataSource.data.push({lable:"TotalPoor",value:this.props.totalPoor});
        }
        // console.log("data sources",dataSource);
        return (
            <ReactFusioncharts
                type="pie2d"
                width="100%"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        );
    }
}


export default Pie;