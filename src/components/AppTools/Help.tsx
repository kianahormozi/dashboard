import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

type HelpItem = {
  kind?: "header";
  segment?: string;
  text: string;
};

const HelpItems: HelpItem[] = [
  { kind: "header", text: "Documentation" },
  { segment: "How to customize admin", text: "How to customize admin" },
  { segment: "The relation of vertical spacing", text: "The relation of vertical spacing" },
  { kind: "header", text: "Payments" },
  { segment: "How to customize admin", text: "How to customize admin" },
  { segment: "How to use", text: "How to use" },
  { kind: "header", text: "Content Planner" },
  { segment: "How to use", text: "How to use" },
  { segment: "How to customize admin", text: "How to customize admin" },
];

export default function Help(): JSX.Element {
  const [anchorElHelp, setAnchorElHelp] = useState<null | HTMLElement>(null);

  const handleOpenHelpMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElHelp(event.currentTarget);
  };

  const handleCloseHelpMenu = (): void => {
    setAnchorElHelp(null);
  };

  return (
    <>
      <Box 
      sx={{ 
        flexGrow: 0,
         }}>
        <Tooltip title="Help Menu">
          <IconButton 
          onClick={handleOpenHelpMenu} 
          sx={{ 
            p: 0,
             }}>
            <HelpOutlineOutlinedIcon 
            sx={{ 
              color: "#6b708b",
               }} />
          </IconButton>
        </Tooltip>

        <Menu
          sx={{
            mt: "10px",
            "& .MuiPaper-root": {
              width: "300px",
              borderRadius: "8px",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
              padding: "10px",
              overflow: "hidden",
            },
          }}
          id="menu-help"
          anchorEl={anchorElHelp}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElHelp)}
          onClose={handleCloseHelpMenu}
          disableScrollLock
        >
          {HelpItems.map((item, index) => {
            if (item.kind === "header") {
              return (
                <Typography
                  key={index}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "rgb(146, 153, 184)",
                    padding: "5px 15px",
                    borderRadius: "8px",
                    marginTop: "10px",
                  }}
                >
                  {item.text}
                </Typography>
              );
            } else if (item.segment) {
              return (
                <MenuItem
                  key={index}
                  onClick={handleCloseHelpMenu}
                  sx={{
                    fontSize: "14px",
                    display: "flex",
                    transition: ".3s",
                    padding: "4px 15px",
                    alignItems: "center",
                    "&:hover": {
                      color: "rgb(95, 99, 242) !important",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: "14px",
                      color: "rgb(39, 43, 65)",
                      padding:"0 16px",
                      "&:hover": {
                        color: "#5f63f2",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </MenuItem>
              );
            }
            return null;
          })}
        </Menu>
      </Box>
    </>
  );
}
