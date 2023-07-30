import Image from "next/image";
import React, { useEffect, useState } from "react";

type ImageDataItems = {
    id: string;
    title: string;
    src: string;
};

const ImageDataDesktop: ImageDataItems[] = [
    { id: "pageT1", title: "pageT1", src: "/pageT1.png" },
    { id: "pageT2", title: "pageT2", src: "/pageT2.png" },
    { id: "pageT3", title: "pageT3", src: "/pageT3.png" },
    { id: "pageT4", title: "pageT4", src: "/pageT4.png" },
    { id: "pageT5", title: "pageT5", src: "/pageT5.png" },
    { id: "pageT6", title: "pageT6", src: "/pageT6.png" },
    { id: "pageT7", title: "pageT7", src: "/pageT7.png" },
    { id: "pageT8", title: "pageT8", src: "/pageT8.png" },
    { id: "pageT9", title: "pageT9", src: "/pageT9.png" },
    { id: "pageT10", title: "pageT10", src: "/pageT10.png" },
    { id: "pageT11", title: "pageT11", src: "/pageT11.png" },
    { id: "pageT12", title: "pageT12", src: "/pageT12.png" },
    { id: "pageT13", title: "pageT13", src: "/pageT13.png" },
    { id: "pageT14", title: "pageT14", src: "/pageT14.png" },
    { id: "pageT15", title: "pageT15", src: "/pageT15.png" },
    { id: "pageT16", title: "pageT16", src: "/pageT16.png" },
    { id: "pageT17", title: "pageT17", src: "/pageT17.png" },
    { id: "pageT18", title: "pageT18", src: "/pageT18.png" },
    { id: "pageT19", title: "pageT19", src: "/pageT19.png" },
    { id: "pageT20", title: "pageT20", src: "/pageT20.png" },
    { id: "pageT21", title: "pageT21", src: "/pageT21.png" },
    { id: "pageT22", title: "pageT22", src: "/pageT22.png" },
    { id: "pageT23", title: "pageT23", src: "/pageT23.png" },
    { id: "pageT24", title: "pageT24", src: "/pageT24.png" },
    { id: "pageT25", title: "pageT25", src: "/pageT25.png" },
    { id: "pageT26", title: "pageT26", src: "/pageT26.png" },
    { id: "pageT27", title: "pageT27", src: "/pageT27.png" },
    { id: "pageT28", title: "pageT28", src: "/pageT28.png" },
    { id: "pageT29", title: "pageT29", src: "/pageT29.png" },
    { id: "pageT30", title: "pageT30", src: "/pageT30.png" },
    { id: "pageT31", title: "pageT31", src: "/pageT31.png" },
    { id: "pageT32", title: "pageT32", src: "/pageT32.png" },
    { id: "pageT33", title: "pageT33", src: "/pageT33.png" },
    { id: "pageT34", title: "pageT34", src: "/pageT34.png" },
    { id: "pageT35", title: "pageT35", src: "/pageT35.png" },
    { id: "pageT36", title: "pageT36", src: "/pageT36.png" },
    { id: "pageT37", title: "pageT37", src: "/pageT37.png" },
    { id: "pageT38", title: "pageT38", src: "/pageT38.png" },
    { id: "pageT39", title: "pageT39", src: "/pageT39.png" },
    { id: "pageT40", title: "pageT40", src: "/pageT40.png" },
    { id: "pageT41", title: "pageT41", src: "/pageT41.png" },
    { id: "pageT42", title: "pageT42", src: "/pageT42.png" },
    { id: "pageT43", title: "pageT43", src: "/pageT43.png" },
];

