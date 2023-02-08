

export const extractKeyValuePairs = (obj) => {
    let res = [];
    Object.entries(obj).map(([key, value]) => (
         res.push({ "key":key, "value":value })
    ))
    return res
}

export const getlineChartData = () => {
    const data = require('../../data/prAnnual.json')
    let res = [];
    const firstRow = extractKeyValuePairs(data[0])
    const firstYear = firstRow[0].value;
    for(let i=1; i<firstRow.length; i++){
        let firstSt = {
            state: firstRow[i].key,
            amts: [{x: new Date(parseInt(firstYear), 0, 1), y:firstRow[i].value}]
        }
        res.push(firstSt)
    }
    for(let i=1; i<data.length; i++){
        const row = extractKeyValuePairs(data[i])
        const year = row[0].value;
        for(let j=0; j<res.length; j++){
            for(let l=1; l<row.length; l++){
                if(res[j].state === row[l].key){
                    let st = {
                        x: new Date(parseInt(year), 0, 1),
                        y: row[l].value
                    }
                    res[j].amts.push(st)
                }
            }
        }
    }
    return res;
}

// export const extractKeyValuePairs = (obj) => {
//     return Object.entries(obj).map(([key, value]) => ({ key, value }));
//   };
  

  



export const getlineCustomSeries = (data) => {
    let res = [];
    for(let i=0; i<data.length; i++){
        const item = {
            dataSource: data[i].amts,
            xName: 'x',
            yName: 'y',
            name: data[i].state,
            width: '2',
            marker: { visible: true, width: 10, height: 10 },
            type: 'Line'
        }
        res.push(item)
    }
    return res;
}
// export const lineCustomSeries = [
//     { 
//         dataSource: lineChartData[0],
//         xName: 'x',
//         yName: 'y',
//         name: 'Germany',
//         width: '2',
//         marker: { visible: true, width: 10, height: 10 },
//         type: 'Line' },
  
//     { 
//         dataSource: lineChartData[1],
//         xName: 'x',
//         yName: 'y',
//         name: 'England',
//         width: '2',
//         marker: { visible: true, width: 10, height: 10 },
//         type: 'Line' },
  
//   ];
export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
};

export const LinePrimaryYAxis = {
    labelFormat: '{value} In',
    rangePadding: 'None',
    minimum: 150,
    maximum: 2150,
    interval: 250,
    intervalType: 'Inches',
    lineStyle: { width: 0 },
    // AxisScrollbarSettings: {Enable="true"},
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
};