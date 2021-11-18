import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { PrevButton, NextButton } from '../embla-arrow-button/CarouselArrowButton';
import useEmblaCarousel from 'embla-carousel-react';
import { ImagePromotionByIndex } from '../../../data-local/DataImagePromotions';
import styles from '../../../../public/assets/css/CarouselBanner.module.css';

const BannerPromotion = ({ slides }) => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on('select', onSelect);
        onSelect();
    }, [embla, onSelect]);
    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={viewportRef}>
                <div className={styles.embla__container}>
                    {slides.map((index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.embla__slide__inner}>
                                <Image
                                    className={styles.embla__slide__img}
                                    src={ImagePromotionByIndex(index)}
                                    alt="A cool cat."
                                    width={1170}
                                    height={300}
                                    layout="responsive"
                                    objectFit="fill"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    );
};

export default BannerPromotion;
