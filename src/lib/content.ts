/** 木栖家居内容数据：产品 / 项目 / 团队（文案源自原站 constants.ts，介绍段为同风格展开） */

export interface Product {
  id: string;
  no: string;
  categoryEn: string;
  name: string;
  description: string;
  image: string;
  /** 详情页展开文案 */
  body: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "01",
    no: "01",
    categoryEn: "Door System",
    name: "隐形门系统",
    description: "无界设计，空间延伸的艺术。",
    image: "/images/img-3.jpg",
    body: [
      "门，本应是空间的边界；在木栖，它成为空间的延续。隐形门系统以无框、无套线的极简构造，让门扇与墙面齐平共生，合上时墙面浑然一体，推开时豁然开朗。",
      "我们以毫米级精度控制门扇与墙体的缝隙，铰链、锁具皆隐于无形。木饰面与墙面同材同色，纹理连贯不断，触感温润如一——关上门，世界安静下来；打开门，空间自然流淌。",
      "从卧室到书房，从衣帽间到隐蔽储藏，隐形门系统让功能空间隐而不藏，让家的每一面墙都成为值得凝视的风景。",
    ],
  },
  {
    id: "02",
    no: "02",
    categoryEn: "Wood Veneer Wall",
    name: "木饰面护墙",
    description: "温润触感，定义空间基调。",
    image: "/images/img-4.jpg",
    body: [
      "墙，是家的底色。木栖木饰面护墙以天然木皮为面，以精密工艺为里，让墙面拥有木材的呼吸与温度，为空间定下沉静而高级的基调。",
      "每一块饰面板都经过选材、拼纹、调色三道工序，纹理自然连贯，光泽内敛柔和。我们提供多种木种与饰面工艺，可与隐形门、收纳系统同材配套，实现全屋木作的统一语言。",
      "无论是客厅的整面背景墙，还是卧室的床头护墙，木饰面都以温润的触感，抚平生活的棱角，让家成为可以依靠的所在。",
    ],
  },
  {
    id: "03",
    no: "03",
    categoryEn: "Bespoke Storage",
    name: "高定收纳",
    description: "理性秩序与感性美学的平衡。",
    image: "/images/img-5.jpg",
    body: [
      "好的收纳，是看不见的收纳。木栖高定收纳系统以全屋定制为尺，从玄关到衣帽间，从餐边到书房，为每一个家庭量身规划储物动线，让物品各得其所。",
      "我们相信秩序本身即是美学：门板开合的阻尼、灯带的色温、内部格局的分寸，皆经过反复推敲。理性规划之下，是感性细腻的使用体验——每一次开合，都是恰到好处的愉悦。",
      "高定，定的是尺寸，更是生活方式。我们以上门量尺、一户一案的服务，让收纳系统真正贴合你的居住习惯，陪伴家庭的每一次成长。",
    ],
  },
  {
    id: "04",
    no: "04",
    categoryEn: "Smart Control System",
    name: "智能中控",
    description: "科技隐于无形，服务生活。",
    image: "/images/img-6.jpg",
    body: [
      "真正的智能，是感觉不到智能的存在。木栖智能中控系统将灯光、窗帘、空调、新风纳入统一调度，一键切换起居、观影、睡眠等多种场景，科技隐于日常之中。",
      "所有设备面板均可与木作饰面一体化设计，开关、传感器藏于无形，墙面依然干净完整。你只需生活，剩下的交给系统默默打理。",
      "从单房间到全屋，我们提供从方案设计到安装调试的一站式服务，让智能成为家的一部分，而不是家的负担。",
    ],
  },
];

export interface Project {
  slug: string;
  name: string;
  tag: string;
}

export const PROJECTS: Project[] = [
  { slug: "jindi", name: "金地", tag: "精选案例" },
  { slug: "jinmao", name: "金茂", tag: "精选案例" },
  { slug: "shimao", name: "世茂", tag: "精选案例" },
  { slug: "vanke", name: "万科", tag: "精选案例" },
  { slug: "zhongjun", name: "中骏", tag: "精选案例" },
  { slug: "ziwei", name: "紫薇", tag: "精选案例" },
];

export interface Member {
  name: string;
  role: string;
  intro: string;
  image: string;
}

/** 核心团队：仅收录有本地实拍照片的成员 */
export const TEAM: Member[] = [
  {
    name: "王广大",
    role: "设计总监",
    intro: "前意大利著名家居品牌主理人，专注于极简主义美学与功能性的完美融合。",
    image: "/images/team/wangguangda.jpg",
  },
  {
    name: "张艳慧",
    role: "工艺总监",
    intro: "匠心独运，对材质与细节有着极致的追求，确保每一件作品都经得起时间的考验。",
    image: "/images/team/zhangyanhui.jpg",
  },
  {
    name: "王秦琳",
    role: "软装设计师",
    intro: "色彩与材质的碰撞，激发生活灵感。",
    image: "/images/team/wangqinlin.jpg",
  },
  {
    name: "王舒淼",
    role: "深化设计师",
    intro: "专注细节，将设计图纸完美落地。",
    image: "/images/team/wangshumiao.jpg",
  },
  {
    name: "邢旺",
    role: "3D渲染师",
    intro: "用光影还原真实的未来家园。",
    image: "/images/team/xingwang.jpg",
  },
  {
    name: "林泉",
    role: "设计助理",
    intro: "学习与成长，为设计注入新活力。",
    image: "/images/team/linquan.jpg",
  },
];

