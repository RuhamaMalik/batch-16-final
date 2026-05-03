// import { Link, useNavigate } from "react-router-dom";
// import { IoMdLogOut } from "react-icons/io";
// import { useState } from "react";
// // iconss  ///
// import {
//     MdOutlineDashboard,
//        MdOutlineInventory2,
//     MdChevronLeft,
//     MdChevronRight,
// } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa";
// import { IoSettingsOutline, IoPeopleOutline } from "react-icons/io5";
// import { TbBrandGoogleAnalytics } from "react-icons/tb";
// import { LuMessageSquareText } from "react-icons/lu";
// import { RxCross2 } from "react-icons/rx";
// // framer motion //
// import { motion, AnimatePresence } from "framer-motion";
// import { getUser, removeToken, removeUser } from "../../utils/auth";


// const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
//     const [collapsed, setCollapsed] = useState(false);
//     const user = getUser();
//     const navigate = useNavigate()

//     // navlinks
//     const adminTabs = [
//         { name: "Dashboard", icon: <MdOutlineDashboard />, path: "/admin/dashboard" },
//         { name: "Categories", icon: <FaRegHeart />, path: "/admin/categories" },
//         { name: "Products", icon: <MdOutlineInventory2 />, path: "/admin/products" },
//         { name: "Customers", icon: <IoPeopleOutline />, path: "/admin/customers" },
//     ];

//     const userTabs = [
//         { name: "Account Settings", icon: <MdOutlineDashboard />, path: "/dashboard/account-settings" },
//         { name: "Address", icon: <LuMessageSquareText />, path: "/dashboard/address" },
//         { name: "Change Pasword", icon: <TbBrandGoogleAnalytics />, path: "/dashboard/change-password" },
//     ];

//     const menuItems = user.role === 'admin' ? adminTabs : userTabs;


//     const handleLogout = () => {
//         removeUser();
//         removeToken();
//         navigate("/");
//     }

//     return (
//         <>
//             <div
//                 className={`
//         hidden md:flex flex-col h-screen  bg-black text-white shadow-lg z-40 transition-all duration-300 
//     ${collapsed ? "w-18" : "w-55"}`}
//             >
//                 {/* //////// heading and collapdes ///////// */}
//                 <div className="p-4 flex items-center justify-between border-b border-gray-700">
//                     {!collapsed && <h2 className="text-xl font-bold">{user.role==="admin" ? "Admin Panel":"User Account"}</h2>}

//                     {/* sidebtn */}
//                     <button onClick={() => setCollapsed(!collapsed)} className="text-xl">
//                         {collapsed ? <MdChevronRight /> : <MdChevronLeft />}
//                     </button>
//                 </div>

//                 {/* //////// navlinks ///////// */}
//                 <nav className="flex-1 flex flex-col p-3 gap-3">
//                     {menuItems.map((item) => (
//                         <Link
//                             key={item.name + 1}
//                             to={item.path}
//                             className="flex items-center gap-3 hover:bg-red-500 px-3 py-2 rounded transition text-sm"
//                         >

//                             <span className="text-xl">{item.icon}</span>
//                             {!collapsed && <span>{item.name}</span>}
//                         </Link>
//                     ))}
//                     <div
//                         onClick={() => { setIsMobileOpen(false); handleLogout() }}
//                         className="flex items-center gap-3 hover:bg-red-500 px-3 py-2 rounded transition text-sm"
//                     >
//                         <IoMdLogOut />
//                         <span>Logout</span>
//                     </div>
//                 </nav>
//             </div>


//             {/* ///////// conditional rendering ////// responsivess  */}

//             <AnimatePresence>
//                 {isMobileOpen && (
//                     <div className="fixed inset-0 z-50 flex md:hidden">
//                         {/* Sidebar */}
//                         <motion.div
//                             initial={{ x: -300 }}
//                             animate={{ x: 0 }}
//                             exit={{ x: -300 }}
//                             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                             className="w-64 bg-black text-white p-4 h-full shadow-lg"
//                         >
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="text-xl font-bold">Admin Panel</h2>

//                                 {/* Cross Button with Hover Animation */}
//                                 <motion.button
//                                     whileHover={{ rotate: 90, scale: 1.2 }}
//                                     whileTap={{ rotate: 360, scale: 0.95 }}
//                                     onClick={() => setIsMobileOpen(false)}
//                                     className="text-white text-2xl"
//                                 >
//                                     <RxCross2 />
//                                 </motion.button>

//                             </div>

