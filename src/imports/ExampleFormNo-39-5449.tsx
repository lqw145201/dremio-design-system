import svgPaths from "./svg-ye44z423jp";

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px relative" data-name="title">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#202124] text-[16px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <p className="leading-[24px]">Rename chat</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]">
      <div className="absolute bg-[#eeeff1] left-[-4px] opacity-0 rounded-[4px] size-[32px] top-[-4px]" data-name="background" />
      <div className="absolute left-0 size-[24px] top-0" data-name="Close/big">
        <div className="absolute inset-[17.67%_17.67%_17.71%_17.71%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5094 15.5094">
            <path d={svgPaths.pcf7f70} fill="var(--fill-0, #505862)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FormActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Form Actions">
      <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 size-[24px]" data-name="icon interaction block">
        <Frame2 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <Title />
          <FormActions />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#202124] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Chat name
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="example fields/sample/Default">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Form/ Field title">
              <Frame3 />
            </div>
            <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Form/ Field">
              <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[8px] relative size-full">
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#202124] text-[14px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    test_mona_111
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="content-stretch flex h-[120px] items-start relative shrink-0 w-full" data-name="Middle Section">
      <Content1 />
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
    <div className="bg-[#43b8c9] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Save
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

export default function ExampleFormNo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4px_4px_16px_0px_rgba(16,18,20,0.1)] size-full" data-name="Example Form/no">
      <div className="bg-white relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Form/ Header or footer">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
          <Content />
        </div>
        <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      </div>
      <MiddleSection />
      <div className="bg-white h-[55px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Form/ Header or footer">
        <div className="content-stretch flex flex-col items-end justify-end overflow-clip relative rounded-[inherit] size-full">
          <Buttons />
        </div>
        <div aria-hidden="true" className="absolute border-[#eeeff1] border-solid border-t inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]" />
      </div>
    </div>
  );
}