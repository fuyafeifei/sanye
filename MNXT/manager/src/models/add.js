import { questionsAdd, getsubject, getExamType, getQuestionsTypes, UserInfo } from '../services'
// console.log(questionsAdd)
export default {
  // 命名空间
  namespace: 'exam',
  // 模块内部的状态
  state: {
    Success: {},//添加成功
    Getsubject: {},//所有课程类型
    GetExamType: {}, //获取所有考试类型
    GetQuestionsType: {},//题目课题类型
    UserInfoID: ""//当前用户的ID
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    *questions({ payload }, { call, put }) {  // eslint-disable-line

      let data = yield call(questionsAdd, payload)
      console.log(data)
      yield put({ type: 'questionsAdd', action: data });
    },
    //获取所有课程类型
    *subject({ payload }, { call, put }) {

      let data = yield call(getsubject, payload)

      yield put({ type: 'subjects', action: data });

    },
    //获取所有考试类型
    *examType({ payload }, { call, put }) {
      let data = yield call(getExamType, payload)
      yield put({ type: 'ExamType', action: data });
    },
    //课题类型
    *getQuestionsType({ payload }, { call, put }) {
      let data = yield call(getQuestionsTypes, payload)
      yield put({ type: 'getQuestionsTypeS', action: data });
    },
    //当前用户ID

    *userInfo({ payload }, { call, put }) {
      let data = yield call(UserInfo, payload)

      yield put({ type: 'uInfo', action: data });
    }
  },

  // 同步操作
  reducers: {

    questionsAdd(state, action) {
      return {
        ...state,
        Success: action
      }
    },
    //获取所有课程类型
    subjects(state, { action }) {

      return {
        ...state,
        Getsubject: action
      }
    },
    //获取所有考试类型
    ExamType(state, { action }) {
      // console.log(data)
      return {
        ...state,
        GetExamType: action
      }
    },
    getQuestionsTypeS(state, { action }) {
      return {
        ...state,
        GetQuestionsType: action
      }
    },
    uInfo(state, { action }) {
      return {
        ...state,
        UserInfoID: action
      }
    }
  },

};
