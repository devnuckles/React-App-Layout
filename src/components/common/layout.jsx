const Layout = ({ children }) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 h-screen w-full bg-blue-700"></div>
            <div className="col-span-10">
                <div className="w-full h-20 bg-orange-500"></div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
