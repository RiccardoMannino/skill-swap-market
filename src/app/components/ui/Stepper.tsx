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
      <div className="flex max-w-80 flex-col items-center justify-center">
        {start.map((skill, index) => (
          <div className="grid w-full grid-cols-[50px_1fr]" key={index}>
            <div className="flex flex-col items-center justify-center last-of-type:self-start">
              <div
                className={`h-6 w-6 rounded-full bg-blue-500 text-center font-semibold text-white`}
              >
                {index + 1}
              </div>
              {index === start.length - 1 ? null : (
                <div className={`h-12 w-1 bg-blue-500`}></div>
              )}
            </div>

            <p className="w-auto self-start text-center font-semibold">
              {skill.passo}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
