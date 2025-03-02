'use client'
import { useState } from "react";
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from "@/app/ui/fonts";

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
    <label htmlFor="largeNum">Number of large size:</label>
    <input className="w-40" id="largeNum" type="number" min="0" value={lrgToast} onChange={(e)=>setLrgToast(e.target.valueAsNumber)}/>
    <label htmlFor="miniNum">Number of mini size:</label>
    <input className="w-40" id="miniNum" type="number" value={miniToast} onChange={(e)=>setMiniToast(e.target.valueAsNumber)}/>

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

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}