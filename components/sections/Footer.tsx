export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-white/10 text-center text-foreground/60 text-sm">
            <div className="container mx-auto px-4">
                <p>© {new Date().getFullYear()} Tejas Ekhande. All rights reserved.</p>
            </div>
        </footer>
    );
}
