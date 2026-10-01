import React, { useMemo, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
    FiMenu,
    FiX,
    FiLayers,
    FiBarChart2,
    FiCompass,
    FiSmartphone,
    FiDownload,
    FiBookOpen,
    FiUsers,
    FiChevronDown,
} from "react-icons/fi";

/**
 * Icono de enlace externo circular Bento (Círculo con flecha en diagonal hacia arriba a la derecha ↗)
 * Diseñado según la referencia visual proporcionada por el usuario.
 */
export const ExternalCircleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="10" />
        <polyline points="10 9 15 9 15 14" />
        <line x1="9" y1="15" x2="15" y2="9" />
    </svg>
);

export const RoundedDrawerNavExample = ({ children }: { children?: React.ReactNode }) => {
    return (
        <BentoNavbar
            links={[
                {
                    title: "Inicio",
                    href: "/",
                },
                {
                    title: "La Plataforma",
                    sublinks: [
                        {
                            title: "Características",
                            description: "Lógica avanzada y validación",
                            href: "/la-plataforma/caracteristicas",
                            icon: FiLayers,
                        },
                        {
                            title: "Comparativa",
                            description: "DATAUMSA vs Google Forms",
                            href: "/la-plataforma/comparativa",
                            icon: FiBarChart2,
                        },
                        {
                            title: "Casos de Uso",
                            description: "Tesis, docencia y censos",
                            href: "/la-plataforma/casos-de-uso",
                            icon: FiCompass,
                        },
                    ],
                },
                {
                    title: "Documentación",
                    href: "/docs",
                    target: "_blank",
                    isExternal: true,
                },
                {
                    title: "App Móvil",
                    sublinks: [
                        {
                            title: "DATAUMSA Collect",
                            description: "App Android 100% offline",
                            href: "/app-movil/dataumsa-collect",
                            icon: FiSmartphone,
                        },
                        {
                            title: "Descargas",
                            description: "Paquetes APK y versiones",
                            href: "/app-movil/descargas",
                            icon: FiDownload,
                        },
                    ],
                },
                {
                    title: "Sobre DATAUMSA",
                    sublinks: [
                        {
                            title: "Historia",
                            description: "Origen y soberanía UMSA",
                            href: "/sobre-dataumsa/historia",
                            icon: FiBookOpen,
                        },
                        {
                            title: "Equipo e Institucional",
                            description: "DTIC y comunidad técnica",
                            href: "/sobre-dataumsa/equipo-institucional",
                            icon: FiUsers,
                        },
                    ],
                },
            ]}
        >
            {children}
        </BentoNavbar>
    );
};

type SublinkType = {
    title: string;
    description?: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
};

type LinkType = {
    title: string;
    href?: string;
    sublinks?: SublinkType[];
    target?: string;
    isExternal?: boolean;
};

