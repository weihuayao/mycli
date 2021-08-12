/*
 * @Descripttion: 
 * @Author: wayde
 * @Date: 2021-08-12 13:53:05
 */
const axios  = require('axios')

axios.interceptors.response.use(res => {
    return res.data;
  })

  /**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
    return axios.get('https://api.github.com/orgs/waycli/repos')
}
  
  /**
   * 获取版本信息
   * @param {string} repo 模板名称
   * @returns Promise
   */
  async function  getTagList(repo) {
    return axios.get(`https://api.github.com/repos/waycli/${repo}/tags`)
  }
  
  module.exports = {
    getRepoList,
    getTagList
  }