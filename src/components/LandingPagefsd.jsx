import studentPic from "../assets/student-pic1.png";
import peopleclicklogo from "../assets/peopleclick-logo.svg";
import rocket from "../assets/rocket.png";

const LandingPagefsd = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">

            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 md:px-16 py-6 bg-transparent relative z-50">
                {/* Logo */}
                <div className="flex items-center space-x-3 cursor-pointer">
                    {/* <div className="bg-gradient-to-r from-[#e43b3c] to-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-sm">
                        pl
                    </div> */}
                    {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e43b3c] to-red-500 font-extrabold text-2xl tracking-tight">
                        <img src={peopleclicklogo} alt="logo"/>
                    </span> */}
                    <img src={peopleclicklogo} alt="logo" className="h-10 object-contain" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10 font-bold text-gray-500">
                    <a href="#" className="text-[#e43b3c] transition-colors">Home</a>
                    <a href="#" className="hover:text-[#e43b3c] transition-colors">Classes</a>
                    <a href="#" className="hover:text-[#e43b3c] transition-colors">Plans</a>
                    <a href="#" className="hover:text-[#e43b3c] transition-colors">About Us</a>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="px-7 py-2.5 border-2 border-[#e43b3c] text-[#e43b3c] font-bold rounded-full hover:bg-red-50 transition-colors duration-300">
                        Login
                    </button>
                    <button className="px-7 py-2.5 bg-gradient-to-r from-[#e43b3c] to-red-500 text-white font-bold rounded-full hover:opacity-90 shadow-md shadow-[#e43b3c]/30 transition-all duration-300">
                        Sign In
                    </button>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-12 lg:py-0 max-w-[1400px] mx-auto w-full relative">

                {/* Left Typography & CTA Column */}
                <div className="flex-1 lg:max-w-xl space-y-8 z-10 pt-10 xl:pt-0">
                    <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                        Learn a{' '}
                        <span className="relative inline-block whitespace-nowrap">
                            New Skill
                            {/* Yellow Marker Underline SVG */}
                            <svg
                                className="absolute w-full h-4 -bottom-1 left-0 text-yellow-400 opacity-90"
                                viewBox="0 0 200 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path d="M2.5 15.5C45.5 -3 150.5 0.5 197.5 17.5" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        Everyday, Anytime,
                        <br />
                        and Anywhere.
                    </h1>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                        <span className="font-bold text-gray-800">1000+</span> Courses covering all tech domains for you to learn and explore new oppurtunities. Learn from Industry Experts and land your Dream Job.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button className="px-8 py-3.5 bg-gradient-to-r from-[#e43b3c] to-red-500 text-white font-bold rounded-full shadow-lg shadow-[#e43b3c]/40 hover:opacity-90 hover:shadow-[#e43b3c]/50 hover:-translate-y-0.5 transition-all duration-300">
                            Start Trial
                        </button>
                        <button className="px-8 py-3.5 border-2 border-[#e43b3c] text-[#e43b3c] font-bold rounded-full hover:bg-red-50 hover:-translate-y-0.5 transition-all duration-300 bg-white">
                            How it Works
                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className="flex items-center gap-12 pt-16">
                        <div>
                            <h3 className="text-[40px] font-black text-yellow-400 leading-none">1000+</h3>
                            <p className="font-extrabold text-gray-900 mt-2 text-sm max-w-[100px] leading-tight">Courses to choose from</p>
                        </div>
                        <div>
                            <h3 className="text-[40px] font-black text-[#e43b3c] leading-none">5000+</h3>
                            <p className="font-extrabold text-gray-900 mt-2 text-sm max-w-[100px] leading-tight">Students Trained</p>
                        </div>
                        <div>
                            <h3 className="text-[40px] font-black text-orange-500 leading-none">200+</h3>
                            <p className="font-extrabold text-gray-900 mt-2 text-sm max-w-[100px] leading-tight">Professional Trainers</p>
                        </div>
                    </div>
                </div>

                {/* Right Graphics Column */}
                <div className="flex-1 right-graphics-container relative w-full h-[600px] lg:h-[700px] mt-16 lg:mt-0 flex items-center justify-center">

                    {/* Main Orange Background Circle */}
                    <div className="absolute w-[350px] h-[350px] md:w-[480px] md:h-[480px] bg-[#ff6b35] rounded-full border-[1px] border-gray-900/10 right-0 lg:right-10 top-1/2 transform -translate-y-1/2 z-0"></div>

                    {/* Main Subject Image (Replace src with your actual cut-out image) */}
                    <div className="relative z-10 w-[400px] h-[550px] md:w-[500px] md:h-[650px] right-0 lg:-right-4 pt-10">
                        {/* The image should preferably be a transparent PNG */}
                        <div className="w-full h-full bg-slate-200 rounded-b-full overflow-hidden shadow-2xl relative flex items-center justify-center">
                            <span className="text-gray-400 font-bold px-10 text-center">
                                <img src={studentPic} alt="student" />

                            </span>
                            {/* <img src="/assets/student-laptop.png" alt="Student using laptop" className="w-full h-full object-cover object-top" /> */}
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}

                    {/* Rocket (Top Left) */}
                    <div className="absolute top-10 md:top-24 left-0 md:left-10 z-20 animate-bounce duration-3000">
                        {/* Replace with your 3D Rocket image */}
                        <div className="w-24 h-24  rounded-2xl  flex items-center justify-center text-4xl -rotate-12">
                            <img src={rocket} alt="rocket" />
                        </div>
                    </div>

                    {/* Purple Circle (Top Right) */}
                    <div className="absolute top-16 md:top-24 right-4 md:right-12 z-0">
                        <div className="w-28 h-28 border border-gray-800 bg-[#7c50a1] rounded-full"></div>
                        {/* Red dot attached to purple circle */}
                        <div className="absolute -bottom-2 -right-6 w-12 h-12 bg-[#d85e50] rounded-full"></div>
                    </div>

                    {/* Bottom Left Shapes (Blue dot & Yellow circle) */}
                    <div className="absolute bottom-28 md:bottom-40 left-4 md:left-24 z-20">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#e43b3c] to-red-500 rounded-full mb-4 ml-6"></div>
                        <div className="w-24 h-24 border border-gray-800 bg-[#ecc335] rounded-full"></div>
                    </div>

                    {/* Trophy (Bottom Right) */}
                    <div className="absolute -bottom-4 md:bottom-12 right-10 md:-right-4 z-30">
                        {/* Replace with your 3D Trophy image */}
                        <div className="w-28 h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center text-5xl rotate-12">
                            🏆
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default LandingPagefsd;
