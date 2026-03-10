import svgPaths from "./svg-wzm5gmq05b";

function FluentSend28Filled() {
  return (
    <div className="absolute right-[24px] size-[24px] top-[60px]" data-name="fluent:send-28-filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fluent:send-28-filled">
          <path d={svgPaths.p1e43b980} fill="url(#paint0_linear_30_673)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_673" x1="1.71406" x2="22.2855" y1="12.0015" y2="12.0015">
            <stop stopColor="#3AB8CB" />
            <stop offset="0.66" stopColor="#4FC08B" />
            <stop offset="1" stopColor="#B7D325" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Form() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative rounded-[8px] size-full" data-name="Form2">
      <div aria-hidden="true" className="absolute border border-[#299fb1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[109px_82px_38px_0px_rgba(147,195,75,0),70px_52px_35px_0px_rgba(147,195,75,0.01),39px_29px_29px_0px_rgba(147,195,75,0.03),17px_13px_22px_0px_rgba(147,195,75,0.06),4px_3px_12px_0px_rgba(147,195,75,0.07)]" />
      <div className="bg-clip-text flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[transparent] w-full" style={{ backgroundImage: "linear-gradient(167.07deg, rgba(41, 159, 177, 0.5) 5.9765%, rgba(79, 192, 139, 0.5) 61.681%, rgba(183, 211, 37, 0.5) 107.26%)", fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <p className="mb-0">Ask AI assist data related questions:</p>
        <p>You...</p>
      </div>
      <FluentSend28Filled />
    </div>
  );
}