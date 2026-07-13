import svgPaths from "./svg-wcyvo42p2j";
import imgImage430 from "./9b6fa0a3b334659006bcf39e91b4da387a7b4cf0.png";
import imgImage429 from "./5a66df92e25e912526cc119832b732deeacaa033.png";
import imgImage431 from "./143a980412abcd77313d7193a14da8e48a539c1c.png";
import imgImage432 from "./6c60baab03165ef8abab5f7207471c9c98cd8c6d.png";
import imgImage433 from "./468b9aadf5afc5b0889fbadb2123d9b07618a907.png";
import imgImage434 from "./92c24c340582162a18a98ce2172b6b88031eda43.png";
import imgImage452 from "./3208bf4564f5f1a2415d12b2e8ebf09c778bfcf1.png";
import imgProductImage from "./76629cbe854957543c2416420a71b8b9d0316bd3.png";
import imgImage435 from "./928e96867c205b0e19e479ab55e64e7d8c644861.png";
import imgImage436 from "./5f05b98bbd5f4366dde6987174a5ce7f9da06055.png";
import imgImage437 from "./9acef17dd58ea5f905eacb97963e7153fb513dbc.png";
import imgImage438 from "./105218643749a83b70d0b0c96a7e3dc7e0fc3f13.png";
import imgImage439 from "./4594cb4d36df6eeef8a6896fc4f35a79e5091a7d.png";
import imgImage440 from "./71b3a03610647f4c97f26448ddda3dbc36882006.png";

function TextInput() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text input">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.047px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Single Patient</p>
      </div>
    </div>
  );
}

function TextInputContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[94px]" data-name="Text input container">
      <TextInput />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_3.121px_1.951px_rgba(0,0,0,0.04)] flex items-center justify-center p-[7.804px] relative rounded-[4.682px] shrink-0 w-[123px]" data-name="Button">
      <TextInputContainer />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48.383px] items-start left-[285px] p-[7.804px] top-[97px] w-[95.986px]" data-name="Button container">
      <Button />
    </div>
  );
}

function Container() {
  return <div className="drop-shadow-[0px_3.038px_1.899px_rgba(0,0,0,0.04)] h-[32.192px] relative rounded-[4.558px] shrink-0 w-[69.192px]" data-name="Container" />;
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[11.234px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2344 11.2344">
        <g id="Frame">
          <path d={svgPaths.p3918db00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[2.36px] h-[19px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13.673px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Multi Patients</p>
      </div>
      <Frame />
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch drop-shadow-[0px_3.038px_1.899px_rgba(0,0,0,0.04)] flex items-center justify-center p-[7.596px] relative rounded-[4.558px] shrink-0 w-[42px]" data-name="Button container">
      <Button1 />
    </div>
  );
}

function HorizontalContainer1() {
  return (
    <div className="content-stretch flex gap-[6.077px] items-center relative shrink-0" data-name="Horizontal container">
      <Container />
      <ButtonContainer1 />
    </div>
  );
}

function HorizontalContainer() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[381px] top-[106.38px] w-[153px]" data-name="Horizontal container">
      <HorizontalContainer1 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute contents left-[285px] top-[97px]" data-name="Tabs">
      <div className="absolute bg-[#f6f4f5] h-[37px] left-[290px] rounded-[6.977px] top-[102.38px] w-[249px]" data-name="Text input" />
      <ButtonContainer />
      <HorizontalContainer />
    </div>
  );
}

function Minimize() {
  return (
    <div className="absolute h-[19px] left-[212.21px] top-[30px] w-[19.792px]" data-name="Minimize">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7917 19">
        <g id="Minimize">
          <rect height="17.8125" id="Container" rx="2.57292" stroke="var(--stroke-0, #0D0D0D)" strokeWidth="1.1875" width="18.6042" x="0.59375" y="0.59375" />
          <path d="M6.54167 3.16667V15.8333" id="Vector 181" stroke="var(--stroke-0, #0D0D0D)" strokeWidth="1.1875" />
        </g>
      </svg>
    </div>
  );
}

