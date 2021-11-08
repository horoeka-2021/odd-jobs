import request from 'superagent'

export async function getExamples () {
  try {
    const data = await request('/example/data/')
    console.log('data from server api', data)
    console.log('data from server api', data.body)
    return data.body
  } catch (error) {
    return []
  }
}
