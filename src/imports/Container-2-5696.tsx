import svgPaths from "./svg-y2px4tokxe";

function Container1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Container">
          <path d={svgPaths.p2962b000} fill="url(#paint0_linear_2_5700)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_5700" x1="4.14179" x2="27.1147" y1="9.21348" y2="25.3789">
            <stop stopColor="#299FB1" />
            <stop offset="0.55" stopColor="#4FC08B" />
            <stop offset="1" stopColor="#B7D325" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px whitespace-nowrap">AI Agent</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start justify-center relative shrink-0 w-[131.398px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-between px-[20px] py-[8px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
    </div>
  );
}