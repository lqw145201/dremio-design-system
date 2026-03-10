import svgPaths from "./svg-4mzkarf672";

function Content() {
  return (
    <div className="bg-white h-[55px] relative rounded-tl-[5px] rounded-tr-[5px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Warning">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3d0c7e00} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#202124] text-[16px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Delete chat
          </p>
          <div className="relative shrink-0 size-[24px]" data-name="Close/big">
            <div className="absolute inset-[17.67%_17.67%_17.71%_17.71%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5094 15.5094">
                <path d={svgPaths.pcf7f70} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[600px]" data-name="Modal">
      <Content />
      <div className="content-stretch flex flex-col h-px items-center justify-center relative shrink-0 w-full" data-name="hairline">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.5px_-0.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 601 1">
              <path d="M0.5 0.5H600.5" id="Vector 37" stroke="var(--stroke-0, #EEEFF1)" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Form/ Field Title">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#202124] text-[0px] text-[14px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          <span className="leading-[20px]">{`Are you sure you want to delete `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            [Chat name]
          </span>
          <span className="leading-[20px]">?</span>
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#505862] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ca3f32] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Delete
          </p>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] h-[55px] items-center justify-end px-[16px] relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[100px]" data-name="Buttons/Plain">
        <Frame />
      </div>
      <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[100px]" data-name="Buttons/Plain">
        <Frame1 />
      </div>
    </div>
  );
}

export default function ExampleDialog() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4px_4px_16px_0px_rgba(16,18,20,0.1)] size-full" data-name="Example dialog">
      <Modal />
      <Frame2 />
      <div className="bg-white h-[56px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-[600px]" data-name="Form/ Header or footer">
        <div className="content-stretch flex flex-col items-end justify-end overflow-clip relative rounded-[inherit] size-full">
          <Buttons />
        </div>
        <div aria-hidden="true" className="absolute border-[#eeeff1] border-solid border-t inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]" />
      </div>
    </div>
  );
}