import React, { Component } from 'react'

const { getChart } = require('../billboard-top-100.js');

export default class Chart extends Component {
    render() {
// date format YYYY-MM-DD

getChart('hot-100', '2016-08-27', (err, chart) => {
  if (err) console.log(err);
  console.log(chart.week) // prints the week of the chart in the date format YYYY-MM-DD
  console.log(chart.previousWeek.url) // prints the URL of the previous week's chart
  console.log(chart.previousWeek.date) // prints the date of the previous week's chart in the date format YYYY-MM-DD
  console.log(chart.nextWeek.url) // prints the URL of the next week's chart
  console.log(chart.nextWeek.date) // prints the date of the next week's chart in the date format YYYY-MM-DD
  console.log(chart.songs); // prints array of top 100 songs for week of August 27, 2016
  console.log(chart.songs[3]); // prints song with rank: 4 for week of August 27, 2016
  console.log(chart.songs[0].title); // prints title of top song for week of August 27, 2016
  console.log(chart.songs[0].artist); // prints artist of top songs for week of August 27, 2016
  console.log(chart.songs[0].rank) // prints rank of top song (1) for week of August 27, 2016
  console.log(chart.songs[0].cover) // prints URL for Billboard cover image of top song for week of August 27, 2016
});

// chartName defaults to hot-100
// date defaults to saturday of this week

getChart((err, chart) => {
  if (err) console.log(err);
  // use chart
});

// date defaults to saturday of this week

getChart('hot-100', (err, chart) => {
  if (err) console.log(err);
  // use chart
});

// 'All Time' chart

getChart('greatest-billboard-200-albums', (err, chart) => {
  if (err) console.log(err);
  console.log(chart.songs); //prints array of top 200 albums
  console.log(chart.songs[3]); //prints album with rank: 4
  console.log(chart.songs[0].title); //prints title of top album
  console.log(chart.songs[0].artist); //prints artist of top songs
  console.log(chart.songs[0].rank) //prints rank of top album (1)
  console.log(chart.songs[0].cover) //prints URL for Billboard cover image of top album
});

// list all available charts

const { listCharts } = require('../billboard-top-100.js');

listCharts((err, charts) => {
  if (err) console.log(err);
  console.log(charts); // prints array of all charts
});

        return (
            <div>
                
            </div>
        )
    }
}