function VerticalContainer() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Vertical container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_836)" id="Vertical container">
          <g id="Vector" />
          <path d={svgPaths.p1a1d9680} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p364a5d58} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_836">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center left-[21px] top-[176px]" data-name="Container">
      <VerticalContainer />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Catalog</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_847)" id="Container">
          <g id="Vector" />
          <path d="M4 15H20" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p344d2571} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4 20H16" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_847">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Text input">
      <Container2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-[53px]">Orders</p>
    </div>
  );
}

function TextInputContainer1() {
  return (
    <div className="absolute bg-[#f7efe9] content-stretch flex flex-col h-[32px] items-start left-[9px] px-[14px] py-[4px] rounded-[7px] top-[208px] w-[230px]" data-name="Text input container">
      <TextInput1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p23a6b500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center left-[23px] top-[248px]" data-name="Button">
      <Frame1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Cart</p>
    </div>
  );
}

function Favorites() {
  return (
    <div className="absolute contents left-[9px] top-[146px]" data-name="Favorites">
      <Container1 />
      <TextInputContainer1 />
      <Button2 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic opacity-40 text-[12px] text-black top-[146px] whitespace-nowrap">Favorites</p>
    </div>
  );
}

function VerticalContainer3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Vertical container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_802)" id="Vertical container">
          <g id="Vector" />
          <path d={svgPaths.p1ed4b748} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3258ff0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M20.2 20.2L22 22" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_802">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="Container">
      <VerticalContainer3 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Patients</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p147ee00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalContainer2() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Horizontal container">
      <Frame2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Support Tickets</p>
    </div>
  );
}

function VerticalContainer4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Vertical container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_774)" id="Vertical container">
          <g id="Vector" />
          <path d={svgPaths.p2640d980} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pf90ed00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Container">
      <VerticalContainer4 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Settings</p>
    </div>
  );
}

function VerticalContainer5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Vertical container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_817)" id="Vertical container">
          <g id="Vector" />
          <path d={svgPaths.p17c19e00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 14.1667V14.1767" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p27570600} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_817">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Button">
      <VerticalContainer5 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Help</p>
    </div>
  );
}

function VerticalContainer2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[23px] top-[353px] w-[130px]" data-name="Vertical container">
      <Container3 />
      <HorizontalContainer2 />
      <Container4 />
      <Button3 />
    </div>
  );
}

function VerticalContainer1() {
  return (
    <div className="absolute contents left-[16px] top-[319px]" data-name="Vertical container">
      <VerticalContainer2 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic opacity-40 text-[12px] text-black top-[319px] whitespace-nowrap">Main Menu</p>
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$55.88</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.44px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[101px]">
        <p className="leading-[16.982px]">NAD+ Injecton</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">4 Pharmacies</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.1724 38.1724">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_814)" id="Ellipse 10">
              <circle cx="19.0862" cy="15.3621" fill="var(--fill-0, white)" r="13.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.1724" id="filter0_d_1_814" width="38.1724" x="-1.19209e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.86207" result="effect1_dropShadow_1_814" />
              <feOffset dy="3.72414" />
              <feGaussianBlur stdDeviation="1.86207" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_814" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_814" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 ml-[5.7px] mt-[5.87px] relative row-1 size-[16.435px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4348 16.4348">
        <g id="Frame">
          <path d={svgPaths.pfef8080} fill="var(--fill-0, #C5D853)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[170px] mt-[15px] place-items-start relative row-1">
      <Group4 />
      <Frame3 />
    </div>
  );
}

