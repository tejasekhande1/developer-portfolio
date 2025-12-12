import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-white/10 text-center text-foreground/60 text-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <a href="mailto:inbox.tejasekhande@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" /> inbox.tejasekhande@gmail.com
                    </a>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" /> +91 7558739236
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Pune, Maharashtra
                    </div>
                </div>

                <p>© {new Date().getFullYear()} Tejas Ekhande. All rights reserved.</p>
            </div>
        </footer>
    );
}
