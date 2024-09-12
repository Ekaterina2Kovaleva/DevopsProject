interface PhotoProps {
    name: string;
    isDesign: boolean;
    image: string;
}

interface ObjectProps {
    name: string;
    place: string;
    square: string;
    realization: boolean;
    inf: string;
    mainImg: string;
    photos: PhotoProps[];
}

interface PriceProps {
    name: string;
    price: number;
    description: string;
    mainImg: string;
}

interface MainPagePhotoProps {
    image: string;
}


export { type ObjectProps, type PriceProps, type MainPagePhotoProps };