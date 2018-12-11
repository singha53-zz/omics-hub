import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Store from '@material-ui/icons/Store';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
// core components
import GridItem from 'components/Dashboard/Grid/GridItem.jsx';
import GridContainer from 'components/Dashboard/Grid/GridContainer.jsx';
import Table from 'components/Dashboard/Table/Table.jsx';
import Tasks from 'components/Dashboard/Tasks/Tasks.jsx';
import CustomTabs from 'components/Dashboard/CustomTabs/CustomTabs.jsx';
import Danger from 'components/Dashboard/Typography/Danger.jsx';
import Card from 'components/Dashboard/Card/Card.jsx';
import CardHeader from 'components/Dashboard/Card/CardHeader.jsx';
import CardIcon from 'components/Dashboard/Card/CardIcon.jsx';
import CardBody from 'components/Dashboard/Card/CardBody.jsx';
import CardFooter from 'components/Dashboard/Card/CardFooter.jsx';

import { bugs, website, server } from 'variables/general.jsx';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from 'variables/charts.jsx';

import dashboardStyle from 'assets/jss/views/dashboardStyle.jsx';

import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap'
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  },
  App:  {
						top: '10px',
						right: 0,
						bottom: 0,
						left: '15%',
						height: '300px',
						width: '100%'
					}
};

const scatterData = [
  {
    "id": "group A",
    "data": [
      {
        "x": 6,
        "y": 39
      },
      {
        "x": 30,
        "y": 30
      },
      {
        "x": 53,
        "y": 3
      },
      {
        "x": 54,
        "y": 102
      },
      {
        "x": 81,
        "y": 97
      },
      {
        "x": 8,
        "y": 30
      },
      {
        "x": 20,
        "y": 41
      },
      {
        "x": 15,
        "y": 111
      },
      {
        "x": 12,
        "y": 96
      },
      {
        "x": 84,
        "y": 93
      },
      {
        "x": 35,
        "y": 15
      },
      {
        "x": 20,
        "y": 88
      },
      {
        "x": 16,
        "y": 17
      },
      {
        "x": 13,
        "y": 12
      },
      {
        "x": 57,
        "y": 113
      },
      {
        "x": 47,
        "y": 94
      },
      {
        "x": 46,
        "y": 18
      },
      {
        "x": 34,
        "y": 83
      },
      {
        "x": 1,
        "y": 77
      },
      {
        "x": 72,
        "y": 16
      },
      {
        "x": 98,
        "y": 11
      },
      {
        "x": 94,
        "y": 55
      },
      {
        "x": 56,
        "y": 41
      },
      {
        "x": 14,
        "y": 78
      },
      {
        "x": 84,
        "y": 108
      },
      {
        "x": 7,
        "y": 23
      },
      {
        "x": 95,
        "y": 19
      },
      {
        "x": 4,
        "y": 71
      },
      {
        "x": 100,
        "y": 19
      },
      {
        "x": 71,
        "y": 23
      },
      {
        "x": 16,
        "y": 115
      },
      {
        "x": 25,
        "y": 33
      },
      {
        "x": 62,
        "y": 37
      },
      {
        "x": 32,
        "y": 97
      },
      {
        "x": 95,
        "y": 35
      },
      {
        "x": 24,
        "y": 104
      },
      {
        "x": 37,
        "y": 46
      },
      {
        "x": 17,
        "y": 73
      },
      {
        "x": 84,
        "y": 76
      },
      {
        "x": 86,
        "y": 44
      },
      {
        "x": 68,
        "y": 29
      },
      {
        "x": 87,
        "y": 51
      },
      {
        "x": 16,
        "y": 30
      },
      {
        "x": 18,
        "y": 12
      },
      {
        "x": 79,
        "y": 95
      },
      {
        "x": 95,
        "y": 22
      },
      {
        "x": 29,
        "y": 63
      },
      {
        "x": 4,
        "y": 80
      },
      {
        "x": 9,
        "y": 23
      },
      {
        "x": 81,
        "y": 48
      }
    ]
  },
  {
    "id": "group B",
    "data": [
      {
        "x": 5,
        "y": 73
      },
      {
        "x": 57,
        "y": 0
      },
      {
        "x": 32,
        "y": 61
      },
      {
        "x": 71,
        "y": 9
      },
      {
        "x": 83,
        "y": 59
      },
      {
        "x": 7,
        "y": 70
      },
      {
        "x": 66,
        "y": 2
      },
      {
        "x": 69,
        "y": 52
      },
      {
        "x": 77,
        "y": 46
      },
      {
        "x": 20,
        "y": 3
      },
      {
        "x": 93,
        "y": 4
      },
      {
        "x": 19,
        "y": 108
      },
      {
        "x": 85,
        "y": 47
      },
      {
        "x": 32,
        "y": 42
      },
      {
        "x": 68,
        "y": 92
      },
      {
        "x": 36,
        "y": 80
      },
      {
        "x": 73,
        "y": 85
      },
      {
        "x": 69,
        "y": 63
      },
      {
        "x": 9,
        "y": 90
      },
      {
        "x": 7,
        "y": 47
      },
      {
        "x": 39,
        "y": 25
      },
      {
        "x": 61,
        "y": 42
      },
      {
        "x": 94,
        "y": 105
      },
      {
        "x": 52,
        "y": 112
      },
      {
        "x": 67,
        "y": 42
      },
      {
        "x": 94,
        "y": 49
      },
      {
        "x": 75,
        "y": 78
      },
      {
        "x": 35,
        "y": 95
      },
      {
        "x": 78,
        "y": 61
      },
      {
        "x": 68,
        "y": 5
      },
      {
        "x": 36,
        "y": 33
      },
      {
        "x": 54,
        "y": 114
      },
      {
        "x": 59,
        "y": 110
      },
      {
        "x": 55,
        "y": 42
      },
      {
        "x": 1,
        "y": 120
      },
      {
        "x": 49,
        "y": 78
      },
      {
        "x": 11,
        "y": 120
      },
      {
        "x": 99,
        "y": 78
      },
      {
        "x": 19,
        "y": 52
      },
      {
        "x": 16,
        "y": 92
      },
      {
        "x": 47,
        "y": 28
      },
      {
        "x": 100,
        "y": 62
      },
      {
        "x": 64,
        "y": 27
      },
      {
        "x": 58,
        "y": 9
      },
      {
        "x": 5,
        "y": 12
      },
      {
        "x": 64,
        "y": 102
      },
      {
        "x": 25,
        "y": 50
      },
      {
        "x": 76,
        "y": 100
      },
      {
        "x": 12,
        "y": 11
      },
      {
        "x": 40,
        "y": 69
      }
    ]
  },
  {
    "id": "group C",
    "data": [
      {
        "x": 68,
        "y": 117
      },
      {
        "x": 3,
        "y": 107
      },
      {
        "x": 34,
        "y": 34
      },
      {
        "x": 52,
        "y": 78
      },
      {
        "x": 32,
        "y": 100
      },
      {
        "x": 94,
        "y": 19
      },
      {
        "x": 56,
        "y": 116
      },
      {
        "x": 67,
        "y": 1
      },
      {
        "x": 39,
        "y": 39
      },
      {
        "x": 88,
        "y": 2
      },
      {
        "x": 21,
        "y": 36
      },
      {
        "x": 93,
        "y": 33
      },
      {
        "x": 26,
        "y": 66
      },
      {
        "x": 24,
        "y": 103
      },
      {
        "x": 4,
        "y": 109
      },
      {
        "x": 21,
        "y": 116
      },
      {
        "x": 64,
        "y": 69
      },
      {
        "x": 91,
        "y": 106
      },
      {
        "x": 50,
        "y": 111
      },
      {
        "x": 74,
        "y": 59
      },
      {
        "x": 89,
        "y": 26
      },
      {
        "x": 60,
        "y": 39
      },
      {
        "x": 86,
        "y": 106
      },
      {
        "x": 41,
        "y": 18
      },
      {
        "x": 44,
        "y": 114
      },
      {
        "x": 71,
        "y": 113
      },
      {
        "x": 66,
        "y": 31
      },
      {
        "x": 62,
        "y": 68
      },
      {
        "x": 61,
        "y": 96
      },
      {
        "x": 30,
        "y": 49
      },
      {
        "x": 76,
        "y": 0
      },
      {
        "x": 19,
        "y": 81
      },
      {
        "x": 85,
        "y": 25
      },
      {
        "x": 86,
        "y": 25
      },
      {
        "x": 50,
        "y": 98
      },
      {
        "x": 13,
        "y": 32
      },
      {
        "x": 16,
        "y": 118
      },
      {
        "x": 5,
        "y": 74
      },
      {
        "x": 1,
        "y": 7
      },
      {
        "x": 7,
        "y": 118
      },
      {
        "x": 59,
        "y": 65
      },
      {
        "x": 74,
        "y": 44
      },
      {
        "x": 16,
        "y": 4
      },
      {
        "x": 88,
        "y": 103
      },
      {
        "x": 47,
        "y": 21
      },
      {
        "x": 49,
        "y": 78
      },
      {
        "x": 2,
        "y": 42
      },
      {
        "x": 73,
        "y": 81
      },
      {
        "x": 11,
        "y": 50
      },
      {
        "x": 90,
        "y": 52
      }
    ]
  },
  {
    "id": "group D",
    "data": [
      {
        "x": 84,
        "y": 109
      },
      {
        "x": 92,
        "y": 97
      },
      {
        "x": 8,
        "y": 79
      },
      {
        "x": 64,
        "y": 42
      },
      {
        "x": 39,
        "y": 40
      },
      {
        "x": 19,
        "y": 119
      },
      {
        "x": 1,
        "y": 34
      },
      {
        "x": 90,
        "y": 112
      },
      {
        "x": 60,
        "y": 85
      },
      {
        "x": 78,
        "y": 70
      },
      {
        "x": 80,
        "y": 18
      },
      {
        "x": 89,
        "y": 115
      },
      {
        "x": 78,
        "y": 17
      },
      {
        "x": 87,
        "y": 118
      },
      {
        "x": 34,
        "y": 31
      },
      {
        "x": 26,
        "y": 49
      },
      {
        "x": 35,
        "y": 70
      },
      {
        "x": 93,
        "y": 101
      },
      {
        "x": 16,
        "y": 107
      },
      {
        "x": 37,
        "y": 27
      },
      {
        "x": 97,
        "y": 75
      },
      {
        "x": 60,
        "y": 33
      },
      {
        "x": 25,
        "y": 79
      },
      {
        "x": 73,
        "y": 77
      },
      {
        "x": 56,
        "y": 47
      },
      {
        "x": 74,
        "y": 15
      },
      {
        "x": 51,
        "y": 29
      },
      {
        "x": 88,
        "y": 79
      },
      {
        "x": 6,
        "y": 47
      },
      {
        "x": 78,
        "y": 6
      },
      {
        "x": 21,
        "y": 110
      },
      {
        "x": 88,
        "y": 52
      },
      {
        "x": 20,
        "y": 77
      },
      {
        "x": 15,
        "y": 97
      },
      {
        "x": 72,
        "y": 78
      },
      {
        "x": 45,
        "y": 77
      },
      {
        "x": 88,
        "y": 39
      },
      {
        "x": 57,
        "y": 31
      },
      {
        "x": 5,
        "y": 28
      },
      {
        "x": 81,
        "y": 7
      },
      {
        "x": 99,
        "y": 9
      },
      {
        "x": 9,
        "y": 27
      },
      {
        "x": 19,
        "y": 90
      },
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 86,
        "y": 68
      },
      {
        "x": 56,
        "y": 56
      },
      {
        "x": 77,
        "y": 117
      },
      {
        "x": 98,
        "y": 73
      },
      {
        "x": 11,
        "y": 81
      },
      {
        "x": 14,
        "y": 82
      }
    ]
  },
  {
    "id": "group E",
    "data": [
      {
        "x": 11,
        "y": 60
      },
      {
        "x": 44,
        "y": 5
      },
      {
        "x": 50,
        "y": 99
      },
      {
        "x": 17,
        "y": 46
      },
      {
        "x": 37,
        "y": 47
      },
      {
        "x": 1,
        "y": 30
      },
      {
        "x": 25,
        "y": 69
      },
      {
        "x": 17,
        "y": 105
      },
      {
        "x": 41,
        "y": 85
      },
      {
        "x": 23,
        "y": 74
      },
      {
        "x": 76,
        "y": 55
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 17,
        "y": 48
      },
      {
        "x": 63,
        "y": 75
      },
      {
        "x": 35,
        "y": 99
      },
      {
        "x": 30,
        "y": 63
      },
      {
        "x": 11,
        "y": 3
      },
      {
        "x": 96,
        "y": 83
      },
      {
        "x": 50,
        "y": 26
      },
      {
        "x": 96,
        "y": 16
      },
      {
        "x": 99,
        "y": 109
      },
      {
        "x": 30,
        "y": 82
      },
      {
        "x": 32,
        "y": 81
      },
      {
        "x": 13,
        "y": 78
      },
      {
        "x": 52,
        "y": 62
      },
      {
        "x": 24,
        "y": 50
      },
      {
        "x": 9,
        "y": 86
      },
      {
        "x": 8,
        "y": 80
      },
      {
        "x": 61,
        "y": 69
      },
      {
        "x": 5,
        "y": 2
      },
      {
        "x": 38,
        "y": 58
      },
      {
        "x": 59,
        "y": 113
      },
      {
        "x": 22,
        "y": 116
      },
      {
        "x": 71,
        "y": 98
      },
      {
        "x": 65,
        "y": 50
      },
      {
        "x": 95,
        "y": 12
      },
      {
        "x": 66,
        "y": 54
      },
      {
        "x": 26,
        "y": 55
      },
      {
        "x": 18,
        "y": 8
      },
      {
        "x": 31,
        "y": 113
      },
      {
        "x": 79,
        "y": 5
      },
      {
        "x": 68,
        "y": 50
      },
      {
        "x": 29,
        "y": 54
      },
      {
        "x": 52,
        "y": 72
      },
      {
        "x": 9,
        "y": 20
      },
      {
        "x": 36,
        "y": 73
      },
      {
        "x": 95,
        "y": 95
      },
      {
        "x": 13,
        "y": 120
      },
      {
        "x": 57,
        "y": 20
      },
      {
        "x": 42,
        "y": 68
      }
    ]
  }
]

