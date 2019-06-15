import React, { Component } from 'react'
import style from './chaKan.scss'
import { Select, Button } from 'antd';
import { connect } from 'dva';

class ChaKan extends Component {


    componentDidMount() {
        let { getExamClassa, getAllCourseS, getshitia, getleixingac } = this.props;

        getExamClassa()
        getAllCourseS()
        getshitia()
        getleixingac()
        
        setTimeout(() => {
            // console.log(this.props)
        }, 2000)
    }
     // 点击跳详情
    dlBtn(id){
        let {history:{push}} = this.props;

        push(`/questions/detail/?id=${id}`)
       
    }
    
    render() {
         
        // console.log(this.props)
        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        return (
            <div className={style.wrap}>
                <div className={style.header}>查看试题</div>
                <div className={style.wrapper}>
                    <div className={style.leiXing}>

                        <div>课程类型:</div>
                        {
                            this.props.chakan.getsetion && this.props.chakan.getsetion.map((item, key) =>
                                <div className={style.getsetion} key={key}>{item.subject_text}</div>)
                        }
                    </div>

                    <div className={style.kaoShi}>
                        <div className={style.shi}>
                            <div>考试类型：</div>
                            <Select defaultValue="周考一" style={{ width: 180 }} onChange={handleChange}>
                                {
                                    this.props.chakan.getquestion && this.props.chakan.getquestion.map((item, key) =>
                                        <Option key={key} value={item.exam_name}>{item.exam_name}</Option>)
                                }
                            </Select>

                        </div>
                        <div className={style.shi}>

                            <div>题目类型：</div>
                            <Select defaultValue="简答题" style={{ width: 180 }} onChange={handleChange}>
                                {

                                    this.props.chakan.getleixingc && this.props.chakan.getleixingc.map((item, key) =>
                                        <Option key={key} value={item.questions_type_text} >{item.questions_type_text}</Option>)

                                }
                            </Select>
                        </div>
                        <Button type="primary">查询</Button>
                    </div>

                </div>

                <div className={style.footer}>

                    {
                        this.props.chakan.getshiTiall.map((item, key) => 
                        <div key={key} onClick={this.dlBtn.bind(this,item.questions_id)} className={style.dl}>

                            <div className={style.dt}>
                                <div className={style.titles}>{item.title}</div>
                                <div className={style.spans}>
                                    <span>{item.subject_text}</span>
                                    <span>{item.questions_type_text}</span>
                                    <span>{item.exam_name}</span>
                                </div>
                                <div className={style.namea}>{item.user_name}发布</div>
                            </div>
                            <div className={style.dd}>编辑</div>

                        </div>)
                    }

                </div>
            </div>
        )
    }
}
// // props的类型检查
// LoginPage.propTypes = {

// }
// // props的默认值
// LoginPage.defaultProps = {
// }

const mapStateToProps = state => {
    return state
}

const mapDisaptchToProps = dispatch => {
    return {
        getExamClassa(payload) {
            dispatch({
                type: 'chakan/getExamClass',
                payload
            })
        },
        getAllCourseS(payload) {
            dispatch({
                type: 'chakan/getAllCourse',
                payload
            })
        },

        getshitia(payload) {
            dispatch({
                type: 'chakan/getallshiti',
                payload
            })
        },

        getleixingac(payload) {
            dispatch({
                type: 'chakan/getleixing',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(ChaKan)
