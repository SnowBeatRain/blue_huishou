var phoneList = [
  {
    id: 1,
    name: "苹果",
    children: [
      {
        name: "iPhone X"
      },
      {
        name: "iPhone 8 Plus"
      },
      {
        name: "iPhone 8"
      },
      {
        name: "iPhone 7 Plus"
      },
      {
        name: "iPhone 7"
      },
      {
        name: "iPhone 6s Plus"
      },
      {
        name: "iPhone 6s"
      },
      {
        name: "iPhone SE"
      },
      {
        name: "iPhone 6 Plus"
      },
      {
        name: "iPhone 6"
      },
      {
        name: "iPhone 5s"
      },
      {
        name: "iPhone 5c"
      },
      {
        name: "iPhone 5"
      },
      {
        name: "iPhone 4s"
      },
      {
        name: "iPhone 4"
      }
    ]
  },
  {
    id: 2,
    name: "华为",
    children: [
      {
        name: "华为 Mate Rs 保时捷设计"
      },
      {
        name: "华为 Mate 10 保时捷设计"
      },
      {
        name: "华为 P20 Pro"
      },
      {
        name: "华为 P20"
      },
      {
        name: "华为 Mate 9 保时捷设计"
      },
      {
        name: "华为 Mate 10"
      },
      {
        name: "华为 Mate 10 Pro"
      },
      {
        name: "华为 Mate P10 Plus"
      },
      {
        name: "华为 Mate 9"
      },
      {
        name: "华为 nova 3e"
      },
      {
        name: "华为 nova 2s"
      },
      {
        name: "华为 Mate 9 Pro"
      },
      {
        name: "华为 畅享8 Plus"
      },
      {
        name: "华为 P10"
      },
      {
        name: "华为 麦芒6"
      },
      {
        name: "华为 nova2 Plus"
      },
      {
        name: "华为 畅享8"
      },
      {
        name: "华为 p9 Plus"
      },
      {
        name: "华为 Mate 8"
      },
      {
        name: "华为 畅享7 Plus"
      },
      {
        name: "华为 Mate 7"
      },
      {
        name: "华为 畅享6"
      }
    ]
  },
  {
    id: 3,
    name: "三星",
    children: [
      {
        name: "三星 Galaxy S6 edge+"
      },
      {
        name: "三星 Galaxy S7"
      },
      {
        name: "三星 Galaxy C5 Pro"
      },
      {
        name: "三星 Galaxy C7"
      },
      {
        name: "三星 Galaxy C5"
      },
      {
        name: "三星 Galaxy A9 系列"
      },
      {
        name: "三星 Galaxy Golden I19235"
      },
      {
        name: "三星 Galaxy Note3"
      },
      {
        name: "三星 Galaxy Note Edge N9150"
      },
      {
        name: "三星 Galaxy E7"
      },
      {
        name: "三星 Galaxy Note7"
      },
      {
        name: "三星 Galaxy A3"
      },
      {
        name: "三星 Galaxy J3 Pro"
      },
      {
        name: "三星 Galaxy S5 Prime G906s"
      },
      {
        name: "三星 I9295"
      },
      {
        name: "三星 Galaxy Max G7200"
      },
      {
        name: "三星 Galaxy Note3 Lite"
      },
      {
        name: "三星 Galaxy S7 Active"
      }
    ]
  },
  {
    id: 4,
    name: "OPPO",
    children: [
      {
        name: "OPPO R15 梦境版"
      },
      { name: "OPPO R15" },
      { name: "OPPO R15 星云特别版" },
      { name: "OPPO R11s" },
      { name: "OPPO R11s Plus" },
      { name: "OPPO R11" },
      { name: "OPPO R9s Plus" },
      { name: "OPPO R9 Plus" },
      { name: "OPPO A3" },
      { name: "OPPO A73" },
      { name: "OPPO R9" },
      { name: "OPPO A79" },
      { name: "OPPO R9s" },
      { name: "OPPO A1" },
      { name: "OPPO A57" },
      { name: "OPPO A77" },
      { name: "OPPO A83" },
      { name: "OPPO R7 PLus" },
      { name: "OPPO R7s" },
      { name: "OPPO R2010" },
      { name: "OPPO N1" },
      { name: "OPPO A31" },
      { name: "OPPO 1107" },
      { name: "OPPO 1105" }
    ]
  },
  {
    id: 5,
    name: "小米",
    children: [
      {
        name: "小米 MIX2S"
      },
      { name: "小米 8" },
      { name: "小米 MIX2" },
      { name: "小米 6" },
      { name: "小米 8 SE" },
      { name: "小米 MIX" },
      { name: "小米 6X" },
      { name: "小米 Note3" },
      { name: "小米 Note2" },
      { name: "小米 Max 2" },
      { name: "小米 5s PLus" },
      { name: "红米 Note 5" },
      { name: "小米 5 PLus" },
      { name: "小米 5s" },
      { name: "小米 5" },
      { name: "小米 5X" },
      { name: "红米 S2" },
      { name: "红米 4X" },
      { name: "红米 Note4X" },
      { name: "红米 5" },
      { name: "小米 2s" },
      { name: "小米 3" },
      { name: "红米 2A" },
      { name: "小米 2A" },
      { name: "小米 2" },
      { name: "红米 1S" },
      { name: "小米 1s" },
      { name: "红米 1" },
      { name: "小米 1" },
      { name: "小米 青春版" }
    ]
  },
  {
    id: 6,
    name: "荣耀",
    children: [
      {
        name: "荣耀 10"
      },
      { name: "荣耀 V10" },
      { name: "荣耀 9i" },
      { name: "荣耀 9" },
      { name: "荣耀 V9" },
      { name: "荣耀 畅玩7X" },
      { name: "荣耀 Note8" },
      { name: "荣耀 畅玩7C" },
      { name: "荣耀 9 青春版" },
      { name: "荣耀 8" },
      { name: "荣耀 Magic" },
      { name: "荣耀 畅玩6X" },
      { name: "荣耀 V8" },
      { name: "荣耀 畅玩7A" },
      { name: "荣耀 8 青春版" },
      { name: "荣耀 V9 play" },
      { name: "荣耀 7" },
      { name: "荣耀 畅玩6A" },
      { name: "荣耀 畅玩7" },
      { name: "荣耀 畅玩5A" },
      { name: "荣耀 +" }
    ]
  },
  {
    id: 7,
    name: "vivo",
    children: [
      {
        name: "vivo NEX"
      },
      { name: "vivo X21" },
      { name: "vivo Xplay6" },
      { name: "vivo X20" },
      { name: "vivo X20 Plus" },
      { name: "vivo X21i" },
      { name: "vivo X9 Plus" },
      { name: "vivo Y85" },
      { name: "vivo X9" },
      { name: "vivo X9s Plus" },
      { name: "vivo X7 Plus" },
      { name: "vivo X9s" },
      { name: "vivo Xplay5" },
      { name: "vivo Y79" },
      { name: "vivo X7" },
      { name: "vivo Y83" },
      { name: "vivo X6" },
      { name: "vivo Y67" },
      { name: "vivo Y75" },
      { name: "vivo X6s" },
      { name: "vivo Y35" },
      { name: "vivo X5Max V" },
      { name: "vivo X5Max F" }
    ]
  },
  {
    id: 8,
    name: "魅族",
    children: [
      {
        name: "魅族 15 Plus"
      },
      { name: "魅族 15" },
      { name: "魅蓝 E3" },
      { name: "魅族 Pro 7 Plus" },
      { name: "魅族 Pro 7" },
      { name: "魅族 Pro 6 Plus" },
      { name: "魅蓝 Note6" },
      { name: "魅族 M15" },
      { name: "魅蓝 Note5" },
      { name: "魅蓝 S6" },
      { name: "魅族 Pro 6s" },
      { name: "魅族 Pro 6" },
      { name: "魅族 E2" },
      { name: "魅蓝 Max" },
      { name: "魅族 Pro 5" },
      { name: "魅蓝 Note3" },
      { name: "魅族 MX6" },
      { name: "魅蓝 X" },
      { name: "魅蓝 6" },
      { name: "魅蓝 E" },
      { name: "魅族 M 9" }
    ]
  },
  {
    id: 9,
    name: "诺基亚",
    children: [
      { name: "诺基亚 7 Plus" },
      { name: "诺基亚 8800A" },
      { name: "诺基亚 8" },
      { name: "诺基亚 7" },
      { name: "诺基亚 Lumia 950XI" },
      { name: "诺基亚 6 第二代" },
      { name: "诺基亚 Lumia 950 XL" },
      { name: "诺基亚 8800 Sorocco" },
      { name: "诺基亚 6" },
      { name: "诺基亚 8800S" },
      { name: "诺基亚 Lumia 1020" },
      { name: "诺基亚 Lumia 950" },
      { name: "诺基亚 8800" },
      { name: "诺基亚 Lumia 1520" },
      { name: "诺基亚 Lumia 929" },
      { name: "微软 Lumia 650" },
      { name: "微软 Lumia 640" }
    ]
  },
  {
    id: 10,
    name: "乐视",
    children: [
      { name: "乐视 pro 3" },
      { name: "乐 Max" },
      { name: "乐 Max2" },
      { name: "乐视 Pro3 双摄AI版" },
      { name: "乐Max 蓝宝石版" },
      { name: "乐2 Pro" },
      { name: "乐Max Pro" },
      { name: "乐2" },
      { name: "乐S3" },
      { name: "乐1 Pro" },
      { name: "乐1s" },
      { name: "乐1" }
    ]
  },
  {
    id: 11,
    name: "一加",
    children: [
      { name: "一加 6" },
      { name: "一加 5T" },
      { name: "一加 5" },
      { name: "一加 3T" },
      { name: "一加 3" },
      { name: "一加 2" },
      { name: "一加 X" },
      { name: "一加 1" }
    ]
  }
];

export default phoneList