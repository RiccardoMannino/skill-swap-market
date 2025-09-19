"use client";
import React, { JSX } from "react";

export default function Stepper({
  start,
}: {
  start: {
    passo: string | JSX.Element;
  }[];
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {start.map((skill, index) => (
          <div className="grid grid-cols-2" key={index}>
            <div className="flex w-24 flex-col items-center justify-center last-of-type:justify-start">
              <div
                className={`h-6 w-6 rounded-full bg-blue-500 text-center font-semibold text-white`}
              >
                {index + 1}
              </div>
              {index === start.length - 1 ? null : (
                <div className={`h-12 w-1 bg-blue-500`}></div>
              )}
            </div>

            <p className="text-center font-semibold last-of-type:w-24">
              {skill.passo}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