function ProductCard() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo />
      <div className="col-1 h-[187px] ml-[47px] mt-[12px] relative row-1 w-[111px]" data-name="image 430">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage430} />
      </div>
      <Group5 />
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$35.88</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.38px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[155px]">
        <p className="leading-[16.982px]">Nandrolone Decanoate</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">2 Pharmacies</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group3 />
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group9 />
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168.4px] mt-[15px] place-items-start relative row-1">
      <Group7 />
      <Group8 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="col-1 h-[16px] ml-[11.4px] mt-[17px] relative row-1 w-[24.615px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6154 16">
        <g id="Frame 40930">
          <rect fill="var(--fill-0, #E7EEFA)" height="16" rx="4.92308" width="24.6154" />
          <path d={svgPaths.p25362f20} fill="var(--fill-0, #1D4289)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo1 />
      <div className="col-1 h-[173px] ml-[37.4px] mt-[27px] relative row-1 w-[138px]" data-name="image 429">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage429} />
      </div>
      <Group6 />
      <Frame14 />
    </div>
  );
}

function ProductInfo2() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">10 mg/Vial</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.44px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[101px]">
        <p className="leading-[16.982px]">NAD+ Injecton</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">4 Pharmacies</p>
      </div>
    </div>
  );
}

function ProductCard2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo2 />
      <div className="col-1 h-[205px] ml-[34px] mt-[2px] relative row-1 w-[133px]" data-name="image 430">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.27%] left-[-13.16%] max-w-none top-0 w-[126.32%]" src={imgImage431} />
        </div>
      </div>
    </div>
  );
}

function ProductInfo3() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$215.98</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.38px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[155px]">
        <p className="leading-[16.982px]">MIC/B12</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">5 Pharmacies</p>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group14 />
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168.2px] mt-[15px] place-items-start relative row-1">
      <Group11 />
      <Group13 />
    </div>
  );
}

function ProductCard3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo3 />
      <div className="col-1 h-[190px] ml-[31.8px] mt-[9.48px] relative row-1 w-[152px]" data-name="image 429">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage432} />
      </div>
      <Group10 />
    </div>
  );
}

function ProductInfo4() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$65.99</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.44px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[101px]">
        <p className="leading-[16.982px]">Esteadol</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">4 Pharmacies</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group17 />
    </div>
  );
}

function Group19() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group19 />
    </div>
  );
}

function Group15() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168.8px] mt-[15px] place-items-start relative row-1">
      <Group16 />
      <Group18 />
    </div>
  );
}

function ProductCard4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo4 />
      <div className="col-1 h-[166px] ml-[49.8px] mt-[21px] relative row-1 w-[99px]" data-name="image 430">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage433} />
      </div>
      <Group15 />
    </div>
  );
}

function ProductInfo5() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$15.98</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.44px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[101px]">
        <p className="leading-[16.982px]">NAD+ Injecton</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">4 Pharmacies</p>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group22 />
    </div>
  );
}

function Group24() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group24 />
    </div>
  );
}

function Group20() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168.6px] mt-[15px] place-items-start relative row-1">
      <Group21 />
      <Group23 />
    </div>
  );
}

function ProductCard5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo5 />
      <div className="col-1 h-[193px] ml-[33.6px] mt-[18px] relative row-1 w-[130px]" data-name="image 430">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage434} />
      </div>
      <Group20 />
    </div>
  );
}

function ProductInfo6() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[211.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[29.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$135.99</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.58px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[172px]">
        <p className="leading-[15px]">Testosterone Cypionate Injection</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[50.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">5 Pharmacies</p>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group27 />
    </div>
  );
}

function Group29() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group29 />
    </div>
  );
}

function Group25() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168px] mt-[15px] place-items-start relative row-1">
      <Group26 />
      <Group28 />
    </div>
  );
}

function ProductCard6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo6 />
      <div className="col-1 h-[181px] ml-[21px] mt-[19.48px] relative row-1 w-[166px]" data-name="image 452">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.54%] left-[-0.13%] max-w-none top-[-8.27%] w-[100.26%]" src={imgImage452} />
        </div>
      </div>
      <Group25 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[13px] items-center leading-[0] left-[288px] top-[600px]">
      <ProductCard />
      <ProductCard1 />
      <ProductCard2 />
      <ProductCard3 />
      <ProductCard4 />
      <ProductCard5 />
      <ProductCard6 />
    </div>
  );
}

