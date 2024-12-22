import React from "react";
import { TextField , Box , InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // برای آیکن جستجو
interface SearchBoxProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchQuery, setSearchQuery }) => (
  
<Box
     sx={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        }}
        >
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // مقدار تغییرات در ورودی
            InputProps={{
            endAdornment: ( // قرار دادن آیکون در سمت راست
                <InputAdornment position="end">
                    <SearchIcon />
                </InputAdornment>
                ),
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px", 
                  backgroundColor: "#fff", 
                  color:"rgb(173, 180, 210)",
                  fontSize:"13px",
                  "& fieldset": {
                    borderColor: "transparent", 
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // حذف بردر در حالت هاور
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // حذف بردر در حالت فوکوس
                  },
                  display: "flex",
                  alignItems: "center",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "10px 28px", // تنظیم فاصله داخلی
                  textAlign: "left", 
                },
                "& .MuiInputAdornment-root": {
                  marginLeft: 0, // حذف فاصله پیش‌فرض
                  color:"rgb(173, 180, 210)",
                },
              }}
            />
            
          </Box>
);

export default SearchBox;


