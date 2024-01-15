import Link from "next/link";

const navItems = [
	{ name: "Projects", path: "/projects" },
	{ name: "Experience", path: "/experience" },
];

const Navbar = () => {
	return (
		<div className="p-4 top-0 sticky bg-white">
			<div className="flex gap-2 flex-row-reverse">
				{navItems.map((nav) => (
					<span key={nav.path} className="rounded p-2 text-[#a5d6a7]">
						<Link href={nav.path}>{nav.name}</Link>
					</span>
				))}
			</div>
		</div>
	);
};

export default Navbar;
