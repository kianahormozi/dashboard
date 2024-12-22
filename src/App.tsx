import React from 'react';
import { BrowserRouter as Router, Routes, Route , Outlet } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { CssBaseline, GlobalStyles } from "@mui/material";
import SocialMedia from './pages/SocialMedia';
import LoginPage from './pages/LoginPage';
import Finance from './pages/Finance';
import Product from './pages/Product';
import Cart from './pages/Cart'; 
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


export default function App() {
  const currentPage = useSelector((state: RootState) => state.navigation.currentPage);
  return (
    <Router>
      <>
        {/* تنظیمات پیش‌فرض MUI */}
        <CssBaseline />

        {/* استایل‌های سراسری */}
        <GlobalStyles
          styles={{
            "html, body, #root": {
              margin: 0,
              padding: 0,
              height: "100%",
              width: "100%",
            },
            "*": {
              boxSizing: "border-box", 
            },
            "#login-form": {
              padding: "20px",
              border: "none",
              boxShadow: "none",
              "&.MuiBox-root ": {
                border: "none",
                boxShadow: "none",
              },
            },
            "#login-form input": {
              marginBottom: "10px",  
            },
          }}
        />
        <Routes>
          {/* روت صفحه لاگین */}
          <Route path="/" element={<LoginPage />} />
          {/* روت‌های زیرمجموعه داشبورد */}
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="socialmedia" element={<SocialMedia />} />
            <Route path="finance" element={<Finance />} />
          </Route>
          <Route path="ecommerce/*" element={<Dashboard />}>
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}
