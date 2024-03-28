import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isAuth: boolean;
  data: Object;
};

type Login = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: string;
  country: string;
  role: string;
  title: string;
  company_name: string;
  ust_id_no: string;
  street_no: string;
  address: string;
  postal_code: string;
  location: string;
};

const initialState: InitialState = {
  isAuth: false,
  data: {
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
    country: "",
    role: "",
    title: "",
    company_name: "",
    ust_id_no: "",
    street_no: "",
    address: "",
    postal_code: "",
    location: "",
  } as Login,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    login: (state, action: PayloadAction<Login>) => {
      state.isAuth = true;
      state.data = action.payload;
    },
  },
});

export const { logOut, login } = auth.actions;
export default auth.reducer;
