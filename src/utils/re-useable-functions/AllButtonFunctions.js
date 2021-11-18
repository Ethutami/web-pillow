import { useRouter } from 'next/router';

const AllButtonFunctions = () => {
    const router = useRouter();

    //Go to sign in sidebar function
    const handleClickSignIn = (e) => {
        e.preventDefault();
        router.push('/test-sign-in');
    };

    //Function Go to how to buy page
    const handleClickHowToBuy = (e) => {
        e.preventDefault();
        router.push('/how-to-buy');
    };

    //Function Go to home page
    const handleClickHome = (e) => {
        e.preventDefault();
        router.push('/');
    };

    //Function Go to aboutus page
    const handleClickAboutUs = (e) => {
        e.preventDefault();
        router.push('/about-us');
    };

    //Function Go to product page
    const handleClickProductPage = (e) => {
        e.preventDefault();
        router.push('/product-page');
    };

    //Function Go to detail product page
    const handleClickDetailProduct = (e) => {
        e.preventDefault();
        router.push(`/product-page/1`);
    };

    //Function Go to ContactUs page   href={`/product-page/${ninja.id}`}
    const handleClickContactUs = (e) => {
        e.preventDefault();
        router.push('/contact-us');
    };

    //Function Go to Whistlist page
    const handleClickWishlistPage = (e) => {
        e.preventDefault();
        router.push('/wishlist-page');
    };

    //Function Go to Whistlist page
    const handleClickProfilePage = (e) => {
        e.preventDefault();
        router.push('/profile');
    };

    //Function Go to Register page MOBILE VERSION
    const handleClickGoToRegisterPage = (e) => {
        e.preventDefault();
        router.push('/mobile-register-member');
    };

    const handleClickTesting = (e) => {
        e.preventDefault();
        router.push('/testing');
    };

    // Function Go to homepage
    // const handleClickRegister = e => {
    //     e.preventDefault();
    //     router.push('/')
    // }

    // this return is for return all of function that have been dclare above
    // if we declare function without return it,..then the function wont be able to used it form othe paage
    return {
        handleClickSignIn,
        handleClickHowToBuy,
        handleClickHome,
        handleClickAboutUs,
        handleClickContactUs,
        handleClickProductPage,
        handleClickWishlistPage,
        handleClickProfilePage,
        handleClickGoToRegisterPage,
        handleClickTesting,
        handleClickDetailProduct
    };
};

export default AllButtonFunctions;
