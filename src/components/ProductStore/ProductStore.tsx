import React, { useState } from "react";
import { Box, Grid, Typography, Stack, Pagination, Button } from "@mui/material";
import SearchBox from "../SearchBox/SearchBox";
import ProductView from "../ProductView/ProductView";
import Filters from "../Filters/Filters";
import { products } from "./ProductStoreData";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";

const ITEMS_PER_PAGE = 8;

interface Productstoreprops {
  children?: React.ReactNode;
}

const ProductStore: React.FC<Productstoreprops> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSort, setSelectedSort] = useState<string>("Top Rated");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null); // اضافه شدن state برای وضعیت

  const sortOptions = ["Top Rated", "Popular", "Newest", "Price"];
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const discountPercentage = 40; // درصد تخفیف ثابت

  const filteredProducts = products.filter((product) => {
  const discountPrice = product.price * (1 - discountPercentage / 100);
  
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedBrands.length || selectedBrands.includes(product.brand)) &&
      (!selectedRatings.length || selectedRatings.includes(Math.floor(product.rating))) &&
      discountPrice >= priceRange[0] &&
      discountPrice <= priceRange[1] &&
      (!selectedStatus ||
        (selectedStatus === "Top Rated" && product.rating >= 4.5) ||
        (selectedStatus === "Popular" && product.reviewsCount > 100) ||
        (selectedStatus === "Newest" && product.id > 8) ||
        (selectedStatus === "Price" && discountPrice <= 500))
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <Box 
    sx={{ 
      paddingTop: "30px",
       }}>
        { children }

      <Grid container spacing={3}>
        {/* ستون فیلترها */}
        <Grid item xs={12} md={3}>
          <Filters
            products={products}
            priceRange={priceRange}
            setPriceRange={setPriceRange} 
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedRatings={selectedRatings}
            setSelectedRatings={setSelectedRatings}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Grid>

        {/* ستون محصولات */}
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Typography>
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex", 
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Status Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "20px",
                paddingBottom: "15px",
              }}
            >
              {/* Sort Options */}
              <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 2,
                 }}>
                <Typography>Status:</Typography>
                <Box 
                sx={{ 
                  display: "flex", 
                  gap: 2,
                  border:"1px solid rgb(227, 230, 239)",
                  borderRadius:"5px",
                  padding:"5px",
                  backgroundColor:"#ffff", 
                  }}>
                  {sortOptions.map((option) => (
                    <Button
                      key={option}
                      disableRipple
                      onClick={() => {
                        setSelectedSort(option); // برای مرتب‌سازی
                        setSelectedStatus(option); // برای فیلتر
                      }}
                      sx={{
                        padding: "4px 12px",
                        fontSize: "14px",
                        textTransform: "none",
                        borderRadius: "20px",
                        color:
                          selectedStatus === option
                            ? "rgb(95, 99, 242)"
                            : "rgb(146, 153, 184)",
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* ایکون های لیست و گرید */}
            <Box
              sx={{
                display: "flex",
                paddingTop: "20px",
                justifyContent: "end",
                paddingBottom: "15px",
              }}
            >
              <GridViewOutlinedIcon
                sx={{
                  cursor: "pointer",
                  color: isGridView ? "rgb(95, 99, 242)" : "rgb(146, 153, 184)",
                }}
                onClick={() => setIsGridView(true)}
              />
              <ViewAgendaOutlinedIcon
                sx={{
                  cursor: "pointer",
                  color: !isGridView ? "rgb(95, 99, 242)" : "rgb(146, 153, 184)",
                }}
                onClick={() => setIsGridView(false)}
              />
            </Box>
          </Box>

          <ProductView
            products={paginatedProducts}
            isGridView={isGridView}
            toggleFavorite={toggleFavorite}
            favoriteIds={favoriteIds}
          />
          <Stack spacing={2} sx={{ marginTop: "20px" }} alignItems="end">
            <Pagination
              count={totalPages}
              page={currentPage}
              shape="rounded"
              onChange={(e, page) => setCurrentPage(page)}
              showFirstButton // نمایش اولین صفحه
              showLastButton // نمایش اخرین صفحه
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductStore;
