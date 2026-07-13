import svgPaths from "./svg-muotgu0d0k";

function Frame() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p28ecb300} fill="var(--fill-0, #686868)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.pce98200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Group() {
  return (
    <div className="contents relative size-full">
      <div className="absolute bg-white border border-[#efefef] border-solid h-[38px] left-0 rounded-[9px] top-0 w-[299px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[11px] text-black top-[6.5px] whitespace-nowrap">
        <p className="leading-[normal]">Search stock or Orders</p>
      </div>
      <Frame />
      <Frame1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#686868] text-[12px] top-[7.5px] whitespace-nowrap">
        <p className="leading-[normal]">+ F</p>
      </div>
    </div>
  );
}