const heatmapData = [
  {
    "country": "AD",
    "hot dog": 79,
    "hot dogColor": "hsl(352, 70%, 50%)",
    "burger": 5,
    "burgerColor": "hsl(296, 70%, 50%)",
    "sandwich": 15,
    "sandwichColor": "hsl(332, 70%, 50%)",
    "kebab": 58,
    "kebabColor": "hsl(194, 70%, 50%)",
    "fries": 56,
    "friesColor": "hsl(43, 70%, 50%)",
    "donut": 90,
    "donutColor": "hsl(209, 70%, 50%)",
    "junk": 96,
    "junkColor": "hsl(196, 70%, 50%)",
    "sushi": 80,
    "sushiColor": "hsl(60, 70%, 50%)",
    "ramen": 75,
    "ramenColor": "hsl(7, 70%, 50%)",
    "curry": 6,
    "curryColor": "hsl(60, 70%, 50%)",
    "udon": 8,
    "udonColor": "hsl(321, 70%, 50%)",
    "bagel": 38,
    "bagelColor": "hsl(237, 70%, 50%)",
    "yakitori": 5,
    "yakitoriColor": "hsl(138, 70%, 50%)",
    "takoyaki": 6,
    "takoyakiColor": "hsl(92, 70%, 50%)",
    "tacos": 72,
    "tacosColor": "hsl(109, 70%, 50%)",
    "miso soup": 14,
    "miso soupColor": "hsl(79, 70%, 50%)",
    "tortilla": 21,
    "tortillaColor": "hsl(63, 70%, 50%)",
    "tapas": 95,
    "tapasColor": "hsl(47, 70%, 50%)",
    "chipirones": 47,
    "chipironesColor": "hsl(202, 70%, 50%)",
    "gazpacho": 23,
    "gazpachoColor": "hsl(296, 70%, 50%)",
    "soba": 89,
    "sobaColor": "hsl(94, 70%, 50%)",
    "bavette": 90,
    "bavetteColor": "hsl(239, 70%, 50%)",
    "steak": 34,
    "steakColor": "hsl(119, 70%, 50%)",
    "pizza": 46,
    "pizzaColor": "hsl(148, 70%, 50%)",
    "spaghetti": 55,
    "spaghettiColor": "hsl(337, 70%, 50%)",
    "ravioli": 36,
    "ravioliColor": "hsl(176, 70%, 50%)",
    "salad": 59,
    "saladColor": "hsl(286, 70%, 50%)",
    "pad thai": 75,
    "pad thaiColor": "hsl(20, 70%, 50%)",
    "bun": 31,
    "bunColor": "hsl(161, 70%, 50%)",
    "waffle": 52,
    "waffleColor": "hsl(343, 70%, 50%)",
    "crepe": 28,
    "crepeColor": "hsl(137, 70%, 50%)",
    "churros": 11,
    "churrosColor": "hsl(340, 70%, 50%)",
    "paella": 62,
    "paellaColor": "hsl(110, 70%, 50%)",
    "empanadas": 5,
    "empanadasColor": "hsl(321, 70%, 50%)",
    "bruschetta": 77,
    "bruschettaColor": "hsl(113, 70%, 50%)",
    "onion soup": 28,
    "onion soupColor": "hsl(323, 70%, 50%)",
    "cassoulet": 54,
    "cassouletColor": "hsl(346, 70%, 50%)",
    "bouillabaisse": 38,
    "bouillabaisseColor": "hsl(306, 70%, 50%)",
    "unagi": 43,
    "unagiColor": "hsl(57, 70%, 50%)",
    "tempura": 63,
    "tempuraColor": "hsl(57, 70%, 50%)",
    "tonkatsu": 14,
    "tonkatsuColor": "hsl(265, 70%, 50%)",
    "shabu-shabu": 14,
    "shabu-shabuColor": "hsl(354, 70%, 50%)",
    "twinkies": 11,
    "twinkiesColor": "hsl(1, 70%, 50%)",
    "jerky": 30,
    "jerkyColor": "hsl(158, 70%, 50%)",
    "fajitas": 95,
    "fajitasColor": "hsl(318, 70%, 50%)",
    "jambalaya": 39,
    "jambalayaColor": "hsl(23, 70%, 50%)",
    "meatloaf": 38,
    "meatloafColor": "hsl(116, 70%, 50%)",
    "mac n' cheese": 0,
    "mac n' cheeseColor": "hsl(130, 70%, 50%)",
    "baked beans": 58,
    "baked beansColor": "hsl(213, 70%, 50%)",
    "popcorn": 20,
    "popcornColor": "hsl(144, 70%, 50%)",
    "buffalo wings": 66,
    "buffalo wingsColor": "hsl(136, 70%, 50%)",
    "BBQ ribs": 79,
    "BBQ ribsColor": "hsl(163, 70%, 50%)",
    "apple pie": 99,
    "apple pieColor": "hsl(269, 70%, 50%)",
    "nachos": 83,
    "nachosColor": "hsl(53, 70%, 50%)",
    "risotto": 62,
    "risottoColor": "hsl(259, 70%, 50%)",
    "tiramisu": 80,
    "tiramisuColor": "hsl(102, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 7,
    "hot dogColor": "hsl(133, 70%, 50%)",
    "burger": 22,
    "burgerColor": "hsl(35, 70%, 50%)",
    "sandwich": 44,
    "sandwichColor": "hsl(286, 70%, 50%)",
    "kebab": 38,
    "kebabColor": "hsl(83, 70%, 50%)",
    "fries": 83,
    "friesColor": "hsl(217, 70%, 50%)",
    "donut": 3,
    "donutColor": "hsl(144, 70%, 50%)",
    "junk": 99,
    "junkColor": "hsl(270, 70%, 50%)",
    "sushi": 22,
    "sushiColor": "hsl(257, 70%, 50%)",
    "ramen": 80,
    "ramenColor": "hsl(26, 70%, 50%)",
    "curry": 50,
    "curryColor": "hsl(292, 70%, 50%)",
    "udon": 30,
    "udonColor": "hsl(136, 70%, 50%)",
    "bagel": 6,
    "bagelColor": "hsl(267, 70%, 50%)",
    "yakitori": 99,
    "yakitoriColor": "hsl(274, 70%, 50%)",
    "takoyaki": 6,
    "takoyakiColor": "hsl(306, 70%, 50%)",
    "tacos": 88,
    "tacosColor": "hsl(187, 70%, 50%)",
    "miso soup": 94,
    "miso soupColor": "hsl(35, 70%, 50%)",
    "tortilla": 17,
    "tortillaColor": "hsl(323, 70%, 50%)",
    "tapas": 93,
    "tapasColor": "hsl(193, 70%, 50%)",
    "chipirones": 61,
    "chipironesColor": "hsl(38, 70%, 50%)",
    "gazpacho": 31,
    "gazpachoColor": "hsl(299, 70%, 50%)",
    "soba": 2,
    "sobaColor": "hsl(354, 70%, 50%)",
    "bavette": 57,
    "bavetteColor": "hsl(113, 70%, 50%)",
    "steak": 53,
    "steakColor": "hsl(32, 70%, 50%)",
    "pizza": 27,
    "pizzaColor": "hsl(101, 70%, 50%)",
    "spaghetti": 32,
    "spaghettiColor": "hsl(329, 70%, 50%)",
    "ravioli": 79,
    "ravioliColor": "hsl(192, 70%, 50%)",
    "salad": 25,
    "saladColor": "hsl(161, 70%, 50%)",
    "pad thai": 37,
    "pad thaiColor": "hsl(91, 70%, 50%)",
    "bun": 53,
    "bunColor": "hsl(236, 70%, 50%)",
    "waffle": 70,
    "waffleColor": "hsl(356, 70%, 50%)",
    "crepe": 95,
    "crepeColor": "hsl(19, 70%, 50%)",
    "churros": 31,
    "churrosColor": "hsl(290, 70%, 50%)",
    "paella": 82,
    "paellaColor": "hsl(346, 70%, 50%)",
    "empanadas": 15,
    "empanadasColor": "hsl(40, 70%, 50%)",
    "bruschetta": 16,
    "bruschettaColor": "hsl(355, 70%, 50%)",
    "onion soup": 85,
    "onion soupColor": "hsl(161, 70%, 50%)",
    "cassoulet": 52,
    "cassouletColor": "hsl(165, 70%, 50%)",
    "bouillabaisse": 0,
    "bouillabaisseColor": "hsl(198, 70%, 50%)",
    "unagi": 32,
    "unagiColor": "hsl(99, 70%, 50%)",
    "tempura": 42,
    "tempuraColor": "hsl(35, 70%, 50%)",
    "tonkatsu": 8,
    "tonkatsuColor": "hsl(12, 70%, 50%)",
    "shabu-shabu": 14,
    "shabu-shabuColor": "hsl(144, 70%, 50%)",
    "twinkies": 5,
    "twinkiesColor": "hsl(12, 70%, 50%)",
    "jerky": 22,
    "jerkyColor": "hsl(61, 70%, 50%)",
    "fajitas": 71,
    "fajitasColor": "hsl(120, 70%, 50%)",
    "jambalaya": 61,
    "jambalayaColor": "hsl(194, 70%, 50%)",
    "meatloaf": 47,
    "meatloafColor": "hsl(197, 70%, 50%)",
    "mac n' cheese": 45,
    "mac n' cheeseColor": "hsl(205, 70%, 50%)",
    "baked beans": 3,
    "baked beansColor": "hsl(346, 70%, 50%)",
    "popcorn": 92,
    "popcornColor": "hsl(24, 70%, 50%)",
    "buffalo wings": 98,
    "buffalo wingsColor": "hsl(108, 70%, 50%)",
    "BBQ ribs": 82,
    "BBQ ribsColor": "hsl(246, 70%, 50%)",
    "apple pie": 1,
    "apple pieColor": "hsl(153, 70%, 50%)",
    "nachos": 56,
    "nachosColor": "hsl(131, 70%, 50%)",
    "risotto": 98,
    "risottoColor": "hsl(121, 70%, 50%)",
    "tiramisu": 68,
    "tiramisuColor": "hsl(47, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 72,
    "hot dogColor": "hsl(216, 70%, 50%)",
    "burger": 83,
    "burgerColor": "hsl(14, 70%, 50%)",
    "sandwich": 65,
    "sandwichColor": "hsl(348, 70%, 50%)",
    "kebab": 21,
    "kebabColor": "hsl(174, 70%, 50%)",
    "fries": 3,
    "friesColor": "hsl(123, 70%, 50%)",
    "donut": 37,
    "donutColor": "hsl(224, 70%, 50%)",
    "junk": 40,
    "junkColor": "hsl(227, 70%, 50%)",
    "sushi": 36,
    "sushiColor": "hsl(11, 70%, 50%)",
    "ramen": 62,
    "ramenColor": "hsl(257, 70%, 50%)",
    "curry": 8,
    "curryColor": "hsl(235, 70%, 50%)",
    "udon": 3,
    "udonColor": "hsl(294, 70%, 50%)",
    "bagel": 91,
    "bagelColor": "hsl(273, 70%, 50%)",
    "yakitori": 57,
    "yakitoriColor": "hsl(206, 70%, 50%)",
    "takoyaki": 20,
    "takoyakiColor": "hsl(12, 70%, 50%)",
    "tacos": 44,
    "tacosColor": "hsl(271, 70%, 50%)",
    "miso soup": 18,
    "miso soupColor": "hsl(354, 70%, 50%)",
    "tortilla": 32,
    "tortillaColor": "hsl(119, 70%, 50%)",
    "tapas": 46,
    "tapasColor": "hsl(56, 70%, 50%)",
    "chipirones": 77,
    "chipironesColor": "hsl(23, 70%, 50%)",
    "gazpacho": 34,
    "gazpachoColor": "hsl(282, 70%, 50%)",
    "soba": 59,
    "sobaColor": "hsl(283, 70%, 50%)",
    "bavette": 62,
    "bavetteColor": "hsl(297, 70%, 50%)",
    "steak": 50,
    "steakColor": "hsl(196, 70%, 50%)",
    "pizza": 4,
    "pizzaColor": "hsl(273, 70%, 50%)",
    "spaghetti": 34,
    "spaghettiColor": "hsl(21, 70%, 50%)",
    "ravioli": 3,
    "ravioliColor": "hsl(187, 70%, 50%)",
    "salad": 67,
    "saladColor": "hsl(317, 70%, 50%)",
    "pad thai": 44,
    "pad thaiColor": "hsl(263, 70%, 50%)",
    "bun": 95,
    "bunColor": "hsl(50, 70%, 50%)",
    "waffle": 10,
    "waffleColor": "hsl(31, 70%, 50%)",
    "crepe": 71,
    "crepeColor": "hsl(124, 70%, 50%)",
    "churros": 85,
    "churrosColor": "hsl(243, 70%, 50%)",
    "paella": 93,
    "paellaColor": "hsl(169, 70%, 50%)",
    "empanadas": 65,
    "empanadasColor": "hsl(219, 70%, 50%)",
    "bruschetta": 24,
    "bruschettaColor": "hsl(139, 70%, 50%)",
    "onion soup": 81,
    "onion soupColor": "hsl(13, 70%, 50%)",
    "cassoulet": 26,
    "cassouletColor": "hsl(97, 70%, 50%)",
    "bouillabaisse": 30,
    "bouillabaisseColor": "hsl(277, 70%, 50%)",
    "unagi": 16,
    "unagiColor": "hsl(263, 70%, 50%)",
    "tempura": 8,
    "tempuraColor": "hsl(220, 70%, 50%)",
    "tonkatsu": 91,
    "tonkatsuColor": "hsl(215, 70%, 50%)",
    "shabu-shabu": 11,
    "shabu-shabuColor": "hsl(215, 70%, 50%)",
    "twinkies": 89,
    "twinkiesColor": "hsl(8, 70%, 50%)",
    "jerky": 24,
    "jerkyColor": "hsl(173, 70%, 50%)",
    "fajitas": 14,
    "fajitasColor": "hsl(134, 70%, 50%)",
    "jambalaya": 47,
    "jambalayaColor": "hsl(98, 70%, 50%)",
    "meatloaf": 59,
    "meatloafColor": "hsl(6, 70%, 50%)",
    "mac n' cheese": 58,
    "mac n' cheeseColor": "hsl(87, 70%, 50%)",
    "baked beans": 31,
    "baked beansColor": "hsl(132, 70%, 50%)",
    "popcorn": 86,
    "popcornColor": "hsl(190, 70%, 50%)",
    "buffalo wings": 23,
    "buffalo wingsColor": "hsl(118, 70%, 50%)",
    "BBQ ribs": 1,
    "BBQ ribsColor": "hsl(97, 70%, 50%)",
    "apple pie": 43,
    "apple pieColor": "hsl(146, 70%, 50%)",
    "nachos": 32,
    "nachosColor": "hsl(300, 70%, 50%)",
    "risotto": 94,
    "risottoColor": "hsl(335, 70%, 50%)",
    "tiramisu": 8,
    "tiramisuColor": "hsl(226, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 11,
    "hot dogColor": "hsl(357, 70%, 50%)",
    "burger": 27,
    "burgerColor": "hsl(240, 70%, 50%)",
    "sandwich": 23,
    "sandwichColor": "hsl(59, 70%, 50%)",
    "kebab": 15,
    "kebabColor": "hsl(185, 70%, 50%)",
    "fries": 27,
    "friesColor": "hsl(135, 70%, 50%)",
    "donut": 73,
    "donutColor": "hsl(297, 70%, 50%)",
    "junk": 9,
    "junkColor": "hsl(188, 70%, 50%)",
    "sushi": 67,
    "sushiColor": "hsl(82, 70%, 50%)",
    "ramen": 28,
    "ramenColor": "hsl(139, 70%, 50%)",
    "curry": 14,
    "curryColor": "hsl(276, 70%, 50%)",
    "udon": 56,
    "udonColor": "hsl(219, 70%, 50%)",
    "bagel": 85,
    "bagelColor": "hsl(215, 70%, 50%)",
    "yakitori": 79,
    "yakitoriColor": "hsl(273, 70%, 50%)",
    "takoyaki": 28,
    "takoyakiColor": "hsl(248, 70%, 50%)",
    "tacos": 68,
    "tacosColor": "hsl(316, 70%, 50%)",
    "miso soup": 13,
    "miso soupColor": "hsl(339, 70%, 50%)",
    "tortilla": 19,
    "tortillaColor": "hsl(209, 70%, 50%)",
    "tapas": 86,
    "tapasColor": "hsl(245, 70%, 50%)",
    "chipirones": 74,
    "chipironesColor": "hsl(41, 70%, 50%)",
    "gazpacho": 88,
    "gazpachoColor": "hsl(93, 70%, 50%)",
    "soba": 49,
    "sobaColor": "hsl(121, 70%, 50%)",
    "bavette": 16,
    "bavetteColor": "hsl(207, 70%, 50%)",
    "steak": 22,
    "steakColor": "hsl(20, 70%, 50%)",
    "pizza": 60,
    "pizzaColor": "hsl(202, 70%, 50%)",
    "spaghetti": 63,
    "spaghettiColor": "hsl(180, 70%, 50%)",
    "ravioli": 78,
    "ravioliColor": "hsl(165, 70%, 50%)",
    "salad": 94,
    "saladColor": "hsl(211, 70%, 50%)",
    "pad thai": 45,
    "pad thaiColor": "hsl(127, 70%, 50%)",
    "bun": 23,
    "bunColor": "hsl(59, 70%, 50%)",
    "waffle": 48,
    "waffleColor": "hsl(194, 70%, 50%)",
    "crepe": 60,
    "crepeColor": "hsl(244, 70%, 50%)",
    "churros": 40,
    "churrosColor": "hsl(182, 70%, 50%)",
    "paella": 25,
    "paellaColor": "hsl(74, 70%, 50%)",
    "empanadas": 6,
    "empanadasColor": "hsl(205, 70%, 50%)",
    "bruschetta": 92,
    "bruschettaColor": "hsl(297, 70%, 50%)",
    "onion soup": 52,
    "onion soupColor": "hsl(173, 70%, 50%)",
    "cassoulet": 43,
    "cassouletColor": "hsl(238, 70%, 50%)",
    "bouillabaisse": 63,
    "bouillabaisseColor": "hsl(59, 70%, 50%)",
    "unagi": 59,
    "unagiColor": "hsl(154, 70%, 50%)",
    "tempura": 90,
    "tempuraColor": "hsl(246, 70%, 50%)",
    "tonkatsu": 43,
    "tonkatsuColor": "hsl(289, 70%, 50%)",
    "shabu-shabu": 10,
    "shabu-shabuColor": "hsl(68, 70%, 50%)",
    "twinkies": 84,
    "twinkiesColor": "hsl(324, 70%, 50%)",
    "jerky": 20,
    "jerkyColor": "hsl(339, 70%, 50%)",
    "fajitas": 0,
    "fajitasColor": "hsl(239, 70%, 50%)",
    "jambalaya": 62,
    "jambalayaColor": "hsl(350, 70%, 50%)",
    "meatloaf": 83,
    "meatloafColor": "hsl(2, 70%, 50%)",
    "mac n' cheese": 24,
    "mac n' cheeseColor": "hsl(344, 70%, 50%)",
    "baked beans": 95,
    "baked beansColor": "hsl(259, 70%, 50%)",
    "popcorn": 87,
    "popcornColor": "hsl(326, 70%, 50%)",
    "buffalo wings": 75,
    "buffalo wingsColor": "hsl(344, 70%, 50%)",
    "BBQ ribs": 78,
    "BBQ ribsColor": "hsl(279, 70%, 50%)",
    "apple pie": 65,
    "apple pieColor": "hsl(4, 70%, 50%)",
    "nachos": 7,
    "nachosColor": "hsl(182, 70%, 50%)",
    "risotto": 56,
    "risottoColor": "hsl(211, 70%, 50%)",
    "tiramisu": 20,
    "tiramisuColor": "hsl(31, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 31,
    "hot dogColor": "hsl(40, 70%, 50%)",
    "burger": 48,
    "burgerColor": "hsl(319, 70%, 50%)",
    "sandwich": 24,
    "sandwichColor": "hsl(256, 70%, 50%)",
    "kebab": 17,
    "kebabColor": "hsl(186, 70%, 50%)",
    "fries": 41,
    "friesColor": "hsl(320, 70%, 50%)",
    "donut": 71,
    "donutColor": "hsl(82, 70%, 50%)",
    "junk": 91,
    "junkColor": "hsl(244, 70%, 50%)",
    "sushi": 22,
    "sushiColor": "hsl(133, 70%, 50%)",
    "ramen": 88,
    "ramenColor": "hsl(202, 70%, 50%)",
    "curry": 27,
    "curryColor": "hsl(306, 70%, 50%)",
    "udon": 76,
    "udonColor": "hsl(12, 70%, 50%)",
    "bagel": 76,
    "bagelColor": "hsl(284, 70%, 50%)",
    "yakitori": 35,
    "yakitoriColor": "hsl(283, 70%, 50%)",
    "takoyaki": 85,
    "takoyakiColor": "hsl(234, 70%, 50%)",
    "tacos": 65,
    "tacosColor": "hsl(165, 70%, 50%)",
    "miso soup": 8,
    "miso soupColor": "hsl(15, 70%, 50%)",
    "tortilla": 31,
    "tortillaColor": "hsl(320, 70%, 50%)",
    "tapas": 41,
    "tapasColor": "hsl(239, 70%, 50%)",
    "chipirones": 10,
    "chipironesColor": "hsl(230, 70%, 50%)",
    "gazpacho": 8,
    "gazpachoColor": "hsl(80, 70%, 50%)",
    "soba": 68,
    "sobaColor": "hsl(178, 70%, 50%)",
    "bavette": 53,
    "bavetteColor": "hsl(78, 70%, 50%)",
    "steak": 16,
    "steakColor": "hsl(238, 70%, 50%)",
    "pizza": 64,
    "pizzaColor": "hsl(90, 70%, 50%)",
    "spaghetti": 15,
    "spaghettiColor": "hsl(300, 70%, 50%)",
    "ravioli": 65,
    "ravioliColor": "hsl(218, 70%, 50%)",
    "salad": 67,
    "saladColor": "hsl(172, 70%, 50%)",
    "pad thai": 76,
    "pad thaiColor": "hsl(149, 70%, 50%)",
    "bun": 6,
    "bunColor": "hsl(135, 70%, 50%)",
    "waffle": 76,
    "waffleColor": "hsl(213, 70%, 50%)",
    "crepe": 88,
    "crepeColor": "hsl(353, 70%, 50%)",
    "churros": 59,
    "churrosColor": "hsl(197, 70%, 50%)",
    "paella": 97,
    "paellaColor": "hsl(204, 70%, 50%)",
    "empanadas": 75,
    "empanadasColor": "hsl(75, 70%, 50%)",
    "bruschetta": 99,
    "bruschettaColor": "hsl(127, 70%, 50%)",
    "onion soup": 24,
    "onion soupColor": "hsl(301, 70%, 50%)",
    "cassoulet": 15,
    "cassouletColor": "hsl(123, 70%, 50%)",
    "bouillabaisse": 62,
    "bouillabaisseColor": "hsl(295, 70%, 50%)",
    "unagi": 62,
    "unagiColor": "hsl(202, 70%, 50%)",
    "tempura": 34,
    "tempuraColor": "hsl(16, 70%, 50%)",
    "tonkatsu": 13,
    "tonkatsuColor": "hsl(3, 70%, 50%)",
    "shabu-shabu": 1,
    "shabu-shabuColor": "hsl(353, 70%, 50%)",
    "twinkies": 13,
    "twinkiesColor": "hsl(357, 70%, 50%)",
    "jerky": 22,
    "jerkyColor": "hsl(160, 70%, 50%)",
    "fajitas": 80,
    "fajitasColor": "hsl(313, 70%, 50%)",
    "jambalaya": 57,
    "jambalayaColor": "hsl(257, 70%, 50%)",
    "meatloaf": 36,
    "meatloafColor": "hsl(335, 70%, 50%)",
    "mac n' cheese": 100,
    "mac n' cheeseColor": "hsl(229, 70%, 50%)",
    "baked beans": 93,
    "baked beansColor": "hsl(82, 70%, 50%)",
    "popcorn": 33,
    "popcornColor": "hsl(135, 70%, 50%)",
    "buffalo wings": 45,
    "buffalo wingsColor": "hsl(194, 70%, 50%)",
    "BBQ ribs": 20,
    "BBQ ribsColor": "hsl(79, 70%, 50%)",
    "apple pie": 71,
    "apple pieColor": "hsl(229, 70%, 50%)",
    "nachos": 78,
    "nachosColor": "hsl(91, 70%, 50%)",
    "risotto": 36,
    "risottoColor": "hsl(87, 70%, 50%)",
    "tiramisu": 39,
    "tiramisuColor": "hsl(187, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 81,
    "hot dogColor": "hsl(65, 70%, 50%)",
    "burger": 79,
    "burgerColor": "hsl(100, 70%, 50%)",
    "sandwich": 68,
    "sandwichColor": "hsl(162, 70%, 50%)",
    "kebab": 24,
    "kebabColor": "hsl(21, 70%, 50%)",
    "fries": 69,
    "friesColor": "hsl(79, 70%, 50%)",
    "donut": 89,
    "donutColor": "hsl(51, 70%, 50%)",
    "junk": 41,
    "junkColor": "hsl(358, 70%, 50%)",
    "sushi": 45,
    "sushiColor": "hsl(354, 70%, 50%)",
    "ramen": 20,
    "ramenColor": "hsl(251, 70%, 50%)",
    "curry": 46,
    "curryColor": "hsl(54, 70%, 50%)",
    "udon": 60,
    "udonColor": "hsl(16, 70%, 50%)",
    "bagel": 35,
    "bagelColor": "hsl(56, 70%, 50%)",
    "yakitori": 13,
    "yakitoriColor": "hsl(282, 70%, 50%)",
    "takoyaki": 2,
    "takoyakiColor": "hsl(126, 70%, 50%)",
    "tacos": 94,
    "tacosColor": "hsl(53, 70%, 50%)",
    "miso soup": 60,
    "miso soupColor": "hsl(26, 70%, 50%)",
    "tortilla": 85,
    "tortillaColor": "hsl(240, 70%, 50%)",
    "tapas": 29,
    "tapasColor": "hsl(221, 70%, 50%)",
    "chipirones": 22,
    "chipironesColor": "hsl(197, 70%, 50%)",
    "gazpacho": 82,
    "gazpachoColor": "hsl(110, 70%, 50%)",
    "soba": 40,
    "sobaColor": "hsl(291, 70%, 50%)",
    "bavette": 94,
    "bavetteColor": "hsl(196, 70%, 50%)",
    "steak": 48,
    "steakColor": "hsl(129, 70%, 50%)",
    "pizza": 26,
    "pizzaColor": "hsl(18, 70%, 50%)",
    "spaghetti": 36,
    "spaghettiColor": "hsl(314, 70%, 50%)",
    "ravioli": 80,
    "ravioliColor": "hsl(121, 70%, 50%)",
    "salad": 80,
    "saladColor": "hsl(148, 70%, 50%)",
    "pad thai": 10,
    "pad thaiColor": "hsl(50, 70%, 50%)",
    "bun": 67,
    "bunColor": "hsl(155, 70%, 50%)",
    "waffle": 79,
    "waffleColor": "hsl(178, 70%, 50%)",
    "crepe": 15,
    "crepeColor": "hsl(269, 70%, 50%)",
    "churros": 67,
    "churrosColor": "hsl(335, 70%, 50%)",
    "paella": 5,
    "paellaColor": "hsl(268, 70%, 50%)",
    "empanadas": 98,
    "empanadasColor": "hsl(98, 70%, 50%)",
    "bruschetta": 81,
    "bruschettaColor": "hsl(356, 70%, 50%)",
    "onion soup": 12,
    "onion soupColor": "hsl(341, 70%, 50%)",
    "cassoulet": 33,
    "cassouletColor": "hsl(29, 70%, 50%)",
    "bouillabaisse": 70,
    "bouillabaisseColor": "hsl(61, 70%, 50%)",
    "unagi": 14,
    "unagiColor": "hsl(51, 70%, 50%)",
    "tempura": 5,
    "tempuraColor": "hsl(35, 70%, 50%)",
    "tonkatsu": 78,
    "tonkatsuColor": "hsl(166, 70%, 50%)",
    "shabu-shabu": 100,
    "shabu-shabuColor": "hsl(242, 70%, 50%)",
    "twinkies": 48,
    "twinkiesColor": "hsl(7, 70%, 50%)",
    "jerky": 29,
    "jerkyColor": "hsl(124, 70%, 50%)",
    "fajitas": 56,
    "fajitasColor": "hsl(105, 70%, 50%)",
    "jambalaya": 56,
    "jambalayaColor": "hsl(269, 70%, 50%)",
    "meatloaf": 60,
    "meatloafColor": "hsl(24, 70%, 50%)",
    "mac n' cheese": 55,
    "mac n' cheeseColor": "hsl(178, 70%, 50%)",
    "baked beans": 41,
    "baked beansColor": "hsl(255, 70%, 50%)",
    "popcorn": 54,
    "popcornColor": "hsl(348, 70%, 50%)",
    "buffalo wings": 91,
    "buffalo wingsColor": "hsl(324, 70%, 50%)",
    "BBQ ribs": 27,
    "BBQ ribsColor": "hsl(238, 70%, 50%)",
    "apple pie": 7,
    "apple pieColor": "hsl(127, 70%, 50%)",
    "nachos": 32,
    "nachosColor": "hsl(177, 70%, 50%)",
    "risotto": 34,
    "risottoColor": "hsl(34, 70%, 50%)",
    "tiramisu": 39,
    "tiramisuColor": "hsl(125, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 32,
    "hot dogColor": "hsl(200, 70%, 50%)",
    "burger": 65,
    "burgerColor": "hsl(304, 70%, 50%)",
    "sandwich": 20,
    "sandwichColor": "hsl(323, 70%, 50%)",
    "kebab": 9,
    "kebabColor": "hsl(338, 70%, 50%)",
    "fries": 37,
    "friesColor": "hsl(154, 70%, 50%)",
    "donut": 95,
    "donutColor": "hsl(350, 70%, 50%)",
    "junk": 64,
    "junkColor": "hsl(98, 70%, 50%)",
    "sushi": 95,
    "sushiColor": "hsl(313, 70%, 50%)",
    "ramen": 62,
    "ramenColor": "hsl(149, 70%, 50%)",
    "curry": 46,
    "curryColor": "hsl(198, 70%, 50%)",
    "udon": 6,
    "udonColor": "hsl(310, 70%, 50%)",
    "bagel": 38,
    "bagelColor": "hsl(313, 70%, 50%)",
    "yakitori": 26,
    "yakitoriColor": "hsl(192, 70%, 50%)",
    "takoyaki": 80,
    "takoyakiColor": "hsl(16, 70%, 50%)",
    "tacos": 81,
    "tacosColor": "hsl(239, 70%, 50%)",
    "miso soup": 37,
    "miso soupColor": "hsl(285, 70%, 50%)",
    "tortilla": 23,
    "tortillaColor": "hsl(228, 70%, 50%)",
    "tapas": 93,
    "tapasColor": "hsl(286, 70%, 50%)",
    "chipirones": 18,
    "chipironesColor": "hsl(343, 70%, 50%)",
    "gazpacho": 24,
    "gazpachoColor": "hsl(2, 70%, 50%)",
    "soba": 88,
    "sobaColor": "hsl(193, 70%, 50%)",
    "bavette": 43,
    "bavetteColor": "hsl(330, 70%, 50%)",
    "steak": 27,
    "steakColor": "hsl(57, 70%, 50%)",
    "pizza": 2,
    "pizzaColor": "hsl(89, 70%, 50%)",
    "spaghetti": 31,
    "spaghettiColor": "hsl(137, 70%, 50%)",
    "ravioli": 55,
    "ravioliColor": "hsl(346, 70%, 50%)",
    "salad": 55,
    "saladColor": "hsl(64, 70%, 50%)",
    "pad thai": 33,
    "pad thaiColor": "hsl(250, 70%, 50%)",
    "bun": 35,
    "bunColor": "hsl(232, 70%, 50%)",
    "waffle": 54,
    "waffleColor": "hsl(313, 70%, 50%)",
    "crepe": 53,
    "crepeColor": "hsl(99, 70%, 50%)",
    "churros": 38,
    "churrosColor": "hsl(245, 70%, 50%)",
    "paella": 32,
    "paellaColor": "hsl(341, 70%, 50%)",
    "empanadas": 55,
    "empanadasColor": "hsl(102, 70%, 50%)",
    "bruschetta": 40,
    "bruschettaColor": "hsl(244, 70%, 50%)",
    "onion soup": 80,
    "onion soupColor": "hsl(268, 70%, 50%)",
    "cassoulet": 28,
    "cassouletColor": "hsl(301, 70%, 50%)",
    "bouillabaisse": 14,
    "bouillabaisseColor": "hsl(317, 70%, 50%)",
    "unagi": 26,
    "unagiColor": "hsl(126, 70%, 50%)",
    "tempura": 73,
    "tempuraColor": "hsl(105, 70%, 50%)",
    "tonkatsu": 40,
    "tonkatsuColor": "hsl(20, 70%, 50%)",
    "shabu-shabu": 24,
    "shabu-shabuColor": "hsl(314, 70%, 50%)",
    "twinkies": 99,
    "twinkiesColor": "hsl(325, 70%, 50%)",
    "jerky": 82,
    "jerkyColor": "hsl(282, 70%, 50%)",
    "fajitas": 55,
    "fajitasColor": "hsl(325, 70%, 50%)",
    "jambalaya": 27,
    "jambalayaColor": "hsl(135, 70%, 50%)",
    "meatloaf": 54,
    "meatloafColor": "hsl(271, 70%, 50%)",
    "mac n' cheese": 6,
    "mac n' cheeseColor": "hsl(288, 70%, 50%)",
    "baked beans": 74,
    "baked beansColor": "hsl(152, 70%, 50%)",
    "popcorn": 88,
    "popcornColor": "hsl(267, 70%, 50%)",
    "buffalo wings": 78,
    "buffalo wingsColor": "hsl(311, 70%, 50%)",
    "BBQ ribs": 50,
    "BBQ ribsColor": "hsl(108, 70%, 50%)",
    "apple pie": 14,
    "apple pieColor": "hsl(150, 70%, 50%)",
    "nachos": 44,
    "nachosColor": "hsl(331, 70%, 50%)",
    "risotto": 32,
    "risottoColor": "hsl(45, 70%, 50%)",
    "tiramisu": 75,
    "tiramisuColor": "hsl(198, 70%, 50%)"
  },
  {
    "country": "AO",
    "hot dog": 32,
    "hot dogColor": "hsl(289, 70%, 50%)",
    "burger": 55,
    "burgerColor": "hsl(35, 70%, 50%)",
    "sandwich": 28,
    "sandwichColor": "hsl(278, 70%, 50%)",
    "kebab": 32,
    "kebabColor": "hsl(25, 70%, 50%)",
    "fries": 88,
    "friesColor": "hsl(277, 70%, 50%)",
    "donut": 66,
    "donutColor": "hsl(280, 70%, 50%)",
    "junk": 95,
    "junkColor": "hsl(345, 70%, 50%)",
    "sushi": 59,
    "sushiColor": "hsl(168, 70%, 50%)",
    "ramen": 26,
    "ramenColor": "hsl(46, 70%, 50%)",
    "curry": 74,
    "curryColor": "hsl(298, 70%, 50%)",
    "udon": 60,
    "udonColor": "hsl(120, 70%, 50%)",
    "bagel": 74,
    "bagelColor": "hsl(167, 70%, 50%)",
    "yakitori": 63,
    "yakitoriColor": "hsl(350, 70%, 50%)",
    "takoyaki": 32,
    "takoyakiColor": "hsl(239, 70%, 50%)",
    "tacos": 22,
    "tacosColor": "hsl(160, 70%, 50%)",
    "miso soup": 22,
    "miso soupColor": "hsl(188, 70%, 50%)",
    "tortilla": 38,
    "tortillaColor": "hsl(69, 70%, 50%)",
    "tapas": 94,
    "tapasColor": "hsl(248, 70%, 50%)",
    "chipirones": 2,
    "chipironesColor": "hsl(143, 70%, 50%)",
    "gazpacho": 36,
    "gazpachoColor": "hsl(13, 70%, 50%)",
    "soba": 7,
    "sobaColor": "hsl(198, 70%, 50%)",
    "bavette": 82,
    "bavetteColor": "hsl(163, 70%, 50%)",
    "steak": 22,
    "steakColor": "hsl(278, 70%, 50%)",
    "pizza": 69,
    "pizzaColor": "hsl(87, 70%, 50%)",
    "spaghetti": 48,
    "spaghettiColor": "hsl(259, 70%, 50%)",
    "ravioli": 55,
    "ravioliColor": "hsl(235, 70%, 50%)",
    "salad": 43,
    "saladColor": "hsl(216, 70%, 50%)",
    "pad thai": 24,
    "pad thaiColor": "hsl(29, 70%, 50%)",
    "bun": 17,
    "bunColor": "hsl(73, 70%, 50%)",
    "waffle": 65,
    "waffleColor": "hsl(357, 70%, 50%)",
    "crepe": 21,
    "crepeColor": "hsl(94, 70%, 50%)",
    "churros": 23,
    "churrosColor": "hsl(179, 70%, 50%)",
    "paella": 23,
    "paellaColor": "hsl(78, 70%, 50%)",
    "empanadas": 88,
    "empanadasColor": "hsl(151, 70%, 50%)",
    "bruschetta": 80,
    "bruschettaColor": "hsl(328, 70%, 50%)",
    "onion soup": 72,
    "onion soupColor": "hsl(7, 70%, 50%)",
    "cassoulet": 66,
    "cassouletColor": "hsl(343, 70%, 50%)",
    "bouillabaisse": 62,
    "bouillabaisseColor": "hsl(204, 70%, 50%)",
    "unagi": 1,
    "unagiColor": "hsl(158, 70%, 50%)",
    "tempura": 25,
    "tempuraColor": "hsl(200, 70%, 50%)",
    "tonkatsu": 2,
    "tonkatsuColor": "hsl(158, 70%, 50%)",
    "shabu-shabu": 40,
    "shabu-shabuColor": "hsl(83, 70%, 50%)",
    "twinkies": 56,
    "twinkiesColor": "hsl(195, 70%, 50%)",
    "jerky": 26,
    "jerkyColor": "hsl(227, 70%, 50%)",
    "fajitas": 99,
    "fajitasColor": "hsl(105, 70%, 50%)",
    "jambalaya": 92,
    "jambalayaColor": "hsl(352, 70%, 50%)",
    "meatloaf": 9,
    "meatloafColor": "hsl(267, 70%, 50%)",
    "mac n' cheese": 49,
    "mac n' cheeseColor": "hsl(106, 70%, 50%)",
    "baked beans": 9,
    "baked beansColor": "hsl(94, 70%, 50%)",
    "popcorn": 41,
    "popcornColor": "hsl(95, 70%, 50%)",
    "buffalo wings": 50,
    "buffalo wingsColor": "hsl(251, 70%, 50%)",
    "BBQ ribs": 37,
    "BBQ ribsColor": "hsl(99, 70%, 50%)",
    "apple pie": 30,
    "apple pieColor": "hsl(145, 70%, 50%)",
    "nachos": 42,
    "nachosColor": "hsl(310, 70%, 50%)",
    "risotto": 40,
    "risottoColor": "hsl(62, 70%, 50%)",
    "tiramisu": 31,
    "tiramisuColor": "hsl(168, 70%, 50%)"
  },
  {
    "country": "AQ",
    "hot dog": 13,
    "hot dogColor": "hsl(284, 70%, 50%)",
    "burger": 74,
    "burgerColor": "hsl(52, 70%, 50%)",
    "sandwich": 5,
    "sandwichColor": "hsl(145, 70%, 50%)",
    "kebab": 50,
    "kebabColor": "hsl(124, 70%, 50%)",
    "fries": 3,
    "friesColor": "hsl(244, 70%, 50%)",
    "donut": 3,
    "donutColor": "hsl(8, 70%, 50%)",
    "junk": 25,
    "junkColor": "hsl(156, 70%, 50%)",
    "sushi": 34,
    "sushiColor": "hsl(331, 70%, 50%)",
    "ramen": 56,
    "ramenColor": "hsl(227, 70%, 50%)",
    "curry": 81,
    "curryColor": "hsl(57, 70%, 50%)",
    "udon": 48,
    "udonColor": "hsl(197, 70%, 50%)",
    "bagel": 46,
    "bagelColor": "hsl(155, 70%, 50%)",
    "yakitori": 7,
    "yakitoriColor": "hsl(287, 70%, 50%)",
    "takoyaki": 61,
    "takoyakiColor": "hsl(67, 70%, 50%)",
    "tacos": 8,
    "tacosColor": "hsl(172, 70%, 50%)",
    "miso soup": 17,
    "miso soupColor": "hsl(308, 70%, 50%)",
    "tortilla": 57,
    "tortillaColor": "hsl(242, 70%, 50%)",
    "tapas": 78,
    "tapasColor": "hsl(213, 70%, 50%)",
    "chipirones": 34,
    "chipironesColor": "hsl(173, 70%, 50%)",
    "gazpacho": 35,
    "gazpachoColor": "hsl(6, 70%, 50%)",
    "soba": 65,
    "sobaColor": "hsl(212, 70%, 50%)",
    "bavette": 52,
    "bavetteColor": "hsl(177, 70%, 50%)",
    "steak": 19,
    "steakColor": "hsl(287, 70%, 50%)",
    "pizza": 55,
    "pizzaColor": "hsl(271, 70%, 50%)",
    "spaghetti": 5,
    "spaghettiColor": "hsl(113, 70%, 50%)",
    "ravioli": 82,
    "ravioliColor": "hsl(90, 70%, 50%)",
    "salad": 47,
    "saladColor": "hsl(83, 70%, 50%)",
    "pad thai": 56,
    "pad thaiColor": "hsl(171, 70%, 50%)",
    "bun": 57,
    "bunColor": "hsl(204, 70%, 50%)",
    "waffle": 11,
    "waffleColor": "hsl(68, 70%, 50%)",
    "crepe": 23,
    "crepeColor": "hsl(74, 70%, 50%)",
    "churros": 60,
    "churrosColor": "hsl(225, 70%, 50%)",
    "paella": 19,
    "paellaColor": "hsl(234, 70%, 50%)",
    "empanadas": 60,
    "empanadasColor": "hsl(46, 70%, 50%)",
    "bruschetta": 60,
    "bruschettaColor": "hsl(221, 70%, 50%)",
    "onion soup": 64,
    "onion soupColor": "hsl(339, 70%, 50%)",
    "cassoulet": 3,
    "cassouletColor": "hsl(115, 70%, 50%)",
    "bouillabaisse": 22,
    "bouillabaisseColor": "hsl(288, 70%, 50%)",
    "unagi": 39,
    "unagiColor": "hsl(353, 70%, 50%)",
    "tempura": 76,
    "tempuraColor": "hsl(50, 70%, 50%)",
    "tonkatsu": 56,
    "tonkatsuColor": "hsl(358, 70%, 50%)",
    "shabu-shabu": 20,
    "shabu-shabuColor": "hsl(17, 70%, 50%)",
    "twinkies": 10,
    "twinkiesColor": "hsl(135, 70%, 50%)",
    "jerky": 77,
    "jerkyColor": "hsl(277, 70%, 50%)",
    "fajitas": 33,
    "fajitasColor": "hsl(106, 70%, 50%)",
    "jambalaya": 27,
    "jambalayaColor": "hsl(153, 70%, 50%)",
    "meatloaf": 70,
    "meatloafColor": "hsl(58, 70%, 50%)",
    "mac n' cheese": 94,
    "mac n' cheeseColor": "hsl(141, 70%, 50%)",
    "baked beans": 41,
    "baked beansColor": "hsl(192, 70%, 50%)",
    "popcorn": 50,
    "popcornColor": "hsl(233, 70%, 50%)",
    "buffalo wings": 83,
    "buffalo wingsColor": "hsl(130, 70%, 50%)",
    "BBQ ribs": 0,
    "BBQ ribsColor": "hsl(4, 70%, 50%)",
    "apple pie": 33,
    "apple pieColor": "hsl(286, 70%, 50%)",
    "nachos": 99,
    "nachosColor": "hsl(352, 70%, 50%)",
    "risotto": 3,
    "risottoColor": "hsl(284, 70%, 50%)",
    "tiramisu": 85,
    "tiramisuColor": "hsl(233, 70%, 50%)"
  },
  {
    "country": "AR",
    "hot dog": 71,
    "hot dogColor": "hsl(248, 70%, 50%)",
    "burger": 50,
    "burgerColor": "hsl(132, 70%, 50%)",
    "sandwich": 57,
    "sandwichColor": "hsl(40, 70%, 50%)",
    "kebab": 97,
    "kebabColor": "hsl(31, 70%, 50%)",
    "fries": 0,
    "friesColor": "hsl(345, 70%, 50%)",
    "donut": 75,
    "donutColor": "hsl(351, 70%, 50%)",
    "junk": 17,
    "junkColor": "hsl(319, 70%, 50%)",
    "sushi": 80,
    "sushiColor": "hsl(113, 70%, 50%)",
    "ramen": 65,
    "ramenColor": "hsl(84, 70%, 50%)",
    "curry": 25,
    "curryColor": "hsl(353, 70%, 50%)",
    "udon": 38,
    "udonColor": "hsl(60, 70%, 50%)",
    "bagel": 82,
    "bagelColor": "hsl(142, 70%, 50%)",
    "yakitori": 38,
    "yakitoriColor": "hsl(94, 70%, 50%)",
    "takoyaki": 12,
    "takoyakiColor": "hsl(323, 70%, 50%)",
    "tacos": 36,
    "tacosColor": "hsl(109, 70%, 50%)",
    "miso soup": 86,
    "miso soupColor": "hsl(175, 70%, 50%)",
    "tortilla": 15,
    "tortillaColor": "hsl(253, 70%, 50%)",
    "tapas": 10,
    "tapasColor": "hsl(149, 70%, 50%)",
    "chipirones": 68,
    "chipironesColor": "hsl(172, 70%, 50%)",
    "gazpacho": 92,
    "gazpachoColor": "hsl(189, 70%, 50%)",
    "soba": 42,
    "sobaColor": "hsl(59, 70%, 50%)",
    "bavette": 72,
    "bavetteColor": "hsl(269, 70%, 50%)",
    "steak": 84,
    "steakColor": "hsl(85, 70%, 50%)",
    "pizza": 36,
    "pizzaColor": "hsl(233, 70%, 50%)",
    "spaghetti": 99,
    "spaghettiColor": "hsl(251, 70%, 50%)",
    "ravioli": 18,
    "ravioliColor": "hsl(103, 70%, 50%)",
    "salad": 5,
    "saladColor": "hsl(194, 70%, 50%)",
    "pad thai": 42,
    "pad thaiColor": "hsl(179, 70%, 50%)",
    "bun": 61,
    "bunColor": "hsl(51, 70%, 50%)",
    "waffle": 37,
    "waffleColor": "hsl(31, 70%, 50%)",
    "crepe": 42,
    "crepeColor": "hsl(234, 70%, 50%)",
    "churros": 96,
    "churrosColor": "hsl(352, 70%, 50%)",
    "paella": 75,
    "paellaColor": "hsl(333, 70%, 50%)",
    "empanadas": 94,
    "empanadasColor": "hsl(351, 70%, 50%)",
    "bruschetta": 97,
    "bruschettaColor": "hsl(288, 70%, 50%)",
    "onion soup": 8,
    "onion soupColor": "hsl(13, 70%, 50%)",
    "cassoulet": 94,
    "cassouletColor": "hsl(343, 70%, 50%)",
    "bouillabaisse": 87,
    "bouillabaisseColor": "hsl(92, 70%, 50%)",
    "unagi": 33,
    "unagiColor": "hsl(202, 70%, 50%)",
    "tempura": 65,
    "tempuraColor": "hsl(224, 70%, 50%)",
    "tonkatsu": 27,
    "tonkatsuColor": "hsl(23, 70%, 50%)",
    "shabu-shabu": 82,
    "shabu-shabuColor": "hsl(269, 70%, 50%)",
    "twinkies": 44,
    "twinkiesColor": "hsl(137, 70%, 50%)",
    "jerky": 32,
    "jerkyColor": "hsl(300, 70%, 50%)",
    "fajitas": 8,
    "fajitasColor": "hsl(174, 70%, 50%)",
    "jambalaya": 80,
    "jambalayaColor": "hsl(278, 70%, 50%)",
    "meatloaf": 73,
    "meatloafColor": "hsl(134, 70%, 50%)",
    "mac n' cheese": 60,
    "mac n' cheeseColor": "hsl(93, 70%, 50%)",
    "baked beans": 81,
    "baked beansColor": "hsl(241, 70%, 50%)",
    "popcorn": 98,
    "popcornColor": "hsl(106, 70%, 50%)",
    "buffalo wings": 71,
    "buffalo wingsColor": "hsl(190, 70%, 50%)",
    "BBQ ribs": 40,
    "BBQ ribsColor": "hsl(222, 70%, 50%)",
    "apple pie": 88,
    "apple pieColor": "hsl(89, 70%, 50%)",
    "nachos": 76,
    "nachosColor": "hsl(76, 70%, 50%)",
    "risotto": 20,
    "risottoColor": "hsl(98, 70%, 50%)",
    "tiramisu": 55,
    "tiramisuColor": "hsl(196, 70%, 50%)"
  },
  {
    "country": "AS",
    "hot dog": 31,
    "hot dogColor": "hsl(74, 70%, 50%)",
    "burger": 22,
    "burgerColor": "hsl(297, 70%, 50%)",
    "sandwich": 80,
    "sandwichColor": "hsl(281, 70%, 50%)",
    "kebab": 93,
    "kebabColor": "hsl(175, 70%, 50%)",
    "fries": 60,
    "friesColor": "hsl(223, 70%, 50%)",
    "donut": 15,
    "donutColor": "hsl(346, 70%, 50%)",
    "junk": 94,
    "junkColor": "hsl(288, 70%, 50%)",
    "sushi": 19,
    "sushiColor": "hsl(201, 70%, 50%)",
    "ramen": 69,
    "ramenColor": "hsl(231, 70%, 50%)",
    "curry": 98,
    "curryColor": "hsl(161, 70%, 50%)",
    "udon": 80,
    "udonColor": "hsl(281, 70%, 50%)",
    "bagel": 73,
    "bagelColor": "hsl(42, 70%, 50%)",
    "yakitori": 40,
    "yakitoriColor": "hsl(118, 70%, 50%)",
    "takoyaki": 25,
    "takoyakiColor": "hsl(69, 70%, 50%)",
    "tacos": 93,
    "tacosColor": "hsl(263, 70%, 50%)",
    "miso soup": 99,
    "miso soupColor": "hsl(123, 70%, 50%)",
    "tortilla": 37,
    "tortillaColor": "hsl(40, 70%, 50%)",
    "tapas": 80,
    "tapasColor": "hsl(285, 70%, 50%)",
    "chipirones": 86,
    "chipironesColor": "hsl(100, 70%, 50%)",
    "gazpacho": 24,
    "gazpachoColor": "hsl(7, 70%, 50%)",
    "soba": 48,
    "sobaColor": "hsl(4, 70%, 50%)",
    "bavette": 15,
    "bavetteColor": "hsl(100, 70%, 50%)",
    "steak": 89,
    "steakColor": "hsl(193, 70%, 50%)",
    "pizza": 16,
    "pizzaColor": "hsl(161, 70%, 50%)",
    "spaghetti": 19,
    "spaghettiColor": "hsl(212, 70%, 50%)",
    "ravioli": 23,
    "ravioliColor": "hsl(111, 70%, 50%)",
    "salad": 49,
    "saladColor": "hsl(305, 70%, 50%)",
    "pad thai": 8,
    "pad thaiColor": "hsl(353, 70%, 50%)",
    "bun": 13,
    "bunColor": "hsl(145, 70%, 50%)",
    "waffle": 8,
    "waffleColor": "hsl(147, 70%, 50%)",
    "crepe": 24,
    "crepeColor": "hsl(53, 70%, 50%)",
    "churros": 43,
    "churrosColor": "hsl(277, 70%, 50%)",
    "paella": 71,
    "paellaColor": "hsl(116, 70%, 50%)",
    "empanadas": 72,
    "empanadasColor": "hsl(49, 70%, 50%)",
    "bruschetta": 65,
    "bruschettaColor": "hsl(4, 70%, 50%)",
    "onion soup": 51,
    "onion soupColor": "hsl(94, 70%, 50%)",
    "cassoulet": 89,
    "cassouletColor": "hsl(40, 70%, 50%)",
    "bouillabaisse": 66,
    "bouillabaisseColor": "hsl(92, 70%, 50%)",
    "unagi": 57,
    "unagiColor": "hsl(65, 70%, 50%)",
    "tempura": 31,
    "tempuraColor": "hsl(189, 70%, 50%)",
    "tonkatsu": 19,
    "tonkatsuColor": "hsl(315, 70%, 50%)",
    "shabu-shabu": 80,
    "shabu-shabuColor": "hsl(175, 70%, 50%)",
    "twinkies": 39,
    "twinkiesColor": "hsl(312, 70%, 50%)",
    "jerky": 98,
    "jerkyColor": "hsl(208, 70%, 50%)",
    "fajitas": 20,
    "fajitasColor": "hsl(161, 70%, 50%)",
    "jambalaya": 51,
    "jambalayaColor": "hsl(37, 70%, 50%)",
    "meatloaf": 92,
    "meatloafColor": "hsl(55, 70%, 50%)",
    "mac n' cheese": 15,
    "mac n' cheeseColor": "hsl(70, 70%, 50%)",
    "baked beans": 71,
    "baked beansColor": "hsl(225, 70%, 50%)",
    "popcorn": 56,
    "popcornColor": "hsl(179, 70%, 50%)",
    "buffalo wings": 84,
    "buffalo wingsColor": "hsl(138, 70%, 50%)",
    "BBQ ribs": 93,
    "BBQ ribsColor": "hsl(43, 70%, 50%)",
    "apple pie": 9,
    "apple pieColor": "hsl(271, 70%, 50%)",
    "nachos": 27,
    "nachosColor": "hsl(188, 70%, 50%)",
    "risotto": 45,
    "risottoColor": "hsl(239, 70%, 50%)",
    "tiramisu": 81,
    "tiramisuColor": "hsl(78, 70%, 50%)"
  },
  {
    "country": "AT",
    "hot dog": 79,
    "hot dogColor": "hsl(133, 70%, 50%)",
    "burger": 20,
    "burgerColor": "hsl(105, 70%, 50%)",
    "sandwich": 26,
    "sandwichColor": "hsl(237, 70%, 50%)",
    "kebab": 46,
    "kebabColor": "hsl(168, 70%, 50%)",
    "fries": 82,
    "friesColor": "hsl(281, 70%, 50%)",
    "donut": 12,
    "donutColor": "hsl(26, 70%, 50%)",
    "junk": 62,
    "junkColor": "hsl(301, 70%, 50%)",
    "sushi": 27,
    "sushiColor": "hsl(263, 70%, 50%)",
    "ramen": 47,
    "ramenColor": "hsl(218, 70%, 50%)",
    "curry": 56,
    "curryColor": "hsl(26, 70%, 50%)",
    "udon": 19,
    "udonColor": "hsl(27, 70%, 50%)",
    "bagel": 69,
    "bagelColor": "hsl(284, 70%, 50%)",
    "yakitori": 24,
    "yakitoriColor": "hsl(16, 70%, 50%)",
    "takoyaki": 43,
    "takoyakiColor": "hsl(302, 70%, 50%)",
    "tacos": 64,
    "tacosColor": "hsl(70, 70%, 50%)",
    "miso soup": 56,
    "miso soupColor": "hsl(233, 70%, 50%)",
    "tortilla": 42,
    "tortillaColor": "hsl(25, 70%, 50%)",
    "tapas": 45,
    "tapasColor": "hsl(256, 70%, 50%)",
    "chipirones": 23,
    "chipironesColor": "hsl(13, 70%, 50%)",
    "gazpacho": 42,
    "gazpachoColor": "hsl(53, 70%, 50%)",
    "soba": 78,
    "sobaColor": "hsl(134, 70%, 50%)",
    "bavette": 57,
    "bavetteColor": "hsl(231, 70%, 50%)",
    "steak": 35,
    "steakColor": "hsl(209, 70%, 50%)",
    "pizza": 96,
    "pizzaColor": "hsl(20, 70%, 50%)",
    "spaghetti": 53,
    "spaghettiColor": "hsl(209, 70%, 50%)",
    "ravioli": 17,
    "ravioliColor": "hsl(152, 70%, 50%)",
    "salad": 44,
    "saladColor": "hsl(332, 70%, 50%)",
    "pad thai": 86,
    "pad thaiColor": "hsl(216, 70%, 50%)",
    "bun": 70,
    "bunColor": "hsl(161, 70%, 50%)",
    "waffle": 78,
    "waffleColor": "hsl(145, 70%, 50%)",
    "crepe": 43,
    "crepeColor": "hsl(316, 70%, 50%)",
    "churros": 46,
    "churrosColor": "hsl(64, 70%, 50%)",
    "paella": 10,
    "paellaColor": "hsl(318, 70%, 50%)",
    "empanadas": 78,
    "empanadasColor": "hsl(22, 70%, 50%)",
    "bruschetta": 9,
    "bruschettaColor": "hsl(128, 70%, 50%)",
    "onion soup": 27,
    "onion soupColor": "hsl(183, 70%, 50%)",
    "cassoulet": 97,
    "cassouletColor": "hsl(238, 70%, 50%)",
    "bouillabaisse": 66,
    "bouillabaisseColor": "hsl(207, 70%, 50%)",
    "unagi": 54,
    "unagiColor": "hsl(12, 70%, 50%)",
    "tempura": 26,
    "tempuraColor": "hsl(149, 70%, 50%)",
    "tonkatsu": 82,
    "tonkatsuColor": "hsl(154, 70%, 50%)",
    "shabu-shabu": 89,
    "shabu-shabuColor": "hsl(36, 70%, 50%)",
    "twinkies": 76,
    "twinkiesColor": "hsl(74, 70%, 50%)",
    "jerky": 85,
    "jerkyColor": "hsl(22, 70%, 50%)",
    "fajitas": 20,
    "fajitasColor": "hsl(259, 70%, 50%)",
    "jambalaya": 55,
    "jambalayaColor": "hsl(167, 70%, 50%)",
    "meatloaf": 32,
    "meatloafColor": "hsl(54, 70%, 50%)",
    "mac n' cheese": 56,
    "mac n' cheeseColor": "hsl(263, 70%, 50%)",
    "baked beans": 34,
    "baked beansColor": "hsl(355, 70%, 50%)",
    "popcorn": 22,
    "popcornColor": "hsl(329, 70%, 50%)",
    "buffalo wings": 46,
    "buffalo wingsColor": "hsl(149, 70%, 50%)",
    "BBQ ribs": 10,
    "BBQ ribsColor": "hsl(162, 70%, 50%)",
    "apple pie": 22,
    "apple pieColor": "hsl(190, 70%, 50%)",
    "nachos": 56,
    "nachosColor": "hsl(101, 70%, 50%)",
    "risotto": 44,
    "risottoColor": "hsl(355, 70%, 50%)",
    "tiramisu": 85,
    "tiramisuColor": "hsl(319, 70%, 50%)"
  },
  {
    "country": "AU",
    "hot dog": 83,
    "hot dogColor": "hsl(176, 70%, 50%)",
    "burger": 86,
    "burgerColor": "hsl(318, 70%, 50%)",
    "sandwich": 79,
    "sandwichColor": "hsl(303, 70%, 50%)",
    "kebab": 4,
    "kebabColor": "hsl(42, 70%, 50%)",
    "fries": 17,
    "friesColor": "hsl(288, 70%, 50%)",
    "donut": 45,
    "donutColor": "hsl(197, 70%, 50%)",
    "junk": 17,
    "junkColor": "hsl(130, 70%, 50%)",
    "sushi": 82,
    "sushiColor": "hsl(351, 70%, 50%)",
    "ramen": 27,
    "ramenColor": "hsl(153, 70%, 50%)",
    "curry": 25,
    "curryColor": "hsl(253, 70%, 50%)",
    "udon": 93,
    "udonColor": "hsl(250, 70%, 50%)",
    "bagel": 70,
    "bagelColor": "hsl(171, 70%, 50%)",
    "yakitori": 21,
    "yakitoriColor": "hsl(32, 70%, 50%)",
    "takoyaki": 17,
    "takoyakiColor": "hsl(126, 70%, 50%)",
    "tacos": 27,
    "tacosColor": "hsl(328, 70%, 50%)",
    "miso soup": 9,
    "miso soupColor": "hsl(75, 70%, 50%)",
    "tortilla": 6,
    "tortillaColor": "hsl(207, 70%, 50%)",
    "tapas": 69,
    "tapasColor": "hsl(323, 70%, 50%)",
    "chipirones": 11,
    "chipironesColor": "hsl(232, 70%, 50%)",
    "gazpacho": 25,
    "gazpachoColor": "hsl(29, 70%, 50%)",
    "soba": 85,
    "sobaColor": "hsl(200, 70%, 50%)",
    "bavette": 76,
    "bavetteColor": "hsl(239, 70%, 50%)",
    "steak": 85,
    "steakColor": "hsl(228, 70%, 50%)",
    "pizza": 2,
    "pizzaColor": "hsl(349, 70%, 50%)",
    "spaghetti": 35,
    "spaghettiColor": "hsl(55, 70%, 50%)",
    "ravioli": 90,
    "ravioliColor": "hsl(136, 70%, 50%)",
    "salad": 32,
    "saladColor": "hsl(145, 70%, 50%)",
    "pad thai": 61,
    "pad thaiColor": "hsl(220, 70%, 50%)",
    "bun": 29,
    "bunColor": "hsl(215, 70%, 50%)",
    "waffle": 43,
    "waffleColor": "hsl(45, 70%, 50%)",
    "crepe": 24,
    "crepeColor": "hsl(234, 70%, 50%)",
    "churros": 51,
    "churrosColor": "hsl(137, 70%, 50%)",
    "paella": 83,
    "paellaColor": "hsl(318, 70%, 50%)",
    "empanadas": 68,
    "empanadasColor": "hsl(13, 70%, 50%)",
    "bruschetta": 78,
    "bruschettaColor": "hsl(43, 70%, 50%)",
    "onion soup": 56,
    "onion soupColor": "hsl(59, 70%, 50%)",
    "cassoulet": 16,
    "cassouletColor": "hsl(196, 70%, 50%)",
    "bouillabaisse": 50,
    "bouillabaisseColor": "hsl(54, 70%, 50%)",
    "unagi": 71,
    "unagiColor": "hsl(303, 70%, 50%)",
    "tempura": 65,
    "tempuraColor": "hsl(269, 70%, 50%)",
    "tonkatsu": 41,
    "tonkatsuColor": "hsl(323, 70%, 50%)",
    "shabu-shabu": 71,
    "shabu-shabuColor": "hsl(194, 70%, 50%)",
    "twinkies": 42,
    "twinkiesColor": "hsl(101, 70%, 50%)",
    "jerky": 16,
    "jerkyColor": "hsl(86, 70%, 50%)",
    "fajitas": 20,
    "fajitasColor": "hsl(85, 70%, 50%)",
    "jambalaya": 14,
    "jambalayaColor": "hsl(42, 70%, 50%)",
    "meatloaf": 28,
    "meatloafColor": "hsl(33, 70%, 50%)",
    "mac n' cheese": 98,
    "mac n' cheeseColor": "hsl(41, 70%, 50%)",
    "baked beans": 72,
    "baked beansColor": "hsl(168, 70%, 50%)",
    "popcorn": 52,
    "popcornColor": "hsl(226, 70%, 50%)",
    "buffalo wings": 40,
    "buffalo wingsColor": "hsl(351, 70%, 50%)",
    "BBQ ribs": 39,
    "BBQ ribsColor": "hsl(157, 70%, 50%)",
    "apple pie": 89,
    "apple pieColor": "hsl(99, 70%, 50%)",
    "nachos": 26,
    "nachosColor": "hsl(205, 70%, 50%)",
    "risotto": 72,
    "risottoColor": "hsl(198, 70%, 50%)",
    "tiramisu": 98,
    "tiramisuColor": "hsl(95, 70%, 50%)"
  },
  {
    "country": "AW",
    "hot dog": 97,
    "hot dogColor": "hsl(158, 70%, 50%)",
    "burger": 84,
    "burgerColor": "hsl(292, 70%, 50%)",
    "sandwich": 66,
    "sandwichColor": "hsl(13, 70%, 50%)",
    "kebab": 10,
    "kebabColor": "hsl(40, 70%, 50%)",
    "fries": 69,
    "friesColor": "hsl(87, 70%, 50%)",
    "donut": 31,
    "donutColor": "hsl(310, 70%, 50%)",
    "junk": 40,
    "junkColor": "hsl(49, 70%, 50%)",
    "sushi": 59,
    "sushiColor": "hsl(343, 70%, 50%)",
    "ramen": 78,
    "ramenColor": "hsl(304, 70%, 50%)",
    "curry": 94,
    "curryColor": "hsl(248, 70%, 50%)",
    "udon": 76,
    "udonColor": "hsl(343, 70%, 50%)",
    "bagel": 2,
    "bagelColor": "hsl(195, 70%, 50%)",
    "yakitori": 54,
    "yakitoriColor": "hsl(209, 70%, 50%)",
    "takoyaki": 49,
    "takoyakiColor": "hsl(275, 70%, 50%)",
    "tacos": 18,
    "tacosColor": "hsl(352, 70%, 50%)",
    "miso soup": 14,
    "miso soupColor": "hsl(302, 70%, 50%)",
    "tortilla": 47,
    "tortillaColor": "hsl(13, 70%, 50%)",
    "tapas": 79,
    "tapasColor": "hsl(55, 70%, 50%)",
    "chipirones": 76,
    "chipironesColor": "hsl(34, 70%, 50%)",
    "gazpacho": 33,
    "gazpachoColor": "hsl(258, 70%, 50%)",
    "soba": 25,
    "sobaColor": "hsl(111, 70%, 50%)",
    "bavette": 34,
    "bavetteColor": "hsl(206, 70%, 50%)",
    "steak": 11,
    "steakColor": "hsl(236, 70%, 50%)",
    "pizza": 3,
    "pizzaColor": "hsl(109, 70%, 50%)",
    "spaghetti": 22,
    "spaghettiColor": "hsl(310, 70%, 50%)",
    "ravioli": 71,
    "ravioliColor": "hsl(203, 70%, 50%)",
    "salad": 45,
    "saladColor": "hsl(217, 70%, 50%)",
    "pad thai": 48,
    "pad thaiColor": "hsl(111, 70%, 50%)",
    "bun": 36,
    "bunColor": "hsl(109, 70%, 50%)",
    "waffle": 52,
    "waffleColor": "hsl(98, 70%, 50%)",
    "crepe": 11,
    "crepeColor": "hsl(269, 70%, 50%)",
    "churros": 54,
    "churrosColor": "hsl(28, 70%, 50%)",
    "paella": 49,
    "paellaColor": "hsl(16, 70%, 50%)",
    "empanadas": 21,
    "empanadasColor": "hsl(348, 70%, 50%)",
    "bruschetta": 6,
    "bruschettaColor": "hsl(333, 70%, 50%)",
    "onion soup": 53,
    "onion soupColor": "hsl(197, 70%, 50%)",
    "cassoulet": 2,
    "cassouletColor": "hsl(334, 70%, 50%)",
    "bouillabaisse": 19,
    "bouillabaisseColor": "hsl(220, 70%, 50%)",
    "unagi": 57,
    "unagiColor": "hsl(309, 70%, 50%)",
    "tempura": 97,
    "tempuraColor": "hsl(225, 70%, 50%)",
    "tonkatsu": 68,
    "tonkatsuColor": "hsl(332, 70%, 50%)",
    "shabu-shabu": 44,
    "shabu-shabuColor": "hsl(65, 70%, 50%)",
    "twinkies": 85,
    "twinkiesColor": "hsl(204, 70%, 50%)",
    "jerky": 19,
    "jerkyColor": "hsl(92, 70%, 50%)",
    "fajitas": 58,
    "fajitasColor": "hsl(186, 70%, 50%)",
    "jambalaya": 54,
    "jambalayaColor": "hsl(138, 70%, 50%)",
    "meatloaf": 64,
    "meatloafColor": "hsl(24, 70%, 50%)",
    "mac n' cheese": 4,
    "mac n' cheeseColor": "hsl(274, 70%, 50%)",
    "baked beans": 100,
    "baked beansColor": "hsl(266, 70%, 50%)",
    "popcorn": 36,
    "popcornColor": "hsl(62, 70%, 50%)",
    "buffalo wings": 55,
    "buffalo wingsColor": "hsl(22, 70%, 50%)",
    "BBQ ribs": 57,
    "BBQ ribsColor": "hsl(12, 70%, 50%)",
    "apple pie": 54,
    "apple pieColor": "hsl(144, 70%, 50%)",
    "nachos": 36,
    "nachosColor": "hsl(260, 70%, 50%)",
    "risotto": 43,
    "risottoColor": "hsl(187, 70%, 50%)",
    "tiramisu": 64,
    "tiramisuColor": "hsl(330, 70%, 50%)"
  },
  {
    "country": "AX",
    "hot dog": 26,
    "hot dogColor": "hsl(156, 70%, 50%)",
    "burger": 8,
    "burgerColor": "hsl(189, 70%, 50%)",
    "sandwich": 51,
    "sandwichColor": "hsl(262, 70%, 50%)",
    "kebab": 84,
    "kebabColor": "hsl(39, 70%, 50%)",
    "fries": 16,
    "friesColor": "hsl(271, 70%, 50%)",
    "donut": 11,
    "donutColor": "hsl(43, 70%, 50%)",
    "junk": 20,
    "junkColor": "hsl(333, 70%, 50%)",
    "sushi": 95,
    "sushiColor": "hsl(174, 70%, 50%)",
    "ramen": 72,
    "ramenColor": "hsl(158, 70%, 50%)",
    "curry": 67,
    "curryColor": "hsl(285, 70%, 50%)",
    "udon": 19,
    "udonColor": "hsl(276, 70%, 50%)",
    "bagel": 19,
    "bagelColor": "hsl(311, 70%, 50%)",
    "yakitori": 95,
    "yakitoriColor": "hsl(304, 70%, 50%)",
    "takoyaki": 23,
    "takoyakiColor": "hsl(231, 70%, 50%)",
    "tacos": 94,
    "tacosColor": "hsl(8, 70%, 50%)",
    "miso soup": 2,
    "miso soupColor": "hsl(240, 70%, 50%)",
    "tortilla": 12,
    "tortillaColor": "hsl(274, 70%, 50%)",
    "tapas": 51,
    "tapasColor": "hsl(323, 70%, 50%)",
    "chipirones": 15,
    "chipironesColor": "hsl(18, 70%, 50%)",
    "gazpacho": 83,
    "gazpachoColor": "hsl(171, 70%, 50%)",
    "soba": 92,
    "sobaColor": "hsl(155, 70%, 50%)",
    "bavette": 26,
    "bavetteColor": "hsl(13, 70%, 50%)",
    "steak": 13,
    "steakColor": "hsl(75, 70%, 50%)",
    "pizza": 91,
    "pizzaColor": "hsl(195, 70%, 50%)",
    "spaghetti": 89,
    "spaghettiColor": "hsl(147, 70%, 50%)",
    "ravioli": 13,
    "ravioliColor": "hsl(290, 70%, 50%)",
    "salad": 47,
    "saladColor": "hsl(252, 70%, 50%)",
    "pad thai": 46,
    "pad thaiColor": "hsl(72, 70%, 50%)",
    "bun": 30,
    "bunColor": "hsl(180, 70%, 50%)",
    "waffle": 77,
    "waffleColor": "hsl(100, 70%, 50%)",
    "crepe": 70,
    "crepeColor": "hsl(309, 70%, 50%)",
    "churros": 68,
    "churrosColor": "hsl(112, 70%, 50%)",
    "paella": 90,
    "paellaColor": "hsl(44, 70%, 50%)",
    "empanadas": 100,
    "empanadasColor": "hsl(110, 70%, 50%)",
    "bruschetta": 55,
    "bruschettaColor": "hsl(324, 70%, 50%)",
    "onion soup": 19,
    "onion soupColor": "hsl(82, 70%, 50%)",
    "cassoulet": 59,
    "cassouletColor": "hsl(94, 70%, 50%)",
    "bouillabaisse": 35,
    "bouillabaisseColor": "hsl(40, 70%, 50%)",
    "unagi": 7,
    "unagiColor": "hsl(209, 70%, 50%)",
    "tempura": 50,
    "tempuraColor": "hsl(175, 70%, 50%)",
    "tonkatsu": 81,
    "tonkatsuColor": "hsl(267, 70%, 50%)",
    "shabu-shabu": 67,
    "shabu-shabuColor": "hsl(162, 70%, 50%)",
    "twinkies": 43,
    "twinkiesColor": "hsl(315, 70%, 50%)",
    "jerky": 11,
    "jerkyColor": "hsl(63, 70%, 50%)",
    "fajitas": 65,
    "fajitasColor": "hsl(303, 70%, 50%)",
    "jambalaya": 19,
    "jambalayaColor": "hsl(11, 70%, 50%)",
    "meatloaf": 90,
    "meatloafColor": "hsl(25, 70%, 50%)",
    "mac n' cheese": 83,
    "mac n' cheeseColor": "hsl(333, 70%, 50%)",
    "baked beans": 10,
    "baked beansColor": "hsl(92, 70%, 50%)",
    "popcorn": 19,
    "popcornColor": "hsl(187, 70%, 50%)",
    "buffalo wings": 65,
    "buffalo wingsColor": "hsl(103, 70%, 50%)",
    "BBQ ribs": 89,
    "BBQ ribsColor": "hsl(255, 70%, 50%)",
    "apple pie": 10,
    "apple pieColor": "hsl(289, 70%, 50%)",
    "nachos": 70,
    "nachosColor": "hsl(111, 70%, 50%)",
    "risotto": 67,
    "risottoColor": "hsl(182, 70%, 50%)",
    "tiramisu": 23,
    "tiramisuColor": "hsl(245, 70%, 50%)"
  },
  {
    "country": "AZ",
    "hot dog": 36,
    "hot dogColor": "hsl(344, 70%, 50%)",
    "burger": 68,
    "burgerColor": "hsl(273, 70%, 50%)",
    "sandwich": 73,
    "sandwichColor": "hsl(245, 70%, 50%)",
    "kebab": 91,
    "kebabColor": "hsl(216, 70%, 50%)",
    "fries": 93,
    "friesColor": "hsl(181, 70%, 50%)",
    "donut": 99,
    "donutColor": "hsl(212, 70%, 50%)",
    "junk": 66,
    "junkColor": "hsl(282, 70%, 50%)",
    "sushi": 93,
    "sushiColor": "hsl(58, 70%, 50%)",
    "ramen": 18,
    "ramenColor": "hsl(28, 70%, 50%)",
    "curry": 44,
    "curryColor": "hsl(255, 70%, 50%)",
    "udon": 8,
    "udonColor": "hsl(352, 70%, 50%)",
    "bagel": 19,
    "bagelColor": "hsl(279, 70%, 50%)",
    "yakitori": 42,
    "yakitoriColor": "hsl(76, 70%, 50%)",
    "takoyaki": 74,
    "takoyakiColor": "hsl(126, 70%, 50%)",
    "tacos": 78,
    "tacosColor": "hsl(160, 70%, 50%)",
    "miso soup": 93,
    "miso soupColor": "hsl(96, 70%, 50%)",
    "tortilla": 59,
    "tortillaColor": "hsl(210, 70%, 50%)",
    "tapas": 70,
    "tapasColor": "hsl(305, 70%, 50%)",
    "chipirones": 92,
    "chipironesColor": "hsl(15, 70%, 50%)",
    "gazpacho": 31,
    "gazpachoColor": "hsl(228, 70%, 50%)",
    "soba": 82,
    "sobaColor": "hsl(108, 70%, 50%)",
    "bavette": 94,
    "bavetteColor": "hsl(275, 70%, 50%)",
    "steak": 49,
    "steakColor": "hsl(69, 70%, 50%)",
    "pizza": 76,
    "pizzaColor": "hsl(329, 70%, 50%)",
    "spaghetti": 62,
    "spaghettiColor": "hsl(323, 70%, 50%)",
    "ravioli": 52,
    "ravioliColor": "hsl(331, 70%, 50%)",
    "salad": 5,
    "saladColor": "hsl(193, 70%, 50%)",
    "pad thai": 28,
    "pad thaiColor": "hsl(101, 70%, 50%)",
    "bun": 37,
    "bunColor": "hsl(40, 70%, 50%)",
    "waffle": 46,
    "waffleColor": "hsl(272, 70%, 50%)",
    "crepe": 3,
    "crepeColor": "hsl(244, 70%, 50%)",
    "churros": 4,
    "churrosColor": "hsl(87, 70%, 50%)",
    "paella": 21,
    "paellaColor": "hsl(56, 70%, 50%)",
    "empanadas": 20,
    "empanadasColor": "hsl(246, 70%, 50%)",
    "bruschetta": 84,
    "bruschettaColor": "hsl(167, 70%, 50%)",
    "onion soup": 78,
    "onion soupColor": "hsl(232, 70%, 50%)",
    "cassoulet": 78,
    "cassouletColor": "hsl(219, 70%, 50%)",
    "bouillabaisse": 55,
    "bouillabaisseColor": "hsl(229, 70%, 50%)",
    "unagi": 100,
    "unagiColor": "hsl(172, 70%, 50%)",
    "tempura": 50,
    "tempuraColor": "hsl(256, 70%, 50%)",
    "tonkatsu": 0,
    "tonkatsuColor": "hsl(1, 70%, 50%)",
    "shabu-shabu": 12,
    "shabu-shabuColor": "hsl(337, 70%, 50%)",
    "twinkies": 92,
    "twinkiesColor": "hsl(53, 70%, 50%)",
    "jerky": 44,
    "jerkyColor": "hsl(196, 70%, 50%)",
    "fajitas": 93,
    "fajitasColor": "hsl(233, 70%, 50%)",
    "jambalaya": 48,
    "jambalayaColor": "hsl(62, 70%, 50%)",
    "meatloaf": 86,
    "meatloafColor": "hsl(342, 70%, 50%)",
    "mac n' cheese": 88,
    "mac n' cheeseColor": "hsl(91, 70%, 50%)",
    "baked beans": 99,
    "baked beansColor": "hsl(287, 70%, 50%)",
    "popcorn": 76,
    "popcornColor": "hsl(314, 70%, 50%)",
    "buffalo wings": 74,
    "buffalo wingsColor": "hsl(7, 70%, 50%)",
    "BBQ ribs": 43,
    "BBQ ribsColor": "hsl(14, 70%, 50%)",
    "apple pie": 65,
    "apple pieColor": "hsl(65, 70%, 50%)",
    "nachos": 23,
    "nachosColor": "hsl(248, 70%, 50%)",
    "risotto": 83,
    "risottoColor": "hsl(122, 70%, 50%)",
    "tiramisu": 84,
    "tiramisuColor": "hsl(93, 70%, 50%)"
  },
  {
    "country": "BA",
    "hot dog": 83,
    "hot dogColor": "hsl(55, 70%, 50%)",
    "burger": 58,
    "burgerColor": "hsl(136, 70%, 50%)",
    "sandwich": 65,
    "sandwichColor": "hsl(344, 70%, 50%)",
    "kebab": 14,
    "kebabColor": "hsl(182, 70%, 50%)",
    "fries": 65,
    "friesColor": "hsl(167, 70%, 50%)",
    "donut": 84,
    "donutColor": "hsl(90, 70%, 50%)",
    "junk": 24,
    "junkColor": "hsl(15, 70%, 50%)",
    "sushi": 98,
    "sushiColor": "hsl(183, 70%, 50%)",
    "ramen": 93,
    "ramenColor": "hsl(206, 70%, 50%)",
    "curry": 55,
    "curryColor": "hsl(81, 70%, 50%)",
    "udon": 80,
    "udonColor": "hsl(218, 70%, 50%)",
    "bagel": 68,
    "bagelColor": "hsl(272, 70%, 50%)",
    "yakitori": 5,
    "yakitoriColor": "hsl(26, 70%, 50%)",
    "takoyaki": 24,
    "takoyakiColor": "hsl(180, 70%, 50%)",
    "tacos": 81,
    "tacosColor": "hsl(119, 70%, 50%)",
    "miso soup": 21,
    "miso soupColor": "hsl(261, 70%, 50%)",
    "tortilla": 77,
    "tortillaColor": "hsl(217, 70%, 50%)",
    "tapas": 53,
    "tapasColor": "hsl(41, 70%, 50%)",
    "chipirones": 5,
    "chipironesColor": "hsl(262, 70%, 50%)",
    "gazpacho": 91,
    "gazpachoColor": "hsl(266, 70%, 50%)",
    "soba": 16,
    "sobaColor": "hsl(47, 70%, 50%)",
    "bavette": 50,
    "bavetteColor": "hsl(356, 70%, 50%)",
    "steak": 95,
    "steakColor": "hsl(284, 70%, 50%)",
    "pizza": 26,
    "pizzaColor": "hsl(111, 70%, 50%)",
    "spaghetti": 83,
    "spaghettiColor": "hsl(117, 70%, 50%)",
    "ravioli": 9,
    "ravioliColor": "hsl(286, 70%, 50%)",
    "salad": 32,
    "saladColor": "hsl(9, 70%, 50%)",
    "pad thai": 24,
    "pad thaiColor": "hsl(92, 70%, 50%)",
    "bun": 19,
    "bunColor": "hsl(341, 70%, 50%)",
    "waffle": 16,
    "waffleColor": "hsl(161, 70%, 50%)",
    "crepe": 18,
    "crepeColor": "hsl(235, 70%, 50%)",
    "churros": 98,
    "churrosColor": "hsl(149, 70%, 50%)",
    "paella": 41,
    "paellaColor": "hsl(78, 70%, 50%)",
    "empanadas": 18,
    "empanadasColor": "hsl(126, 70%, 50%)",
    "bruschetta": 30,
    "bruschettaColor": "hsl(317, 70%, 50%)",
    "onion soup": 4,
    "onion soupColor": "hsl(328, 70%, 50%)",
    "cassoulet": 94,
    "cassouletColor": "hsl(27, 70%, 50%)",
    "bouillabaisse": 12,
    "bouillabaisseColor": "hsl(96, 70%, 50%)",
    "unagi": 57,
    "unagiColor": "hsl(55, 70%, 50%)",
    "tempura": 30,
    "tempuraColor": "hsl(303, 70%, 50%)",
    "tonkatsu": 19,
    "tonkatsuColor": "hsl(12, 70%, 50%)",
    "shabu-shabu": 56,
    "shabu-shabuColor": "hsl(247, 70%, 50%)",
    "twinkies": 65,
    "twinkiesColor": "hsl(69, 70%, 50%)",
    "jerky": 70,
    "jerkyColor": "hsl(138, 70%, 50%)",
    "fajitas": 74,
    "fajitasColor": "hsl(347, 70%, 50%)",
    "jambalaya": 36,
    "jambalayaColor": "hsl(208, 70%, 50%)",
    "meatloaf": 43,
    "meatloafColor": "hsl(206, 70%, 50%)",
    "mac n' cheese": 77,
    "mac n' cheeseColor": "hsl(230, 70%, 50%)",
    "baked beans": 98,
    "baked beansColor": "hsl(338, 70%, 50%)",
    "popcorn": 77,
    "popcornColor": "hsl(175, 70%, 50%)",
    "buffalo wings": 5,
    "buffalo wingsColor": "hsl(151, 70%, 50%)",
    "BBQ ribs": 3,
    "BBQ ribsColor": "hsl(116, 70%, 50%)",
    "apple pie": 14,
    "apple pieColor": "hsl(58, 70%, 50%)",
    "nachos": 32,
    "nachosColor": "hsl(68, 70%, 50%)",
    "risotto": 36,
    "risottoColor": "hsl(167, 70%, 50%)",
    "tiramisu": 5,
    "tiramisuColor": "hsl(197, 70%, 50%)"
  },
  {
    "country": "BB",
    "hot dog": 3,
    "hot dogColor": "hsl(255, 70%, 50%)",
    "burger": 5,
    "burgerColor": "hsl(72, 70%, 50%)",
    "sandwich": 72,
    "sandwichColor": "hsl(14, 70%, 50%)",
    "kebab": 28,
    "kebabColor": "hsl(168, 70%, 50%)",
    "fries": 73,
    "friesColor": "hsl(269, 70%, 50%)",
    "donut": 4,
    "donutColor": "hsl(24, 70%, 50%)",
    "junk": 58,
    "junkColor": "hsl(153, 70%, 50%)",
    "sushi": 52,
    "sushiColor": "hsl(67, 70%, 50%)",
    "ramen": 83,
    "ramenColor": "hsl(218, 70%, 50%)",
    "curry": 30,
    "curryColor": "hsl(356, 70%, 50%)",
    "udon": 79,
    "udonColor": "hsl(337, 70%, 50%)",
    "bagel": 48,
    "bagelColor": "hsl(236, 70%, 50%)",
    "yakitori": 83,
    "yakitoriColor": "hsl(310, 70%, 50%)",
    "takoyaki": 37,
    "takoyakiColor": "hsl(132, 70%, 50%)",
    "tacos": 49,
    "tacosColor": "hsl(43, 70%, 50%)",
    "miso soup": 46,
    "miso soupColor": "hsl(311, 70%, 50%)",
    "tortilla": 26,
    "tortillaColor": "hsl(202, 70%, 50%)",
    "tapas": 11,
    "tapasColor": "hsl(202, 70%, 50%)",
    "chipirones": 4,
    "chipironesColor": "hsl(257, 70%, 50%)",
    "gazpacho": 86,
    "gazpachoColor": "hsl(137, 70%, 50%)",
    "soba": 38,
    "sobaColor": "hsl(246, 70%, 50%)",
    "bavette": 4,
    "bavetteColor": "hsl(318, 70%, 50%)",
    "steak": 75,
    "steakColor": "hsl(355, 70%, 50%)",
    "pizza": 11,
    "pizzaColor": "hsl(73, 70%, 50%)",
    "spaghetti": 12,
    "spaghettiColor": "hsl(146, 70%, 50%)",
    "ravioli": 72,
    "ravioliColor": "hsl(326, 70%, 50%)",
    "salad": 56,
    "saladColor": "hsl(175, 70%, 50%)",
    "pad thai": 18,
    "pad thaiColor": "hsl(169, 70%, 50%)",
    "bun": 50,
    "bunColor": "hsl(358, 70%, 50%)",
    "waffle": 10,
    "waffleColor": "hsl(105, 70%, 50%)",
    "crepe": 4,
    "crepeColor": "hsl(228, 70%, 50%)",
    "churros": 5,
    "churrosColor": "hsl(201, 70%, 50%)",
    "paella": 69,
    "paellaColor": "hsl(293, 70%, 50%)",
    "empanadas": 4,
    "empanadasColor": "hsl(178, 70%, 50%)",
    "bruschetta": 86,
    "bruschettaColor": "hsl(173, 70%, 50%)",
    "onion soup": 41,
    "onion soupColor": "hsl(183, 70%, 50%)",
    "cassoulet": 36,
    "cassouletColor": "hsl(188, 70%, 50%)",
    "bouillabaisse": 56,
    "bouillabaisseColor": "hsl(43, 70%, 50%)",
    "unagi": 53,
    "unagiColor": "hsl(56, 70%, 50%)",
    "tempura": 92,
    "tempuraColor": "hsl(184, 70%, 50%)",
    "tonkatsu": 81,
    "tonkatsuColor": "hsl(144, 70%, 50%)",
    "shabu-shabu": 2,
    "shabu-shabuColor": "hsl(155, 70%, 50%)",
    "twinkies": 66,
    "twinkiesColor": "hsl(320, 70%, 50%)",
    "jerky": 24,
    "jerkyColor": "hsl(42, 70%, 50%)",
    "fajitas": 12,
    "fajitasColor": "hsl(23, 70%, 50%)",
    "jambalaya": 43,
    "jambalayaColor": "hsl(113, 70%, 50%)",
    "meatloaf": 78,
    "meatloafColor": "hsl(329, 70%, 50%)",
    "mac n' cheese": 16,
    "mac n' cheeseColor": "hsl(324, 70%, 50%)",
    "baked beans": 5,
    "baked beansColor": "hsl(220, 70%, 50%)",
    "popcorn": 55,
    "popcornColor": "hsl(114, 70%, 50%)",
    "buffalo wings": 3,
    "buffalo wingsColor": "hsl(328, 70%, 50%)",
    "BBQ ribs": 0,
    "BBQ ribsColor": "hsl(117, 70%, 50%)",
    "apple pie": 96,
    "apple pieColor": "hsl(99, 70%, 50%)",
    "nachos": 39,
    "nachosColor": "hsl(351, 70%, 50%)",
    "risotto": 49,
    "risottoColor": "hsl(179, 70%, 50%)",
    "tiramisu": 31,
    "tiramisuColor": "hsl(15, 70%, 50%)"
  },
  {
    "country": "BD",
    "hot dog": 20,
    "hot dogColor": "hsl(59, 70%, 50%)",
    "burger": 37,
    "burgerColor": "hsl(210, 70%, 50%)",
    "sandwich": 95,
    "sandwichColor": "hsl(318, 70%, 50%)",
    "kebab": 46,
    "kebabColor": "hsl(234, 70%, 50%)",
    "fries": 75,
    "friesColor": "hsl(129, 70%, 50%)",
    "donut": 21,
    "donutColor": "hsl(112, 70%, 50%)",
    "junk": 36,
    "junkColor": "hsl(91, 70%, 50%)",
    "sushi": 26,
    "sushiColor": "hsl(60, 70%, 50%)",
    "ramen": 7,
    "ramenColor": "hsl(80, 70%, 50%)",
    "curry": 63,
    "curryColor": "hsl(35, 70%, 50%)",
    "udon": 34,
    "udonColor": "hsl(59, 70%, 50%)",
    "bagel": 59,
    "bagelColor": "hsl(320, 70%, 50%)",
    "yakitori": 65,
    "yakitoriColor": "hsl(103, 70%, 50%)",
    "takoyaki": 69,
    "takoyakiColor": "hsl(181, 70%, 50%)",
    "tacos": 29,
    "tacosColor": "hsl(65, 70%, 50%)",
    "miso soup": 73,
    "miso soupColor": "hsl(304, 70%, 50%)",
    "tortilla": 22,
    "tortillaColor": "hsl(239, 70%, 50%)",
    "tapas": 43,
    "tapasColor": "hsl(19, 70%, 50%)",
    "chipirones": 3,
    "chipironesColor": "hsl(352, 70%, 50%)",
    "gazpacho": 52,
    "gazpachoColor": "hsl(120, 70%, 50%)",
    "soba": 66,
    "sobaColor": "hsl(121, 70%, 50%)",
    "bavette": 62,
    "bavetteColor": "hsl(339, 70%, 50%)",
    "steak": 59,
    "steakColor": "hsl(103, 70%, 50%)",
    "pizza": 30,
    "pizzaColor": "hsl(138, 70%, 50%)",
    "spaghetti": 81,
    "spaghettiColor": "hsl(14, 70%, 50%)",
    "ravioli": 77,
    "ravioliColor": "hsl(168, 70%, 50%)",
    "salad": 92,
    "saladColor": "hsl(227, 70%, 50%)",
    "pad thai": 57,
    "pad thaiColor": "hsl(94, 70%, 50%)",
    "bun": 2,
    "bunColor": "hsl(61, 70%, 50%)",
    "waffle": 17,
    "waffleColor": "hsl(128, 70%, 50%)",
    "crepe": 30,
    "crepeColor": "hsl(290, 70%, 50%)",
    "churros": 68,
    "churrosColor": "hsl(44, 70%, 50%)",
    "paella": 92,
    "paellaColor": "hsl(53, 70%, 50%)",
    "empanadas": 6,
    "empanadasColor": "hsl(12, 70%, 50%)",
    "bruschetta": 62,
    "bruschettaColor": "hsl(303, 70%, 50%)",
    "onion soup": 16,
    "onion soupColor": "hsl(123, 70%, 50%)",
    "cassoulet": 2,
    "cassouletColor": "hsl(131, 70%, 50%)",
    "bouillabaisse": 0,
    "bouillabaisseColor": "hsl(265, 70%, 50%)",
    "unagi": 51,
    "unagiColor": "hsl(104, 70%, 50%)",
    "tempura": 16,
    "tempuraColor": "hsl(138, 70%, 50%)",
    "tonkatsu": 14,
    "tonkatsuColor": "hsl(35, 70%, 50%)",
    "shabu-shabu": 45,
    "shabu-shabuColor": "hsl(146, 70%, 50%)",
    "twinkies": 11,
    "twinkiesColor": "hsl(193, 70%, 50%)",
    "jerky": 32,
    "jerkyColor": "hsl(95, 70%, 50%)",
    "fajitas": 39,
    "fajitasColor": "hsl(230, 70%, 50%)",
    "jambalaya": 77,
    "jambalayaColor": "hsl(273, 70%, 50%)",
    "meatloaf": 39,
    "meatloafColor": "hsl(55, 70%, 50%)",
    "mac n' cheese": 97,
    "mac n' cheeseColor": "hsl(301, 70%, 50%)",
    "baked beans": 23,
    "baked beansColor": "hsl(282, 70%, 50%)",
    "popcorn": 16,
    "popcornColor": "hsl(48, 70%, 50%)",
    "buffalo wings": 46,
    "buffalo wingsColor": "hsl(237, 70%, 50%)",
    "BBQ ribs": 40,
    "BBQ ribsColor": "hsl(167, 70%, 50%)",
    "apple pie": 47,
    "apple pieColor": "hsl(152, 70%, 50%)",
    "nachos": 82,
    "nachosColor": "hsl(110, 70%, 50%)",
    "risotto": 17,
    "risottoColor": "hsl(230, 70%, 50%)",
    "tiramisu": 5,
    "tiramisuColor": "hsl(35, 70%, 50%)"
  },
  {
    "country": "BE",
    "hot dog": 58,
    "hot dogColor": "hsl(18, 70%, 50%)",
    "burger": 57,
    "burgerColor": "hsl(53, 70%, 50%)",
    "sandwich": 6,
    "sandwichColor": "hsl(324, 70%, 50%)",
    "kebab": 73,
    "kebabColor": "hsl(170, 70%, 50%)",
    "fries": 81,
    "friesColor": "hsl(299, 70%, 50%)",
    "donut": 77,
    "donutColor": "hsl(257, 70%, 50%)",
    "junk": 96,
    "junkColor": "hsl(184, 70%, 50%)",
    "sushi": 13,
    "sushiColor": "hsl(110, 70%, 50%)",
    "ramen": 91,
    "ramenColor": "hsl(283, 70%, 50%)",
    "curry": 58,
    "curryColor": "hsl(335, 70%, 50%)",
    "udon": 44,
    "udonColor": "hsl(334, 70%, 50%)",
    "bagel": 27,
    "bagelColor": "hsl(358, 70%, 50%)",
    "yakitori": 38,
    "yakitoriColor": "hsl(182, 70%, 50%)",
    "takoyaki": 17,
    "takoyakiColor": "hsl(285, 70%, 50%)",
    "tacos": 91,
    "tacosColor": "hsl(84, 70%, 50%)",
    "miso soup": 80,
    "miso soupColor": "hsl(251, 70%, 50%)",
    "tortilla": 92,
    "tortillaColor": "hsl(343, 70%, 50%)",
    "tapas": 50,
    "tapasColor": "hsl(270, 70%, 50%)",
    "chipirones": 34,
    "chipironesColor": "hsl(105, 70%, 50%)",
    "gazpacho": 27,
    "gazpachoColor": "hsl(46, 70%, 50%)",
    "soba": 15,
    "sobaColor": "hsl(96, 70%, 50%)",
    "bavette": 99,
    "bavetteColor": "hsl(12, 70%, 50%)",
    "steak": 96,
    "steakColor": "hsl(20, 70%, 50%)",
    "pizza": 14,
    "pizzaColor": "hsl(287, 70%, 50%)",
    "spaghetti": 41,
    "spaghettiColor": "hsl(258, 70%, 50%)",
    "ravioli": 97,
    "ravioliColor": "hsl(356, 70%, 50%)",
    "salad": 87,
    "saladColor": "hsl(100, 70%, 50%)",
    "pad thai": 6,
    "pad thaiColor": "hsl(304, 70%, 50%)",
    "bun": 55,
    "bunColor": "hsl(269, 70%, 50%)",
    "waffle": 68,
    "waffleColor": "hsl(321, 70%, 50%)",
    "crepe": 48,
    "crepeColor": "hsl(263, 70%, 50%)",
    "churros": 90,
    "churrosColor": "hsl(286, 70%, 50%)",
    "paella": 59,
    "paellaColor": "hsl(91, 70%, 50%)",
    "empanadas": 66,
    "empanadasColor": "hsl(266, 70%, 50%)",
    "bruschetta": 19,
    "bruschettaColor": "hsl(249, 70%, 50%)",
    "onion soup": 70,
    "onion soupColor": "hsl(217, 70%, 50%)",
    "cassoulet": 92,
    "cassouletColor": "hsl(181, 70%, 50%)",
    "bouillabaisse": 18,
    "bouillabaisseColor": "hsl(231, 70%, 50%)",
    "unagi": 99,
    "unagiColor": "hsl(356, 70%, 50%)",
    "tempura": 29,
    "tempuraColor": "hsl(360, 70%, 50%)",
    "tonkatsu": 45,
    "tonkatsuColor": "hsl(6, 70%, 50%)",
    "shabu-shabu": 67,
    "shabu-shabuColor": "hsl(124, 70%, 50%)",
    "twinkies": 20,
    "twinkiesColor": "hsl(63, 70%, 50%)",
    "jerky": 17,
    "jerkyColor": "hsl(55, 70%, 50%)",
    "fajitas": 75,
    "fajitasColor": "hsl(6, 70%, 50%)",
    "jambalaya": 38,
    "jambalayaColor": "hsl(289, 70%, 50%)",
    "meatloaf": 58,
    "meatloafColor": "hsl(263, 70%, 50%)",
    "mac n' cheese": 54,
    "mac n' cheeseColor": "hsl(278, 70%, 50%)",
    "baked beans": 23,
    "baked beansColor": "hsl(165, 70%, 50%)",
    "popcorn": 39,
    "popcornColor": "hsl(319, 70%, 50%)",
    "buffalo wings": 75,
    "buffalo wingsColor": "hsl(84, 70%, 50%)",
    "BBQ ribs": 31,
    "BBQ ribsColor": "hsl(107, 70%, 50%)",
    "apple pie": 100,
    "apple pieColor": "hsl(99, 70%, 50%)",
    "nachos": 61,
    "nachosColor": "hsl(214, 70%, 50%)",
    "risotto": 8,
    "risottoColor": "hsl(341, 70%, 50%)",
    "tiramisu": 94,
    "tiramisuColor": "hsl(118, 70%, 50%)"
  },
  {
    "country": "BF",
    "hot dog": 79,
    "hot dogColor": "hsl(347, 70%, 50%)",
    "burger": 44,
    "burgerColor": "hsl(212, 70%, 50%)",
    "sandwich": 46,
    "sandwichColor": "hsl(139, 70%, 50%)",
    "kebab": 96,
    "kebabColor": "hsl(352, 70%, 50%)",
    "fries": 65,
    "friesColor": "hsl(211, 70%, 50%)",
    "donut": 22,
    "donutColor": "hsl(191, 70%, 50%)",
    "junk": 72,
    "junkColor": "hsl(40, 70%, 50%)",
    "sushi": 53,
    "sushiColor": "hsl(201, 70%, 50%)",
    "ramen": 38,
    "ramenColor": "hsl(35, 70%, 50%)",
    "curry": 82,
    "curryColor": "hsl(288, 70%, 50%)",
    "udon": 53,
    "udonColor": "hsl(80, 70%, 50%)",
    "bagel": 16,
    "bagelColor": "hsl(40, 70%, 50%)",
    "yakitori": 43,
    "yakitoriColor": "hsl(165, 70%, 50%)",
    "takoyaki": 10,
    "takoyakiColor": "hsl(144, 70%, 50%)",
    "tacos": 56,
    "tacosColor": "hsl(20, 70%, 50%)",
    "miso soup": 15,
    "miso soupColor": "hsl(130, 70%, 50%)",
    "tortilla": 30,
    "tortillaColor": "hsl(252, 70%, 50%)",
    "tapas": 90,
    "tapasColor": "hsl(315, 70%, 50%)",
    "chipirones": 18,
    "chipironesColor": "hsl(113, 70%, 50%)",
    "gazpacho": 37,
    "gazpachoColor": "hsl(359, 70%, 50%)",
    "soba": 68,
    "sobaColor": "hsl(17, 70%, 50%)",
    "bavette": 90,
    "bavetteColor": "hsl(49, 70%, 50%)",
    "steak": 20,
    "steakColor": "hsl(65, 70%, 50%)",
    "pizza": 79,
    "pizzaColor": "hsl(307, 70%, 50%)",
    "spaghetti": 79,
    "spaghettiColor": "hsl(156, 70%, 50%)",
    "ravioli": 54,
    "ravioliColor": "hsl(215, 70%, 50%)",
    "salad": 43,
    "saladColor": "hsl(157, 70%, 50%)",
    "pad thai": 27,
    "pad thaiColor": "hsl(312, 70%, 50%)",
    "bun": 73,
    "bunColor": "hsl(117, 70%, 50%)",
    "waffle": 17,
    "waffleColor": "hsl(328, 70%, 50%)",
    "crepe": 35,
    "crepeColor": "hsl(99, 70%, 50%)",
    "churros": 31,
    "churrosColor": "hsl(177, 70%, 50%)",
    "paella": 4,
    "paellaColor": "hsl(254, 70%, 50%)",
    "empanadas": 9,
    "empanadasColor": "hsl(270, 70%, 50%)",
    "bruschetta": 53,
    "bruschettaColor": "hsl(63, 70%, 50%)",
    "onion soup": 81,
    "onion soupColor": "hsl(140, 70%, 50%)",
    "cassoulet": 5,
    "cassouletColor": "hsl(41, 70%, 50%)",
    "bouillabaisse": 29,
    "bouillabaisseColor": "hsl(129, 70%, 50%)",
    "unagi": 1,
    "unagiColor": "hsl(3, 70%, 50%)",
    "tempura": 78,
    "tempuraColor": "hsl(256, 70%, 50%)",
    "tonkatsu": 36,
    "tonkatsuColor": "hsl(265, 70%, 50%)",
    "shabu-shabu": 1,
    "shabu-shabuColor": "hsl(305, 70%, 50%)",
    "twinkies": 9,
    "twinkiesColor": "hsl(231, 70%, 50%)",
    "jerky": 18,
    "jerkyColor": "hsl(284, 70%, 50%)",
    "fajitas": 42,
    "fajitasColor": "hsl(304, 70%, 50%)",
    "jambalaya": 90,
    "jambalayaColor": "hsl(227, 70%, 50%)",
    "meatloaf": 24,
    "meatloafColor": "hsl(259, 70%, 50%)",
    "mac n' cheese": 19,
    "mac n' cheeseColor": "hsl(173, 70%, 50%)",
    "baked beans": 64,
    "baked beansColor": "hsl(46, 70%, 50%)",
    "popcorn": 76,
    "popcornColor": "hsl(35, 70%, 50%)",
    "buffalo wings": 82,
    "buffalo wingsColor": "hsl(258, 70%, 50%)",
    "BBQ ribs": 58,
    "BBQ ribsColor": "hsl(271, 70%, 50%)",
    "apple pie": 92,
    "apple pieColor": "hsl(241, 70%, 50%)",
    "nachos": 57,
    "nachosColor": "hsl(228, 70%, 50%)",
    "risotto": 91,
    "risottoColor": "hsl(191, 70%, 50%)",
    "tiramisu": 28,
    "tiramisuColor": "hsl(332, 70%, 50%)"
  },
  {
    "country": "BG",
    "hot dog": 14,
    "hot dogColor": "hsl(305, 70%, 50%)",
    "burger": 69,
    "burgerColor": "hsl(153, 70%, 50%)",
    "sandwich": 23,
    "sandwichColor": "hsl(141, 70%, 50%)",
    "kebab": 82,
    "kebabColor": "hsl(255, 70%, 50%)",
    "fries": 64,
    "friesColor": "hsl(307, 70%, 50%)",
    "donut": 75,
    "donutColor": "hsl(298, 70%, 50%)",
    "junk": 47,
    "junkColor": "hsl(295, 70%, 50%)",
    "sushi": 89,
    "sushiColor": "hsl(21, 70%, 50%)",
    "ramen": 34,
    "ramenColor": "hsl(85, 70%, 50%)",
    "curry": 64,
    "curryColor": "hsl(268, 70%, 50%)",
    "udon": 45,
    "udonColor": "hsl(23, 70%, 50%)",
    "bagel": 15,
    "bagelColor": "hsl(150, 70%, 50%)",
    "yakitori": 22,
    "yakitoriColor": "hsl(291, 70%, 50%)",
    "takoyaki": 77,
    "takoyakiColor": "hsl(238, 70%, 50%)",
    "tacos": 59,
    "tacosColor": "hsl(248, 70%, 50%)",
    "miso soup": 83,
    "miso soupColor": "hsl(100, 70%, 50%)",
    "tortilla": 74,
    "tortillaColor": "hsl(68, 70%, 50%)",
    "tapas": 100,
    "tapasColor": "hsl(329, 70%, 50%)",
    "chipirones": 83,
    "chipironesColor": "hsl(340, 70%, 50%)",
    "gazpacho": 35,
    "gazpachoColor": "hsl(347, 70%, 50%)",
    "soba": 39,
    "sobaColor": "hsl(43, 70%, 50%)",
    "bavette": 89,
    "bavetteColor": "hsl(118, 70%, 50%)",
    "steak": 51,
    "steakColor": "hsl(64, 70%, 50%)",
    "pizza": 80,
    "pizzaColor": "hsl(274, 70%, 50%)",
    "spaghetti": 18,
    "spaghettiColor": "hsl(198, 70%, 50%)",
    "ravioli": 4,
    "ravioliColor": "hsl(175, 70%, 50%)",
    "salad": 51,
    "saladColor": "hsl(82, 70%, 50%)",
    "pad thai": 49,
    "pad thaiColor": "hsl(95, 70%, 50%)",
    "bun": 99,
    "bunColor": "hsl(246, 70%, 50%)",
    "waffle": 95,
    "waffleColor": "hsl(78, 70%, 50%)",
    "crepe": 63,
    "crepeColor": "hsl(181, 70%, 50%)",
    "churros": 30,
    "churrosColor": "hsl(207, 70%, 50%)",
    "paella": 37,
    "paellaColor": "hsl(332, 70%, 50%)",
    "empanadas": 6,
    "empanadasColor": "hsl(34, 70%, 50%)",
    "bruschetta": 16,
    "bruschettaColor": "hsl(171, 70%, 50%)",
    "onion soup": 51,
    "onion soupColor": "hsl(292, 70%, 50%)",
    "cassoulet": 5,
    "cassouletColor": "hsl(184, 70%, 50%)",
    "bouillabaisse": 24,
    "bouillabaisseColor": "hsl(288, 70%, 50%)",
    "unagi": 97,
    "unagiColor": "hsl(140, 70%, 50%)",
    "tempura": 44,
    "tempuraColor": "hsl(269, 70%, 50%)",
    "tonkatsu": 3,
    "tonkatsuColor": "hsl(274, 70%, 50%)",
    "shabu-shabu": 70,
    "shabu-shabuColor": "hsl(218, 70%, 50%)",
    "twinkies": 21,
    "twinkiesColor": "hsl(268, 70%, 50%)",
    "jerky": 58,
    "jerkyColor": "hsl(228, 70%, 50%)",
    "fajitas": 5,
    "fajitasColor": "hsl(127, 70%, 50%)",
    "jambalaya": 3,
    "jambalayaColor": "hsl(245, 70%, 50%)",
    "meatloaf": 9,
    "meatloafColor": "hsl(60, 70%, 50%)",
    "mac n' cheese": 37,
    "mac n' cheeseColor": "hsl(224, 70%, 50%)",
    "baked beans": 95,
    "baked beansColor": "hsl(269, 70%, 50%)",
    "popcorn": 98,
    "popcornColor": "hsl(55, 70%, 50%)",
    "buffalo wings": 32,
    "buffalo wingsColor": "hsl(65, 70%, 50%)",
    "BBQ ribs": 57,
    "BBQ ribsColor": "hsl(341, 70%, 50%)",
    "apple pie": 2,
    "apple pieColor": "hsl(159, 70%, 50%)",
    "nachos": 39,
    "nachosColor": "hsl(35, 70%, 50%)",
    "risotto": 81,
    "risottoColor": "hsl(155, 70%, 50%)",
    "tiramisu": 67,
    "tiramisuColor": "hsl(186, 70%, 50%)"
  }
]