function ProductInfo7() {
  return (
    <div className="absolute contents left-[1839.55px] top-[406px]" data-name="Product Info">
      <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[658.91px_-185.54px_229.18px_1846.22px] justify-center leading-[0] not-italic text-[#1a1a1a] text-[7.884px]">
        <p className="leading-[10.917px]">1,000 mg/Vial</p>
      </div>
      <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[639.5px_-281.37px_242.52px_1846.22px] justify-center leading-[0] not-italic text-[#1a1a1a] text-[13.525px] tracking-[-0.279px]">
        <p className="leading-[16.982px]">NAD+ Injecton</p>
      </div>
      <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[679.53px_-224.16px_208.56px_1846.22px] justify-center leading-[0] not-italic text-[#666] text-[7.824px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">Important safety information</p>
      </div>
      <div className="absolute h-[232.892px] left-[1839.55px] top-[406px] w-[177.702px]" data-name="Product Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProductImage} />
      </div>
    </div>
  );
}

function ProductCard7() {
  return (
    <div className="absolute contents left-[1825.6px] top-[406px]" data-name="Product Card">
      <div className="absolute bg-gradient-to-b from-[rgba(201,217,207,0.3)] h-[287.477px] left-[1825.6px] rounded-[12.13px] to-[rgba(236,229,182,0.3)] top-[417.52px] w-[205.6px]" data-name="Product Background" />
      <ProductInfo7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[801px] size-[16px] top-[113px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p28ecb300} fill="var(--fill-0, #686868)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[564px] size-[18px] top-[112px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.pce98200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[552px] top-[102px]">
      <div className="absolute bg-white border border-[#efefef] border-solid h-[38px] left-[552px] rounded-[9px] top-[102px] w-[299px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[592px] not-italic text-[11px] text-black top-[121.5px] whitespace-nowrap">
        <p className="leading-[normal]">Search stock or Orders</p>
      </div>
      <Frame4 />
      <Frame5 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[819px] not-italic text-[#686868] text-[12px] top-[121.5px] whitespace-nowrap">
        <p className="leading-[normal]">+ F</p>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="absolute inset-[12.5%]" data-name="select 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="select 1">
          <path d={svgPaths.p178a7100} fill="var(--fill-0, #4F566B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftPart() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left part">
      <div className="bg-white content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[4px] shadow-[0px_2px_5px_0px_rgba(60,66,87,0.08),0px_0px_0px_1px_rgba(60,66,87,0.16),0px_1px_1px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3c4257] text-[14px] whitespace-nowrap">
          <p>
            <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[#888c9d]">Shipping State</span>
            <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[#888c9d]">{` `}</span>
            <span className="leading-[normal]">New York</span>
          </p>
        </div>
        <div className="relative shrink-0 size-[16px]" data-name="icon">
          <Select />
        </div>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="select 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="select 1">
          <path d={svgPaths.p178a7100} fill="var(--fill-0, #4F566B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftPart1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left part">
      <div className="bg-white content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[4px] shadow-[0px_2px_5px_0px_rgba(60,66,87,0.08),0px_0px_0px_1px_rgba(60,66,87,0.16),0px_1px_1px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3c4257] text-[14px] whitespace-nowrap">
          <p>
            <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[#888c9d]">{`Area of Treatment `}</span>
            <span className="leading-[normal]">Women’s Health</span>
          </p>
        </div>
        <div className="relative shrink-0 size-[16px]" data-name="icon">
          <Select1 />
        </div>
      </div>
    </div>
  );
}

function Select2() {
  return (
    <div className="absolute inset-[12.5%]" data-name="select 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="select 1">
          <path d={svgPaths.p178a7100} fill="var(--fill-0, #4F566B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftPart2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left part">
      <div className="bg-white content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[4px] shadow-[0px_2px_5px_0px_rgba(60,66,87,0.08),0px_0px_0px_1px_rgba(60,66,87,0.16),0px_1px_1px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3c4257] text-[14px] whitespace-nowrap">
          <p>
            <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[#888c9d]">{`Dosage `}</span>
            <span className="leading-[normal]">Gel</span>
          </p>
        </div>
        <div className="relative shrink-0 size-[16px]" data-name="icon">
          <Select2 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-start left-[1078px] top-[103px]">
      <LeftPart />
      <LeftPart1 />
      <LeftPart2 />
    </div>
  );
}

function Group30() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[19px]" data-name="Vertical container">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.5" cy="9.5" fill="var(--fill-0, #BAB5FB)" id="Vertical container" r="9.5" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[10px] justify-center ml-[6px] mt-[4px] not-italic relative row-1 text-[#7547ff] text-[11px] w-[3px]">
        <p className="leading-[normal]">z</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="col-1 ml-[51px] mt-[2.5px] relative row-1 size-[12px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_796)" id="Frame">
          <path d={svgPaths.p24d9c200} fill="var(--fill-0, #023F24)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_796">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="[word-break:break-word] col-1 font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[14px] text-black whitespace-nowrap">{`Hi, Zee `}</p>
      <Frame6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#f6f4f5] content-stretch flex gap-[10px] items-center justify-center leading-[0] left-[1586px] px-[11px] py-[10px] rounded-[19px] top-[30px]">
      <Group30 />
      <Group31 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute left-[1471px] size-[24px] top-[37px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3f465200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[24.006px] left-[1393px] top-[37px] w-[22px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24.0018">
        <g id="Group 1216401140">
          <g id="Group 1216401139">
            <path d={svgPaths.p16192300} id="Vector 185" stroke="var(--stroke-0, black)" strokeWidth="1.43182" />
            <circle cx="7.63565" cy="22.0927" id="Ellipse 8" r="1.24091" stroke="var(--stroke-0, black)" strokeWidth="1.33636" />
            <circle cx="15.2724" cy="22.0927" id="Ellipse 9" r="1.24091" stroke="var(--stroke-0, black)" strokeWidth="1.33636" />
            <path d="M7.63672 9.20312H19.5685" id="Vector 186" stroke="var(--stroke-0, black)" strokeWidth="1.43182" />
          </g>
          <circle cx="18.5" cy="3.5" fill="var(--fill-0, #FF5454)" id="Ellipse 8_2" r="3.11111" stroke="var(--stroke-0, white)" strokeWidth="0.777778" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute left-[1689px] size-[14.6px] top-[859px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6 14.6">
        <g id="Frame">
          <path d={svgPaths.p16be2180} fill="var(--fill-0, #D8FFA2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[1689px] top-[859px]">
      <Frame8 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[1689px] top-[859px]">
      <Group36 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[1680px] top-[850px]">
      <div className="absolute bg-[#053c23] left-[1680px] rounded-[12px] size-[32px] top-[850px]" />
      <Group35 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[1672px] top-[842px]">
      <div className="absolute bg-white border-[#f5f5f5] border-[0.3px] border-solid h-[48px] left-[1672px] rounded-[15.5px] top-[842px] w-[49px]" />
      <Group34 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[1672px] top-[842px]">
      <Group33 />
    </div>
  );
}

function ProductInfo8() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$55.88</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.44px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[101px]">
        <p className="leading-[16.982px]">NAD+ Injecton</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">4 Pharmacies</p>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.1724 38.1724">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_814)" id="Ellipse 10">
              <circle cx="19.0862" cy="15.3621" fill="var(--fill-0, white)" r="13.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.1724" id="filter0_d_1_814" width="38.1724" x="-1.19209e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.86207" result="effect1_dropShadow_1_814" />
              <feOffset dy="3.72414" />
              <feGaussianBlur stdDeviation="1.86207" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_814" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_814" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group39 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="col-1 ml-[5.7px] mt-[5.87px] relative row-1 size-[16.435px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4348 16.4348">
        <g id="Frame">
          <path d={svgPaths.pfef8080} fill="var(--fill-0, #C5D853)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[170px] mt-[15px] place-items-start relative row-1">
      <Group38 />
      <Frame9 />
    </div>
  );
}

function ProductCard8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo8 />
      <Group37 />
      <div className="col-1 h-[180px] ml-[34px] mt-[23px] relative row-1 w-[145px]" data-name="image 429">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage435} />
      </div>
    </div>
  );
}

function ProductInfo9() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$35.88</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.38px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[155px]">
        <p className="leading-[16.982px]">GHK-Cu Cream</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">2 Pharmacies</p>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group42 />
    </div>
  );
}

function Group44() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group44 />
    </div>
  );
}

