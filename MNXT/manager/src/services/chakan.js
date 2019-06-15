
import request from '../utils/request';

// 所选类型
export function getExamClass(){
    return request({
      url:"/exam/examType",
      method:"GET"
    })
  }
  
    //获取所有课程
    export function GetAllCourse(){
      return request({
        url:"/exam/subject",
        method:"GET"
      })
    }
          
      //获取所有试题
      export function getshitic(){
        return request({
          url:"/exam/questions/new",
          method:"GET",
        })
      }
  
      // 获取所有课题类型
  
      export function Getleixing(){
        return request({
          url:"/exam/getQuestionsType",
          method:"GET"
        })
      }