/** 部门架构：源自原站 constants.ts departments（28 人；外链头像已剔除，仅保留本地实拍照片） */
export interface DeptMember {
  id: string;
  name: string;
  role: string;
  intro: string;
  /** 本地照片路径（/images/team/…），无照片时为空字符串 */
  image: string;
}

export interface Department {
  id: string;
  name: string;
  nameEn: string;
  manager: string;
  members: DeptMember[];
}

export const DEPARTMENTS: Department[] = [
  {
    id: "d1",
    name: "销售部",
    nameEn: "Sales Dept.",
    manager: "郑晓博",
    members: [
      { id: "d1-m1", name: "王丽娜", role: "销售经理", intro: "倾听客户需求，提供最温暖的家居方案。", image: "" },
      { id: "d1-m2", name: "王丽艳", role: "高级顾问", intro: "专业与热情并重，为您排忧解难。", image: "" },
      { id: "d1-m3", name: "王南南", role: "客户经理", intro: "致力于建立长期的客户信任关系。", image: "" },
      { id: "d1-m4", name: "李秦严", role: "销售代表", intro: "用真诚的服务打动每一位客户。", image: "" },
      { id: "d1-m5", name: "费宏娜", role: "商务助理", intro: "细致入微，确保每一个环节完美衔接。", image: "" },
    ],
  },
  {
    id: "d2",
    name: "设计部",
    nameEn: "Design Dept.",
    manager: "王广大",
    members: [
      { id: "d2-m1", name: "尤艳涛", role: "主案设计师", intro: "设计不只是视觉，更是生活的艺术。", image: "" },
      { id: "d2-m2", name: "石立菊", role: "空间规划师", intro: "在有限的空间里创造无限的可能。", image: "" },
      { id: "d2-m3", name: "王秦琳", role: "软装设计师", intro: "色彩与材质的碰撞，激发生活灵感。", image: "/images/team/wangqinlin.jpg" },
      { id: "d2-m4", name: "王舒淼", role: "深化设计师", intro: "专注细节，将设计图纸完美落地。", image: "/images/team/wangshumiao.jpg" },
      { id: "d2-m5", name: "邢旺", role: "3D渲染师", intro: "用光影还原真实的未来家园。", image: "/images/team/xingwang.jpg" },
      { id: "d2-m6", name: "周颖", role: "设计师", intro: "创新是设计的灵魂。", image: "" },
      { id: "d2-m7", name: "林泉", role: "设计助理", intro: "学习与成长，为设计注入新活力。", image: "/images/team/linquan.jpg" },
    ],
  },
  {
    id: "d3",
    name: "安装部",
    nameEn: "Installation Dept.",
    manager: "刘潘潘",
    members: [
      { id: "d3-m1", name: "王明鑫", role: "安装组长", intro: "精准安装，确保每一毫米的严丝合缝。", image: "" },
      { id: "d3-m2", name: "张雄", role: "高级技师", intro: "经验丰富，解决各种现场难题。", image: "" },
      { id: "d3-m3", name: "潘小玲", role: "安装调度", intro: "统筹安排，保证工期按时交付。", image: "" },
      { id: "d3-m4", name: "张靓靓", role: "技师", intro: "匠心工艺，追求卓越。", image: "" },
      { id: "d3-m5", name: "韩伪南", role: "技师", intro: "严谨细致，服务至上。", image: "" },
      { id: "d3-m6", name: "秦超磊", role: "技师", intro: "专业技术，品质保障。", image: "" },
      { id: "d3-m7", name: "王华伟", role: "技师", intro: "脚踏实地，精益求精。", image: "" },
      { id: "d3-m8", name: "皇凡磊", role: "技师", intro: "用心服务，客户满意。", image: "" },
    ],
  },
  {
    id: "d4",
    name: "物流部",
    nameEn: "Logistics Dept.",
    manager: "周阳",
    members: [
      { id: "d4-m1", name: "依鹏", role: "物流专员", intro: "安全送达，风雨无阻。", image: "" },
      { id: "d4-m2", name: "周连成", role: "仓储主管", intro: "井井有条，高效流转。", image: "" },
      { id: "d4-m3", name: "王泽有", role: "物流司机", intro: "准时送达，使命必达。", image: "" },
      { id: "d4-m4", name: "王文博", role: "配送员", intro: "细心搬运，呵护每一件家具。", image: "" },
    ],
  },
  {
    id: "d5",
    name: "下单部",
    nameEn: "Order Processing Dept.",
    manager: "张艳慧",
    members: [
      { id: "d5-m1", name: "张艳慧", role: "下单主管", intro: "精准核对，源头把控。", image: "/images/team/zhangyanhui.jpg" },
    ],
  },
  {
    id: "d6",
    name: "调度员",
    nameEn: "Dispatch",
    manager: "陈莲红",
    members: [
      { id: "d6-m1", name: "陈莲红", role: "总调度", intro: "运筹帷幄，统筹全局。", image: "" },
    ],
  },
  {
    id: "d7",
    name: "财务部",
    nameEn: "Finance Dept.",
    manager: "陈吉",
    members: [
      { id: "d7-m1", name: "陈吉", role: "财务经理", intro: "严谨合规，为企业护航。", image: "" },
    ],
  },
  {
    id: "d8",
    name: "家政部",
    nameEn: "Household Services Dept.",
    manager: "张明巧",
    members: [
      { id: "d8-m1", name: "张明巧", role: "金牌管家", intro: "用心服务，细节成就品质。", image: "" },
    ],
  },
];