const BentoNavbar = ({
    children,
    links,
}: {
    children?: React.ReactNode;
    links: LinkType[];
}) => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const containerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const brandRef = useRef<HTMLAnchorElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLAnchorElement>(null);
    const submenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const activeSublinks = useMemo(() => {
        if (!hovered) return [];
        const link = links.find((l) => l.title === hovered);
        return link && link.sublinks ? link.sublinks : [];
    }, [hovered, links]);

    // Detección de scroll para el navbar fijo/sticky con elevación visual
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 1. Animación de entrada Bento al montar con GSAP context y fromTo para evitar que queden ocultos
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion || !containerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            if (navRef.current) {
                tl.fromTo(
                    navRef.current,
                    { y: -15, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.45, ease: "back.out(1.4)" },
                );
            }

            if (brandRef.current) {
                tl.fromTo(
                    brandRef.current,
                    { opacity: 0, x: -10 },
                    { opacity: 1, x: 0, duration: 0.3 },
                    "-=0.2",
                );
            }

            // Los enlaces en el centro se garantizan siempre visibles
            tl.fromTo(
                ".bento-nav-link",
                { opacity: 0, y: -6 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.04,
                    duration: 0.3,
                    ease: "power2.out",
                    clearProps: "opacity,transform",
                },
                "-=0.2",
            );

            if (ctaRef.current) {
                tl.fromTo(
                    ctaRef.current,
                    { opacity: 0, scale: 0.92 },
                    { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.8)" },
                    "-=0.15",
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // 2. Animación de apertura del submenú Bento desplegable con GSAP
    useEffect(() => {
        if (!submenuRef.current || !hovered || activeSublinks.length === 0) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) return;

        const subTl = gsap.timeline({ defaults: { ease: "power2.out" } });

        subTl.fromTo(
            submenuRef.current,
            {
                opacity: 0,
                y: -6,
                scale: 0.98,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.22,
                ease: "back.out(1.4)",
            },
        ).fromTo(
            ".bento-sublink-item",
            {
                opacity: 0,
                y: 5,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.03,
                duration: 0.18,
                ease: "power1.out",
                clearProps: "opacity,transform",
            },
            "-=0.15",
        );
    }, [hovered, activeSublinks]);

    // 3. Animación de menú móvil
    useEffect(() => {
        if (!mobileMenuRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (mobileNavOpen) {
            if (prefersReducedMotion) {
                gsap.set(mobileMenuRef.current, { display: "block", opacity: 1, height: "auto" });
                return;
            }

            gsap.set(mobileMenuRef.current, { display: "block" });
            gsap.fromTo(
                mobileMenuRef.current,
                { opacity: 0, y: -8, scale: 0.98 },
                { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "back.out(1.3)" },
            );
            gsap.fromTo(
                ".bento-mobile-item",
                { opacity: 0, x: -8 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.03,
                    duration: 0.2,
                    ease: "power2.out",
                    delay: 0.05,
                    clearProps: "opacity,transform",
                },
            );
        } else {
            if (prefersReducedMotion) {
                gsap.set(mobileMenuRef.current, { display: "none" });
                return;
            }
            gsap.to(mobileMenuRef.current, {
                opacity: 0,
                y: -6,
                duration: 0.18,
                ease: "power2.in",
                onComplete: () => {
                    if (mobileMenuRef.current) {
                        gsap.set(mobileMenuRef.current, { display: "none" });
                    }
                },
            });
        }
    }, [mobileNavOpen]);

    // Micro-interacción GSAP para el botón CTA
    const handleCtaMouseEnter = () => {
        if (ctaRef.current) {
            gsap.to(ctaRef.current, {
                scale: 1.04,
                duration: 0.15,
                ease: "back.out(2)",
            });
        }
    };

    const handleCtaMouseLeave = () => {
        if (ctaRef.current) {
            gsap.to(ctaRef.current, {
                scale: 1,
                duration: 0.12,
                ease: "power2.out",
            });
        }
    };

    return (
        <header
            ref={containerRef}
            onMouseLeave={() => setHovered(null)}
            className={`sticky top-0 z-50 w-full px-3 sm:px-6 transition-all duration-200 font-sans text-ink antialiased ${
                scrolled
                    ? "pt-2 pb-2 backdrop-blur-md bg-canvas/85 border-b border-ink/10"
                    : "pt-3 pb-2 bg-transparent"
            }`}
        >
            <div className="max-w-300 mx-auto relative">
                {/* Navbar Bento Principal (Pill flotante con borde de tinta) */}
                <nav
                    ref={navRef}
                    className={`bg-white border-[2.5px] border-ink rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between relative z-50 transition-all duration-200 ${
                        scrolled
                            ? "shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
                            : "shadow-none"
                    }`}
                >
                    {/* 1. Logotipo DATAUMSA */}
                    <a
                        ref={brandRef}
                        href="/"
                        className="flex items-center no-underline mr-2 sm:mr-4 shrink-0 group"
                    >
                        <img
                            src="/logo_dataumsa.png"
                            alt="Logo DATAUMSA"
                            width={135}
                            height={28}
                            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                        />
                    </a>

                    {/* 2. Enlaces centrales (Visible desde pantallas md: 768px en adelante) */}
                    <div
                        ref={linksRef}
                        className="hidden md:flex items-center gap-1 lg:gap-1.5 xl:gap-2"
                    >
                        {links.map((link) => {
                            const isDropdown = Boolean(link.sublinks && link.sublinks.length > 0);
                            const isCurrentActive = hovered === link.title;

                            if (link.href && !isDropdown) {
                                return (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        target={link.target}
                                        rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                                        onMouseEnter={() => setHovered(null)}
                                        className="bento-nav-link text-xs lg:text-sm font-bold text-ink hover:text-primary-dark px-2.5 lg:px-3.5 py-1.5 rounded-full hover:bg-primary-light transition-all duration-150 no-underline inline-flex items-center gap-1.5 font-display"
                                    >
                                        <span>{link.title}</span>
                                        {link.isExternal && (
                                            <ExternalCircleIcon className="w-3.5 h-3.5 text-ink shrink-0" />
                                        )}
                                    </a>
                                );
                            }

                            return (
                                <button
                                    key={link.title}
                                    type="button"
                                    onMouseEnter={() => setHovered(link.title)}
                                    onClick={() => setHovered(hovered === link.title ? null : link.title)}
                                    className={`bento-nav-link text-xs lg:text-sm font-bold px-2.5 lg:px-3.5 py-1.5 rounded-full transition-all duration-150 inline-flex items-center gap-1 font-display border-none cursor-pointer ${
                                        isCurrentActive
                                            ? "bg-primary text-ink border border-ink"
                                            : "bg-transparent text-ink hover:bg-primary-light hover:text-primary-dark"
                                    }`}
                                >
                                    <span>{link.title}</span>
                                    <FiChevronDown
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                            isCurrentActive ? "rotate-180 text-ink" : "text-text-muted"
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* 3. CTA Derecho & Botón Hamburguesa Móvil */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Botón CTA Cyan Primario Bento con icono de flecha circular */}
                        <a
                            ref={ctaRef}
                            href="https://app-dataumsa.sociest.org/accounts/login/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={handleCtaMouseEnter}
                            onMouseLeave={handleCtaMouseLeave}
                            className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary text-ink text-xs sm:text-sm font-extrabold px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border-2 border-ink hover:bg-primary-dark hover:text-white transition-colors no-underline font-display tracking-tight shrink-0 shadow-none active:translate-y-0.5 group"
                        >
                            <span>Acceder</span>
                            <ExternalCircleIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        {/* Botón Móvil Hamburguesa Sticker (solo en pantallas menores a md) */}
                        <button
                            type="button"
                            onClick={() => setMobileNavOpen((prev) => !prev)}
                            aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú"}
                            className="md:hidden w-9 h-9 rounded-full bg-canvas border-2 border-ink flex items-center justify-center text-ink hover:bg-primary-light transition-colors cursor-pointer shrink-0"
                        >
                            {mobileNavOpen ? (
                                <FiX className="w-5 h-5" />
                            ) : (
                                <FiMenu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Submenú Flotante Bento Desktop (animado con GSAP) */}
                {hovered && activeSublinks.length > 0 && (
                    <div
                        ref={submenuRef}
                        className="hidden md:block absolute left-0 right-0 top-full mt-2.5 z-40 px-4"
                    >
                        <div className="bg-white border-[2.5px] border-ink rounded-2xl p-4 sm:p-5 shadow-none max-w-2xl mx-auto">
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-3 px-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                <span>{hovered}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                {activeSublinks.map((sublink) => {
                                    const SubIcon = sublink.icon;
                                    return (
                                        <a
                                            key={sublink.title}
                                            href={sublink.href}
                                            className="bento-sublink-item flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-ink hover:bg-primary-light transition-all duration-150 no-underline text-inherit group/item"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-primary-light group-hover/item:bg-primary border-1.5 border-ink flex items-center justify-center shrink-0 transition-colors">
                                                {SubIcon ? (
                                                    <SubIcon className="w-5 h-5 text-ink" />
                                                ) : (
                                                    <span className="w-2 h-2 rounded-full bg-ink"></span>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-extrabold text-sm text-ink font-display group-hover/item:text-primary-dark transition-colors tracking-tight">
                                                    {sublink.title}
                                                </div>
                                                {sublink.description && (
                                                    <div className="text-xs text-text-muted font-sans truncate mt-0.5 font-medium">
                                                        {sublink.description}
                                                    </div>
                                                )}
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* Menú Móvil Desplegable Bento (animado con GSAP) */}
                <div
                    ref={mobileMenuRef}
                    style={{ display: "none" }}
                    className="md:hidden absolute left-0 right-0 top-full mt-2.5 z-40 px-1"
                >
                    <div className="bg-white border-[2.5px] border-ink rounded-2xl p-5 shadow-none space-y-4">
                        <div className="divide-y-2 divide-ink/15">
                            {links.map((link) => (
                                <div key={link.title} className="py-2.5 bento-mobile-item">
                                    {link.href && !link.sublinks ? (
                                        <a
                                            href={link.href}
                                            target={link.target}
                                            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                                            onClick={() => setMobileNavOpen(false)}
                                            className="font-extrabold text-base text-ink hover:text-primary-dark no-underline font-display flex items-center justify-between"
                                        >
                                            <span>{link.title}</span>
                                            {link.isExternal && (
                                                <ExternalCircleIcon className="w-4 h-4 text-ink shrink-0" />
                                            )}
                                        </a>
                                    ) : (
                                        <div>
                                            <div className="font-extrabold text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                                                {link.title}
                                            </div>
                                            <div className="grid grid-cols-1 gap-1.5 pl-2">
                                                {link.sublinks?.map((sub) => {
                                                    const Icon = sub.icon;
                                                    return (
                                                        <a
                                                            key={sub.title}
                                                            href={sub.href}
                                                            onClick={() => setMobileNavOpen(false)}
                                                            className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-sm font-bold text-ink hover:bg-primary-light transition-colors no-underline font-display"
                                                        >
                                                            {Icon && (
                                                                <div className="w-6 h-6 rounded-md bg-primary-light border border-ink flex items-center justify-center shrink-0">
                                                                    <Icon className="w-3.5 h-3.5 text-ink" />
                                                                </div>
                                                            )}
                                                            <span>{sub.title}</span>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Botón CTA dentro de móvil */}
                        <div className="pt-2 bento-mobile-item">
                            <a
                                href="https://app-dataumsa.sociest.org/accounts/login/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-primary text-ink font-extrabold py-2.5 px-4 rounded-full border-2 border-ink hover:bg-primary-dark hover:text-white transition-colors no-underline font-display text-sm group"
                            >
                                <span>Acceder a la plataforma</span>
                                <ExternalCircleIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {children}
        </header>
    );
};
