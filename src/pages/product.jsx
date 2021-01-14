
import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import Fetch from "../service/fetch";

const useStyles = makeStyles((theme) => ({
  detail: {
    display: "flex",
    width: 800,
    margin: "0 auto",
    //marginLeft: 100,
    marginTop: 30,
    marginBottom: 50
  },
  header: {
    color: "rgb(145, 145, 145)",
    paddingTop: 15,
    paddingLeft: 50
  },
  pl: {
    color: "#666666"
  },
  inpic: {
    width: 300,
    height: 300
  },
  name: {
    padding: 5
  },
  intro: {
    marginTop: 25
  },
  container: {
    width: 800,
    margin: "0 auto",
  },
  comment: {
    marginLeft: 50
  },
  head: {
    color: "rgb(145, 145, 145)",
    marginBottom: 10
  },
  box: {
    marginTop: 15,
    marginBottom: 15
  },
  btn: {
    cursor: "pointer",
    background: '#1d4cb5',
    color: '#fff',
    border: 0,
    borderRadius: 3,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 30,
    padding: 10,
    width: 100
  }
}));
export default function Product(){
    
    let { productId } = useParams();
    const classes = useStyles();
    const [content, setContent] = useState("");
    const [status, setStatus] = useState(0);
    const [comment, setComment] = useState([]);
    const [item, setItem] = useState("");

    useEffect (() => {
      //effect1:请求商品信息
      Fetch(
        `/goods/detail?id=${productId}`
      ).then(res => {
        console.log(res)
        setItem(res.detail[0])
      })
    },[])

    useEffect(() => {
      // Fetch(
      //   '/comment/'
      // )
      if(status == 1){
      //comment.push({"user_name": "小蚂蚁","content":"好耶！"})
      console.log(comment)//
      setComment([{"user_name": "小蚂蚁","content":"好耶！"}])
      }
    },[status])
  
    // const item = {
    //   "product_id": "8",
    //   "product_name": "计算机课本",
    //   "product_class": "图书",
    //   "product_pic": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2990692698,2166529794&fm=26&gp=0.jpg",
    //   "product_describe": "不可错过的必读书。急出！",
    //   "product_state": 1,
    //   "product_price": 50,
    //   "product_time": "2020-12-14",
    //   "product_seller": "陆犯焉识",
    //   "product_detail": "九九新\n双十二求回血！！！！"  
    // }

    // const comment = []

    function submit() {
      if(content) {
        const account = localStorage.getItem("account")
        Fetch(
          '/comments/send',
          {
            data: {
              user_id: account,
              product_id: productId,
              content: content
            },
            method: 'POST'
          }
        ).then(res => {
          if(res.code == 1) {
            setContent("")
            //update状态更新评论列表
            setStatus(status => status+1)
            console.log(status)
          } else {
            alert("评论失败，请稍后再试。")
          }
        })
      } else {
        alert("评论不能为空！")
      }
    }


    return (
      <div className={classes.root}>
        <div className={classes.container}>
        <div className={classes.header}>当前位置 {'>'} 商品详情</div>
        <div className={classes.detail}>
          <div className={classes.outpic}>
            <img className={classes.inpic} src={item.product_pic} />
          </div>
          <div className={classes.intro}>
            <div className={classes.name}>
              <span className={classes.pl}>商品名：</span>{item.product_name}
            </div>
            <div className={classes.name}>
              <span className={classes.pl}>商品类别：</span>{item.product_class}
            </div>
            <div className={classes.name}>
              <span className={classes.pl}>商品价格：</span>{item.product_price} 元
            </div>
            <div className={classes.name}>
              <span className={classes.pl}>发布人：</span>{item.product_seller} 
            </div>
            <div className={classes.name}>
              <span className={classes.pl}>发布时间：</span>{item.product_time} 
            </div>
            <div className={classes.name}>
              <span className={classes.pl}>商品简介：</span>{item.product_describe} 
            </div>

          </div>
        </div>
        <div className={classes.comment}>
          <div className={classes.head}>商品评论</div>
          {JSON.stringify(comment) === '[]'?
            <div className={classes.box}>暂无评论</div> :
            <div className={classes.box}>
              {comment.map((item, index) => {
                return (
                  <div className={classes.inbox}>
                    <span >用户 {item.user_name}：</span>{item.content}
                  </div>
                )
              })}
            </div>
          }
          <div className={classes.head}>发布评论</div>
          <textarea
                        rows="10" cols="50"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className={classes.area}
          />
          <div
              onClick={() => {submit()}}
              className={classes.btn}
          >发布评论</div>
        </div>
        </div>
      </div>
    );
}