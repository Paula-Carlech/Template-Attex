import { ApexOptions } from "apexcharts";

//images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../../assets/images/users/avatar-6.jpg";

export const cardData1 = [
  {
    icon: "ri-bit-coin-line widget-icon text-bg-danger rounded-circle fs-24",
    title: "Revenue",
    number: "$6,254",
    growth: "7.00%",
    growtClass: "badge bg-info me-1",
  },
  {
    icon: "ri-arrow-up-circle-fill widget-icon fs-24",
    title: "Growth",
    number: "+ 30.56%",
    growth: "4.87%",
    growtClass: "text-success me-2",
  },
  {
    extraClass: "bg-success text-white",
    icon: "ri-user-voice-line widget-icon bg-white text-success",
    title: "Customers",
    number: "36,254",
    growth: "5.27%",
    growtClass: "badge bg-white bg-opacity-10 me-1",
  },
  {
    extraClass: "bg-primary text-white",
    icon: "ri-shopping-basket-line widget-icon bg-light-subtle rounded-circle text-primary",
    title: "Customers",
    number: "$10,245",
    growth: "17.26%",
    growtClass: "badge bg-info me-1",
  },
];

export const cardData2 = [
  {
    col: 6,
    icon: "ri-group-line text-bg-info widget-icon",
    title: "Customers",
    number: "54,214",
    subtext: {
      number: "5.27%",
      icon: "ri-arrow-up-line",
      class: "text-success",
    },
  },
  {
    col: 6,
    icon: "ri-shopping-cart-2-line text-bg-warning widget-icon",
    title: "Orders",
    number: "7,543",
    subtext: {
      number: "1.08%",
      icon: "ri-arrow-down-line",
      class: "text-danger",
    },
  },
  {
    col: 6,
    icon: "ri-exchange-dollar-line text-bg-primary widget-icon",
    title: "Revenue",
    number: "$9,254",
    subtext: {
      number: "7.00%",
      icon: "ri-arrow-down-line",
      class: "text-danger",
    },
  },
  {
    col: 6,
    icon: "ri-line-chart-line text-bg-success widget-icon",
    title: "Growth",
    number: "+ 20.06%",
    subtext: {
      number: "4.87%",
      icon: "ri-arrow-up-line",
      class: "text-success",
    },
  },
  {
    col: 12,
    icon: "ri-dashboard-2-line bg-danger text-white widget-icon",
    title: "Conversation",
    number: "9.62%",
    subtext: {
      number: "5.27%",
      icon: "ri-arrow-up-line",
      class: "text-success",
    },
  },
];

