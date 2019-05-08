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
    data: [
        {
            label: "Apache",
            value: "32647479"
        },
        {
            label: "Microsoft",
            value: "22100932"
        },
        {
            label: "Zeus",
            value: "14376"
        },
        {
            label: "Other",
            value: "18674221"
        }
    ]
};

class Pie extends React.Component {
    render() {
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