const tempData1 = [
  {
    id: 1,
    first_name: "Great Grand",
    last_name: "Father",
    is_root: true,
    link_id: null,
    is_child: false,
    phone_no: null,
    email: null,
    location: null,
    avatar: require("./assets/avatar1.png"),
    color: "#BA4A00"
  },
  {
    id: 2,
    first_name: "Grand",
    last_name: "Father 1",
    is_root: true,
    link_id: 1,
    is_child: false,
    phone_no: null,
    email: null,
    location: null,
    avatar: require("./assets/avatar2.png"),
    color: "#6507B4"
  },
  {
    id: 3,
    first_name: "Grand",
    last_name: "Father 2",
    is_root: true,
    link_id: 1,
    is_child: false,
    phone_no: null,
    email: null,
    location: null,
    avatar: require("./assets/avatar2.png"),
    color: "green"
  },
  {
    id: 4,
    first_name: "Father",
    last_name: "1",
    is_root: true,
    link_id: 2,
    is_child: false,
    phone_no: null,
    email: null,
    location: null,
    avatar: require("./assets/avatar1.png"),
    color: "grey"
  },
  {
    id: 5,
    first_name: "Father",
    last_name: "2",
    is_root: true,
    link_id: 2,
    is_child: false,
    phone_no: null,
    email: null,
    location: null,
    avatar: require("./assets/avatar2.png"),
    color: "#117864"
  },
  {
    id: 7,
    first_name: "Father",
    last_name: "4",
    is_root: true,
    link_id: 2,
    is_child: false,
    phone_no: null,
    email: null,
    location: null,
    avatar: require("./assets/avatar1.png"),
    color: "#6507B4"
  },
  {
    id: 6,
    first_name: "Father",
    last_name: "3",
    is_root: true,
    link_id: 3,
    is_child: false,
    phone_no: null,
    email: null,
    location: null,
    avatar: require("./assets/avatar2.png"),
    color: "#21618C"
  }
];

const tempChild = [];
tempData1.map(t => {
  t.children = [];
  tempChild.push(t);
});

tempData1.map(tmp => {
  tmp.link_id &&
    tempChild.find(f => f.id === tmp.link_id && f.children.push(tmp));
});

const que = [];

tempChild.find(aa => aa.is_root && que.push(aa));

const tempData = tempChild;

export default tempData;
