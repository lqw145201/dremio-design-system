import svgPaths from "./svg-7c63gwxb62";
import imgFrame26920 from "figma:asset/b4ef5cdedf79be2b6214c6d9d6bd661193145dc2.png";
import imgEllipse76 from "figma:asset/24e252cfca8431d492213f5538012677877e7970.png";

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Buttons/Plain">
        <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Zoom in">
          <div className="absolute inset-[11.46%_13.54%_13.54%_11.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0003 15.0009">
              <path d={svgPaths.p38bbc00} fill="var(--fill-0, #505862)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Buttons/Plain">
        <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Zoom out">
          <div className="absolute inset-[11.46%_13.55%_13.55%_11.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.998 14.9978">
              <path d={svgPaths.p1a3a63f0} fill="var(--fill-0, #505862)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Buttons/Plain">
        <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="refresh">
          <div className="absolute inset-[12.51%_12.5%_12.49%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p1f52ba00} fill="var(--fill-0, #505862)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <div className="bg-[#f4eef8] h-[23px] rounded-[1px] shrink-0 w-[19px]" />
      <div className="bg-[#f4eef8] h-[17px] rounded-[1px] shrink-0 w-[19px]" />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
      <div className="bg-[#e4e6e9] h-[8px] rounded-[1px] shrink-0 w-[19px]" />
      <Frame96 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <div className="bg-[#f4eef8] h-[12px] rounded-[1px] shrink-0 w-[19px]" />
      <div className="bg-[#f4eef8] h-[8px] rounded-[1px] shrink-0 w-[19px]" />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
      <div className="bg-[#e4e6e9] h-[8px] rounded-[1px] shrink-0 w-[19px]" />
      <Frame98 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame97 />
      <Frame99 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[27px] top-[10px]">
      <Frame100 />
      <div className="bg-[#e5f4f0] h-[33px] shrink-0 w-[19px]" />
    </div>
  );
}

function MiniMap() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mini-map">
      <div className="absolute border border-[#eeeff1] border-solid inset-0 rounded-[4px]" data-name="Rectangle" />
      <Frame101 />
    </div>
  );
}

function Selection() {
  return (
    <div className="absolute h-[92px] left-px top-px w-[153px]" data-name="Selection">
      <div className="absolute inset-[-0.54%_0_0_-0.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.5 92.5">
          <g id="Selection">
            <rect fill="var(--fill-0, #D1EEF3)" fillOpacity="0.3" height="86" id="Rectangle" stroke="var(--stroke-0, #43B8C9)" width="150" x="0.5" y="0.5" />
            <circle cx="150.5" cy="89.5" fill="var(--fill-0, #43B8C9)" id="Ellipse 69" r="2.5" stroke="var(--stroke-0, #43B8C9)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QueryVizNodeGraphMiniMap() {
  return (
    <div className="bg-white h-[104px] overflow-clip relative shrink-0 w-[152px]" data-name="QueryViz / Node Graph / Mini-map">
      <MiniMap />
      <Selection />
    </div>
  );
}

function Union() {
  return (
    <div className="absolute inset-[8.33%]" data-name="union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="union">
          <rect fill="var(--fill-0, #A672BB)" height="20" id="Rectangle 12" rx="2" width="20" />
          <path clipRule="evenodd" d={svgPaths.p17e5ce00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Div_user
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="dataset/table">
        <Union />
      </div>
      <Frame />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header section">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Marketing.analysis
      </p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame88 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center not-italic relative shrink-0 text-[12px] w-full">
      <p className="flex-[1_0_0] leading-[0] min-h-px min-w-px relative text-[#505862] text-[0px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <span className="leading-[18px]">{`Jobs `}</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          (
        </span>
        <span className="leading-[18px]">l</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>{`ast 30 `}</span>
        <span className="leading-[18px]">hour</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          s)
        </span>
      </p>
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px relative text-[#008489] text-right" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        23
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame40 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Owner
      </p>
      <Frame39 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] w-full whitespace-nowrap">
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Sep 11, 2024, 6:23AM
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated by
      </p>
      <Frame41 />
    </div>
  );
}

function ColumnOnDataLineage() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Caret/Up">
            <div className="absolute inset-[35.42%_28.25%_39.71%_28.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95983 3.9796">
                <path d={svgPaths.p3d50660} fill="var(--fill-0, #008489)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#008489] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Hide 12 columns
          </p>
        </div>
      </div>
    </div>
  );
}

function FormField() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Form/ Field">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Search">
            <div className="absolute inset-[11.46%_13.54%_13.54%_11.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0003 15.0009">
                <path d={svgPaths.p162ebe00} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#b0b7bf] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Search columns
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <FormField />
      </div>
    </div>
  );
}

function Union1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="union">
          <rect fill="var(--fill-0, #3ACBAC)" height="20" id="Rectangle 12" rx="2" width="20" />
          <path clipRule="evenodd" d={svgPaths.p17e5ce00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        user
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="dataset/view">
        <Union1 />
      </div>
      <Frame2 />
    </div>
  );
}

function HeaderSection1() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header section">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Marketing.analysis
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame89 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center not-italic relative shrink-0 text-[12px] w-full">
      <p className="flex-[1_0_0] leading-[0] min-h-px min-w-px relative text-[#505862] text-[0px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <span className="leading-[18px]">{`Jobs `}</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          (
        </span>
        <span className="leading-[18px]">l</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>{`ast 30 `}</span>
        <span className="leading-[18px]">hour</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          s)
        </span>
      </p>
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px relative text-[#008489] text-right" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        23
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame48 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Owner
      </p>
      <Frame44 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] w-full whitespace-nowrap">
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Sep 11, 2024, 6:23AM
      </p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated by
      </p>
      <Frame50 />
    </div>
  );
}

