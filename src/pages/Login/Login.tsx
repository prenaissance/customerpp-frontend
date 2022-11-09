import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { borderColor } from "@mui/system";
import React from "react";
import { FC } from "react";
import { useForm } from 'react-hook-form'


type Props = {};

interface State {
  password: string;
  showPassword: boolean;
}

const Login: FC = (props: Props) => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data: any) => console.log(data)
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });



  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (

    <Container fixed maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
          mt: "10px",
          mx: '-50px',
          width: 500,
          height: 600,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#2D3958",
          borderRadius: "2rem",
          boxShadow: 1,
          color: "primary.contrastText",
        }}>

          <Box sx={{ mx: 'auto', my: "1rem", alignItems: "left", justifyContent: "left" }}>
            <h1>Log In</h1>
          </Box>


          <Box sx={{ mb: 1, color: "primary.contrastText", display: 'flex', flexWrap: 'wrap' }}>
            <TextField
              variant="outlined"
              label="Email"
              type="Text"
              autoComplete="Email"
              autoFocus
              margin="normal"

              sx={{
                width: "400px", bgcolor: "#414C6B", borderRadius: "0.3rem"
              }}

              {...register("email", { required: "Required" })}
              error={!!errors?.email}
              helper-text={errors?.email ? errors.email.message : null}

              style={{
                color: "white"
              }}

              InputLabelProps={{
                style: {
                  color: "white"
                }
              }}

              InputProps={{
                style: {
                  color: "white"
                }
              }} />
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

            <FormControl sx={{
              m: 1, width: '400px',
              backgroundColor: "#414C6B",
              borderRadius: "0.3rem"
            }}
              variant="outlined">

              <InputLabel htmlFor="outlined-adornment-password" size="normal" style={{ color: "white" }}>Password</InputLabel>

              <OutlinedInput style={{ color: "white" }}
                {...register("password", { required: "Required" })}
                error={!!errors?.password}
                helper-text={errors?.password ? errors.password.message : null}

                label="Password"
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}

                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      style={{
                        color: "white",
                      }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox sx={{
                position: "inherited",
                color: "white",
                '&.Mui-checked': {
                  color: "white",
                },
              }}
              />}
              label="Remember me" />
          </FormGroup>

          <Button type='submit' variant="contained" sx={{ my: "1rem", color: 'white', textTransform: 'none' }}>Log In</Button>

          <Button sx={{ my: "1rem", color: 'white', textTransform: 'none' }}>Forgot your password?</Button>

        </Box>
      </form>
    </Container >

  );
};

export default Login;


