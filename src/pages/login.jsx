// import React,{useState, useEffect}from "react";
// import Fetch from '../service/fetch'
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles'

// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex'
//     },
//     title: {
//         backgroundColor: theme.palette.primary.main,
//         fontSize: '24px'
//     },
//     btn: {
//         background: 'blue',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//     }
// }));

// const Login = () => {
//     const classes = useStyles();
//     const [account, setAccount] = useState("");
//     const [password, setPassword] = useState("");
    
//     function handleChange(type, event) {
// 		const { value } = event.target;
// 		if(type === "account") {
// 			setAccount(value)
// 		} else {
// 			setPassword(value);
// 		}
//     }
    
//     function submit() {
// 		if(account && password) {
// 			Fetch(
//                 'auth/login',
//                 {
// 				    data: {
// 					'account': account,
// 					'password': password
// 				    },
//                     method: 'POST'
//                 }
// 			).then(res => {
//                 console.log(res);
// 				if(res.code == 200) {
//                     const {token} = res.token;
//                     localStorage.setItem(
//                         'token',
//                         token
//                     )
//                     //路由跳转至Home		
// 				} else {
//                     alert("登录失败！请重新再试。")
//                 }
// 			})
// 		}
// 		if(!account) {
// 			alert("帐号不能为空！")
// 		}else if(!password) {
// 			alert("密码不能为空！")
// 		}
// 	}

//     return (
//         <div className={classes.root} title="Login">
//             <div>user/admin bar</div> {"菜单栏怎么用"}
//             <AppBar position="static">
//                 <Tabs value={value} onChange={handle} aria-label="simple tabs example">
//                     <Tab label="学生" />
//                     <Tab label="管理员" />
//                 </Tabs>
//             </AppBar>
//             <Login value={value} index={0}>
//                 <div className="login-container">
//                 账号：<input />{account} {"样式"}
//                 密码：<input />{password}
//                 <div className="login-button">
//                     <Button  className={classes.btn}>登录</Button>
//                 </div>
//                 </div>
//             </Login>
//             <Login value={value} index={1}>

//             </Login>
//         </div>
//     )
// }


// export default Login