const campaignSentOpt: ApexOptions = {
  chart: {
    type: "bar",
    height: 60,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#3e60d5"],
  series: [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ],
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

const newLeadOpt: ApexOptions = {
  chart: {
    type: "line",
    height: 60,
    sparkline: {
      enabled: true,
    },
  },
  series: [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ],
  stroke: {
    width: 2,
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  colors: ["#47ad77"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

const dealsOpt: ApexOptions = {
  chart: {
    type: "bar",
    height: 60,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#f15776"],
  series: [
    {
      data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
    },
  ],
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

const bookedRevenueOpt: ApexOptions = {
  chart: {
    type: "line",
    height: 60,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#ffc35a"],
  series: [
    {
      data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82],
    },
  ],
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  stroke: {
    width: 2,
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

export const cardData3 = [
  {
    title: "Campaign Sent",
    number: "9,184",
    growth: "3.27%",
    chart: campaignSentOpt,
  },
  {
    title: "New Leads",
    number: "3,254",
    growth: "5.38%",
    chart: newLeadOpt,
  },
  {
    title: "Deals",
    number: "861",
    growth: "4.87%",
    chart: dealsOpt,
  },
  {
    title: "Booked Revenue",
    number: "$253k",
    growth: "11.7%",
    chart: bookedRevenueOpt,
  },
];

export const chatMessages = [
  {
    class: "clearfix",
    img: avatar5,
    time: "10:00",
    name: "Geneva",
    message: "Hello!",
  },
  {
    class: "clearfix odd",
    img: avatar1,
    time: "10:01",
    name: "Dominic",
    message: "Hi, How are you? What about our next meeting?",
  },
  {
    class: "clearfix",
    img: avatar5,
    time: "10:01",
    name: "Geneva",
    message: "Yeah everything is fine",
  },
  {
    class: "clearfix odd",
    img: avatar1,
    time: "10:02",
    name: "Dominic",
    message: `Wow that's great`,
  },
];

export const todoList = [
  {
    id: "1",
    text: "Design One page theme",
    done: false,
  },
  {
    id: "2",
    text: "Build a js based app",
    done: true,
  },
  {
    id: "3",
    text: "Creating component page",
    done: true,
  },
  {
    id: "4",
    text: "Testing??",
    done: true,
  },
  {
    id: "5",
    text: "Hehe!! This looks cool!",
    done: false,
  },
  {
    id: "6",
    text: "Create new version 3.0",
    done: false,
  },
  {
    id: "7",
    text: "Build an angular app",
    done: true,
  },
];

export const messagesItem = [
  {
    image: avatar2,
    name: "Tomaslau",
    message: "I've finished it! See you so...",
  },
  {
    image: avatar3,
    name: "Stillnotdavid",
    message: "This theme is awesome!",
  },
  {
    image: avatar4,
    name: "Kurafire",
    message: "Nice to meet you",
  },
  {
    image: avatar5,
    name: "Shahedk",
    message: "Hey! there I'm available...",
  },
  {
    image: avatar6,
    name: "Adhamdannaway",
    message: "This theme is awesome!",
  },
];

export const activityData = [
  {
    id: 1,
    icon: "ri-upload-line text-bg-info timeline-icon",
    title: "You sold an item",
    text: "Paul Burgess just purchased “Attex - Admin Dashboard”!",
    subtext: "5 minutes ago",
    color: "info",
  },
  {
    id: 2,
    icon: "ri-rocket-line text-bg-primary timeline-icon",
    title: "Product on the Bootstrap Market",
    text: "Dave Gamache added",
    subtext: "30 minutes ago",
    boldText: "Admin Dashboard",
    color: "primary",
  },
  {
    id: 3,
    icon: "ri-chat-2-line text-bg-success timeline-icon",
    title: "Robert Delaney",
    text: "Send you message",
    boldText: '"Are you there?"',
    subtext: "2 hours ago",
    color: "info",
  },
  {
    id: 4,
    icon: "ri-upload-line text-bg-warning timeline-icon",
    title: "Audrey Tobey",
    text: "Uploaded a photo",
    subtext: "14 hours ago",
    boldText: '"Error.jpg"',
    color: "primary",
  },
];
export const transactions = [
  {
    title: "Purchased Attex Admin Template",
    icon: "ri-arrow-up-line text-danger fs-18",
    date: "Today",
    amount: "-$489.30",
    color: "danger",
  },
  {
    title: "Payment received Bootstrap Marketplace",
    icon: "ri-arrow-down-line text-success fs-18",
    date: "Yesterday",
    amount: "+$1578.54",
    color: "success",
  },
  {
    title: "Freelance work - Shane",
    icon: "ri-arrow-down-line text-success fs-18",
    date: "16 Sep 2018",
    amount: "+$247.5",
    color: "success",
  },
  {
    title: "Hire new developer for work",
    icon: "ri-arrow-up-line text-danger fs-18",
    date: "09 Sep 2018",
    amount: "-$185.14",
    color: "danger",
  },
  {
    title: "Money received from paypal",
    icon: "ri-arrow-down-line text-success fs-18",
    date: "28 Aug 2018",
    amount: "+$684.45",
    color: "success",
  },
  {
    title: "Zairo landing purchased",
    icon: "ri-arrow-up-line text-danger fs-18",
    date: "17 Aug 2018",
    amount: "-$21.00",
    color: "danger",
  },
  {
    title: "Purchased Ubold admin template",
    icon: "ri-arrow-up-line text-danger fs-18",
    date: "17 Aug 2018",
    amount: "-$32.89",
    color: "danger",
  },
  {
    title: "Interest received",
    icon: "ri-arrow-down-line text-success fs-18",
    date: "09 Sep 2018",
    amount: "+$784.55",
    color: "success",
  },
];
