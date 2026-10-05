"use client";
import { useClock } from "@/lib/hooks/useClock";
import Image from "next/image";

export function AnalogClock() {
  const { hourDeg, minuteDeg, secondDeg, digitalTime, fullDate, ready } = useClock();

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48">
        <Image
          src="/assets/images/clock/dial.png"
          alt="Reloj analógico Codex Studio VE"
          fill
          sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
          className="object-contain"
          priority
        />

        {ready && (
          <>
            <div
              className="absolute inset-0 origin-center"
              style={{ transform: `rotate(${hourDeg}deg)` }}
            >
              <Image
                src="/assets/images/clock/hours.png"
                alt=""
                fill
                sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
                className="object-contain"
              />
            </div>

            <div
              className="absolute inset-0 origin-center"
              style={{ transform: `rotate(${minuteDeg}deg)` }}
            >
              <Image
                src="/assets/images/clock/minutes.png"
                alt=""
                fill
                sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
                className="object-contain"
              />
            </div>

            <div
              className="absolute inset-0 origin-center"
              style={{ transform: `rotate(${secondDeg}deg)` }}
            >
              <Image
                src="/assets/images/clock/seconds.png"
                alt=""
                fill
                sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
                className="object-contain"
              />
            </div>
          </>
        )}

        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/clock/bizel.png"
            alt=""
            fill
            sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="text-center">
        <div className="font-outfit text-lg md:text-xl font-bold text-white tracking-wider tabular-nums">
          {digitalTime}
        </div>
        <div className="font-outfit text-[11px] md:text-xs font-light text-white/40 capitalize mt-1">
          {fullDate || "\u00A0"}
        </div>
      </div>
    </div>
  );
}