//                             {/* Nav */}
//                             <nav className="flex flex-col gap-3">
//                                 {menuItems.map((item) => (
//                                     <Link
//                                         key={item.name}
//                                         to={item.path}
//                                         onClick={() => setIsMobileOpen(false)}
//                                         className="flex items-center gap-3 hover:bg-red-500 px-3 py-2 rounded transition text-sm"
//                                     >
//                                         <span className="text-xl">{item.icon}</span>
//                                         <span>{item.name}</span>
//                                     </Link>
//                                 ))}
//                                 <div

//                                     onClick={() => { setIsMobileOpen(false); handleLogout() }}
//                                     className="flex items-center gap-3 hover:bg-red-500 px-3 py-2 rounded transition text-sm"
//                                 >
//                                     <IoMdLogOut />
//                                     <span>Logout</span>
//                                 </div>
//                             </nav>
//                         </motion.div>

//                         {/* Overlay (fade effect) */}
//                         <motion.div
//                             onClick={() => setIsMobileOpen(false)}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 0.4 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="flex-1 bg-black"
//                         />
//                     </div>
//                 )}
//             </AnimatePresence>


//         </>
//     );
// };

// export default Sidebar;


import { Link, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import {
    MdOutlineDashboard,
    MdOutlineInventory2,
    MdChevronLeft,
    MdChevronRight,
} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline, IoPeopleOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LuMessageSquareText } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { getUser, removeToken, removeUser } from "../../utils/auth";

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
    const [collapsed, setCollapsed] = useState(false);
    const user = getUser() || { role: 'user' }; // Fallback agar user null ho
    const navigate = useNavigate();

    const adminTabs = [
        { name: "Dashboard", icon: <MdOutlineDashboard />, path: "/admin/dashboard" },
        { name: "Categories", icon: <FaRegHeart />, path: "/admin/categories" },
        { name: "Products", icon: <MdOutlineInventory2 />, path: "/admin/products" },
        { name: "Customers", icon: <IoPeopleOutline />, path: "/admin/customers" },
    ];

    const userTabs = [
        { name: "Account Settings", icon: <MdOutlineDashboard />, path: "/dashboard/account-settings" },
        { name: "Address", icon: <LuMessageSquareText />, path: "/dashboard/address" },
        { name: "Change Password", icon: <TbBrandGoogleAnalytics />, path: "/dashboard/change-password" },
    ];

    const menuItems = user.role === 'admin' ? adminTabs : userTabs;

    const handleLogout = () => {
        removeUser();
        removeToken();
        navigate("/");
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className={`hidden md:flex flex-col h-screen bg-black text-white shadow-lg sticky top-0 left-0 transition-all duration-300 ${
                    collapsed ? "w-20" : "w-64"
                }`}
            >
                {/* Header */}
                <div className="p-4 flex items-center justify-between border-b border-gray-800">
                    {!collapsed && (
                        <h2 className="text-lg font-bold truncate">
                            {user.role === "admin" ? "Admin Panel" : "User Account"}
                        </h2>
                    )}
                    <button 
                        onClick={() => setCollapsed(!collapsed)} 
                        className="p-1 hover:bg-gray-800 rounded text-2xl transition-colors"
                    >
                        {collapsed ? <MdChevronRight /> : <MdChevronLeft />}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-4 px-3 py-2.5 rounded-lg hover:bg-red-600 transition-colors group"
                        >
                            <span className="text-xl min-w-[24px]">{item.icon}</span>
                            {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
                        </Link>
                    ))}

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-3 py-2.5 rounded-lg hover:bg-red-600 transition-colors text-white"
                    >
                        <span className="text-xl min-w-[24px]"><IoMdLogOut /></span>
                        {!collapsed && <span className="text-sm font-medium">Logout</span>}
                    </button>
                </nav>
            </aside>

            {/* Mobile Sidebar Overlay */}
            <div 
                className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
                    isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Dark Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsMobileOpen(false)}
                ></div>

                {/* Mobile Drawer */}
                <div 
                    className={`absolute left-0 top-0 h-full w-64 bg-black text-white p-5 transform transition-transform duration-300 ease-in-out ${
                        isMobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <button 
                            onClick={() => setIsMobileOpen(false)}
                            className="text-2xl p-1 hover:bg-gray-800 rounded"
                        >
                            <RxCross2 />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileOpen(false)}
                                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-base">{item.name}</span>
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                setIsMobileOpen(false);
                                handleLogout();
                            }}
                            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-600 transition-colors text-left"
                        >
                            <span className="text-xl"><IoMdLogOut /></span>
                            <span className="text-base">Logout</span>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;