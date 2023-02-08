export const lineChartData = [
    [
      { x: new Date(2005, 0, 1), y: 21 },
      { x: new Date(2006, 0, 1), y: 24 },
      { x: new Date(2007, 0, 1), y: 36 },
      { x: new Date(2008, 0, 1), y: 38 },
      { x: new Date(2009, 0, 1), y: 54 },
      { x: new Date(2010, 0, 1), y: 57 },
      { x: new Date(2011, 0, 1), y: 70 },
      { x: new Date(2009, 0, 1), y: 54 },
      { x: new Date(2010, 0, 1), y: 57 },
      { x: new Date(2011, 0, 1), y: 70 },
    ],
    [
      { x: new Date(2005, 0, 1), y: 28 },
      { x: new Date(2006, 0, 1), y: 44 },
      { x: new Date(2007, 0, 1), y: 48 },
      { x: new Date(2008, 0, 1), y: 50 },
      { x: new Date(2009, 0, 1), y: 66 },
      { x: new Date(2010, 0, 1), y: 78 },
      { x: new Date(2011, 0, 1), y: 84 },

    ],
  
    [
      { x: new Date(2005, 0, 1), y: 10 },
      { x: new Date(2006, 0, 1), y: 20 },
      { x: new Date(2007, 0, 1), y: 30 },
      { x: new Date(2008, 0, 1), y: 39 },
      { x: new Date(2009, 0, 1), y: 50 },
      { x: new Date(2010, 0, 1), y: 70 },
      { x: new Date(2011, 0, 1), y: 100 },
    ],
  ];

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
  
//   export const getlineChartData = () => {
//     const data = require('../../data/prAnnual.json');
//     const firstRow = extractKeyValuePairs(data[0]);
//     const firstYear = firstRow[0].value;
  
//     let res = firstRow
//       .slice(1)
//       .map((row, index) => ({
//         state: row.key,
//         amts: [{ x: new Date(parseInt(firstYear, 10), 0, 1), y: row.value }],
//       }));
  
//     for (let i = 1; i < data.length; i++) {
//       const row = extractKeyValuePairs(data[i]);
//       const year = row[0].value;
  
//       for (let l = 1; l < row.length; l++) {
//         const st = {
//           x: new Date(parseInt(year, 10), 0, 1),
//           y: row[l].value,
//         };
  
//         const index = res.findIndex((item) => item.state === row[l].key);
//         if (index !== -1) {
//           res[index].amts.push(st);
//         }
//       }
//     }
  
//     return res;
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
    minimum: 0,
    maximum: 2500,
    interval: 250,
    intervalType: 'Inches',
    lineStyle: { width: 0 },
    // AxisScrollbarSettings: {Enable="true"},
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
};