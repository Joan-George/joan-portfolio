import Link from "next/link";

const navItems = [
	{ name: "Projects", path: "/projects" },
	{ name: "Experience", path: "/experience" },
];

const Navbar = () => {
	return (
		<>
			<ul className="flex-col gap-2">
				{navItems.map((nav) => (
					<li key={nav.path}>
						<Link href={nav.path}>{nav.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Navbar;