function Group40() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168.4px] mt-[15px] place-items-start relative row-1">
      <Group41 />
      <Group43 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="col-1 h-[16px] ml-[11.4px] mt-[17px] relative row-1 w-[24.615px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6154 16">
        <g id="Frame 40930">
          <rect fill="var(--fill-0, #E7EEFA)" height="16" rx="4.92308" width="24.6154" />
          <path d={svgPaths.p25362f20} fill="var(--fill-0, #1D4289)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ProductCard9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo9 />
      <div className="col-1 h-[165px] ml-[36.4px] mt-[29px] relative row-1 w-[144px]" data-name="image 429">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.36%] left-0 max-w-none top-[-3.64%] w-full" src={imgImage436} />
        </div>
      </div>
      <Group40 />
      <Frame15 />
    </div>
  );
}

function ProductInfo10() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$65.99</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.44px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[101px]">
        <p className="leading-[16.982px]">NAD+ Injecton</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">4 Pharmacies</p>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group47 />
    </div>
  );
}

function Group49() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group49 />
    </div>
  );
}

function Group45() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168.8px] mt-[15px] place-items-start relative row-1">
      <Group46 />
      <Group48 />
    </div>
  );
}

function ProductCard10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo10 />
      <div className="col-1 h-[166px] ml-[49.8px] mt-[21px] relative row-1 w-[99px]" data-name="image 430">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage437} />
      </div>
      <Group45 />
    </div>
  );
}