function ColumnOnDataLineage1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Caret/Up">
            <div className="absolute inset-[35.42%_28.25%_39.71%_28.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95983 3.9796">
                <path d={svgPaths.p3d50660} fill="var(--fill-0, #008489)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#008489] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Hide 12 columns
          </p>
        </div>
      </div>
    </div>
  );
}

function FormField1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Form/ Field">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Search">
            <div className="absolute inset-[11.46%_13.54%_13.54%_11.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0003 15.0009">
                <path d={svgPaths.p162ebe00} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#b0b7bf] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Search columns
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <FormField1 />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="absolute inset-[8.33%]" data-name="table">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table">
          <path d={svgPaths.p7ac2d80} fill="var(--fill-0, #3ACBAC)" id="Rectangle 12" />
          <path d={svgPaths.p3e57c980} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[7.69%_7.73%_7.69%_7.69%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9945 11">
        <g id="Group 80">
          <path d={svgPaths.p2134f900} fill="var(--fill-0, #277ABD)" id="Vector" />
          <path d={svgPaths.p2594e840} fill="var(--fill-0, #B7E0F2)" id="Vector_2" />
          <path d={svgPaths.p3edb600} fill="var(--fill-0, #B7E0F2)" id="Vector_3" />
          <path d={svgPaths.p8f2d980} fill="var(--fill-0, #90D4F0)" id="Vector_4" />
          <path d={svgPaths.p2b86dc00} fill="var(--fill-0, #4E8AC8)" id="Vector_5" />
          <path d={svgPaths.pa5480f0} fill="var(--fill-0, #B7E0F2)" id="Vector_6" />
          <path d={svgPaths.p33612500} fill="var(--fill-0, #4E8BC8)" id="Vector_7" />
          <path d={svgPaths.p251b3900} fill="var(--fill-0, #256EA7)" id="Vector_8" />
          <path d={svgPaths.p15d33a00} fill="var(--fill-0, #90D3EF)" id="Vector_9" />
          <path d={svgPaths.p19c91500} fill="var(--fill-0, #90D4F0)" id="Vector_10" />
          <path d={svgPaths.p18a55500} fill="var(--fill-0, #256EA7)" id="Vector_11" />
          <path d={svgPaths.p2e354100} fill="var(--fill-0, #55AEDE)" id="Vector_12" />
          <path d={svgPaths.pd933c80} fill="var(--fill-0, #256EA7)" id="Vector_13" />
          <path d={svgPaths.p1fef8a00} fill="var(--fill-0, #E9F6FD)" id="Vector_14" />
          <path d={svgPaths.p23792900} fill="var(--fill-0, #FEFEFE)" id="Vector_15" />
          <path d={svgPaths.pecd00} fill="var(--fill-0, #69C1EA)" id="Vector_16" />
          <path d={svgPaths.p24138600} fill="var(--fill-0, #ABDCF1)" id="Vector_17" />
          <path d={svgPaths.p2a1ae00} fill="var(--fill-0, #54A4D7)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function IcebergIcon() {
  return (
    <div className="absolute inset-[45.83%_0_0_45.83%] overflow-clip" data-name="Iceberg icon">
      <Group />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[236px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Register_analysis
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Iceberg view">
        <Table />
        <IcebergIcon />
      </div>
      <Frame9 />
    </div>
  );
}

function HeaderSection2() {
  return (
    <div className="bg-[#e5f4f0] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header section">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b-2 border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Marketing.analysis
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame90 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center not-italic relative shrink-0 text-[12px] w-full">
      <p className="flex-[1_0_0] leading-[0] min-h-px min-w-px relative text-[#505862] text-[0px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <span className="leading-[18px]">{`Jobs `}</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          (
        </span>
        <span className="leading-[18px]">l</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>{`ast 30 `}</span>
        <span className="leading-[18px]">hour</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          s)
        </span>
      </p>
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px relative text-[#008489] text-right" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        23
      </p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame54 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Owner
      </p>
      <Frame53 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] w-full whitespace-nowrap">
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Sep 11, 2024, 6:23AM
      </p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated by
      </p>
      <Frame56 />
    </div>
  );
}

function ColumnOnDataLineage2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Caret/Up">
            <div className="absolute inset-[35.42%_28.25%_39.71%_28.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95983 3.9796">
                <path d={svgPaths.p3d50660} fill="var(--fill-0, #008489)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#008489] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Hide 12 columns
          </p>
        </div>
      </div>
    </div>
  );
}

