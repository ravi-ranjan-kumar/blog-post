import React, { useState } from "react";
function ToolTip({ children, tooltip }) {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      <div className="flex-col md:flex-row flex items-center md:justify-center">
        <div
          className="relative mt-20 md:mt-0"
          onMouseEnter={() => setTooltipStatus(1)}
          onMouseLeave={() => setTooltipStatus(0)}
        >
          <div className="mr-2 cursor-pointer">{children}</div>
          {tooltipStatus ? (
            <div
              role="tooltip"
              className="z-50 -mt-6 absolute transition duration-150 ease-in-out left-0 ml-10 shadow-lg bg-white py-1 px-2 rounded"
            >
              <svg
                className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
                width="9px"
                height="16px"
                viewBox="0 0 9 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Tooltips-"
                    transform="translate(-874.000000, -1029.000000)"
                    fill="#FFFFFF"
                  >
                    <g
                      id="Group-3-Copy-16"
                      transform="translate(850.000000, 975.000000)"
                    >
                      <g
                        id="Group-2"
                        transform="translate(24.000000, 0.000000)"
                      >
                        <polygon
                          id="Triangle"
                          transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                          points="4.5 57.5 12.5 66.5 -3.5 66.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-sm font-bold text-gray-800">{tooltip}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default ToolTip;
