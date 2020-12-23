import React,{useState} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from "@material-ui/core/Divider";
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import defaultPic1 from '../img/book1.JPG';
import defaultPic2 from '../img/book2.JPG';
import defaultPic3 from '../img/book3.JPG';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    width: '100%',
    padding: '20px 80px'
  },
  formControl: {
    margin: '10px auto',
    width: 'fit-content',
    display: 'block'
  },
  img: {
    width: '100px',
    height: '100px',
    borderRadius: '20px'
  },
  cartItem: {
      display: 'flex',
      margin: "20px auto",
      width: 'fit-content',
  },
  price: {
      color: "blue"
  },
  text: {
      padding: "20px"
  },
  desc: {
      marginTop: '20px'
  },
  button: {
      color: 'white'
  }
}));
const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
const CartItem = ({open, handleChange, name, product}) => {
  const classes = useStyles();
  const [number, setNumber] = useState(1);
  const handleChangeSelect = (event) => {
      setNumber(event.target.value);
  }
  const {pic, product_name, price, describe } = product
  return (
    <div className={classes.cartItem}>
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={open} onChange={handleChange} name={name} />
        }
        // label={name}
      />
      <img className={classes.img} src={pic} alt="书本封面"/>
      <div className={classes.text}>
        <span>{"商品名称: "+product_name+" "}</span>
        <span className={classes.price}>{"商品价格:  "+ price+"r"}</span>
        <div className={classes.desc}>
          {"商品描述:  " + describe}
       </div>
      </div>
      <div>
        <div>数量</div>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={number}
          onChange={handleChangeSelect}
          input={<BootstrapInput />}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
       </Select>
      </div>
    </div>
  );
};
export default function Cart() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const product1 = {
      pic: defaultPic1,
      product_name: 'smashing webkit',
      price: '12',
      describe: '9成新，可小刀'
  }
  const product2 = {
     pic: defaultPic2,
     product_name: '社会学的邀请',
     price: '14',
     describe: '很好看，很实用的一本书',
  }
  const product3 = {
      pic: defaultPic3,
      product_name: '剑桥offer指南',
      price: '16',
      describe: '多刷题，多刷题，多刷题……'
  }
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">我的购物车列表</FormLabel>
        <FormGroup>
          <CartItem open={gilad} handleChange={handleChange} name="gilad" product={product1}
          />
          <Divider />
          <CartItem open={jason} handleChange={handleChange} name="jason" product={product2}/>
          <Divider />
          <CartItem open={antoine} handleChange={handleChange} name="antoine" product={product3}/>
          <Divider />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      <div className={classes.formControl}> 
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button className={classes.button}>购买</Button>
        <Button className={classes.button}>删除</Button>
      </ButtonGroup>
      </div>
    </div>
  );
}