const ImageDataMobile: ImageDataItems[] = [
    { id: "pageTMobile1", title: "pageTMobile1", src: "/pageTMobile1.svg" },
    { id: "pageTMobile2", title: "pageTMobile2", src: "/pageTMobile2.svg" },
    { id: "pageTMobile3", title: "pageTMobile3", src: "/pageTMobile3.svg" },
    { id: "pageTMobile4", title: "pageTMobile4", src: "/pageTMobile4.svg" },
    { id: "pageTMobile5", title: "pageTMobile5", src: "/pageTMobile5.svg" },
    { id: "pageTMobile6", title: "pageTMobile6", src: "/pageTMobile6.svg" },
    { id: "pageTMobile7", title: "pageTMobile7", src: "/pageTMobile7.svg" },
    { id: "pageTMobile8", title: "pageTMobile8", src: "/pageTMobile8.svg" },
    { id: "pageTMobile9", title: "pageTMobile9", src: "/pageTMobile9.svg" },
    { id: "pageTMobile10", title: "pageTMobile10", src: "/pageTMobile10.svg" },
    { id: "pageTMobile11", title: "pageTMobile11", src: "/pageTMobile11.svg" },
    { id: "pageTMobile12", title: "pageTMobile12", src: "/pageTMobile12.svg" },
    { id: "pageTMobile13", title: "pageTMobile13", src: "/pageTMobile13.svg" },
    { id: "pageTMobile14", title: "pageTMobile14", src: "/pageTMobile14.svg" },
    { id: "pageTMobile15", title: "pageTMobile15", src: "/pageTMobile15.svg" },
    { id: "pageTMobile16", title: "pageTMobile16", src: "/pageTMobile16.svg" },
    { id: "pageTMobile17", title: "pageTMobile17", src: "/pageTMobile17.svg" },
    { id: "pageTMobile18", title: "pageTMobile18", src: "/pageTMobile18.svg" },
    { id: "pageTMobile19", title: "pageTMobile19", src: "/pageTMobile19.svg" },
    { id: "pageTMobile20", title: "pageTMobile20", src: "/pageTMobile20.svg" },
    { id: "pageTMobile21", title: "pageTMobile21", src: "/pageTMobile21.svg" },
    { id: "pageTMobile22", title: "pageTMobile22", src: "/pageTMobile22.svg" },
    { id: "pageTMobile23", title: "pageTMobile23", src: "/pageTMobile23.svg" },
    { id: "pageTMobile24", title: "pageTMobile24", src: "/pageTMobile24.svg" },
    { id: "pageTMobile25", title: "pageTMobile25", src: "/pageTMobile25.svg" },
    { id: "pageTMobile26", title: "pageTMobile26", src: "/pageTMobile26.svg" },
    { id: "pageTMobile27", title: "pageTMobile27", src: "/pageTMobile27.svg" },
    { id: "pageTMobile28", title: "pageTMobile28", src: "/pageTMobile28.svg" },
    { id: "pageTMobile29", title: "pageTMobile29", src: "/pageTMobile29.svg" },
    { id: "pageTMobile30", title: "pageTMobile30", src: "/pageTMobile30.svg" },
    { id: "pageTMobile31", title: "pageTMobile31", src: "/pageTMobile31.svg" },
    { id: "pageTMobile32", title: "pageTMobile32", src: "/pageTMobile32.svg" },
    { id: "pageTMobile33", title: "pageTMobile33", src: "/pageTMobile33.svg" },
    { id: "pageTMobile34", title: "pageTMobile34", src: "/pageTMobile34.svg" },
    { id: "pageTMobile35", title: "pageTMobile35", src: "/pageTMobile35.svg" },
    { id: "pageTMobile36", title: "pageTMobile36", src: "/pageTMobile36.svg" },
    { id: "pageTMobile37", title: "pageTMobile37", src: "/pageTMobile37.svg" },
    { id: "pageTMobile38", title: "pageTMobile38", src: "/pageTMobile38.svg" },
    { id: "pageTMobile39", title: "pageTMobile39", src: "/pageTMobile39.svg" },
    { id: "pageTMobile40", title: "pageTMobile40", src: "/pageTMobile40.svg" },
    { id: "pageTMobile41", title: "pageTMobile41", src: "/pageTMobile41.svg" },
    { id: "pageTMobile42", title: "pageTMobile42", src: "/pageTMobile42.svg" },
    { id: "pageTMobile43", title: "pageTMobile43", src: "/pageTMobile43.svg" },
    { id: "pageTMobile44", title: "pageTMobile44", src: "/pageTMobile44.svg" },
    { id: "pageTMobile45", title: "pageTMobile45", src: "/pageTMobile45.svg" },
    { id: "pageTMobile46", title: "pageTMobile46", src: "/pageTMobile46.svg" },
    { id: "pageTMobile47", title: "pageTMobile47", src: "/pageTMobile47.svg" },
    { id: "pageTMobile48", title: "pageTMobile48", src: "/pageTMobile48.svg" },
    { id: "pageTMobile49", title: "pageTMobile49", src: "/pageTMobile49.svg" },
    { id: "pageTMobile50", title: "pageTMobile50", src: "/pageTMobile50.svg" },
];

export function PageTransition() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [lastImageDisplayed, setLastImageDisplayed] = useState(false);

    // Check if mobile or desktop
    useEffect(() => {
        const handleWindowSizeChange = () => {
            setIsMobile(window.innerWidth <= 450);
        };

        handleWindowSizeChange();

        window.addEventListener("resize", handleWindowSizeChange);

        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const imageArray = isMobile ? ImageDataMobile : ImageDataDesktop;
    const lastIndex = imageArray.length - 1;
    const isLastImage = currentImageIndex === lastIndex;

    // Display next image after 100ms
    useEffect(() => {
        if (isLastImage && lastImageDisplayed) return;

        const timeout = setTimeout(() => {
            setCurrentImageIndex((prevIndex) => prevIndex + 1);

            if (isLastImage) {
                setLastImageDisplayed(true);
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [currentImageIndex, isLastImage, lastImageDisplayed]);

    return (
        <>
            {imageArray.map((item, index) => (
                <div
                    key={item.id}
                    className={`h-screen w-screen z-50 fixed left-0 bottom-0 ${
                        lastImageDisplayed ? "hidden" : ""
                    }`}
                    style={{
                        opacity: index === currentImageIndex ? 1 : 0,
                        zIndex: index === currentImageIndex ? 1 : 0,
                        transition: "opacity 0.0s linear",
                    }}>
                    <Image
                        src={item.src}
                        alt={item.title}
                        width={1920}
                        height={1080}
                        quality={100}
                        className={`absolute object-cover top-0 left-0 w-screen h-screen transition-all ${
                            lastImageDisplayed === true ? "hidden" : ""
                        }`}
                    />
                </div>
            ))}
        </>
    );
}