function FormField2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Form/ Field">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Search">
            <div className="absolute inset-[11.46%_13.54%_13.54%_11.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0003 15.0009">
                <path d={svgPaths.p162ebe00} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#b0b7bf] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Search columns
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start px-[16px] relative shrink-0 w-[280px]">
      <FormField2 />
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="columns">
      <Frame104 />
      <div className="content-stretch flex gap-[4px] h-[32px] items-center px-[16px] py-[4px] relative shrink-0 w-[280px]" data-name="Column on data lineage">
        <div className="relative shrink-0 size-[16px]" data-name="column type">
          <div className="absolute inset-[8.33%_8.33%_8.31%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3375">
              <path d={svgPaths.p35171880} fill="var(--fill-0, #505862)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          user_id
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[32px] items-center px-[16px] py-[4px] relative shrink-0 w-[280px]" data-name="Column on data lineage">
        <div className="relative shrink-0 size-[16px]" data-name="column type">
          <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
              <g id="Vector">
                <path d={svgPaths.p12a67780} fill="var(--fill-0, #505862)" />
                <path d={svgPaths.p20aeb800} fill="var(--fill-0, #505862)" />
                <path clipRule="evenodd" d={svgPaths.p2eceac40} fill="var(--fill-0, #505862)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          register_date
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[32px] items-center px-[16px] py-[4px] relative shrink-0 w-[280px]" data-name="Column on data lineage">
        <div className="relative shrink-0 size-[16px]" data-name="column type">
          <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          version
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[32px] items-center px-[16px] py-[4px] relative shrink-0 w-[280px]" data-name="Column on data lineage">
        <div className="relative shrink-0 size-[16px]" data-name="column type">
          <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          plan_type
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[32px] items-center px-[16px] py-[4px] relative shrink-0 w-[280px]" data-name="Column on data lineage">
        <div className="relative shrink-0 size-[16px]" data-name="column type">
          <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          country
        </p>
      </div>
      <button className="content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center px-[16px] py-[4px] relative shrink-0 w-[280px]" data-name="Column on data lineage">
        <div className="relative shrink-0 size-[16px]" data-name="column type">
          <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px] text-left" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          device_type
        </p>
      </button>
      <div className="content-stretch flex gap-[4px] h-[32px] items-center px-[16px] py-[4px] relative shrink-0 w-[280px]" data-name="Column on data lineage">
        <div className="relative shrink-0 size-[16px]" data-name="column type">
          <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          is_paid_user
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[32px] items-center px-[16px] py-[4px] relative shrink-0 w-[280px]" data-name="Column on data lineage">
        <div className="relative shrink-0 size-[16px]" data-name="column type">
          <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          referral_source
        </p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="masked">
          <div className="absolute inset-[8.33%_8.33%_4.17%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
              <path d={svgPaths.p2109d8f0} fill="var(--fill-0, #505862)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="table">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table">
          <path d={svgPaths.p7ac2d80} fill="var(--fill-0, #3ACBAC)" id="Rectangle 12" />
          <path d={svgPaths.p3e57c980} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[7.69%_7.73%_7.69%_7.69%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9945 11">
        <g id="Group 80">
          <path d={svgPaths.p2134f900} fill="var(--fill-0, #277ABD)" id="Vector" />
          <path d={svgPaths.p2594e840} fill="var(--fill-0, #B7E0F2)" id="Vector_2" />
          <path d={svgPaths.p3edb600} fill="var(--fill-0, #B7E0F2)" id="Vector_3" />
          <path d={svgPaths.p8f2d980} fill="var(--fill-0, #90D4F0)" id="Vector_4" />
          <path d={svgPaths.p2b86dc00} fill="var(--fill-0, #4E8AC8)" id="Vector_5" />
          <path d={svgPaths.pa5480f0} fill="var(--fill-0, #B7E0F2)" id="Vector_6" />
          <path d={svgPaths.p33612500} fill="var(--fill-0, #4E8BC8)" id="Vector_7" />
          <path d={svgPaths.p251b3900} fill="var(--fill-0, #256EA7)" id="Vector_8" />
          <path d={svgPaths.p15d33a00} fill="var(--fill-0, #90D3EF)" id="Vector_9" />
          <path d={svgPaths.p19c91500} fill="var(--fill-0, #90D4F0)" id="Vector_10" />
          <path d={svgPaths.p18a55500} fill="var(--fill-0, #256EA7)" id="Vector_11" />
          <path d={svgPaths.p2e354100} fill="var(--fill-0, #55AEDE)" id="Vector_12" />
          <path d={svgPaths.pd933c80} fill="var(--fill-0, #256EA7)" id="Vector_13" />
          <path d={svgPaths.p1fef8a00} fill="var(--fill-0, #E9F6FD)" id="Vector_14" />
          <path d={svgPaths.p23792900} fill="var(--fill-0, #FEFEFE)" id="Vector_15" />
          <path d={svgPaths.pecd00} fill="var(--fill-0, #69C1EA)" id="Vector_16" />
          <path d={svgPaths.p24138600} fill="var(--fill-0, #ABDCF1)" id="Vector_17" />
          <path d={svgPaths.p2a1ae00} fill="var(--fill-0, #54A4D7)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function IcebergIcon1() {
  return (
    <div className="absolute inset-[45.83%_0_0_45.83%] overflow-clip" data-name="Iceberg icon">
      <Group1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        churn_analysis
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Iceberg view">
        <Table1 />
        <IcebergIcon1 />
      </div>
      <Frame13 />
    </div>
  );
}

function HeaderSection3() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header section">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Marketing.analysis
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame91 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center not-italic relative shrink-0 text-[12px] w-full">
      <p className="flex-[1_0_0] leading-[0] min-h-px min-w-px relative text-[#505862] text-[0px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <span className="leading-[18px]">{`Jobs `}</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          (
        </span>
        <span className="leading-[18px]">l</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>{`ast 30 `}</span>
        <span className="leading-[18px]">hour</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          s)
        </span>
      </p>
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px relative text-[#008489] text-right" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        23
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame60 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Owner
      </p>
      <Frame59 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] w-full whitespace-nowrap">
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Sep 11, 2024, 6:23AM
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated by
      </p>
      <Frame62 />
    </div>
  );
}

