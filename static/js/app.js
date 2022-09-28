
// This code was largely inspired by Dom's tutorial on HW14

function DrawBargraph(sampleId)
{
    console.log(`Draw Bar Graph()`);
}

function DrawBubbleChart(sampleId)
{
    console.log(`Draw Bubble Chart(${sampleId})`);
}

function ShowMetadata(sampleId)
{
    console.log(`Show MetaData(${sampleId})`);
}

function InitDashboard()
{
    console.log("InitDashboard");
    
    let selector = d3.select("#selDataset");

    let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

    d3.json(url).then(data => {
        console.log("Here's the data:", data)

        let sampleNames = data.names;
        console.log("Here are the sample names:", sampleNames)

        for (let i = 0; i < sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            selector.append("option").text(sampleId).property("value", sampleId);

        };

        let initialId = selector.property("value");
        console.log(`initialId = ${initialId}`)

        

    });
}

InitDashboard();