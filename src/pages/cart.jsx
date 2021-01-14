import React,{useEffect, useState} from 'react';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import defaultPic1 from '../img/book1.JPG';
import defaultPic2 from '../img/book2.JPG';
import defaultPic3 from '../img/book3.JPG';

import Fetch from '../service/fetch.js';

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
const CartItem = ({open, handleChange, id, product}) => {
  const classes = useStyles();
  const [number, setNumber] = useState(1);
  const handleChangeSelect = (event) => {
      setNumber(event.target.value);
  }
  let {product_pic, product_name, product_price, product_describe } = product
  product_pic = product_pic? product_pic : defaultPic1
  return (
    <div className={classes.cartItem}>
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={open} onChange={(e) => handleChange(e.target.checked, e.target.id)} id={id} />
        }
        // label={name}
      />
      <img className={classes.img} src={product_pic} alt="书本封面"/>
      <div className={classes.text}>
        <span>{"商品名称: "+product_name+" "}</span>
        <span className={classes.price}>{"商品价格:  "+ product_price +"r"}</span>
        <div className={classes.desc}>
          {"商品描述:  " + product_describe}
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
  const [products, setProducts] = React.useState([]);
  const [checks, setChecks] = React.useState({});
  const [open, setOpen] = React.useState(false);
  useEffect(()=>{
    const account = localStorage.getItem("account")
    Fetch(`/cart/list?user_id=${account}`).then(
      res => {
        console.log(res);
        setProducts(res.data);
        for(let i in res.data){
          setChecks({...checks, [res.data[i].product_id]: false})
        }
      }
    )
  },[])
  
  useEffect(()=>{
    console.log(checks);
  }, [checks])
  const handleChange = (isCheck, id) => {
    setChecks({ ...checks, [id]: isCheck });
  };
  const handleBuy = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleAgree = () => {
    setOpen(false)
    const account = localStorage.getItem("account")
    for(let i in products){
      if(checks[products[i].product_id]){
        Fetch('/cart/checkout', 
        {data: 
          {user_id: account, 
           product_id: products[i].product_id
          }, 
         method: 'POST'}).then(
          res => {
            console.log(res);
            alert(res.msg);
            window.location.replace('http://localhost:3001/user/buy')  
          }
        ).catch(
          (err) => console.error(err)
        )
      }
    }
  }
  const handleDisagree = () => setOpen(false)

  const TableContainer = () => {
    const list = products.filter(item => checks[item.product_id]);
    return(
      <table>
        <tr>
          <td>商品名称</td>
          <td>商品数量</td>
        </tr>
        {list.map((item, index) => 
              <tr key = {item.product_id}>
                <td>{item.product_name}</td>
                <td>{1}</td>
              </tr>
        )}
      </table>
    )
  }
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">我的购物车列表</FormLabel>
        <FormGroup>
          {products.map((item, index) => 
            <div key={item.product_id}>
            <CartItem open={checks[item.product_id]} handleChange={handleChange} id={item.product_id} product={item}
            />
            <Divider />
            </div>
          )}
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      <div className={classes.formControl}> 
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button className={classes.button} onClick={handleBuy}>购买</Button>
        <Button className={classes.button}>删除</Button>
      </ButtonGroup>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"是否确定下列购买清单？"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <TableContainer />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree} color="primary">
            让我再想想
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            确定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}