'use client'
import { useState } from "react";

type TQProps = {
  lrgToast: number;
  miniToast: number;
};

function Xian({lrgToast, miniToast}: TQProps) {
  const XIAN = {
    butter: 150,
    salt: 1,
    sugar_powder: 78,
    egg_white: 56,
    milk_powder: 160,
    black_tea_powder: 6,
    caramel_cookie_crumbles: 56
  }

  const ONELRGXIAN = 90;
  const ONEMINIXIAN = 40;

  const calXianRatio = () => {
    const xianWeight = Object.values(XIAN).reduce((acc, cur) => acc + cur, 0);
    const ratio = (lrgToast * ONELRGXIAN + miniToast * ONEMINIXIAN)/xianWeight;
    return ratio;
  }
  return (
    <ul>
      <li>黄油： {Math.ceil(XIAN.butter*calXianRatio())}g</li>
      <li>盐: {Math.ceil(XIAN.salt*calXianRatio())}g</li>
      <li>糖粉: {Math.ceil(XIAN.sugar_powder*calXianRatio())}g</li>
      <li>蛋液: {Math.ceil(XIAN.egg_white*calXianRatio())}g</li>
      <li>奶粉: {Math.ceil(XIAN.milk_powder*calXianRatio())}g</li>
      <li>红茶粉: {Math.ceil(XIAN.black_tea_powder*calXianRatio())}g</li>
      <li>焦糖饼干碎: {Math.ceil(XIAN.caramel_cookie_crumbles*calXianRatio())}g</li>
    </ul>
  );
}

function Mian({lrgToast, miniToast}: TQProps) {
  
  const MIANTUAN = {
    flour: 1400,
    poolish: 700,
    yeast: 14,
    milk_powder: 70,
    sugar: 280,
    water: 403,
    milk: 280,
    egg: 175,
    salt: 26,
    butter: 105
  }

  const YEZHONG = {
    flour: {
      high_gluten: 210,
      low_gluten: 140
    },
    water: 350,
    yeast: 4,
    honey: 7
  }

  const ONELRGMIAN = 250;
  const ONEMINIMIAN = 110;

  const calMianRatio = () => {
    const mianWeight = Object.values(MIANTUAN).reduce((acc, cur) => acc + cur, 0);
    const ratio = (lrgToast * ONELRGMIAN + miniToast * ONEMINIMIAN)/mianWeight;
    return ratio;
  }

  return (
    <div className="flex">
      <ul>
        <li>粉： {Math.ceil(MIANTUAN.flour*calMianRatio())}g</li>
        <li>液种: {Math.ceil(MIANTUAN.poolish*calMianRatio())}g</li>
        <li>酵母: {Math.ceil(MIANTUAN.yeast*calMianRatio())}g</li>
        <li>奶粉: {Math.ceil(MIANTUAN.milk_powder*calMianRatio())}g</li>
        <li>糖: {Math.ceil(MIANTUAN.sugar*calMianRatio())}g</li>
        <li>水: {Math.ceil(MIANTUAN.water*calMianRatio())}g</li>
        <li>牛奶: {Math.ceil(MIANTUAN.milk*calMianRatio())}g</li>
        <li>鸡蛋: {Math.ceil(MIANTUAN.egg*calMianRatio())}g</li>
        <li>盐: {Math.ceil(MIANTUAN.salt*calMianRatio())}g</li>
        <li>黄油: {Math.ceil(MIANTUAN.butter*calMianRatio())}g</li>
      </ul>
    
      <div className="ml-10 h-32 w-2 border-green-700 border-t-4 border-l-4 border-b-4 rounded-tl-xl rounded-bl-xl"></div>

      <ul>
        <li className="flex">
          粉: 
          <ul>
            <li>高 {Math.ceil(YEZHONG.flour.high_gluten*calMianRatio())}g</li>
            <li>低 {Math.ceil(YEZHONG.flour.low_gluten*calMianRatio())}g</li>
          </ul>
        </li>
        <li>水: {Math.ceil(YEZHONG.water*calMianRatio())}g</li>
        <li>酵母: {Math.ceil(YEZHONG.yeast*calMianRatio())}g</li>
        <li>蜂蜜: {Math.ceil(YEZHONG.honey*calMianRatio())}g</li>
      </ul>
    </div>
  );
}

function Toast() {
  const [lrgToast, setLrgToast] = useState(0);
  const [miniToast, setMiniToast] = useState(0);

  return (
    <>
    <label htmlFor="largeNum">Number of large size you would like to make:</label>
    <input id="largeNum" type="number" value={lrgToast} onChange={(e)=>setLrgToast(e.target.valueAsNumber)}/>
    <label htmlFor="miniNum">Number of mini size you would like to make:</label>
    <input id="miniNum" type="number" value={miniToast} onChange={(e)=>setMiniToast(e.target.valueAsNumber)}/>

    <div style={{display: "flex"}}>
      <div className="container sm">
        <Mian lrgToast={lrgToast} miniToast={miniToast} />
      </div>
      <div className="container sm">
        <Xian lrgToast={lrgToast} miniToast={miniToast} />
      </div>
    </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <h1 className="text-blue-500">Dumi Bakery</h1>
      <Toast />
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">

            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
