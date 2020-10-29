import { get, post, put } from './http.js'

export function getList() {
	return get('api/app/recommend/appIndex?')
}


//首页轮播图
export function getBanner() {
	return get('api/app/banner?')
}

//课程筛选
export function getClass() {
	return get('api/app/courseClassify?')
}

//首页明星讲师详情
export function getTeacher(id) {
	return get('api/app/teacher/' + id)
}

//首页课程详情
export function classXiang(id) {
	return get('api/app/courseInfo/basis_id=' + id)
}
//课程详情的课程大纲
export function classGang(params) {
	return post('api/app/courseChapter', params)
}

//课程详情的课程评论
export function classPing(params) {
	return post('api/app/courseComment', params)
}

//讲师详情的主讲课程
export function getTeacherXiang(params) {
	return post('api/app/teacher/mainCourse', params)
}

//首页的热门资讯详情
export function getHot(params) {
	return post('api/app/information/detail', params)
}

//短信验证码登录
export function getSmsCode(params) {
	return post('api/app/smsCode', params)
}

//登录
export function getLogin(params) {
	return post('api/app/login', params)
}

//重置密码
export function getChong(params) {
	return post('api/app/password', params)
}

//用户的信息
export function getInfo() {
	return get('api/app/userInfo?')
}

//课程的列表
export function getStudyList(params) {
	return get('api/app/courseBasis?', params)
}

//提交订单页面
export function getOrder(params) {
	return post('api/app/order/shopInfo', params)
}
//订单页面的班级
export function getBan() {
	return get('api/app/config/other_setting?')
}

//课程报名
export function getBao(params) {
	return post('api/app/order/downOrder', params)
}

//课程学习
export function getMyStudy(id) {
	return get('api/app/myStudy/course/' + id)
}

//更新头像
export function getTouXiang(params) {
	return post('api/app/public/img', params)
}

//更改昵称
export function getMing(params) {
	return put('api/app/user', params)
}
//省
export function getSheng() {
	return get('api/app/sonArea/0?')
}
//咨询
export function getIndex(){
	return post('api/app/information/index')
}
