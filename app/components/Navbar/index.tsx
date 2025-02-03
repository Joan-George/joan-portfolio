import Link from "next/link";

const navItems = [
	{ name: "Projects", path: "/projects" },
	{ name: "Experience", path: "/experience" },
];

const Navbar = () => {
	return (
		<div className="p-4 top-0 sticky bg-white">
			<div className="flex gap-2 justify-between">
				<div className="flex items-center gap-2">
					<div className="w-7 h-7 bg-green-600 rounded-full"></div>
					<span className="text-[#a5d6a7] text-2xl tracking-widest">JOAN</span>
				</div>
				<div>
					{navItems.map((nav) => (
						<span key={nav.path} className="rounded p-2 text-[#a5d6a7]">
							<Link href={nav.path}>{nav.name}</Link>
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