function ColumnOnDataLineage3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Caret/Up">
            <div className="absolute inset-[35.42%_28.25%_39.71%_28.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95983 3.9796">
                <path d={svgPaths.p3d50660} fill="var(--fill-0, #008489)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#008489] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Hide 12 columns
          </p>
        </div>
      </div>
    </div>
  );
}

function FormField3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Form/ Field">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Search">
            <div className="absolute inset-[11.46%_13.54%_13.54%_11.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0003 15.0009">
                <path d={svgPaths.p162ebe00} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#b0b7bf] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Search columns
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <FormField3 />
      </div>
    </div>
  );
}

function Table2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="table">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table">
          <path d={svgPaths.p7ac2d80} fill="var(--fill-0, #3ACBAC)" id="Rectangle 12" />
          <path d={svgPaths.p3e57c980} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[7.69%_7.73%_7.69%_7.69%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9945 11">
        <g id="Group 80">
          <path d={svgPaths.p2134f900} fill="var(--fill-0, #277ABD)" id="Vector" />
          <path d={svgPaths.p2594e840} fill="var(--fill-0, #B7E0F2)" id="Vector_2" />
          <path d={svgPaths.p3edb600} fill="var(--fill-0, #B7E0F2)" id="Vector_3" />
          <path d={svgPaths.p8f2d980} fill="var(--fill-0, #90D4F0)" id="Vector_4" />
          <path d={svgPaths.p2b86dc00} fill="var(--fill-0, #4E8AC8)" id="Vector_5" />
          <path d={svgPaths.pa5480f0} fill="var(--fill-0, #B7E0F2)" id="Vector_6" />
          <path d={svgPaths.p33612500} fill="var(--fill-0, #4E8BC8)" id="Vector_7" />
          <path d={svgPaths.p251b3900} fill="var(--fill-0, #256EA7)" id="Vector_8" />
          <path d={svgPaths.p15d33a00} fill="var(--fill-0, #90D3EF)" id="Vector_9" />
          <path d={svgPaths.p19c91500} fill="var(--fill-0, #90D4F0)" id="Vector_10" />
          <path d={svgPaths.p18a55500} fill="var(--fill-0, #256EA7)" id="Vector_11" />
          <path d={svgPaths.p2e354100} fill="var(--fill-0, #55AEDE)" id="Vector_12" />
          <path d={svgPaths.pd933c80} fill="var(--fill-0, #256EA7)" id="Vector_13" />
          <path d={svgPaths.p1fef8a00} fill="var(--fill-0, #E9F6FD)" id="Vector_14" />
          <path d={svgPaths.p23792900} fill="var(--fill-0, #FEFEFE)" id="Vector_15" />
          <path d={svgPaths.pecd00} fill="var(--fill-0, #69C1EA)" id="Vector_16" />
          <path d={svgPaths.p24138600} fill="var(--fill-0, #ABDCF1)" id="Vector_17" />
          <path d={svgPaths.p2a1ae00} fill="var(--fill-0, #54A4D7)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function IcebergIcon2() {
  return (
    <div className="absolute inset-[45.83%_0_0_45.83%] overflow-clip" data-name="Iceberg icon">
      <Group2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        retention_metrics
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Iceberg view">
        <Table2 />
        <IcebergIcon2 />
      </div>
      <Frame17 />
    </div>
  );
}

function HeaderSection4() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header section">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Marketing.analysis
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame92 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center not-italic relative shrink-0 text-[12px] w-full">
      <p className="flex-[1_0_0] leading-[0] min-h-px min-w-px relative text-[#505862] text-[0px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <span className="leading-[18px]">{`Jobs `}</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          (
        </span>
        <span className="leading-[18px]">l</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>{`ast 30 `}</span>
        <span className="leading-[18px]">hour</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          s)
        </span>
      </p>
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px relative text-[#008489] text-right" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        23
      </p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame66 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Owner
      </p>
      <Frame65 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] w-full whitespace-nowrap">
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Sep 11, 2024, 6:23AM
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated by
      </p>
      <Frame68 />
    </div>
  );
}

function ColumnOnDataLineage4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Caret/Up">
            <div className="absolute inset-[35.42%_28.25%_39.71%_28.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95983 3.9796">
                <path d={svgPaths.p3d50660} fill="var(--fill-0, #008489)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#008489] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Hide 12 columns
          </p>
        </div>
      </div>
    </div>
  );
}

function FormField4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Form/ Field">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Search">
            <div className="absolute inset-[11.46%_13.54%_13.54%_11.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0003 15.0009">
                <path d={svgPaths.p162ebe00} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#b0b7bf] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Search columns
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <FormField4 />
      </div>
    </div>
  );
}

