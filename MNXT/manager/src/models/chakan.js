import {getExamClass , GetAllCourse,getshitic,Getleixing } from '../services'


export default {
    // 命名空间
    namespace: 'chakan',
  
    // 模块内部的状态
    state: {
        getquestion:[],
        getsetion:[],
        getshiTiall:[],
        getleixingc:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
        
        *getExamClass({payload},{call,put}){
            let data=yield call(getExamClass)
            // console.log(data)
            yield put({
              type:"getExamClassc",
              payload:data.data
            })
          },

         *getAllCourse({payload},{call,put}){
            let data=yield call(GetAllCourse)
            //  console.log(data)
            yield put({
              type:"getAllCourseE",
              payload:data.data
            })
          },
                
          *getallshiti({payload},{call,put}){
            let data=yield call(getshitic)
             console.log(data)
            yield put({
              type:"getshiti",
              payload:data.data
            })
          },

          *getleixing({payload},{call,put}){
            let data=yield call(Getleixing)
             console.log(data)
            yield put({
              type:"getleixinga",
              payload:data.data
            })
          },

     
    }, 
  
    // 同步操作
    reducers: {
        getExamClassc(state,{payload}){
           
            return {...state,getquestion:payload}
          },
         
          getAllCourseE(state,{payload}){
    
            return {...state,getsetion:payload}
          },

          getshiti(state,{payload}){
    
            return {...state,getshiTiall:payload}
          },

          getleixinga(state,{payload}){
    
            return {...state,getleixingc:payload}
          },

    },

  };
  