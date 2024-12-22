import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Rating,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addToCart } from "../../store/cart-slice"; // مسیر اکشن‌های سبد خرید
import { Product } from "../ProductStore/ProductStoreData"; // اطلاعات محصول
import { useDispatch } from 'react-redux';
import { CartItem as CartItemType } from "../../store/cart-slice"; // اصلاح نام برای تطابق

interface ProductViewProps {
  products: Product[]; // اضافه کردن ویژگی products
  isGridView: boolean;
  toggleFavorite: (id: number) => void;
  favoriteIds: number[];
}

const ProductView: React.FC<ProductViewProps> = ({
  isGridView,
  toggleFavorite,
  favoriteIds,
  products
}) => {
  const dispatch = useDispatch();
  const discountPercentage = 40; // درصد تخفیف ثابت

   // محاسبه قیمت تخفیف‌دار
   const discountPrice = (price: number) => {
    return price - (price * discountPercentage) / 100;
  };

  // اصلاح تابع handleAddToCart
  const handleAddToCart = (product: Product) => {
    const cartItem: CartItemType = {
      id: product.id,
      Product: product, // اضافه کردن ویژگی Product به CartItem
      Price: product.price,
      Quantity: 1,
      Total: product.price,
      size: product.size, 
      color: product.color, 
      imagecart: product.image,
    };
    dispatch(addToCart(cartItem)); // ارسال cartItem به اکشن
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        flexDirection: isGridView ? "row" : "column", // تنظیم جهت گرید برای لیست
      }}
    >
      {products.map((product: Product) => (
        <Grid
          item
          xs={12}
          sm={isGridView ? 6 : 12} // در حالت گرید: نصف عرض، در حالت لیست: کل عرض
          key={product.id}
        >
          <Card
            sx={{
              display: isGridView ? "block" : "flex", // در حالت لیست: نمایش فلکسیبل
              alignItems: isGridView ? "unset" : "center",
              boxShadow: "none",
              borderRadius: "8px",
              flexDirection: isGridView ? "column" : "row", // تنظیم جهت داخلی
            }}
          >
            {/* تصویر و آیکون */}
            <Box
              sx={{
                position: "relative",
                width: isGridView ? "100%" : "160px", // عرض تصویر بر اساس حالت
                paddingLeft: isGridView ? "0" : "10px",
              }}
            >
              <CardMedia
                component="img"
                height={isGridView ? "250" : "120"}
                image={product.image}
                alt={product.name}
                sx={{
                  width: isGridView ? "100%" : "150px", // تنظیم اندازه تصویر
                }}
              />
              {/* آیکون قلب */}
              <IconButton
                onClick={() => toggleFavorite(product.id)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                  },
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                {favoriteIds.includes(product.id) ? (
                  <FavoriteIcon color="error" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </Box>

            {/* محتوا */}
            <CardContent
              sx={{
                flex: 1,
                padding: isGridView ? "16px" : "16px 16px 16px 10px", // تنظیم فاصله داخلی
              }}
            >
              <Typography variant="h6">{product.name}</Typography>
              {!isGridView && (
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "8px",
                  }}
                >
                  {product.description}
                </Typography>
              )}

              {/* قیمت‌ها و درصد تخفیف */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body1"
                  color="rgb(95, 99, 242)"
                  fontWeight="500"
                  fontSize="14px"
                >
                  ${discountPrice(product.price).toFixed(2)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "line-through",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  ${product.price}
                </Typography>
                <Typography
                  variant="body2"
                  color="error"
                  fontWeight="500"
                  fontSize="14px"
                >
                    40% Off
                </Typography>
              </Box>

              {/* ستاره‌ها، امتیاز و تعداد Reviews */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Rating value={product.rating} readOnly size="small" />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="500"
                  fontSize="14px"
                >
                  {product.rating.toFixed(1)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="400"
                  fontSize="14px"
                >
                  {product.reviewsCount} Reviews
                </Typography>
              </Box>
            </CardContent>

            {/* دکمه‌ها */}
            <CardActions
              sx={{
                padding: isGridView ? "0px 10px 22px 15px" : "0 16px 16px 0", // تنظیم فاصله در حالت لیست
              }}
            >
              <Button
                onClick={() => handleAddToCart(product)}
                disableRipple
                sx={{
                  color: "#5a5f7d",
                  border: "1px solid #e3e6ef",
                  transition: "all .3s cubic-bezier(.645,.045,.355,1)",
                  fontSize: "12px",
                  height: "36px",
                  padding: "0 18px",
                  "&:hover": {
                    borderColor: "rgb(95, 99, 242)",
                    backgroundColor: "transparent",
                    color: "#5f63f2",
                  },
                }}
                variant="outlined"
                startIcon={
                  <ShoppingCartIcon
                    sx={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                }
              >
                Add to Cart
              </Button>
              <Button
                disableRipple
                sx={{
                  color: "#ffff",
                  transition: "all .3s cubic-bezier(.645,.045,.355,1)",
                  fontSize: "12px",
                  height: "36px",
                  padding: "0 18px",
                  backgroundColor: "rgb(95, 99, 242)",
                  boxShadow: "none",
                  borderColor: "#5f63f2",
                  "&:hover": {
                    backgroundColor: "rgb(67, 71, 217)",
                    boxShadow: "none",
                  },
                }}
                variant="contained"
              >
                Buy
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductView;
