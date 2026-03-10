import svgPaths from "./svg-comj3w05wm";

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px relative" data-name="title">
      <div className="relative shrink-0 size-[24px]" data-name="Warning">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3d0c7e00} fill="var(--fill-0, #FFA940)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#202124] text-[16px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <p className="leading-[24px]">Action required</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <Title />
        </div>
      </div>
    </div>
  );
}

function FormHeaderOrFooter() {
  return (
    <div className="bg-white h-[48px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Form/ Header or footer">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f6f7f8] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#202124] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            <p className="leading-[20px]">UPDATE TABLE source.raw.a_2025.customers</p>
          </div>
          <div className="bg-[rgba(196,196,196,0)] flex-[1_0_0] h-[9px] min-h-px min-w-px" />
          <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Caret/Up">
            <div className="absolute inset-[35.42%_28.25%_39.71%_28.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4397 5.96941">
                <path d={svgPaths.p348f4800} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#202124] text-[14px] w-[520px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <p className="leading-[20px]">I will need to execute the following SQL statements:</p>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-[520px]" data-name="Code block">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
          <Header />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 12">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse 1" r="7.25" stroke="var(--stroke-0, #D2D6DA)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 13">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse 1" r="7.25" stroke="var(--stroke-0, #43B8C9)" strokeWidth="1.5" />
          <circle cx="8" cy="8" fill="var(--fill-0, #43B8C9)" id="Ellipse 2" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[24px] items-start relative shrink-0 w-[520px]">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="radio&checkbox with text">
        <div className="content-stretch flex items-start p-[4px] relative shrink-0" data-name="inputtype/Radio Button">
          <Frame />
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#202124] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          <span className="leading-[20px]">Always allow actions in s</span>
          <span className="leading-[20px]">ource.raw.a_2025</span>
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="radio&checkbox with text">
        <div className="content-stretch flex items-start p-[4px] relative shrink-0" data-name="inputtype/Radio Button">
          <Frame1 />
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#202124] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          Allow once
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#505862] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Request changes
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#43b8c9] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>{`Execute `}</p>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0 w-[520px]" data-name="Buttons">
      <div className="content-stretch flex flex-[1_0_0] h-[32px] items-start min-h-px min-w-px relative" data-name="Buttons/Plain">
        <Frame2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] h-[32px] items-start min-h-px min-w-px relative" data-name="Buttons/Plain">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame6 />
      <Buttons />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Frame4 />
      </div>
    </div>
  );
}

export default function ExampleFormNo() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] size-full" data-name="Example Form/no">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <FormHeaderOrFooter />
      <Frame5 />
    </div>
  );
}