function Table3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="table">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table">
          <path d={svgPaths.p7ac2d80} fill="var(--fill-0, #3ACBAC)" id="Rectangle 12" />
          <path d={svgPaths.p3e57c980} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[7.69%_7.73%_7.69%_7.69%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9945 11">
        <g id="Group 80">
          <path d={svgPaths.p2134f900} fill="var(--fill-0, #277ABD)" id="Vector" />
          <path d={svgPaths.p2594e840} fill="var(--fill-0, #B7E0F2)" id="Vector_2" />
          <path d={svgPaths.p3edb600} fill="var(--fill-0, #B7E0F2)" id="Vector_3" />
          <path d={svgPaths.p8f2d980} fill="var(--fill-0, #90D4F0)" id="Vector_4" />
          <path d={svgPaths.p2b86dc00} fill="var(--fill-0, #4E8AC8)" id="Vector_5" />
          <path d={svgPaths.pa5480f0} fill="var(--fill-0, #B7E0F2)" id="Vector_6" />
          <path d={svgPaths.p33612500} fill="var(--fill-0, #4E8BC8)" id="Vector_7" />
          <path d={svgPaths.p251b3900} fill="var(--fill-0, #256EA7)" id="Vector_8" />
          <path d={svgPaths.p15d33a00} fill="var(--fill-0, #90D3EF)" id="Vector_9" />
          <path d={svgPaths.p19c91500} fill="var(--fill-0, #90D4F0)" id="Vector_10" />
          <path d={svgPaths.p18a55500} fill="var(--fill-0, #256EA7)" id="Vector_11" />
          <path d={svgPaths.p2e354100} fill="var(--fill-0, #55AEDE)" id="Vector_12" />
          <path d={svgPaths.pd933c80} fill="var(--fill-0, #256EA7)" id="Vector_13" />
          <path d={svgPaths.p1fef8a00} fill="var(--fill-0, #E9F6FD)" id="Vector_14" />
          <path d={svgPaths.p23792900} fill="var(--fill-0, #FEFEFE)" id="Vector_15" />
          <path d={svgPaths.pecd00} fill="var(--fill-0, #69C1EA)" id="Vector_16" />
          <path d={svgPaths.p24138600} fill="var(--fill-0, #ABDCF1)" id="Vector_17" />
          <path d={svgPaths.p2a1ae00} fill="var(--fill-0, #54A4D7)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function IcebergIcon3() {
  return (
    <div className="absolute inset-[45.83%_0_0_45.83%] overflow-clip" data-name="Iceberg icon">
      <Group3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        user_engagement
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Iceberg view">
        <Table3 />
        <IcebergIcon3 />
      </div>
      <Frame21 />
    </div>
  );
}

function HeaderSection5() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header section">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Marketing.analysis
      </p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame93 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center not-italic relative shrink-0 text-[12px] w-full">
      <p className="flex-[1_0_0] leading-[0] min-h-px min-w-px relative text-[#505862] text-[0px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <span className="leading-[18px]">{`Jobs `}</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          (
        </span>
        <span className="leading-[18px]">l</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>{`ast 30 `}</span>
        <span className="leading-[18px]">hour</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          s)
        </span>
      </p>
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px relative text-[#008489] text-right" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        23
      </p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame72 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Owner
      </p>
      <Frame71 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] w-full whitespace-nowrap">
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Sep 11, 2024, 6:23AM
      </p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated by
      </p>
      <Frame74 />
    </div>
  );
}

function ColumnOnDataLineage5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Caret/Up">
            <div className="absolute inset-[35.42%_28.25%_39.71%_28.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95983 3.9796">
                <path d={svgPaths.p3d50660} fill="var(--fill-0, #008489)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#008489] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Hide 12 columns
          </p>
        </div>
      </div>
    </div>
  );
}

function FormField5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Form/ Field">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Search">
            <div className="absolute inset-[11.46%_13.54%_13.54%_11.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0003 15.0009">
                <path d={svgPaths.p162ebe00} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#b0b7bf] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Search columns
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <FormField5 />
      </div>
    </div>
  );
}

function Union2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="union">
          <rect fill="var(--fill-0, #A672BB)" height="20" id="Rectangle 12" rx="2" width="20" />
          <path clipRule="evenodd" d={svgPaths.p17e5ce00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Register_raw
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="dataset/table">
        <Union2 />
      </div>
      <Frame25 />
    </div>
  );
}

function HeaderSection6() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header section">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Marketing.analysis
      </p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame94 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center not-italic relative shrink-0 text-[12px] w-full">
      <p className="flex-[1_0_0] leading-[0] min-h-px min-w-px relative text-[#505862] text-[0px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <span className="leading-[18px]">{`Jobs `}</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          (
        </span>
        <span className="leading-[18px]">l</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>{`ast 30 `}</span>
        <span className="leading-[18px]">hour</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          s)
        </span>
      </p>
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px relative text-[#008489] text-right" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        23
      </p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame78 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Owner
      </p>
      <Frame77 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] w-full whitespace-nowrap">
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Sep 11, 2024, 6:23AM
      </p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated by
      </p>
      <Frame80 />
    </div>
  );
}

function ColumnOnDataLineage6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Caret/Up">
            <div className="absolute inset-[35.42%_28.25%_39.71%_28.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95983 3.9796">
                <path d={svgPaths.p3d50660} fill="var(--fill-0, #008489)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#008489] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Hide 12 columns
          </p>
        </div>
      </div>
    </div>
  );
}

function FormField6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Form/ Field">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Search">
            <div className="absolute inset-[11.46%_13.54%_13.54%_11.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0003 15.0009">
                <path d={svgPaths.p162ebe00} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#b0b7bf] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Search columns
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <FormField6 />
      </div>
    </div>
  );
}

