import HeadnavDetailProduct from '../headnav-detail-product';

const ContentProductLayout = ({ children }) => {
    return (
        <div>
            <HeadnavDetailProduct />
            {children}
        </div>
    );
};

export default ContentProductLayout;