function ProductInfo11() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$215.98</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.38px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[155px]">
        <p className="leading-[16.982px]">MIC/B12</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">5 Pharmacies</p>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group51() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group52 />
    </div>
  );
}

function Group54() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group54 />
    </div>
  );
}

function Group50() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168.2px] mt-[15px] place-items-start relative row-1">
      <Group51 />
      <Group53 />
    </div>
  );
}

function ProductCard11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo11 />
      <div className="col-1 h-[167px] ml-[41.2px] mt-[31px] relative row-1 w-[133px]" data-name="image 429">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage438} />
      </div>
      <Group50 />
    </div>
  );
}

function ProductInfo12() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$15.98</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.44px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[101px]">
        <p className="leading-[16.982px]">NAD+ Injecton</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">4 Pharmacies</p>
      </div>
    </div>
  );
}

function Group57() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group56() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group57 />
    </div>
  );
}

function Group59() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group59 />
    </div>
  );
}

function Group55() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168.6px] mt-[15px] place-items-start relative row-1">
      <Group56 />
      <Group58 />
    </div>
  );
}

function ProductCard12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo12 />
      <div className="col-1 h-[168px] ml-[40.6px] mt-[29px] relative row-1 w-[117px]" data-name="image 430">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage439} />
      </div>
      <Group55 />
    </div>
  );
}

function ProductInfo13() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[211.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[29.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">$135.99</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.58px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[172px]">
        <p className="leading-[15px]">Testosterone Cypionate Injection</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[50.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">5 Pharmacies</p>
      </div>
    </div>
  );
}

function Group62() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[27.5px]">
      <div className="absolute inset-[-6.9%_-20.69%_-34.48%_-20.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
          <g id="Group 1216401141">
            <g filter="url(#filter0_d_1_799)" id="Ellipse 10">
              <circle cx="19.4397" cy="15.6466" fill="var(--fill-0, white)" r="13.75" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="filter0_d_1_799" width="38.8793" x="-2.38419e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1_dropShadow_1_799" />
              <feOffset dy="3.7931" />
              <feGaussianBlur stdDeviation="1.89655" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_799" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_799" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group61() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group62 />
    </div>
  );
}

