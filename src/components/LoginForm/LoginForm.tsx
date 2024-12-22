import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Link,
  IconButton,
  Box,
  Typography,
  Avatar,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import {providers } from './LoginFormData';


// کامپوننت فیلد ایمیل
function CustomEmailField({
  email,
  setEmail,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Email"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      sx={{
        margin:"3px 0 12px"
      }}
      InputProps={{
        style: { 
          fontSize: '13px',
          padding:"5px 0" ,} // تنظیم سایز فونت
      }}
    />
  );
}

// کامپوننت فیلد رمز عبور
function CustomPasswordField({
  password,
  setPassword,
}: {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{
        my: 2,
      }}
      fullWidth
      variant="outlined"
    >
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        size="small"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          margin:"3px 0 1px"
        }}
        inputProps={{
          style: { 
            fontSize: '13px',
            padding:"12px 12px" ,} // تنظیم سایز فونت
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? <VisibilityOff fontSize="inherit" /> : <Visibility fontSize="inherit" />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

// کامپوننت دکمه ورود
function CustomButton() {
  return (
    <Button
      type="submit"
      variant="contained"
      size="small"
      sx={{
        padding: '12px 50px',
        backgroundColor: '#5f63f2',
        color: '#fff',
        marginTop: '14px',
        display:"flex",
        '&:hover': {
          backgroundColor: '#4a54c7',
        },
      }}
    >
      Sign In
    </Button>
  );
}

// کامپوننت لینک فراموشی رمز عبور
function ForgotPasswordLink() {
  return (
    <Link 
    href="/" 
    variant="body2"
    sx={{
      textDecoration:"none",
      color:"#1890ff",
    }}>
      Forgot password?
    </Link>
  );
}

// کامپوننت عنوان
function Title() {
  return (
    <Typography
      variant="h5"
      component="h2"
      sx={{
        marginBottom: 2,
        fontSize: '24px',
        fontWeight: '600',
        textAlign: 'left',
        paddingBottom:"20px",
        paddingTop:"50px",
      }}
    >
      Sign in to{' '}
      <span style={{ color: '#ff69a5' }}>
        Admin
      </span>
    </Typography>
  );
}

// کامپوننت فرم ورود
const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('test@example.com'); // مقدار پیش‌فرض برای ایمیل جعلی
  const [password, setPassword] = useState('password123'); // مقدار پیش‌فرض برای رمز عبور جعلی
  const [error, setError] = useState('');

  const fakeEmail = 'test@example.com';
  const fakePassword = 'password123';

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form from submitting
    if (email === fakeEmail && password === fakePassword) {
      navigate('/dashboard/socialmedia'); // Redirect to dashboard 
    } else {
      setError('Invalid email or password!');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSignIn}
      sx={{
        width: '400px',
        margin: '50px auto 10px', // مرکز چین کردن فرم
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px', // گوشه‌های گرد
        boxShadow: 'none', // حذف سایه
        border: 'none', // حذف بردر
        textAlign: 'center',
      }}
    >
      <Title />
      <CustomEmailField email={email} setEmail={setEmail} />
      <CustomPasswordField password={password} setPassword={setPassword} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          my: 1,
        }}
      >
        <FormControl
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection:"row",
          }}
        >
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" 
          style={{
             marginLeft: '8px',
             fontSize:"14px",
             }}>
            Remember me
          </label>
        </FormControl>
        <ForgotPasswordLink />
      </Box>
      <CustomButton />

      {/* or and border */}
      <Box
      sx={{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        paddingTop:"20px",
      }}>
        <div 
        style={{
          width:"100%",
          height:"1.5px",
          backgroundColor:"rgb(146, 153, 184)",
          opacity:"0.3",
          }}></div>
          <Typography
            sx={{
              padding:"0 8px",
              fontSize:"17px",
              color:"rgb(146, 153, 184)",
            }}>
            or
          </Typography>
          <div 
          style={{
            width:"100%",
            height:"1.5px",
            backgroundColor:"rgb(146, 153, 184)",
            opacity:"0.3",
            }}></div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          marginTop:"26px",
        }}
      >
        {providers.map((provider, index) => (
          <Button
            key={index}
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: provider.src && !provider.name ? "45px" : "175px", // Handle width for icon-only buttons
              height: "45px",
              border:"none",
              fontSize: "12px",
              fontWeight: 500,
              color: "#333",
              textTransform: "none",
              backgroundColor:"rgb(248, 249, 251)",
              marginBottom:"10px",
             marginLeft:"4px",
              
              "&:hover": {
                
              },
              padding: provider.src && !provider.name ? "0" : "0 1px", // Adjust padding for icon-only
            }}
          >
            {provider.src && (
              <Avatar
                src={provider.src}
                sx={{
                  width: provider.name ? 24 : 24, // Bigger avatar for icon-only
                  height: provider.name ? 24 : 24,
                  mr: provider.name ? 1.5 : 0, // No margin for icon-only
                }}
              />
            )}
            {provider.name && !provider.src && `Sign in with ${provider.name}`} {/* Only text if no icon */}
            {provider.name && provider.src && `Sign in with ${provider.name}`} {/* Text with icon */}
          </Button>
        ))}
      </Box>
    </Box>
    
  );
};

export default LoginForm;
