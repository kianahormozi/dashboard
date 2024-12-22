import React from "react";
import { Box, Typography, List, ListItemButton, ListItemText } from "@mui/material";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Categories
      </Typography>
      <List>
        <ListItemButton
          selected={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        >
          <ListItemText primary="All Categories" />
        </ListItemButton>
        {categories.map((category) => (
          <ListItemButton
            key={category}
            selected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            <ListItemText primary={category} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default CategoryFilter;