function Group64() {
  return (
    <div className="col-1 h-[11.379px] ml-0 mt-0 relative row-1 w-[13.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
        <g id="Group 1216401141">
          <path d={svgPaths.p386a7b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group63() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.59px] mt-[8.53px] place-items-start relative row-1">
      <Group64 />
    </div>
  );
}

function Group60() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168px] mt-[15px] place-items-start relative row-1">
      <Group61 />
      <Group63 />
    </div>
  );
}

function ProductCard13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo13 />
      <div className="col-1 h-[181px] ml-[21px] mt-[19.48px] relative row-1 w-[166px]" data-name="image 452">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.54%] left-[-0.13%] max-w-none top-[-8.27%] w-[100.26%]" src={imgImage452} />
        </div>
      </div>
      <Group60 />
    </div>
  );
}

function ProductInfo14() {
  return (
    <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.62px] mt-[219.47px] not-italic place-items-start relative row-1" data-name="Product Info">
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[21.91px] relative row-1 text-[#1a1a1a] text-[7.884px] w-[67.32px]">
        <p className="leading-[10.917px]">10 mg/Vial</p>
      </div>
      <div className="col-1 flex flex-col h-[17px] justify-center ml-[0.44px] mt-0 relative row-1 text-[#1a1a1a] text-[13.525px] tracking-[-0.279px] w-[101px]">
        <p className="leading-[16.982px]">NAD+ Injecton</p>
      </div>
      <div className="col-1 flex flex-col h-[10.917px] justify-center ml-0 mt-[42.53px] relative row-1 text-[#666] text-[7.824px] w-[105.936px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[10.917px] underline">4 Pharmacies</p>
      </div>
    </div>
  );
}

function ProductCard14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Product Card">
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" data-name="Product Background" />
      <ProductInfo14 />
      <div className="col-1 h-[175.754px] ml-[46.94px] mt-[14.25px] relative row-1 w-[104.797px]" data-name="image 430">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage440} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[13px] items-center leading-[0] left-[293px] top-[233px]">
      <ProductCard8 />
      <ProductCard9 />
      <ProductCard10 />
      <ProductCard11 />
      <ProductCard12 />
      <ProductCard13 />
      <ProductCard14 />
    </div>
  );
}

export default function ScriptlinkrxDashboard() {
  return (
    <div className="bg-[#fffbf8] relative size-full" data-name="Scriptlinkrx - Dashboard">
      <div className="absolute bg-[#fefeff] h-[880px] left-[250px] rounded-[10px] top-[9px] w-[1466px]" data-name="Bg" />
      <div className="absolute h-0 left-[16px] top-[97px] w-[216px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 1">
            <line id="Line" stroke="var(--stroke-0, #DEE3EA)" x2="216" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[288px] not-italic text-[32px] text-black top-[46px] whitespace-nowrap">Products</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[288px] not-italic text-[25px] text-black top-[183px] whitespace-nowrap">Popular Products</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[288px] not-italic text-[25px] text-black top-[560px] whitespace-nowrap">All Products</p>
      <Tabs />
      <Minimize />
      <Favorites />
      <VerticalContainer1 />
      <Frame10 />
      <ProductCard7 />
      <Group />
      <Frame11 />
      <Frame12 />
      <div className="absolute left-[1620px] size-[9px] top-[37px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #FF8888)" id="Ellipse 7" r="4" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <Frame7 />
      <Group1 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1422px] not-italic text-[14px] text-black top-[41px] whitespace-nowrap">Cart</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1503px] not-italic text-[14px] text-black top-[41px] whitespace-nowrap">Favorites</p>
      <Group32 />
      <Frame13 />
    </div>
  );
}