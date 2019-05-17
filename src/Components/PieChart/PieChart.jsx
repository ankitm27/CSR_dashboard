import React from 'react';
import FusionCharts from "fusioncharts";
import './PieChart.css';

import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import ReactFC from 'react-fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.zune';


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
    chart: {
        caption: "",
        subcaption: "",
        showpercentvalues: "1",
        defaultcenterlabel: "",
        aligncaptionwithcanvas: "1",
        captionpadding: "1",
        decimals: "0",
        plottooltext:
            "",
        centerlabel: "",
        theme: "zune"
    },
    data: []
};

class Pie1 extends React.Component {
    render() {
        if (this.props.totalGood && this.props.totalAverage && this.props.totalPoor) {
            dataSource.data = [];
            dataSource.data.push({ lable: "TotalGood", value: this.props.totalGood, color: "#00a925" });
            dataSource.data.push({ lable: "TotalAverage", value: this.props.totalAverage, color: "#ff0000" });
            dataSource.data.push({ lable: "TotalPoor", value: this.props.totalPoor, color: "#ffe600" });
        }
        return (
            <ReactFusioncharts
                type="doughnut2d"
                width="100%"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        );
    }
}


export default Pie1;