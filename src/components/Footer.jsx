function Footer() {
    return (
        <footer className="py-8 text-center border-t border-slate-800">
            <p className="text-slate-600 text-sm tracking-wide">
                &copy; {new Date().getFullYear()} Howard Liu. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
