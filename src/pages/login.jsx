import React,{useState, useEffect}from "react";
import Fetch from '../service/fetch'
import { withRouter,Redirect,Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

import Input from '../components/input';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        //flexDirection: "column"
    },
    title: {
        //fontSize: '24px'
        display: 'flex',
        //width: 400,
        margin: "0 auto",
        padding: "20px",
        paddingTop: "30px",
        marginTop: "150px"
    
    },
    pre: {
        textAlign: "center",
        margin: "20 20 20 20",
        padding: "12px"
    },
    btn: {
        background: '#1d4cb5',
        color: '#fff',
        border: 0,
        borderRadius: 3,
        //boxSizing: "borderBox",
        marginTop: "20px",
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 33,
        padding: '0',
        //width: 300
        textAlign: "center"
    },
    span: {
        //lineHeight: 48,
        textAlign: "center",
        margin: "0 auto"
    },
    link: {
        display: "flex",
        //fontSize: '20px'
        textDecoration:'none',
        color: "#fff"
    },
    span1: {
        fontSize: 19,
        fontWeight: 700,
        color: "#090909",
        width: 150,
        textAlign: "center"
    },
    span2: {
        fontSize: 19,
        color: "rgb(145, 145, 145)",
        width: 150,
        textAlign: "center"
    },
    cneters: {
        display: "flex",
        background: "#fff",
        width: 400,
        margin: 15,
        borderRadius: 9,
        boxShadow: "0 2 9 0",
        marginTop: 300
    },
    li: {
        textDecoration:"none"
    }
}));

const Login = () => {
    const classes = useStyles();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    //const [isRedirect,setRedirect] = useState(false);
    
    function handleChange(type, event) {
		const { value } = event.target;
		if(type === "account") {
			setAccount(value)
		} else {
			setPassword(value);
		}
    }
    
    function submit() {
		if(account && password) {
            
			Fetch(
                '/auth/login',
                {
				    data: {
					'account': Number(account),
					'password': password
				    },
                    method: 'POST'
                }
			).then(res => {
                console.log(res);
				if(res.code == 0) {
                    const {token} = res.token;
                    localStorage.setItem(
                        'token',
                        token
                    )
                    localStorage.setItem(
                        'account',
                        account
                    )	
                    localStorage.setItem(
                        'password',
                        password
                    )	
                    //this.props.history.push({pathname: '/'});
                    window.location.replace("http://localhost:3000/")	
				} else {
                    alert("登录失败！请重新再试。")
                }
			})
		}
		if(!account) {
			alert("帐号不能为空！")
		}else if(!password) {
			alert("密码不能为空！")
		}
	}

    return (
        <div className={classes.root} title="Login">
            <div className={classes.centers}>
                <div className={classes.title}>
                    <div className={classes.span1}>用户</div>
                    <Link 
                        to='/admin'
                        color="inherit"
                        className={classes.li}
                    >
                        <div className={classes.span2}>管理员</div>
                    </Link>
                </div>
                <div className={classes.container}>
                    <div className={classes.pre}>
                        <Input
                            type="text"
                            placeholder="用户账号"
                            value={account}
                            onChange={(e) =>handleChange("account",e)}
                        />
                    </div>
                    <div className={classes.pre}>
                        <Input
                            type="password"
                            placeholder="密码"
                            value={password}
                            onChange={(e) =>handleChange("password",e)}
                        />
                </div>
            </div>
            <div className={classes.btn}
                onClick={() => {submit()}} 
            >
                <span className={classes.span}>登录</span>
            </div>
            </div>
        </div>
    )
}


export default withRouter(Login)