function Table4() {
  return (
    <div className="absolute inset-[8.33%]" data-name="table">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table">
          <path d={svgPaths.p7ac2d80} fill="var(--fill-0, #3ACBAC)" id="Rectangle 12" />
          <path d={svgPaths.p3e57c980} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[7.69%_7.73%_7.69%_7.69%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9945 11">
        <g id="Group 80">
          <path d={svgPaths.p2134f900} fill="var(--fill-0, #277ABD)" id="Vector" />
          <path d={svgPaths.p2594e840} fill="var(--fill-0, #B7E0F2)" id="Vector_2" />
          <path d={svgPaths.p3edb600} fill="var(--fill-0, #B7E0F2)" id="Vector_3" />
          <path d={svgPaths.p8f2d980} fill="var(--fill-0, #90D4F0)" id="Vector_4" />
          <path d={svgPaths.p2b86dc00} fill="var(--fill-0, #4E8AC8)" id="Vector_5" />
          <path d={svgPaths.pa5480f0} fill="var(--fill-0, #B7E0F2)" id="Vector_6" />
          <path d={svgPaths.p33612500} fill="var(--fill-0, #4E8BC8)" id="Vector_7" />
          <path d={svgPaths.p251b3900} fill="var(--fill-0, #256EA7)" id="Vector_8" />
          <path d={svgPaths.p15d33a00} fill="var(--fill-0, #90D3EF)" id="Vector_9" />
          <path d={svgPaths.p19c91500} fill="var(--fill-0, #90D4F0)" id="Vector_10" />
          <path d={svgPaths.p18a55500} fill="var(--fill-0, #256EA7)" id="Vector_11" />
          <path d={svgPaths.p2e354100} fill="var(--fill-0, #55AEDE)" id="Vector_12" />
          <path d={svgPaths.pd933c80} fill="var(--fill-0, #256EA7)" id="Vector_13" />
          <path d={svgPaths.p1fef8a00} fill="var(--fill-0, #E9F6FD)" id="Vector_14" />
          <path d={svgPaths.p23792900} fill="var(--fill-0, #FEFEFE)" id="Vector_15" />
          <path d={svgPaths.pecd00} fill="var(--fill-0, #69C1EA)" id="Vector_16" />
          <path d={svgPaths.p24138600} fill="var(--fill-0, #ABDCF1)" id="Vector_17" />
          <path d={svgPaths.p2a1ae00} fill="var(--fill-0, #54A4D7)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function IcebergIcon4() {
  return (
    <div className="absolute inset-[45.83%_0_0_45.83%] overflow-clip" data-name="Iceberg icon">
      <Group4 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Register_charts
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Iceberg view">
        <Table4 />
        <IcebergIcon4 />
      </div>
      <Frame29 />
    </div>
  );
}

function HeaderSection7() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header section">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Marketing.analysis
      </p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame95 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center not-italic relative shrink-0 text-[12px] w-full">
      <p className="flex-[1_0_0] leading-[0] min-h-px min-w-px relative text-[#505862] text-[0px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        <span className="leading-[18px]">{`Jobs `}</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          (
        </span>
        <span className="leading-[18px]">l</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>{`ast 30 `}</span>
        <span className="leading-[18px]">hour</span>
        <span className="leading-[18px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
          s)
        </span>
      </p>
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px relative text-[#008489] text-right" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        23
      </p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame84 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Owner
      </p>
      <Frame83 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-[32px] items-center leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] w-full whitespace-nowrap">
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Sep 11, 2024, 6:23AM
      </p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="persona">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <img alt="" className="absolute block max-w-none size-full" height="2" src={imgEllipse76} width="2" />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#505862] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Antonio
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        Last updated by
      </p>
      <Frame86 />
    </div>
  );
}

function ColumnOnDataLineage7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Caret/Up">
            <div className="absolute inset-[35.42%_28.25%_39.71%_28.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95983 3.9796">
                <path d={svgPaths.p3d50660} fill="var(--fill-0, #008489)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#008489] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Hide 12 columns
          </p>
        </div>
      </div>
    </div>
  );
}

function FormField7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Form/ Field">
      <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Search">
            <div className="absolute inset-[11.46%_13.54%_13.54%_11.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0003 15.0009">
                <path d={svgPaths.p162ebe00} fill="var(--fill-0, #505862)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#b0b7bf] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
            Search columns
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <FormField7 />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[1245px] left-[-258px] top-[-343px] w-[1592px]">
      <div className="absolute inset-[-0.3%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1593 1252.36">
          <g id="Group 81">
            <path d={svgPaths.p1000d240} fill="var(--stroke-0, #B0B7BF)" />
            <path d={svgPaths.p3fb9d00} fill="var(--stroke-0, #B0B7BF)" />
            <path d={svgPaths.p35b675f0} fill="var(--stroke-0, #B0B7BF)" />
            <path d={svgPaths.p1b92c1c0} fill="var(--stroke-0, #B0B7BF)" />
            <path d={svgPaths.pecb0c00} fill="var(--stroke-0, #B0B7BF)" />
            <path d={svgPaths.p2da8b1f0} fill="var(--stroke-0, #B0B7BF)" />
            <path d={svgPaths.p3cb85900} fill="var(--stroke-0, #B0B7BF)" />
            <path d={svgPaths.p3832d180} fill="var(--stroke-0, #B0B7BF)" />
            <path d={svgPaths.p2e483d80} fill="var(--stroke-0, #B0B7BF)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Rectangle() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Rectangle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Rectangle">
          <path d="M20 0H0V20H20V0Z" fill="url(#paint0_linear_5_16888)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_16888" x1="0" x2="20" y1="20" y2="0">
            <stop stopColor="#1B660F" />
            <stop offset="1" stopColor="#6CAE3E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconService32AmazonSimpleStorageService() {
  return (
    <div className="absolute inset-[20.83%_21.12%_20.83%_22.92%]" data-name="Icon-Service/32/Amazon-Simple-Storage-Service_32">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.432 14">
        <g id="Icon-Service/32/Amazon-Simple-Storage-Service_32">
          <path clipRule="evenodd" d={svgPaths.p363e4600} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-Simple-Storage-Service-Icon_32_Squid" />
        </g>
      </svg>
    </div>
  );
}

