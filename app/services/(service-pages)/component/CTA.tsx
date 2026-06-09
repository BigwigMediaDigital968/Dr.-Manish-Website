import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function CTA(
    {
        heading,
        description,
        cta
    }: {
        heading?: string;
        description: React.ReactNode;
        cta: String;
    }
) {
    return (
        <>
            <div
                className="relative rounded-3xl overflow-hidden shadow-xl"
                style={{ background: "var(--gradient-dark)" }}
            >
                {/* Subtle glowing elements */}
                <div
                    className="absolute top-0 right-0 h-48 w-48 rounded-full blur-[90px] opacity-20 pointer-events-none"
                    style={{ background: "var(--gradient-health)" }}
                />
                <div
                    className="absolute bottom-0 left-0 h-48 w-48 rounded-full blur-[90px] opacity-20 pointer-events-none"
                    style={{ background: "var(--gradient-primary)" }}
                />

                <div className="relative z-10 py-6 px-8 sm:py-8 sm:px-12 text-center md:text-left md:flex gap-4 md:gap-8 justify-between max-w-6xl mx-auto">
                    <div>
                        {heading && (
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                                {heading}                        </h3>
                        )}
                        {
                            description && (
                                <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                    {description}
                                </p>
                            )
                        }
                    </div>
                    <div className="flex items-center">
                        <Link
                            href="/contact"
                            className=" inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all ease-in-out hover:opacity-95 active:scale-[0.98] hover:scale-105 group"
                            style={{
                                background: "var(--gradient-primary)",
                                boxShadow: "var(--shadow-primary)",
                            }}
                        >
                            {cta}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-all ease-in-out" />

                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}