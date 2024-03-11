"use client"
import { useEffect, useState } from "react";

const OFFER_DURATION_HOURS = 6;

const ShiftingCountdown = () => {
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: OFFER_DURATION_HOURS,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemaining((prevRemaining) => {
        const { days, hours, minutes, seconds } = prevRemaining;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          return prevRemaining;
        }

        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              return {
                days: days - 1,
                hours: 23,
                minutes: 59,
                seconds: 59,
              };
            }
            return {
              days,
              hours: hours - 1,
              minutes: 59,
              seconds: 59,
            };
          }
          return {
            days,
            hours,
            minutes: minutes - 1,
            seconds: 59,
          };
        }
        return {
          days,
          hours,
          minutes,
          seconds: seconds - 1,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-5">
      <div className="w-full max-w-5xl  gap-3 mx-auto  flex items-center ">
        <CountdownItem num={remaining.days} text="day" />
        <CountdownItem num={remaining.hours} text="hrs" />
        <CountdownItem num={remaining.minutes} text="min" />
        <CountdownItem num={remaining.seconds} text="sec" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="justify-center flex flex-col item-center">
    <div className="font-mono bg-secondColor rounded-2xl  p-2 flex flex-col gap-1 md:gap-2 items-center justify-center">
      <div className="w-full text-center relative overflow-hidden">
        <span className="block text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-black font-medium">
          {num.toString().padStart(2, "0")}
        </span>
      </div>
     
    </div>
     <span className="text-xs md:text-sm  lg:text-base font-light p-3 text-center bg-no text-white">
     {text}
   </span></div>
  );
};

export default ShiftingCountdown;