function IconArchitecture32ArchAmazonSimpleStorageService() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Icon-Architecture/32/Arch_Amazon-Simple-Storage-Service_32">
      <Rectangle />
      <IconService32AmazonSimpleStorageService />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        S3_Div
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[268px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Corporate Icon/ Amazon s3">
        <IconArchitecture32ArchAmazonSimpleStorageService />
      </div>
      <Frame33 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px opacity-80 relative">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-center px-[8px] py-[4px] relative">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Rectangle1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Rectangle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Rectangle">
          <path d="M20 0H0V20H20V0Z" fill="url(#paint0_linear_5_16888)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_16888" x1="0" x2="20" y1="20" y2="0">
            <stop stopColor="#1B660F" />
            <stop offset="1" stopColor="#6CAE3E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconService32AmazonSimpleStorageService1() {
  return (
    <div className="absolute inset-[20.83%_21.12%_20.83%_22.92%]" data-name="Icon-Service/32/Amazon-Simple-Storage-Service_32">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.432 14">
        <g id="Icon-Service/32/Amazon-Simple-Storage-Service_32">
          <path clipRule="evenodd" d={svgPaths.p363e4600} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-Simple-Storage-Service-Icon_32_Squid" />
        </g>
      </svg>
    </div>
  );
}

function IconArchitecture32ArchAmazonSimpleStorageService1() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Icon-Architecture/32/Arch_Amazon-Simple-Storage-Service_32">
      <Rectangle1 />
      <IconService32AmazonSimpleStorageService1 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#202124] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
        S3_DumplingHome
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[268px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Corporate Icon/ Amazon s3">
        <IconArchitecture32ArchAmazonSimpleStorageService1 />
      </div>
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px opacity-80 relative">
      <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-center px-[8px] py-[4px] relative">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="h-[756px] overflow-auto relative shrink-0 w-[1340px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f6f7f8] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame26920} />
      </div>
      <div className="absolute bottom-[19px] content-stretch flex gap-[4px] items-start left-[17px]" data-name="Map">
        <Frame38 />
        <QueryVizNodeGraphMiniMap />
      </div>
      <div className="absolute h-[756px] left-0 top-0 w-[1340px]" data-name="Component 7">
        <div className="absolute bg-white left-[-179px] rounded-[4px] top-[251px] w-[280px]" data-name="Table node">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <HeaderSection />
            <div className="relative shrink-0 w-full" data-name="metadata section">
              <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
                <Frame42 />
                <Frame45 />
                <Frame1 />
                <Frame3 />
                <Frame47 />
              </div>
            </div>
            <ColumnOnDataLineage />
            <Frame102 />
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[8.33%_8.33%_8.31%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3375">
                        <path d={svgPaths.p35171880} fill="var(--fill-0, #505862)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
                        <g id="Vector">
                          <path d={svgPaths.p12a67780} fill="var(--fill-0, #505862)" />
                          <path d={svgPaths.p20aeb800} fill="var(--fill-0, #505862)" />
                          <path clipRule="evenodd" d={svgPaths.p2eceac40} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    register_date
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    version
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    plan_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    country
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    device_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    referral_source
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        </div>
        <div className="absolute bg-white left-[202px] rounded-[4px] top-[251px] w-[280px]" data-name="Table node">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <HeaderSection1 />
            <div className="relative shrink-0 w-full" data-name="metadata section">
              <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
                <Frame43 />
                <Frame46 />
                <Frame6 />
                <Frame7 />
                <Frame49 />
              </div>
            </div>
            <ColumnOnDataLineage1 />
            <Frame103 />
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[8.33%_8.33%_8.31%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3375">
                        <path d={svgPaths.p35171880} fill="var(--fill-0, #505862)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
                        <g id="Vector">
                          <path d={svgPaths.p12a67780} fill="var(--fill-0, #505862)" />
                          <path d={svgPaths.p20aeb800} fill="var(--fill-0, #505862)" />
                          <path clipRule="evenodd" d={svgPaths.p2eceac40} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    register_date
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    version
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    plan_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    country
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    device_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    referral_source
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        </div>
        <div className="absolute bg-white content-stretch flex flex-col items-start left-[579px] rounded-[4px] top-[-35px] w-[280px]" data-name="Table node">
          <div aria-hidden="true" className="absolute border-2 border-[#43b8c9] border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
          <HeaderSection2 />
          <div className="relative shrink-0 w-full" data-name="metadata section">
            <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
              <Frame51 />
              <Frame52 />
              <Frame10 />
              <Frame11 />
              <Frame55 />
            </div>
          </div>
          <ColumnOnDataLineage2 />
          <Columns />
        </div>
        <div className="absolute bg-white left-[962px] rounded-[4px] top-[253px] w-[280px]" data-name="Table node">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <HeaderSection3 />
            <div className="relative shrink-0 w-full" data-name="metadata section">
              <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
                <Frame57 />
                <Frame58 />
                <Frame14 />
                <Frame15 />
                <Frame61 />
              </div>
            </div>
            <ColumnOnDataLineage3 />
            <Frame105 />
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[8.33%_8.33%_8.31%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3375">
                        <path d={svgPaths.p35171880} fill="var(--fill-0, #505862)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
                        <g id="Vector">
                          <path d={svgPaths.p12a67780} fill="var(--fill-0, #505862)" />
                          <path d={svgPaths.p20aeb800} fill="var(--fill-0, #505862)" />
                          <path clipRule="evenodd" d={svgPaths.p2eceac40} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    register_date
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    version
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    plan_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    country
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    device_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    referral_source
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        </div>
        <div className="absolute bg-white left-[1335px] rounded-[4px] top-[253px] w-[280px]" data-name="Table node">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <HeaderSection4 />
            <div className="relative shrink-0 w-full" data-name="metadata section">
              <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
                <Frame63 />
                <Frame64 />
                <Frame18 />
                <Frame19 />
                <Frame67 />
              </div>
            </div>
            <ColumnOnDataLineage4 />
            <Frame106 />
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[8.33%_8.33%_8.31%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3375">
                        <path d={svgPaths.p35171880} fill="var(--fill-0, #505862)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
                        <g id="Vector">
                          <path d={svgPaths.p12a67780} fill="var(--fill-0, #505862)" />
                          <path d={svgPaths.p20aeb800} fill="var(--fill-0, #505862)" />
                          <path clipRule="evenodd" d={svgPaths.p2eceac40} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    register_date
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    version
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    plan_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    country
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    device_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    referral_source
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        </div>
        <div className="absolute bg-white left-[962px] rounded-[4px] top-[883px] w-[280px]" data-name="Table node">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <HeaderSection5 />
            <div className="relative shrink-0 w-full" data-name="metadata section">
              <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
                <Frame69 />
                <Frame70 />
                <Frame22 />
                <Frame23 />
                <Frame73 />
              </div>
            </div>
            <ColumnOnDataLineage5 />
            <Frame107 />
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[8.33%_8.33%_8.31%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3375">
                        <path d={svgPaths.p35171880} fill="var(--fill-0, #505862)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
                        <g id="Vector">
                          <path d={svgPaths.p12a67780} fill="var(--fill-0, #505862)" />
                          <path d={svgPaths.p20aeb800} fill="var(--fill-0, #505862)" />
                          <path clipRule="evenodd" d={svgPaths.p2eceac40} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    register_date
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    version
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    plan_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    country
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    device_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    referral_source
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        </div>
        <div className="absolute bg-white left-[202px] rounded-[4px] top-[-304px] w-[280px]" data-name="Table node">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <HeaderSection6 />
            <div className="relative shrink-0 w-full" data-name="metadata section">
              <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
                <Frame75 />
                <Frame76 />
                <Frame26 />
                <Frame27 />
                <Frame79 />
              </div>
            </div>
            <ColumnOnDataLineage6 />
            <Frame108 />
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[8.33%_8.33%_8.31%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3375">
                        <path d={svgPaths.p35171880} fill="var(--fill-0, #505862)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
                        <g id="Vector">
                          <path d={svgPaths.p12a67780} fill="var(--fill-0, #505862)" />
                          <path d={svgPaths.p20aeb800} fill="var(--fill-0, #505862)" />
                          <path clipRule="evenodd" d={svgPaths.p2eceac40} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    register_date
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    version
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    plan_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    country
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    device_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    referral_source
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        </div>
        <div className="absolute bg-white left-[962px] rounded-[4px] top-[-362px] w-[280px]" data-name="Table node">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <HeaderSection7 />
            <div className="relative shrink-0 w-full" data-name="metadata section">
              <div aria-hidden="true" className="absolute border-[#eeeff1] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
                <Frame81 />
                <Frame82 />
                <Frame30 />
                <Frame31 />
                <Frame85 />
              </div>
            </div>
            <ColumnOnDataLineage7 />
            <Frame109 />
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[8.33%_8.33%_8.31%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3375">
                        <path d={svgPaths.p35171880} fill="var(--fill-0, #505862)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
                        <g id="Vector">
                          <path d={svgPaths.p12a67780} fill="var(--fill-0, #505862)" />
                          <path d={svgPaths.p20aeb800} fill="var(--fill-0, #505862)" />
                          <path clipRule="evenodd" d={svgPaths.p2eceac40} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    register_date
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    version
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    plan_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    country
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    device_type
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    user_id
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Column on data lineage">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[4px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="column type">
                    <div className="absolute inset-[29.17%_8.33%_29.75%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 6.57256">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p252b4f00} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2f751880} fill="var(--fill-0, #505862)" fillRule="evenodd" />
                          <path d={svgPaths.p2f226800} fill="var(--fill-0, #505862)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#505862] text-[12px]" style={{ fontFeatureSettings: "'cv08', 'lnum', 'tnum'" }}>
                    referral_source
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        </div>
        <Group5 />
        <div className="absolute h-[40px] left-[-542px] rounded-[4px] top-[251px]" data-name="Table node">
          <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
            <Frame36 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="absolute h-[40px] left-[-540px] rounded-[4px] top-[-304px]" data-name="Table node">
          <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
            <Frame37 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#d2d6da] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

export default function Pages() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Pages">
      <Frame87 />
    </div>
  );
}