const lineData = [
  {
    "id": "japan",
    "color": "hsl(241, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 10
      },
      {
        "x": "helicopter",
        "y": 167
      },
      {
        "x": "boat",
        "y": 268
      },
      {
        "x": "train",
        "y": 30
      },
      {
        "x": "subway",
        "y": 159
      },
      {
        "x": "bus",
        "y": 77
      },
      {
        "x": "car",
        "y": 246
      },
      {
        "x": "moto",
        "y": 281
      },
      {
        "x": "bicycle",
        "y": 231
      },
      {
        "x": "others",
        "y": 122
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(135, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 77
      },
      {
        "x": "helicopter",
        "y": 208
      },
      {
        "x": "boat",
        "y": 105
      },
      {
        "x": "train",
        "y": 130
      },
      {
        "x": "subway",
        "y": 12
      },
      {
        "x": "bus",
        "y": 258
      },
      {
        "x": "car",
        "y": 277
      },
      {
        "x": "moto",
        "y": 147
      },
      {
        "x": "bicycle",
        "y": 236
      },
      {
        "x": "others",
        "y": 276
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(288, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 134
      },
      {
        "x": "helicopter",
        "y": 129
      },
      {
        "x": "boat",
        "y": 53
      },
      {
        "x": "train",
        "y": 6
      },
      {
        "x": "subway",
        "y": 105
      },
      {
        "x": "bus",
        "y": 20
      },
      {
        "x": "car",
        "y": 264
      },
      {
        "x": "moto",
        "y": 25
      },
      {
        "x": "bicycle",
        "y": 266
      },
      {
        "x": "others",
        "y": 141
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(237, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 53
      },
      {
        "x": "helicopter",
        "y": 225
      },
      {
        "x": "boat",
        "y": 77
      },
      {
        "x": "train",
        "y": 128
      },
      {
        "x": "subway",
        "y": 257
      },
      {
        "x": "bus",
        "y": 34
      },
      {
        "x": "car",
        "y": 84
      },
      {
        "x": "moto",
        "y": 70
      },
      {
        "x": "bicycle",
        "y": 293
      },
      {
        "x": "others",
        "y": 63
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(170, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 67
      },
      {
        "x": "helicopter",
        "y": 178
      },
      {
        "x": "boat",
        "y": 163
      },
      {
        "x": "train",
        "y": 159
      },
      {
        "x": "subway",
        "y": 251
      },
      {
        "x": "bus",
        "y": 56
      },
      {
        "x": "car",
        "y": 164
      },
      {
        "x": "moto",
        "y": 143
      },
      {
        "x": "bicycle",
        "y": 268
      },
      {
        "x": "others",
        "y": 163
      }
    ]
  }
]

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  n() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.n
      : '';
  }

  p() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.p
      : '';
  }

  p_selected() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.p_selected
      : '';
  }

  auc() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.auc
      : '';
  }

  perf() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.perf
      : '';
  }

  scatterData() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.scatterData
      : '';
  }

  // acc() {
  //   return this.props.auth && this.props.auth.analysis
  //     ? this.props.auth.analysis.accuracy
  //     : '';
  // }

  // var_prop() {
  //   return this.props.auth && this.props.auth.analysis
  //     ? this.props.auth.analysis.var_prop
  //     : '';
  // }

  // features() {
  //   return this.props.auth && this.props.auth.analysis
  //     ? this.props.auth.analysis.features
  //     : '';
  // }

  // loadings() {
  //   return this.props.auth && this.props.auth.analysis
  //     ? this.props.auth.analysis.loadings
  //     : '';
  // }

  // compOne_gpOne() {
  //   return this.props.auth && this.props.auth.analysis
  //     ? this.props.auth.analysis.comps.gpOne.compOne
  //     : '';
  // }
  // compOne_gpTwo() {
  //   return this.props.auth && this.props.auth.analysis
  //     ? this.props.auth.analysis.comps.gpTwo.compOne
  //     : '';
  // }
  // compTwo_gpOne() {
  //   return this.props.auth && this.props.auth.analysis
  //     ? this.props.auth.analysis.comps.gpOne.compTwo
  //     : '';
  // }
  // compTwo_gpTwo() {
  //   return this.props.auth && this.props.auth.analysis
  //     ? this.props.auth.analysis.comps.gpTwo.compTwo
  //     : '';
  // }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Dimensions</p>
                <h3 className={classes.cardTitle}>{`${this.n()} / ${this.p()}`}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  Samples/Variables
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Panel Size</p>
                <h3 className={classes.cardTitle}>{this.p_selected()}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Number of variables selected
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>AUROC</p>
                <h3 className={classes.cardTitle}>{this.auc()}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Area under the ROC curve
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Performance</p>
                <h3 className={classes.cardTitle}>{this.perf()}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Sensitivity/Specificity
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="nil">
              {/* {this.props.auth && this.props.auth.analysis.scatterData}
              {console.log(scatterData)} */}
              <div style={styles.App}>
                {this.props.auth && this.props.auth.analysis ? (
                  console.log(typeof(scatterData)),
                  console.log(typeof(this.scatterData())),
<ResponsiveScatterPlot
        data={this.scatterData()}
         margin={{
            "top": 10,
            "right": 90,
            "bottom": 40,
            "left": 50
        }}
        xScale={{
            "type": "linear",
            "min": "auto",
            "max": "auto"
        }}
        yScale={{
            "type": "linear",
            "min": "auto",
            "max": "auto"
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "weight",
            "legendPosition": "middle",
            "legendOffset": 46
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "size",
            "legendPosition": "middle",
            "legendOffset": -60
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "anchor": "bottom-right",
                "direction": "column",
                "translateX": 130,
                "itemWidth": 100,
                "itemHeight": 12,
                "itemsSpacing": 5,
                "itemTextColor": "#999",
                "symbolSize": 12,
                "symbolShape": "circle",
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemTextColor": "#000"
                        }
                    }
                ]
            }
        ]}
    />
) : (
                  <ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />
                )}
                </div>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Sample clutering</h4>
                <p className={classes.cardCategory}>
                  Based on Principal Component Analysis.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 30 seconds ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="nil">
              <div style={styles.App}>
                {/* Component plots */}
                {this.props.auth && this.props.auth.analysis ? (
                  <ResponsiveLine
        data={lineData}
        margin={{
            "top": 10,
            "right": 90,
            "bottom": 40,
            "left": 50
        }}
        xScale={{
            "type": "point"
        }}
        yScale={{
            "type": "linear",
            "stacked": true,
            "min": "auto",
            "max": "auto"
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "transportation",
            "legendOffset": 36,
            "legendPosition": "middle"
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "count",
            "legendOffset": -40,
            "legendPosition": "middle"
        }}
        dotSize={10}
        dotColor="inherit:darker(0.3)"
        dotBorderWidth={2}
        dotBorderColor="#ffffff"
        enableDotLabel={true}
        dotLabel="y"
        dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "anchor": "bottom-right",
                "direction": "column",
                "justify": false,
                "translateX": 100,
                "translateY": 0,
                "itemsSpacing": 0,
                "itemDirection": "left-to-right",
                "itemWidth": 80,
                "itemHeight": 20,
                "itemOpacity": 0.75,
                "symbolSize": 12,
                "symbolShape": "circle",
                "symbolBorderColor": "rgba(0, 0, 0, .5)",
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemBackground": "rgba(0, 0, 0, .03)",
                            "itemOpacity": 1
                        }
                    }
                ]
            }
        ]}
    />
                  // <Plot
                  //   data={[
                  //     {
                  //       x: this.compOne_gpOne(),
                  //       y: this.compTwo_gpOne(),
                  //       type: 'scatter',
                  //       mode: 'markers',
                  //       marker: { color: 'red' }
                  //     },
                  //     {
                  //       type: 'scatter',
                  //       mode: 'markers',
                  //       x: this.compOne_gpTwo(),
                  //       y: this.compTwo_gpTwo(),
                  //       marker: { color: 'blue' }
                  //     }
                  //   ]}
                  //   layout={{
                  //     width: 350,
                  //     height: 240,
                  //     title: 'Sample clustering',
                  //     autosize: true,
                  //     margin: { l: 50, r: 30, b: 50, t: 30, pad: 1 }
                  //   }}
                  // />
                ) : (
                  <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={
                      emailsSubscriptionChart.responsiveOptions
                    }
                    listener={emailsSubscriptionChart.animation}
                  />
                )}
                </div>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Receiver Operating Characteristic Curve</h4>
                <p className={classes.cardCategory}>
                  Probability of ranking a randomly selected sample from one group higher than the other group.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 30 seconds ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="nil">
              <div style={styles.App}>
                {this.props.auth && this.props.auth.analysis ? (
    <ResponsiveHeatMapCanvas
        data={heatmapData}
        keys={[
            "hot dog",
            "burger",
            "sandwich",
            "kebab",
            "fries",
            "donut",
            "junk",
            "sushi",
            "ramen",
            "curry",
            "udon",
            "bagel",
            "yakitori",
            "takoyaki",
            "tacos",
            "miso soup",
            "tortilla",
            "tapas",
            "chipirones",
            "gazpacho",
            "soba",
            "bavette",
            "steak",
            "pizza",
            "spaghetti",
            "ravioli",
            "salad",
            "pad thai",
            "bun",
            "waffle",
            "crepe",
            "churros",
            "paella",
            "empanadas",
            "bruschetta",
            "onion soup",
            "cassoulet",
            "bouillabaisse",
            "unagi",
            "tempura",
            "tonkatsu",
            "shabu-shabu",
            "twinkies",
            "jerky",
            "fajitas",
            "jambalaya",
            "meatloaf",
            "mac n' cheese",
            "baked beans",
            "popcorn",
            "buffalo wings",
            "BBQ ribs",
            "apple pie",
            "nachos",
            "risotto",
            "tiramisu"
        ]}
        indexBy="country"
        margin={{
            "top": 10,
            "right": 90,
            "bottom": 40,
            "left": 50
        }}
        pixelRatio={2}
        minValue="auto"
        maxValue="auto"
        forceSquare={false}
        sizeVariation={0}
        padding={0}
        colors="BrBG"
        axisTop={{
            "orient": "top",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": -90,
            "legend": "",
            "legendOffset": 36
        }}
        axisRight={{
            "orient": "right",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "middle",
            "legendOffset": 0
        }}
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": -90,
            "legend": "country",
            "legendPosition": "middle",
            "legendOffset": 36
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "middle",
            "legendOffset": -40
        }}
        enableGridX={false}
        enableGridY={true}
        cellShape="rect"
        cellOpacity={1}
        cellBorderWidth={0}
        cellBorderColor="inherit:darker(0.4)"
        enableLabels={false}
        labelTextColor="inherit:darker(1.4)"
        animate={true}
        motionStiffness={120}
        motionDamping={9}
        isInteractive={true}
        hoverTarget="rowColumn"
        cellHoverOpacity={1}
        cellHoverOthersOpacity={0.5}
    />

                  // <Plot
                  //   data={[
                  //     {
                  //       x: this.features(),
                  //       y: this.loadings(),
                  //       type: 'scatter',
                  //       mode: 'lines+points',
                  //       marker: { color: 'red' }
                  //     },
                  //     { type: 'bar', x: this.features(), y: this.loadings() }
                  //   ]}
                  //   layout={{
                  //     width: 350,
                  //     height: 240,
                  //     title: 'Variable importance',
                  //     autosize: true,
                  //     margin: { l: 50, r: 30, b: 50, t: 30, pad: 1 }
                  //   }}
                  // />
                ) : (
                  <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                )}
                </div>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Heatmap of select variables</h4>
                <p className={classes.cardCategory}>
                  Correlation matrix depicting the pairwise correlation between all selected variables.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 30 seconds ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: 'Bugs',
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: 'Website',
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: 'Server',
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={['ID', 'Name', 'Salary', 'PC']}
                  tableData={[
                    ['1', 'Dakota Rice', '$36,738', 'Niger'],
                    ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                    ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                    ['4', 'Philip Chaney', '$38,735', 'Korea, South']
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(dashboardStyle)(Dashboard));
