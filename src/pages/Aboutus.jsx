import React from 'react';
import subhan from "../images/subhan.jpg";
import subhan1 from "../images/subhan1.png"
import sipra from "../images/sipra.jpeg"
import basim from "../images/basim.jpeg"

// import '../../'
const Aboutus = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <div className='section-Aboutus'>
      <div className="max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to Eemarat, your go-to destination for revolutionizing the construction industry in Pakistan. We are passionate about simplifying the construction process and empowering both customers and professionals with a comprehensive, user-friendly platform.
        </p>
      </div>
      </div>
      <div className='section-Aboutus'>
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-3xl font-bold text-center mb-3">Our Mission</h2>
        <p>
          Our mission is to streamline the construction experience by providing a centralized platform that connects customers, professionals, contractors, and solo workers. We aim to eliminate the hassle of navigating multiple platforms and simplify the process of finding reliable services and quality materials.
        </p>
      </div>
      </div>
      {/* ceo  */}
      <section class="pt-10 overflow-hidden bg-gray-10 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Hey 👋 I
                    am
                    <br class="block sm:hidden" /> Subhan Nadeem
              
                </h2>
                <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                Eemarat is revolutionizing the $10 trillion global construction industry by modernizing procurement processes and creating a seamless marketplace for construction technology.
                </p>

                <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                    <span class="relative inline-block">
                        <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                    <span class="relative"> Have a question? </span>
                    </span>
                    <br class="block sm:hidden" />Ask me on <a href="linkedin.com/in/subhan-nadeem-67ab64239" title=""
                        class="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Linkdin</a>
                </p>
            </div>

            <div class="relative">
                <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={subhan1} alt="" />
            </div>

        </div>
    </div>
      </section>
      {/* why us */}
      <section class="text-gray-700 body-font">
  <div class="flex justify-center mt-10 text-4xl  font-bold">
    Why Us?
  </div>
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap text-center justify-center">
      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" class="w-32 mb-3"/>
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" class="w-32 mb-3"/>
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" class="w-32 mb-3"/>
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" class="w-32 mb-3"/>
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div>

    </div>
  </div>
</section>
  {/* our team section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center font-bold mb-3">Our Team</h2>
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Repeat this block for each team member */}
          <div className="  bg-[#CECEF6]    p-4 rounded-lg shadow transform transition duration-500 hover:scale-110">
            <div className="mb-3"> {/* Team member image container */}
              {/* Replace src with actual image path */}
              <img
                src={subhan}
                alt="Team Member"
                className="w-full h-58 object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-bold">Subhan nadeem</h3>
            <p>CEO</p>
            <p className="mt-1"> Leads company operations and strategic direction</p>
          </div>
          
          {/* ... other team members */}
          <div className="bg-[#CECEF6] p-4 rounded-lg shadow transform transition duration-500 hover:scale-110">
            <div className="mb-3"> {/* Team member image container */}
              {/* Replace src with actual image path */}
              <img
                src={sipra}
                alt="Team Member"
                className="w-full h-58 object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-bold">Ahmad kmal sipra</h3>
            <p>Director</p>
            <p className="mt-1">Oversees company management and decisions</p>
          </div>
         
          <div className="bg-[#CECEF6] p-4 rounded-lg shadow transform transition duration-500 hover:scale-110">
            <div className="mb-3"> {/* Team member image container */}
              {/* Replace src with actual image path */}
              <img
                src={basim}
                alt="Team Member"
                className="w-full h-58 object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-bold">CTO</h3>
            <p>Position</p>
            <p className="mt-1">Manages technology development strategies</p>
          </div>
        </div>
      </div>
      
      {/* impact */}
    
      <div class="h-full  w-full pt-12 p-4">
      <div class="flex justify-center mt-10 text-4xl  font-bold">
    Our Impact
  </div>
  <br/><br/><br/>
  <div class="grid gap-14 md:grid-cols-3 md:gap-5">
    <div class="rounded-xl bg-white p-6 text-center shadow-xl">
      <div
        class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
        <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white">
          <path
            d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
            fill="white"></path>
        </svg>
      </div>
      <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">Industry, Innovation and Infrastructure</h1>
      <p class="px-4 text-gray-500">By increasing trade and streamlining traditional market</p>
    </div>
    <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl">
      <div
        class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
          <svg viewBox=" 0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white">
        <path
          d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
          fill="#F5F5FC"></path>
        <path
          d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
          fill="#F5F5FC"></path>
        <path
          d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
          fill="#F5F5FC"></path>
        <path
          d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
          fill="#F5F5FC"></path>
        <path
          d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.661 23.9999 37.7143 23.9999Z"
          fill="#F5F5FC"></path>
        <path
          d="M13.7142 30.8571H10.2857C9.33889 30.8571 8.57138 31.6246 8.57138 32.5714C8.57138 33.5182 9.33889 34.2857 10.2857 34.2857H13.7142C14.661 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.661 30.8571 13.7142 30.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M25.7143 30.8571H22.2857C21.3389 30.8571 20.5714 31.6246 20.5714 32.5714C20.5714 33.5182 21.3389 34.2857 22.2857 34.2857H25.7143C26.6611 34.2857 27.4286 33.5182 27.4286 32.5714C27.4286 31.6246 26.6611 30.8571 25.7143 30.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M37.7143 30.8571H34.2857C33.3389 30.8571 32.5714 31.6246 32.5714 32.5714C32.5714 33.5182 33.3389 34.2857 34.2857 34.2857H37.7143C38.6611 34.2857 39.4286 33.5182 39.4286 32.5714C39.4285 31.6246 38.661 30.8571 37.7143 30.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M13.7142 37.7142H10.2857C9.33889 37.7142 8.57138 38.4817 8.57138 39.4286C8.57138 40.3754 9.33889 41.1428 10.2857 41.1428H13.7142C14.661 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.661 37.7142 13.7142 37.7142Z"
          fill="#F5F5FC"></path>
        <path
          d="M25.7143 37.7142H22.2857C21.3389 37.7142 20.5714 38.4817 20.5714 39.4285C20.5714 40.3754 21.3389 41.1429 22.2857 41.1429H25.7143C26.6611 41.1429 27.4286 40.3754 27.4286 39.4285C27.4286 38.4817 26.6611 37.7142 25.7143 37.7142Z"
          fill="#F5F5FC"></path>
        <path
          d="M37.7143 37.7142H34.2857C33.3389 37.7142 32.5714 38.4817 32.5714 39.4285C32.5714 40.3754 33.3389 41.1429 34.2857 41.1429H37.7143C38.6611 41.1429 39.4286 40.3754 39.4286 39.4285C39.4286 38.4817 38.661 37.7142 37.7143 37.7142Z"
          fill="#F5F5FC"></path>
        </svg>
      </div>
      <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 ">Sustainable Cities and Communities
</h1>
      <p class="px-4 text-gray-500">By improving the quality of construction products and bringing in transparency</p>
    </div>
    <div data-aos-delay="300" class="rounded-xl bg-white p-6 text-center shadow-xl">
      <div
        class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
        <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white">
          <path
            d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
            fill="white"></path>
        </svg>
      </div>
      <h1 class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">Responsible Consumption and Production</h1>
      <p class="px-4 text-gray-500">By optimizing supply chain processes and reducing leakages</p>
    </div>
  </div>

</div>
<br/><br/>
    </div>
  );
};

export default Aboutus;
